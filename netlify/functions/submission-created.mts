import { Context } from "@netlify/functions";
import { Octokit } from "octokit";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = process.env.REPO_OWNER;
const REPO_NAME = process.env.REPO_NAME;
const COMMENT_BRANCH_BASE_NAME = "add-comment";
const MAIN_BRANCH_NAME = "main";

interface PostComment {
  created_at: string;
  data: PostCommentData;
}

interface PostCommentData {
  name: string;
  comment: string;
  referrer: string; // what page the user submitted a comment from
  website: string | undefined;
  email: string | undefined;
  articleTitle: string;
}

interface PostData {
  comments: {
    id: number;
    createdBy: string;
    html: string;
    date: string;
    email: string | undefined;
    website: string | undefined;
  }[];
}
// github rest docs:
// https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#get-repository-content
export default async (request: Request, context: Context) => {
  try {
    const {
      data: { name, comment, website, referrer, email, articleTitle },
      created_at,
    }: PostComment = (await request.json()).payload;

    if (!name || !comment || !referrer || !articleTitle) {
      console.error(
        `Missing at least one required field. Name: ${name}, Comment: ${comment}, Titel: ${articleTitle}, Referrer: ${referrer}`
      );
      return { statusCode: 400, body: "Name, Mail, Articletitle and comment are required!" };
    }

    const ref = new URL(referrer).pathname.split("/");
    const postName = `content/blog/${ref[2]}/${articleTitle}`;
    const octokit = new Octokit({ auth: GITHUB_TOKEN });
    const {
      sha,
      postData,
    }: {
      sha: string;
      postData: PostData;
    } = await getPostData(octokit, { fileName: postName });

    const now = Date.now();
    postData.comments.push({
      id: now,
      createdBy: name,
      date: created_at,
      html: comment,
      email: email,
      website: website,
    });

    // Create a new branch off main/master to store the commit containing the new comment
    const mainBranch = await getMainBranch(octokit);
    const commentBranchName = `${COMMENT_BRANCH_BASE_NAME}_${now}`;
    await createCommentBranch(octokit, {
      branchName: commentBranchName,
      fromBranchSha: mainBranch.data.commit.sha,
    });

    // create a new commit for the comment. The "sha" is required if the file already exists, otherwise
    // it'll be undefined (which is expected for new files)
    await octokit.rest.repos.createOrUpdateFileContents({
      owner: REPO_OWNER!!,
      repo: REPO_NAME!!,
      branch: commentBranchName,
      path: `${postName}.11tydata.json`,
      message: `Comment from ${name} on ${postName}`,
      content: Buffer.from(JSON.stringify(postData, null, 2), "utf8").toString(
        "base64"
      ),
      sha,
    });

    // create the pull request from the latest commit on the new branch and compare it against
    // the main/master branch.
    await octokit.rest.pulls.create({
      owner: REPO_OWNER!!,
      repo: REPO_NAME!!,
      title: `Comment from ${name} on ${postName}`,
      head: commentBranchName,
      base: MAIN_BRANCH_NAME,
      body: `Comment from ${name} on ${postName}`,
    });

    return new Response(`Thanks for commenting!`);
  } catch (error) {
    console.error(`An unexpected error occurred: ${JSON.stringify(error)}`);
    return new Response(error.toString(), {
      status: 500,
    });
  }
};

async function getPostData(octokit, { fileName }): Promise<{ sha; postData }> {
  let content: PostData;
  try {
    const { data: fileData } = await octokit.rest.repos.getContent({
      headers: {
        accept: "application/vnd.github+json",
      },
      owner: REPO_OWNER!!,
      repo: REPO_NAME!!,
      path: `${fileName}.11tydata.json`,
    });
    content = JSON.parse(
      Buffer.from(fileData.content.toString(), "base64").toString("utf8")
    );
    return {
      sha: fileData.sha,
      postData: content,
    };
  } catch (e) {
    console.log(`No post data found for ${fileName}: ${e.toString()}`);
    content = {
      comments: [],
    };
  }
  return {
    // sha is undefined for things that don't exist (yet)
    sha: undefined,
    postData: content,
  };
}

async function getMainBranch(octokit) {
  return await octokit.rest.repos.getBranch({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    branch: MAIN_BRANCH_NAME,
  });
}

async function createCommentBranch(octokit, { branchName, fromBranchSha }) {
  await octokit.rest.git.createRef({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    ref: `refs/heads/${branchName}`,
    sha: fromBranchSha,
  });
}
