---
title: "Kurz gecodet: Farbverläufe und Animationen"
date: "2009-11-26"
tags:
  - "Gecodet"
keywords:
  - "CSS"
---

Eine kleine Spielerei mit diversen CSS3-Eigenschaften und CSS3-Funktionen.

```html
<style type="text/css">
	.quadrat {
		color: #fff;
		height: 300px;
		width: 300px;
		font-size: 24px;
		line-height: 300px;
		text-align: center;
		background: blue;
		/* css3 magic from here on */
		/* Gradient Background mit Hintergrundbild, zunächst Webkit */
		background-image: url(img/twitter.png), -webkit-gradient(linear, left top, right bottom, from(blue), to(#fff));
		/* Dann der etwas andere Code für Gecko 1.9.2 (FF 3.6b3) */
		background-image: url(img/twitter.png), -moz-linear-gradient(top left, blue, #fff);
		background-position: -200px 0, 0 0;
		background-repeat: no-repeat;
		/* beim Schatten scheint man sich zumindest sprachlich einig zu sein */
		-webkit-box-shadow: 5px 5px 15px #999;
		-moz-box-shadow: 5px 5px 15px #999;
		/* Aber CSS-Transisitions kann nur Webkit */
		-webkit-transition: all 250ms;
	}
	.quadrat:hover {
		/* und noch mehr transition magie */
		-webkit-transform: rotate(20deg);
		-moz-transform: rotate(20deg);
	}
</style>
```

Und wie das dann aussieht, [sehen wir dann hier](http://projektkrematorium.de/codecandies/css3/beispiel1.html). Im Firefox 3.5 geht das so, sieht besser in Firefox 3.6b3 aus und macht in aktuellen Safari und Chrome richtig Spass. Der Rest… geht leer aus. :)
