---
title: "window.onload, schon wieder"
date: "2007-08-24"
tags:
  - "Gecodet"
keywords:
  - "Javascript"
  - "jQuery"
---

Kann ich nicht mehr hören! Seit Wochen hadere ich ernsthaft mit den typischen Problemen, die auftreten, wenn man Events nicht mit (bösen, bösen, bösen[^1]) **inline**-Eventattributen ("onclick", etc.) zuordnen will (oder eben kann). Der Ladenvorgang eines HTML-Dokuments, vor allem eines sehr großen (hüstel), ist eine wacklige Angelegenheit, soviel kann man schon mal fesstellen. Da kann viel passieren: das DOM ist fertig, da wird vom Adserver noch etwas nachgeladen, huch, hier mal ein Flashlayer, der alles zerballert, der User klickt wild in der Navi herum, die _immer noch nicht initialisiert ist_, da funzelt noch ein AdBlocker dazwischen…

Konkret: es gibt natürlich verschiedene Lösungsansätze für das Problem, jQuery bedient sich der [Methode von Dean Edwards](http://dean.edwards.name/weblog/2005/09/busted/) für ihr eigentlich wunderbares `jQuery.ready()`. Nur, es funktioniert nicht immer. Und: was geht, und was nicht, hängt zu gut 60% von äußeren Umständen ab, also vom Browser, zusätzlich geladenen Skripten auf die man keinen Einfluss hat (Werbung) und wie schon gesagt, auch gerne mal einem Browserplugin. Und manchmal kommt auch ein ambitionierter Kollege und überschreibt alles mit einem fröhlichem `onload`. ;)

Ich stehe gerade kurz davor das Ganze wieder ganz altmodisch ins `<body onload="">` zu verlegen, nur damit endlich Ruhe ist. Nein, da ist mir gerade nochmal [Peter Michaux](http://peter.michaux.ca/article/3752) dazwischen gekommen. Er hat die einzelnen Methoden und Lösungen zumindest ordentlich analysiert und kommt zu ähnlichen Ergebnissen wie ich. Und hat eine Lösung.

> My suggested solution trades a minor impurity in programmer ideals for an always functional UI. It’s an “if you can’t beat them, join them” solution. It’s a compromise but like Dan Cederholm’s compromise it is fixed string of attributes that is tacked on without any thought. It may be a challenge to build an efficient implementation of this solution but there is no hacking based on brittle browser features and no exposure. This solution depends only on documented browser features and behavior. That’s a compromise I can abide.{:lang=en}

Peter hat eine Methode erdacht, die sozusagen das beste aus beiden Welten zu vereinigen weiss, nämlich `jQuery.ready()` und das hervorragende [LiveQuery Plugin](http://blog.brandonaaron.net/2007/08/19/new-plugin-live-query/) über das ich schon gestern kurz [berichtet hatte](/codecandies/2007/08/22/live-query/). Ich werd's testen.

[^1]: Die Nutzung von inline-Eventattributen steht gegen die Trennung von Inhalt und Präsentation, der ich normalerweise anhängig bin. Ich bin zwar pragmatisch genug mich von soetwas zu verabschieden, wenn es drauf ankommt, aber da wir mit XML-Dokumenten arbeiten, die per XSLT in HTML gestyled werden, das mit CSS gestyled wird… da gehört das schon irgendwie zum Prozess. ;) Zudem machen unterschiedliche Leute die XSLTs und die Javascripte etc. Da sind solche Trennungen auch für den Arbeitsprozess mehr als praktisch. Wenn's funzt zumindest.
