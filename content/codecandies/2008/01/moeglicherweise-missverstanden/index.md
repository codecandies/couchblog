---
title: "Möglicherweise Missverstanden"
date: "2008-01-14"
tags:
  - "Gecodet"
keywords:
  - "Javascript"
persons:
  - "John Resig"
---

Firefox 3 [implementiert](http://developer.mozilla.org/en/docs/Cross-Site_XMLHttpRequest) den aktuellen W3C-Draft [Access Control for Cross-site Requests](http://www.w3.org/TR/access-control/). John Resig schreibt dazu [hier](http://ejohn.org/blog/cross-site-xmlhttprequest/) kurz, aber interessanter dort sind die Kommentare, wie dieser hier:

> I'm still under the impression - and correct me if I'm wrong - that all these means are tailored to protect the server and its documents. But I thought the issue was to protect the client! Server protection has been around for ages. If I don't want a certain domain to retreive my document, I simply add an access restriction to my Apache config, and I'm done.
>
> The real challenge is to protect the client, and should be solved on the client, IMHO. Like with any other piece of application software, the user should be able to decide what he wants to allow \*per web application\*. The browser should prompt the user "This web page wants to connect to ... Do you allow this?" as soon as it hits an X request. And the user decides whether he trusts the web app or not. Put the control back into the hands of the users. Any malicious content lies on some server, and intruders will make all of it freely available.

Und mehr davon. Tatsächlich besteht die Möglichkeit, dass man bei W3C das Problem noch nicht ganz verstanden hat.

\[via [ajaxian](http://ajaxian.com/archives/cross-site-xmlhttprequest-in-firefox-3)\].
