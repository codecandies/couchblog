---
title: "3 Spalten mit negativen Margins"
date: "2004-06-16"
tags:
  - "Gestaltet"
---

Die Layoutmethode die in der aktuellen Ausgabe von [ALA](http://www.alistapart.com/ "A List Apart") vorgestellt wird: [Creating Liquid Layouts with negative Margins](http://www.alistapart.com/articles/negativemargins/), geistert schon seit einiger Zeit durch die einschlägigen Foren und Wikis. Ich habe sie vor längerer Zeit mal angetestet, und damit vor allem bei der Templateerstellung eher schlechte Erfahrungen gemacht. Vor allem wenn Ungeübte mit dieser Layoutmethode weiterarbeiten sollen, kommt es zu Schwierigkeiten. Eine Abgrenzung der Spalten durch _border_ ist nicht möglich, das funktioniert nur mit den in dem Artikel verwendeten _Backgroundimages_. Will man also die Splatenbreiten variieren, muss jedes Mal ein neues Hintergrundbild implementiert werden, noch aufwendiger wirds, wenn man eine andere Hintergrundfarbe für die Spalten nutzen möchte.

Insofern besticht diese Art des Layout vor allem dadurch, dass auch im Sourcecode die Elemente genauso angeordnet sind, wie sie auf der Seite auch erscheinen. Nachteil ist allerdings die angesprochene fehlende Flexibilität des Layouts.
