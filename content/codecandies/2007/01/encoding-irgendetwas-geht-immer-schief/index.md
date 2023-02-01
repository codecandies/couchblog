---
title: "Encoding — irgendetwas geht immer schief"
date: "2007-01-26"
keywords:
  - "HTML"
  - "Javascript"
  - "PHP"
tags:
  - "Gecodet"
---

_Character Encoding_ ist so eins der Dinge, die bei einem Webprojekt leicht schief gehen können, vor allem wenn man in einer heterogenen Umgebung arbeiten muss, also beispielsweise eine große Website aus etlichen verschiedenen Quellen, von unterschiedlichen Servern, aus verschiedenen _Codejahrhunderten_ zusammen zu stricken hat. Natürlich könnte, müsste, sollte immer alles `UTF-8` codiert sein: aber die Realität sieht leider anders aus. Denn selbst wenn man es schafft, alle Codequellen und Server abzustimmen, irgendwann kommt immer ein Benutzer mit der nordkoeranischen Version des Acrobat Readers 1.0 und hat mal eben daraus Text in ein Webformular gepastet…

Tommy Olsson bringt nun auf [Sitepoint: The Definitive Guide to Web Character Encoding](http://www.sitepoint.com/article/guide-web-character-encoding), ein hehres Ziel, will ich meinen. Und tatsächlich, der Artikel birgt wunderschöne Erklärungen: was ist das eigentlich »Character Encoding«, was passiert da, wie und wo stellt man es richtig ein und was passiert dann. Auf die Unwägbarkeiten des geplagten Integrationsentwicklers kann man da nur schwer eingehen, das sehe ich ein, also, wer von »Character Encoding« noch keinen Schimmer hat, unbedingt lesen.

Für die anderen ein paar Hinweise (teilweise auch siehe im genannten Artikel) gebündelt: **Stellen an denen es mit dem Character Encoding gerne schief läuft:**

- _Der Eintrag im HTML ist falsch oder fehlerhaft._ Eigentlich immer die erste Stelle, wo man bei einer Webseite nachschauen sollte. `<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />` soll da im Header stehen. Man beachte auch, dass **content** den ganzen String, samt Semikolon enthält, also hier: `text/html; charset=utf-8`.
- Ausserdem überschreibt der **HTTP-Header** des Servers (oder aus einem Programm) zwingend den Meta-Tag des Dokumentes. Also muss in der Apache-Konfiguration `AddDefaultCharset UTF-8` gesetzt sein. Ist es so, aber es kommt trotzdem Müll, kann auch bspw. ein PHP-Programm den Header neu gesetzt haben. Man suche nach Stellen wie: `header('Content-Type: application/xhtml+xml; charset=ISO-8859-1');` und, ach ja: in der **php.ini** gibt's auch noch ein oder zwei Stellen, wo man mal nach `default_charset` diggen sollte.
- Arbeitet man mit einen Javascript-Framework wie [Dojo](http://dojotoolkit.org/), kann man über Parameter bestimmen, in welchem Encoding Daten an den Server geschickt werden. Da haben wir aber teilweise richtige Schwierigkeiten bekommen, die wir auch nicht auflösen konnten – was so ein typisches Problembeispiel ist. Die Programmierer der Javascript- genauso wie der PHP-Seite behaupteten allesamt, dass ausschließlich mit UTF-8 gearbeitet würde, obwohl trotzdem Müll in der DB landete. Schlussendlich hat man sich auf einen Dojo-Bug geeinigt und serverseitig das Problem aufgefangen…
- …was man aber eigentlich nicht tun sollte, denn: es ist im Grunde immer besser, wenn die Daten schon richtig ankommen, im Grunde ist dabei das Encoding egal, wenn es richtig ausgewiesen ist. Richtig blöd wird's nur, wenn encodierte Daten nochmals encodiert werden. Das sieht zwar lustig aus…
