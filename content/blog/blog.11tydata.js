require('dotenv').config();

const isDevEnv = process.env.ELEVENTY_ENV === 'development';
const todaysDate = new Date();

function showDraft(data) {
	const isDraft = 'draft' in data && data.draft !== false;
	const isFutureDate = data.page.date > todaysDate;
	return isDevEnv || (!isDraft && !isFutureDate);
}


module.exports = ()=> {
  return {
    tags: [
      "blog"
    ],
    "layout": "layouts/blog.njk",
    "permalink": "blog/{{ date | pathDate }}/{{ title | slugify }}/index.html",
		eleventyComputed: {
			eleventyExcludeFromCollections: data => showDraft(data) ? data.eleventyExcludeFromCollections : true,
			permalink: data => showDraft(data) ? data.permalink : false,
		}
	}
};
