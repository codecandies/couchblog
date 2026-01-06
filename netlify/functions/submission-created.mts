import { Context } from "@netlify/functions";

interface PostComment {
  created_at: string;
  data: PostCommentData;
}

interface PostCommentData {
  name: string;
  comment: string;
  referrer: string; // what page the user submitted a comment from
  website: string | undefined;
}

export default async (request: Request, context: Context) => {
  console.log("Function invoked!");

  try {
    const {
      data: { name, comment, website, referrer },
      created_at,
    }: PostComment = (await request.json()).payload;
    console.log('comment:', comment);
    console.log(JSON.stringify(context));

    if (!name || !comment || !referrer) {
      console.error(
        `Missing at least one required field. Name: ${name}, Comment: ${comment}, Referrer: ${referrer}`
      );
      return { statusCode: 400, body: "Name and comment are required!" };
    }
    return new Response(`Thanks for commenting, digga!`);
  } catch (error: unknown) {
    console.error(`An unexpected error occurred: ${JSON.stringify(error)}`);
    return new Response(error.toString(), {
      status: 500,
    });
  }
};
