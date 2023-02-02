---
title: "CSS (3) basic box model (Working Draft)"
date: "2007-08-22"
keywords:
  - "CSS"
tags:
  - "Gestaltet"
---

![](/images/codecandies/ZZ554B6DB6.jpg)

Das aktuelle CSS3 _Working Draft_: [CSS basic box model](http://www.w3.org/TR/2007/WD-css3-box-20070809/) (via [Maxdesign](http://www.maxdesign.com.au/2007/08/22/some-links-138/)) liest sich ja ganz interessant. Habe gerade ein wenig Zeit (Zugfahrt as usual) um mal ein wenig hineinzudiggen. Da versammelt sich doch inzwischen einiges, das einem recht Wohl klingt:

Zum Beispiel die verschiedenen [Boxtypen](http://www.w3.org/TR/2007/WD-css3-box-20070809/#types):

- Es gibt derer einige, und ein paar neue: `inline, block, inline-block, list-item, run-in, compact, table, inline-table, table-row-group, table-header-group, table-footer-group, table-row, table-column-group, table-column, table-cell, table-caption, ruby, ruby-base, ruby-text, ruby-base-group, ruby-text-group, <template>` und `none`
- Ein interessanter Vertreter hier: `inline-boxblock`
    … eine »Block-Box«, die als Inline-Element gerendert wird…
- Oder auch: [`run-in`\-Boxen](http://www.w3.org/TR/2007/WD-css3-box-20070809/#run-in-boxes):
    Das sind Boxen, die (contextabhängig) in die vorhandenen Boxen _einlaufen_, bspw. zur Darstellung einer Überschrift **inline** innerhalb eines Absatzes.

Der Abschnitt zu [Collapsing Margins](http://www.w3.org/TR/2007/WD-css3-box-20070809/#collapsing-margins) ist mir auch diesmal zu kompliziert ;)… _das sieht man dann schon, wo's kollabiert_, aber mal im Ernst: ich hoffe die Browserentwickler lesen das aufmerksamer als ich…

Für `overflow` sind zwei neue Eigenschaften vorgeschlagen: `no-display` und `no-content`, die das Verhalten regeln, wenn der Content nicht in die vorgesehene Box passt. Ersteres liesse dann die ganze Box _verschwinden_, letzteres würde den Inhalt unsichtbar machen. [Interessant](http://www.w3.org/TR/2007/WD-css3-box-20070809/#overflow).

Ja, gab's denn schon immer [`overflow-style`](http://www.w3.org/TR/2007/WD-css3-box-20070809/#the-lsquo3)? Aber bestimmt nicht in Verbindung mit [`marquee`](http://www.w3.org/TR/2007/WD-css3-box-20070809/#marquee).

Tja und dann geht's irgendwie richtig los: [Rotating boxes](http://www.w3.org/TR/2007/WD-css3-box-20070809/#rotating):

> ‘Rotation’ rotates a block-level element counterclockwise around the point given by ‘rotation-point’. The border, padding and content are rotated, and also any background that is not ‘fixed’. All static or relatively positioned child elements (and their static and relatively positioned children, recursively) are rotated along.

Ach herrjeh.

Sprung zurück nach oben: was war denn gleich noch `<template>`? Tja, das steht alles in dem zweiten, sicherlich ebenso interessant Draft: [CSS Advanced Layout Module](http://www.w3.org/TR/2007/WD-css3-layout-20070809/). Dazu dann demnächst mehr.

Und wann kommt dann CSS 3 nochmal?

Foto: [daquella manera](http://flickr.com/photos/daquellamanera/166397872/){:.copyright}
