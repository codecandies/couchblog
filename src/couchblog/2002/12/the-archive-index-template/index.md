---
title: "The Archive Index Template"
date: "2002-12-17"
tags:
  - "Gecodet"
---

[Sven Hook](https://web.archive.org/web/20040929103700/http://www.svensempire.com/) asked me to show how I made the template for the [Archive Index Page](https://web.archive.org/web/20040929103700/http://www.couchblog.de/couchblog/archives.php) in Couchblog. Ok, read this…

The ‘Master Archive Index’ is the right template to do this. In the standard template shipped with Movable Type, there is a complete but long listing of all articles published in your blog, which gets far too long and unusable the more articles are published. So I took the idea of this template and put some categorisation and navigation inside. It is still getting very long if you publish regulary, but with the navigation in the sidebar all categories or monthly archives can be reached from the top of the page.

In the content section the listing is divided in **monthly archives** and **category achives**. The two listing work the same way, the only ‘clou’ may be the named anchor tag, derived from the `<$MTArchiveTitle dirify="1"$>` or `<$MTCategoryLabel dirify="1"$>` tag, which can be navigated from the sidebar. The headline is a link to the monthly archive page, the titles of the articles links to them individual entry archive page.

This is the part with the monthly listing (maybe don’t mind the headline-tags they can be replaced with other tags surely):

```
<h2 class="date">Sorted by month</h2>
<MTArchiveList archive_type="Monthly">
<h3 class="arch"><a name="<$MTArchiveTitle dirify="1"$>"></a>
	<a href="<$MTArchiveLink$>"><$MTArchiveTitle$></a> (<$MTArchiveCount$> Entries)</h3>
<MTEntries>
<$MTEntryDate format="%m.%d.%Y"$>:
	<a href="<$MTEntryLink$>"><$MTEntryTitle$></a> (<$MTEntryCommentCount$> Comments)<br />
</MTEntries>
<br />
</MTArchiveList>
```

The listing by category works the same way, only with <MTCategories> tags:

```
<MTCategories>
<h3 class="arch"><a name="<$MTCategoryLabel dirify="1"$>"></a>
	<a href="<$MTCategoryArchiveLink$>"><$MTCategoryLabel$></a> (<$MTCategoryCount$> Entries)</h3>
<MTEntries>
<$MTEntryDate format="%m.%d.%Y"$>:
	<a href="<$MTEntryLink$>"><$MTEntryTitle$></a> (<$MTEntryCommentCount$> Comments)<br />
</MTEntries>
<br />
</MTCategories>
```

In the sidebar we make jumplinks to the mentioned name anchors. This inside-navigation is different from the navigation in the rest of my blog, this is a problem I want to avoid in the future, the look & feel should be preserved over the whole site. But for now, this is what the sidebar is looking like:

```
<div class="sidetitle">Monthly</div>
<div class="side">
<MTArchiveList archive_type="Monthly">
<a href="#<$MTArchiveTitle dirify="1">"><$MTArchiveTitle$></a><br />
</MTArchiveList>
</div>

<div class="sidetitle">Topics</div>
<div class="side">
<MTCategories>
<a href="#<$MTCategoryLabel dirify="1"$>"
	title="<$MTCategoryDescription$>"><$MTCategoryLabel$></a><br />
</MTCategories>
</div>
```

That’s it so far. Next year there will be the need for grouping the archive index by year, this seems to be easy again, using the [Archive Date Header Plugin](http://www.movabletype.org/cgi-bin/ikonboard/ikonboard.cgi?act=ST;f=20;t=6396).

**Update:** I decided to have a year kalender when this year is over, this could be done like [Brad Choate](http://www.bradchoate.com/past/000890.php) does it.
