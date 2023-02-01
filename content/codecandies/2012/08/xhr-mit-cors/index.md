---
title: "XHR mit CORS"
date: "2012-08-21"
tags:
  - "Gecodet"
keywords:
  - "Development"
  - "Javascript"
---

Manchmal habe ich das Gefühl ich werde langsam alt. Obwohl ich meine, so ziemlich jede neue Technik aus dem Hause HTML5, Javascript und CSS3 auf dem Schirm zu haben, tendiere ich doch zeitweise noch zu konservativer Herangehensweise bei Projekten. Der alte Zwang Browser wie IE7 oder gar 6 unterstützen zu müssen sitzt einem scheinbar als schlechter Berater im Nacken. Aber [can I use](http://caniuse.com) hilft dem gerne ab.

Bei einem aktuellen Projekt haben wir nun, weil der [Kollege gegenüber](http://arnalyse.de) nicht geschlafen hat, das erste Mal CORS eingesetzt und ehrlich gesagt, ich bin von den Socken. Seit uns das Modewort AJAX begegnet ist, schlagen wir uns ja nun mit Same-Domain-, Same-Server- kurz [Same-Origin-Policies](http://de.wikipedia.org/wiki/Same-Origin-Policy) herum, die einem Crossdomain-XHR verbieten. Alle Bestrebungen, diese Regeln zu umgehen: reines Gehacke. Mit dem Einsatz von [CORS](http://www.w3.org/TR/cors/) ist das vorbei. CORS ist dabei nicht mal neu, aber erst jetzt [so langsam anwendbar](http://caniuse.com/#search=cors).

Wenn man Zugriff auf die Server hat, die an der Kommunikation beteiligt sind, ist die Sache so einfach, [als würde man einem Kind den Lutscher klauen](http://enable-cors.org/). Hier mal eben der nötige Code für die Apache Konfiguration:

```
Header set Access-Control-Allow-Origin *
```

Der Server sendet eine Headerzeile mehr (in der einfachsten möglichen Konfiguration), und der Browser (alles moderne nach IE7, mit kleinen Einschränkungen bei IE9) weiss: Kommunikation erlaubt. Und dann klappt’s auch mit dem AJAX, so wie man sich das immer vorgestellt hat. [Eins](http://www.nczonline.net/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/)! [Setzen](https://developer.mozilla.org/en-US/docs/HTTP_access_control)! Weitermachen!
