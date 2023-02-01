---
title: "Optimierungen mit CSS media queries"
date: "2010-09-08"
tags:
  - "Gecodet"
  - "Gestaltet"
keywords:
  - "CSS"
  - "HTML"
---

Über die berühmten [CSS Media Queries](/codecandies/2010/03/10/css-3-media-queries/) haben wir ja schon viel gehört und gelesen. Mitunter werden sie [unnütz für das mobile Web](http://www.cloudfour.com/css-media-query-for-mobile-is-fools-gold/) angesehen und ohne eine nennenswerte [Zusammenarbeit mit Javascript](http://www.quirksmode.org/blog/archives/2010/08/combining_media.html) wird man wohl auch nicht auskommen. Damit wissen wir ja schon einiges. Hier im Blog sind sie seit den letzten kosmetischen Korrekturen im Einsatz (einfach mal die Fenstergröße anpassen oder [Codecandies auf dem Kindle 3 aufrufen](http://www.flickr.com/photos/codecandies/4941756200/)), sehr schön kann man das auch bei den [iAs](http://www.informationarchitects.jp/en/) anschauen.

Was Jason Grigsby vor allem kritisiert ist, dass man um eine Anpassung bspw. für mobile Clients zu erreichen, **mehr anstatt weniger Code** hinzufügt:

> The idea of adding more code—adding more to download—in order to optimize for mobile should be the first clue that this isn’t a good solution.

Das wäre natürlich kontraproduktiv und ist für große Websites, die sowieso schon immer mit ihrem _Gewicht_ zu kämpfen haben auch tatsächlich keine Alternative. Zudem hat man ja auch keine Unterscheidung für die ausgelieferten Medien, bspw. Bilder. Große hochaufgelöste Bilder braucht man bspw. für das iPad, aber nicht für das kleine Display eines Mobiltelefons. Smartphones wie das iPhone4 fallen aus dieser Kritik aber eher heraus, lechzt es doch nach _noch höher aufgelösten_ Bildern als der Desktopwebbrowser. Hier müsste dann je nach Nutzungssituation unterschieden werden.

Allen Lösungen gemein ist im Moment, dass die mit media queries spezialisierten Seiten, nur wenige kleine Effekte anbieten, bspw. schmalere Spalten, verkleinerte Bilder etc. Was aber, wenn die Seiten für das iPad und später auch das iPhone **wirklich komplett anders aussehen sollen?** Versucht man sämtlichen CSS-Code zu überschreiben, landet man schnell in der Codinghölle und das Gewicht der Seite explodiert. Ich habe mich nun gefragt, mal in Bezug auf das iPad (und andere Tablets) gesehen, deren Nutzung ich weniger als mobile Nutzung betrachte, wie man mit den _media queries_ nun zwar genug, aber eben möglichst wenig CSS-Daten an die Browser schicken kann. Mein derzeitiger Lösungsansatz sieht so aus _siehe Update am Ende des Artikels_:

```html
<!--[if IE]>
  <link rel="stylesheet" href="css/base.css" type="text/css" />
<![endif]-->
<link media="only screen and (min-device-width: 769px)" rel="stylesheet" href="css/base.css" type="text/css" />
<link rel="stylesheet" media="only screen and (min-device-width: 768px) and (max-device-width: 1024px)" href="css/ipad.css" type="text/css" />
```

Zur Erklärung: Zunächst mal werden die IEs bedient, die derzeitig nicht in der Lage sind media queries auszuwerten. Der bekommt ganz normal sein CSS geliefert. Die restlichen Stylesheets ignoriert ein IE dann geflissentlich. Alle anderen Browser widerum ignorieren die conditional comments und falls sie eine `min-device-width` größer 769px haben, laden und zeigen sie das _normale_ base.css. Hernach folgt dann das CSS für das iPad, mit einem Query auf seine Werte abgestimmt.

Soweit zur Theorie. In der Praxis scheint das so zu funktionieren. Lädt man viele verschiedene CSSse, kann das allerdings schnell unübersichtlich werden, da alle _nichtmobilen_ CSSse doppelt aufgeführt werden müssen.

Anregungen und andere Ideen sind mehr als willkommen.

**Update:** Zwei Tatsachen haben inzwischen dazu geführt, dass ich selbst nicht mehr so überzeugt von dieser Lösung bin: 1. werden ob mit media queries oder ohne immer alle Dateien vom Browser gezogen. Man spart aber ggf. durch weniger CSS-Überschreiben, je nach Art und Größe der Styles; 2. wichtige Info: schon Firefox 3.0 kann keine CSS media queries.
