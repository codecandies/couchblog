---
title: "Die iPad Webseite"
date: "2010-11-18"
tags:
  - "Gearbeitet"
  - "Gecodet"
keywords:
  - "HTML"
  - "Javascript"
  - "CSS"
  - "iPad"
---

![Screenshot ZEIT ONLINE, Wissen Centerpage, iPad Version, Design: Information Architects](/img/codecandies/zon-001.jpg)

Liest man die gängigen Webdesign-Sites findet man eine Fülle von Tipps, wie man seine Website anpassen kann, damit sie auch auf dem iPad _funktioniert_. Der Tenor: mit _css media queries_ ein paar zusätzliche Stylesheets für das iPad liefern, im Scriptteil ein wenig die Touch- und Gestureevents einsetzen, Flashvideos raus, Buttons größer: fertig! Das war nicht ganz das, was uns vorschwebte…

## Das mit den media queries ist so eine Sache

Kurz gesagt: CSS media queries sind im Moment [eine schicke und elegante Lösung](/codecandies/2010/09/08/optimierungen-mit-css-media-queries/), wenn man seine bestehende Website mit ein paar Handgriffen an die Gegebenheiten verschiedener, zumeist kleinerer, Displays anpassen will. Ebenso taugen sie sicherlich dazu, eine Web-App zu bauen, die **nur** auf Tablets funktioniert und im Desktopbrowser leer oder ungestyled bleibt (aber wer will das schon?). Für eine große Contentwebsite, die zweigleisig unter der gleichen Adresse unterschiedliche Styles an Desktopbrowser und Tablets ausliefert, sind sie jedoch (zumindest im Moment) nicht zu gebrauchen.

Das liegt zunächst einmal daran, dass mit Mediaqueries eingeschränkte Stylesheets zunächst mal [allesamt heruntergeladen werden und dann entschieden wird, was angezeigt wird](http://www.quirksmode.org/blog/archives/2010/08/combining_media.html). Für den mobilen Einsatz und auch für den Tableteinsatz kommen sie damit kaum in Frage. Beim ersteren schon allein wegen der Downloadmengen, beim letzteren kommen wie die Erfahrung zeigt noch weitere Datenmengen an Javascript und z.B. größeren Bildern hinzu. Ein Fass ohne Boden.

Die von mir zunächst favorisierte Lösung führte aber dazu, dass nicht nur [IEs kleiner Version 9 via _conditional comments_ eigene Stylesheets zugeteilt bekommen mussten](http://blog.rakeshpai.me/2010/10/practical-css3-media-queries-and-mobile.html), auch [Firefox 3.0 und kleiner können mit den mediumabhängigen Styles so gar nichts anfangen](http://caniuse.com/#feat=css-media).

## Ohne Javascript geht's (derzeit) nicht

Und auf tut sich die böse Tür des _user agent switching_. Zwar gibt es eine [Javascript-Lib](http://code.google.com/p/css3-mediaqueries-js/), die _css media queries_ gewissermassen emuliert, das ist aber ein weiterer gut 20kB großer Download ist, ein Monster mithin, das zudem nur mit Queries innerhalb von CSS-Dateien, aber nicht innerhalb von `<link />` zulässt.

Stehen zusätzlich Anforderungen im Raum, dass auch ein Schalter zur Rückkehr zur _klassischen Website_ eingebaut werden soll, oder wenn man feststellt, dass eben Tablet nicht geleich Tablet ist, man also für verschiedene Tablets noch kleinere Anpassungen vornehmen muss, dann ist man schnell dabei auf den _user agent_ zu schauen. <interlude>Das vereinfacht übrigens auch gewaltig die Entwicklung der Seite, da man sie während des Bauens parallel zum iPad/iPad-Simulator auch im Firefox _previewen_ kann. Das geht natürlich nur mit [User Agent Switcher](http://chrispederick.com/work/user-agent-switcher/). Dann aber kann man den geliebten Firebug nutzen um wenigestens die Elemente auf der Seite und ihre Styles zu indentifizieren und auch das Scriptdebugging ein wenig zu unterstützen. Dinge die es auf dem iPad nicht oder nur sehr rudimentär gibt.</interlude>

Diese Lösung ist allerdings noch nicht das Endstadium, allein weil wir nach und nach die Site für weitere Tablets fit machen wollen. Im Laufe dieser Zeit werden wir auch das UA-switching wieder entfernen und durch bessere Methoden ersetzen.

![Screenshot ZEIT ONLINE, Navigation, iPad Version, Design: Information Architects](/img/codecandies/zon-002.jpg)

## Der Spass an der Entwicklung

Eins muss man gleich sagen: Entwicklung für Tablet (speziell das iPad) macht einen Heidenspaß. Zum einen ist die Touchbedienung faszinierend. Ich bin so einer, der ein mouse-over-Menü entwickelt und sich dann stundenlang daran erfreuen kann, wie beim Hovern über den Menüpunkt das Menü animiert ausfährt. Auf dem Tablet kann man solche Lösung praktisch zum Anfassen programmieren (natürlich ohne `:hover`). Ich habe das Menü bestimmt mehrere tausend Mal ausprobiert. Oder die Bildergalerien (obwohl ich da noch nicht zufrieden bin). Die Möglichkeiten des Webkit sind wirklich hervorragend und das geniesst man natürlich. Obwohl es auch ein wenig zu verführerisch ist, wenn man in die Hölle der Desktopbrowser zurückkehrt und feststellt, dass es da draussen immer noch Internet Explorer gibt… ;)

## Kleinere Schlaglöcher

Ein paar Dinge waren allerdings echte Kopfnüsse. Da ist zum Beispiel der Viewport-Tag. Schon bei diesem Blog hier habe ich Probleme damit gehabt. über diesen einen Tag den Viewport und vor allem die Vergrößerung so zu setzen, dass es für iPad und iPhone gleichermaßen funktioniert. Das Design der iPad-Seite erforderte ganz klar ein:

```html
<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0">
```

Das passt allerdings nicht zu unserer Art, das iPhone zu bedienen. iPhone-Nutzer werden beim Besuch gefragt, ob sie die [mobile Website](http://mobilzeit.de) besuchen möchten, oder die _klassische Seite_. Mit dem obigen Meta-Tag kann man diese dann aber auf dem iPhone nicht mehr skalieren. Für das iPhone empfiehlt sich eher:

```html
<meta name="viewport" content="width=device-width">
```

Will man allerdings (für das iPad) zwei Ansichten für Portrait- und Landscapemodus präsentieren (vs. vergrößerte Portraitansicht im Landscapemodus), dann ist man auf das `minimum-scale=1.0, maximum-scale=1.0` festgelegt.

Überraschenderweise kann man aber auch diesen Metatag per Javascript setzen! Es hat allerdings ein wenig gedauert, bis ich das einfach mal ausprobiert habe (hüstel). Außerdem musste dafür ganz schön an unserer Seitenstruktur geschraubt werden.

## Wie geht's weiter?

Zunächst mal kommen jetzt schnell weitere Tablets dazu, mit denen man die Seite betrachten kann. Es war leider schnell klar, dass man mit einem Schlag nicht alle Tablets bedienen kann. Mindestens an den Einstellungen des Viewports müssen Anpassungen gemacht werden, wahrscheinlich auch etwas CSS und Script. Wobei, wir wollen jetzt auch nicht jedes Tablet das neu auf den Markt kommt kaufen (der Gadgetjäger in mir fragt natürlich: »warum eigentlich nicht«). Man wird sehen, was sich am Tabletmarkt noch tut und was sich durchsetzt. Wir räumen zunächst mal dem Galaxy Tab von Samsung gute Chancen ein, und wenn [RIM mit einem Tablet kommt](http://www.zeit.de/digital/mobil/2010-11/rim-playbook-ipad?page=all), wird's ja vielleicht auch nochmal interessant.

Abschließend sei gesagt, dass die Sache natürlich ein gutes Stück weit vom Design der [Information Architects](http://www.informationarchitects.jp/en/) lebt, Oliver Reichenstein hat dazu [einen schönen Artikel geschrieben](https://web.archive.org/web/20101126153725/http://www.informationarchitects.jp/en/news-on-ipad-the-obvious-way/), der auch die – ich nenne es mal so – medienpolitischen Hintergründe gut erfasst und viel von dem Geist beschreibt, der hinter dieser Webapp steckt.
