---
title: "Update: TXP 1.16"
date: "2004-03-11"
tags:
  - "Gebloggt"
---

Und da ist sie schon, die neue Textpatternversion (geht im Moment wirklich fix), [hier](http://textpattern.com/) _downzuloaden_. Was hat sich geändert?

- Add article\_custom tag, which allows tailoring article output by article, section, author etc
- Added ‘include in site search’ option for individual sections
- Added name and email validation for comments
- Added navigation to banned commenter list from main comments tag
- Added option to change the number of days after which logs will be expired
- Added option to create Excerpts for articles (defined in admin\_config.php)
- Added option to override forms on an article-by-article basis
- Fix several problems caused by apostrophes in category names
- Fixed a confusing interface failure when trying to create a section that already exists
- Fixed a problem where article title text in “quotes” was disapearing
- Fixed an installer problem where the first publisher’s email address wasn’t being inserted into the database
- Fixed erroneous ‘article categories’ header in link list
- Fixed incorrect display of links that have blank categories in link tab
- Fixed incorrect handling of ampersands in category\_list
- Fixed incorrect site and article links in Atom feeds for sites in subdirectories
- Fixed problem in password\_protect that was throwing errors
- Fixed some naming confusion that prevented changing link and image category names
- Got rid of automatic \-ing of strings of caps in Textile
- Link titles and descriptions are now run through Textile to encode any high-ascii characters
- Rewrote the mechanism for paging through content – you can now accurately page through articles, comments, logs, links and images
- Titles appending to permalink urls in /clean/ mode are now correctly stripped of html tags and entities

The plugin installer is working, watch this space for news on the first plugin.

[TXP Forum](http://forum.textpattern.com/viewtopic.php?id=567)
