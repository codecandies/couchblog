---
title: "Google AJAX Feeds API"
date: "2007-04-18"
tags:
  - "Generde"
keywords:
  - "Javascript"
---

Mist. Gerade ist man mal so richtig sauer auf Google, weil sie sich mehr als Datenkrake als _die Guten_ generieren, da kommen die Jungs wieder mit einer knallhart genialen Sache um die Ecke: der [Google AJAX Feeds API](http://code.google.com/apis/ajaxfeeds/).

> With the AJAX Feed API, you can download any public Atom or RSS feed using only JavaScript, so you can easily mash up feeds with your content and other APIs like the Google Maps API.

Damit löst sich dann auch schon wieder eins der Probleme, die man als AJAX-Programmierer so haben kann, wenn man Feeds in die Anwendungs einbauen will: eine zwischengeschalteter Proxy kann nun entfallen, um domainübergreifend auf Feeds zuzugreifen. Und ab dort wird's dann auch noch komfortabel: denn um das Format des Quellfeeds muss man sich auch keine Gedanken mehr machen, RSS 0.9 bis 0.irgendwas, RSS 2, Atom, wird alles schön von Google einplaniert und als JSON abgeliefert.

Mal ganz ehrlich: find' ich wirklich prima.

Gleich noch ein Update: [Ajaxian](http://ajaxian.com/archives/google-announces-new-ajax-feed-api) hat dazu natürlich wieder [eine längere Story](http://ajaxian.com/archives/google-announces-new-ajax-feed-api) und auch gleich eine [schöne Beispielanwendung](http://rssbling.googlecode.com/svn/trunk/reader-feedapi.html).
