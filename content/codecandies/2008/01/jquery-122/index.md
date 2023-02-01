---
title: "jQuery 1.2.2"
date: "2008-01-16"
tags:
  - "Gecodet"
keywords:
  - "Javascript"
  - "jQuery"
---

Während man auf der [jQuery Homepage](http://jquery.com/) noch hinterherhinkt, kann man hier schon [die neue Version 1.2.2 bekommen](http://jquery.com/blog/2008/01/15/jquery-122-2nd-birthday-present/).

Vielleicht wichtigste Verbesserung (neben wieder mal angeblich dramatischen Geschwindigkeitserhöhungen, gähn): `.ready()` wurde komplett üpberarbeitet:

> The document ready function has been long due for some extra love. We’ve made a number of specific changes.
>
> - Internet Explorer document ready drastically improved. We use a new technique inspired by Diego Perini. It allows us to not have to do a document.write() anymore, which is really fantastic.
> - All browsers now wait for CSS to be ready, in addition to just the DOM. In reality, it’s not just a vanilla document ready anymore - but we found that users, overwhelmingly, needed to wait for document styling to be active (such as knowing if an element is visible, or what its height is). Specifically we’ve added improvements to Safari and Opera to make this possible.
> - $(document).bind("ready", fn); - You can now watch for the document ready event via the traditional .bind() function. Of course, .ready() still works as you would expect it to.
