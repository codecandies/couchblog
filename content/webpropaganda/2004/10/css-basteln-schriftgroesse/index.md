---
title: "CSS basteln: Schriftgrösse"
date: "2004-10-18"
tags:
  - "Gestaltet"
---

Mit der Schrift auf Webseiten, das ist ja so eine Sache. Idiotischerweise ist die allgemeine Standardgrösse der Schrift in den meisten (nicht allen) Webbrowsers 16px (sag ich jetzt mal so, auch wenns auch schon wieder nicht wirklich stimmt, aber das würde schon fast wieder zu weite gehen). Das ist jedenfalls um einiges größer, als alle andere Schrift, die einem so auf dem Desktop des Computers oder in anderen Programmen begegnet. Schwachsinn. Muss also kleiner.

Früher gab es darauf eigentlich nur eine Antwort: Pixel. Das war durchaus eine ganze Zeit üblich: seine Schriftgrössen in Pixeln anzugeben, aber unser aller Lieblingsbrowser (würg) IE kann diese Schrift dann nicht vergrössern (mithilfe des Menüpunktes "Darstellung - Schriftgrösse"). Also null _usability_.

Da gibt's dann aber noch _ems_. Eine relative Schriftgrösse (aus ganz alten Zeiten, als man noch auf Papier druckte ;), genaueres bitte dringend bei [Gerrit](http://praegnanz.de/weblog/265/typo-im-web-komplett) nachlesen. Problem: wieder IE, alles unter 1em macht er unlesbar klein, warum auch immer. Shit.

Und nun? Ich mache immer folgendes: ich setze die Schriftgrösse für den `body` im CSS auf 62.5%. Warum jetzt dieses? Nun, dass sind bei einer Ausgangsgrösse von ungefähr 16px widerum ungefähr 10px, was schon ziemlich klein ist, aber noch lesbar. D.h. 1em entspricht 10px. Und oh Wunder, 1.1em entsprechen 11px und so fort. So baue ich die Seite dann erstmal und meistens bleibt es dann auch so. Alle Schriften werden in `em` angegeben. Wenn dann ein Kunde kommt, und die Schrift in der Standardeinstellung grösser haben will, dann erhöhe ich einfach den Prozentwert des Body-Fonts. Alle Schrift wird grösser.

Das ja genial. Finde ich auch, war aber leider [nicht meine Idee](http://www.clagnut.com/blog/348/). Trotzdem.

```css
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 62.5%;
}
```
