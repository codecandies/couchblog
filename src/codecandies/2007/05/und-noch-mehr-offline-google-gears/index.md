---
title: "Und noch mehr offline: Google Gears"
date: "2007-05-31"
tags:
  - "Gecodet"
keywords:
  - "Javascript"
persons:
  - "Dave Winer"
---

Die Welt scheint sich in den Kopf gesetzt zu haben, uns unbedingt _offline_ zu stellen. Anders lässt es sich wohl nicht erklären, daß nun auch Google ein Offline-Toolkit zur Verfügung stellt: [Google Gears](http://code.google.com/apis/gears/). Selbiges muss man sich [installieren](http://code.google.com/apis/gears/install.html), es steht für Windows, Mac und Linux, und dort für Firefox und Internet Explorer 6+ zur Verfügung. Google Gears stellt ein versioniertes Offline-Storage-System ([Local-Server](http://code.google.com/apis/gears/api_localserver.html) und [Database](http://code.google.com/apis/gears/api_database.html)) für Web/Offlineanwendungen zur Verfügung, zusätzlich gibt es den [Worker Pool](http://code.google.com/apis/gears/api_workerpool.html), eine Art Laufzeitumgebung für Javascripte, die im Hintergrund ablaufen sollen, ohne den Browser zu blockieren.

[Dare Obasanjo merkt ganz richtig an](http://www.25hoursaday.com/weblog/PermaLink.aspx?guid=f61d1dd0-e0f6-48d1-9009-77a5d8a423f0 "Google Gears: Offline Support for AJAX/Flash Apps"), dass wohl viele Webdeveloper diesem _geschenkten Gaul ins Maul schauen werden_, dass Google so seine eigenen Anwendungen immer weiter zu einer echten Konkurrenz zu bspw. Office-Programmen ausbauen kann und es ganz allgemein noch viele Webanwendungen mit Offline-Support geben wird. Bei [Ajaxian stellt man mal wieder eine abgeänderte Version von RSS Bling vor](http://ajaxian.com/archives/rss-bling-goes-offline-with-google-gears), diesmal arbeitet der Demo-RSS-Reader natürlich mit Gears. Mit ähnlicher Technologie, aber meines Wissens nicht weit verbreitet war ja schon einige Zeit das [Dojo Offline Toolkit](http://www.sitepen.com/blog/2007/04/23/dojo-offline-beta-released-toolkit-for-offline-web-apps/ "SitePen Blog") am Markt, dort verkündet man stolz, das selbiges nun auch [Google Gears als Plattform nutzen würde](http://www.sitepen.com/blog/2007/05/30/google-gears-dojo-offline-and-sitepen/ "Google Gears, Dojo Offline, and SitePen"), mag sein, mag aber auch sein, dass man bei Nutzung beider Komponenten mit dem Amboss auf den Hammer zu schlagen droht. Ok, man muss es zugeben, ganz neu ist diese Offline-Geschichte nun nicht mehr und Google entwickelt wohl seit 2005 daran, hat sich also reichlich Zeit gelassen. Für [Dave Winer jedoch ist das alles ein richtig alter Hut](http://www.scripting.com/stories/2007/05/30/googleGears.html "Dave Winer: Google Gears"):

> Something we had working in Radio in 2001. The key is something called a desktop web server. Nothing revolutionary about it. A database and CMS that runs on the local machine. I suspect that their approach will be heavier on the database and lighter on the CMS, since they like Ajax apps (as do many others, of course), where the content rendering happens in the browser, in Javascript.

**Update:** Noch schnell hinterhergeschoben: [Google Reader](http://reader.google.com/) ist die erste Google-App, die Google Gears nutzt.
