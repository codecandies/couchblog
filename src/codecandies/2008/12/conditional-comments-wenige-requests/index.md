---
title: "Conditional comments, wenige Requests"
date: "2008-12-12"
tags:
  - "Gestaltet"
keywords:
  - "CSS"
  - "HTML"
---

Ich halte _conditional comments_ für **eine** Lösung, CSS direkt auf den Internet Explorer und seine verschiedenen Hydra Versionen zu werfen. Ob aber die typische Art wie sie benutzt werden wirklich [effizient](http://bueltge.de/conditional-comments-effizient-nutzen/632/) ist, daran sind mir in letzter Zeit Zweifel gekommen.

### Zuviele Stylesheets

Zunächst scheint es eine gute Idee zu sein, jedem M$-Browser sein eigenes Stylesheet zu geben, andersherum gesagt, die guten Browser mit deren Download nicht zu belasten. Folgendes Szenario zeigt aber recht eindrucksvoll, dass das ggf. eine Menge Maintainanceaufwand wartet:

```html
<link rel="stylesheet" type="text/css" href="css/base.css" media="screen" />
<!--[if lt IE 8]>
<link rel="stylesheet" type="text/css" href="css/ie7.css" media="screen" />
<![endif]-->
<!--[if IE 6]>
<link rel="stylesheet" type="text/css" href="css/ie6.css" media="screen" />
<![endif]-->
<link rel="stylesheet" type="text/css" href="css/print.css" media="print" />
<link rel="stylesheet" type="text/css" href="css/handheld.css" media="handheld" />
<link rel="stylesheet" media="only screen and (max-device-width: 480px)" href="css/iphone.css" type="text/css" />
```

Extrem, aber da kommt einiges zusammen. Denn neben den ganzen _normalen_ CSS-Dateien, kommen dann noch pro unterstütztem IE noch weitere hinzu. Diese sind zwar oft erstaunlich klein, aber da kann man schon mal ins Suchen kommen, so im Laufe der Zeit…

Ein anderes Extrembeispiel dagegen sieht so aus:

```
<link rel="stylesheet" href="/codecandies/wp-content/themes/aalborg/style.css" type="text/css" />
```

Das ist hier aus dem Blog (Code von einigen Plugins habe ich jetzt aus Demonstrationszwecken mal unterschlagen). Aber wichtiger: ich nutze ebenfalls _conditional comments_ **und** habe spezielle Styles fürs Drucken (die für Handhelds fehlen noch…). How come?

### Conditional body comments

Für die IEs habe ich mir bei Paul Hammond die [conditional classnames](http://www.paulhammond.org/2008/10/conditional/) abgeschaut. Das sieht hier so aus:

```html
<!--[if lt IE 6]>
<body id="codecandies" class="aalborg noie">
<![endif]-->
<!--[if IE 6]>
<body id="codecandies" class="aalborg ie">
<![endif]-->
<!--[if gte IE 7]>
<body id="codecandies" class="aalborg ie7">
<![endif]-->
<!--[if !IE]><!-->
<body id="codecandies" class="aalborg">
<!-- <![endif]-->
```

Statt mit unterschiedlichen Stylesheet-Links zu hantieren, bekommen die verschiedenen Browser eine unterschiedliche Klasse im body-Tag zugeteilt. Damit kann man die Spezialanweisungen z.B. für IE6 direkt ins normale Stylesheet schreiben. Hier ein Beispiel:

```css
.post pre {
    max-height: 200px;
    overflow: auto;
}

.ie .post pre {
    height: 200px;
}
```

Die einen sagen, alles schön voneinander trennen, ich sage: alles schön beisammen halten. Einfach so, aus Erfahrung bei einigen Projekten. Das nun etwas größere Stylesheet wird ja meist eh' gecached, dafür spart man aber mindestens einen zusätzlichen Request.

### Und Druckstylesheets?

Weitere Request spart man sich, wenn man die Stylesheets für Drucker, handhelds etc. auch gleich mit in ein solches Multistylesheet packt. Das geht so:

```css
@media screen, projection {

	body {
    	background: #ff0000;
    	color: #ffff00;
	}

	/* Hier alle weiteren Styles für screen, projection */

}

@media print {

	body {
    	background: #fff;
    	color: #000;
	}

	/* Hier alle weiteren Styles für print */

}
```

Aber das kennt ihr ja sicherlich alle schon… Jedenfalls sorgen diese Methoden dafür, dass man zwar ein größeres CSS-File bekommt, dafür aber alles an einem Ort hat. Selbst wenn das Projekt so groß wird, dass man doch mehrere (bspw. thematisch getrennte) Stylesheets braucht, mit diesen Methoden bleiben auch diese schön übersichtlich und inhaltlich begreifbar.
