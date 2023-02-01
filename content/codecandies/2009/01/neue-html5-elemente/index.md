---
title: "Neue HTML5-Elemente"
date: "2009-01-13"
tags:
  - "Gecodet"
keywords:
  - "HTML"
  - "HTML"
  - "Javascript"
---

Dies ist die 1. Antwort auf die Frage, ob man [HTML5 bereits jetzt produktiv einsetzen sollte](/codecandies/2009/01/12/html5-im-produktiven-einsatz/).

Einerseits bildet HTML5 den Ist-Zustand dessen, was man mit Webbrowsern heute machen kann ab, ist also ziemlich kompatibel. Allerdings bringt HTML5 auch jede Menge neue Elemente mit (`abbr, article, aside, audio, bb, canvas, datagrid, datalist, details, dialog, eventsource, figure, footer, header, mark, menu, meter, nav, output, progress, section, time, video`), die zunächst mal nur mangelhaft in Browsern implementiert sind.

Wie Peter [im Kommentar hier schon angedeutet hat](/codecandies/2009/01/12/html5-im-produktiven-einsatz/#comment-8197), kann man die verschiedenen Internet Explorer durch einen Javascript-Trick dazu bewegen, für sie unbekannte HTML-Tags richtig zu erkennen und ins DOM zu rendern. Der Trick ist altbekannt, wird aber auch nochmal im [WhatWG-Blog ausführlich beschrieben](http://blog.whatwg.org/supporting-new-elements-in-ie). Um den `<section>` im IE bekannt zu machen, reicht folgende Zeile Javascript: `document.createElement("section");`. [Hier gibt's ein Script, das alle neuen Elemente aktiviert](http://remysharp.com/2009/01/07/html5-enabling-script/), einzubinden über _conditional comments_.

Die anderen gängigen Browser parsen auch unbekannte Tags, fressen HTML5 also eher… dummerweise hat nun gerade Firefox 2 dabei ein paar Probleme, die aber seit Version 3 behoben sind. Firefoxnutzer sind sicherlich updatefreudiger als IE-Anhänger, wenn aber in der Liste der zu unterstützenden Browser _Firefox 2+_ steht, dann muss man die Einsatzfähigkeit von HTML5 zunächst verneinen. In diesem Fall lautet die Antwort diesmal: **nein**.
