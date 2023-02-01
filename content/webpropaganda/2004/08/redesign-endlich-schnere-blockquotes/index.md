---
title: "Redesign: Endlich schönere Blockquotes"
date: "2004-08-04"
tags:
  - "Gestaltet"
---

Der `<blockquote>` gehört zu meinen Lieblingsmitteln beim Verfassen eines Blogartikels der sich auf anderen Quellen, beispielsweise Zeitungen o.ä. bezieht. Vor kurzem habe ich erst die Blockquotes in dieser Version von Webpropaganda geändert, da mir die Urversion einfach nicht gefallen hat. Aber das ist nur eine Zwischenlösung, in der nächsten Version werden sie so aussehen:

Jedenfalls in modernen Browsern ;) und das geht so:

```css
blockquote {
  margin: 1em 0;
}
blockquote p {
  padding: 0.5em 3.4em 0.5em 3.2em;
}
/* extension MOSe, nicht zu sehen im IE */
blockquote p:first-child {
  background: transparent url(/img/webpropaganda/quotes.png) no-repeat;
}
/* Hack!: dann auch das zweite Bild nicht im IE anzeigen */html>body blockquote {
  background: transparent url(/img/webpropaganda/quotes.png) no-repeat bottom right;
}
blockquote cite {
  display: block;
  text-align: right;
  margin-top: 0.5em;
}
```

```html
<blockquote>
  <p>und seiner Texter wird aufgeblättert. Endlich. Was wissen Sie über Blindtext? Katholischen nimmt man für Kochbücher, evangelischen für Bauhausmöbelprospekte, hebräischer wird in Hollywood verfilmt, atheistischer ist für Procter & Gamble Waschmittel, arabischer ist nicht. Und weiter? Zu wem beten Karl und Claudia jeden Tag als Buße für ihre Blindtext-Sünde? Zu ihr. Zur Heiligen Marie Antoinette. Madame ging schön aufs Schafott. Welch eine Haltung. Sie weiß, sie kriegt den Kopf ab. Aber vorher<br /> <cite><a href="#">Dieter Blindtext</a><cite></p>
</blockquote>
```

Die _hübschen_ Anführungszeichen werden also als Hintergrundbilder eingebunden. Das linke als Hintergrund des ersten Paragraphen. Dazu habe ich hier `p:first-child` verwendet:

> :first-child formatiert das erste Vorkommen eines Elements in einem umspannenden Elements, z.B. den ersten Absatz p in einem div-Container. [Stil mit Stil](http://www.mediaevent.de/css2/pseudoclasses.html#first)

Für den Internet Explorer ist das natürlich zu viel, zu modern, aber das ist ja gerade das schöne. Also: bspw. Mozilla-User bekommen jetzt schon mal linksoben das erste Icon angezeigt. Das zweite Apostroph ist dann sinnigerweise ein rechts unten ausgerichtetes Hintergrundbild des gesamten Blockquotes. Das könnte natürlich auch der IE, deshalb habe ich an der Stelle gehackt. Was aber kein Problem sein sollte: denn sollte irgendwann einmal IE upgedatet werden (wir arbeiten dann bestimmt schon mit CSS 5), wird er beide Regeln verstehen können und brav alles anzeigen, was aber rein hypothetisch ist… ich schweife ab ;)

Das als Block-Element eingefügte `<cite>` ist so eine private Vorliebe von mir, das könnte man natürlich auch in einen eigenen Paragraphen packen. Oder ganz hip [das Attribut cite](http://www.simiandesign.com/blog-fu/2003/11/cite_your_blockquotes.php) mit einer weiteren Pseudo-Klasse: `:after` anzeigen lassen…

Update: Passend dazu: [Sitepoint: Pullquotes with CSS](http://www.sitepoint.com/test/pullquote.htm).
