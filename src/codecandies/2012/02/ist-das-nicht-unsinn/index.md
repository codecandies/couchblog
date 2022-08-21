---
title: "Ist das nicht Unsinn?"
date: "2012-02-10"
tags:
  - "Gecodet"
keywords:
  - "CSS"
  - "Browser"
  - "Webkit"
---

… habe ich gestern noch gedacht, als ich den [dramatischen Aufruf von Daniel Glazman](http://www.glazman.org/weblog/dotclear/index.php?post/2012/02/09/CALL-FOR-ACTION:-THE-OPEN-WEB-NEEDS-YOU-NOW) gelesen und verlinkt habe. Das was Glazman in ernsthaftester _Browserwar_rhetorik an die Wand malt, die Beerdigung des CSS-Webstandards durch `-webkit`, ist das wirklich die Realität?

Zunächst einmal die Fakten. Scheinbar ist es so, dass Webentwickler weltweit zu dämlich oder zu faul sind, die für neue und experimentelle Funktionen vorgesehenen Browserprefixe richtig einzusetzen. Offenbar ist bei vielen mit dem Einsatz von `-webkit` Schluss, dass es auch noch `-o`, `-moz`, `-khtml` und `-ms` gibt, wissen sie nicht, oder es interessiert sie nicht. Zunächst mal: das müssen ja ein paar schöne Deppen sein, die sowas tun. Nur für einen Browser zu entwickeln, das wäre ja ziemlicher Schwachsinn.

Tatsächlich ist es so, dass viele denken, dass Webkit-Browser die einzigen Browser sind, für die man im mobilen Web entwickeln muss. das ist natürlich falsch. Und _Webkit_ ist ja nicht mal ein Browser. Oder ein Browserhersteller (schließlich heissen die Kürzel _vendor-prefixex_). Eigentlich gibt es gar nicht den einen Webkit:

> There are, to my latest count, Safari desktop, Safari iOS, Chrome desktop, Chrome Android, Android WebKit (in various flavours), BlackBerry WebKit, Nokia WebKit (in various flavours), Samsung Dolfin, LG WebKit, Palm Webkit, NetFront WebKit, Obigo WebKit, and UC WebKit. Thirteen browsers, eleven vendors — or fourteen, if you count the Android vendors separately. [PPK](http://www.quirksmode.org/blog/archives/2012/02/the_vendor_pref.html)

Womit Glazman nun droht ist, dass die anderen Browserhersteller anfangen werden, auch `-webkit` als Präfix zu benutzen (so sie die entsprechende Funktionalität denn anbieten können). Das wäre nun das Ende des Webstandards CSS. Ist es das? Wirklich? Oder ist es vielmehr das Ende der Idee Hersteller-Präfix, die sich in der Praxis offenbar nicht bewährt hat. Der Himmel wird uns wohl nicht auf den Kopf fallen. Und Webkit wird auch nicht die Weltherrschaft an sich reissen.

Vielleicht ist es einfach Zeit, die _vendor-prefixes_ zum Teufel zu jagen und ein `beta-`Präfix einzufühen, wie [PPK es vorschlägt](http://www.quirksmode.org/blog/archives/2012/02/the_vendor_pref.html)?

Nebenbei bemerkt: das im Laufe der Debatte [Lea Verou fälschlicherweise beschuldigt wurde](http://lea.verou.me/2012/02/vendor-prefixes-the-css-wg-and-me/) der Präfixfaulheit Vorschub zu leisten… das ist ja fast schon lächerlich.
