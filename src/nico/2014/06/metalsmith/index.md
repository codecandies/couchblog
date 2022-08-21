---
title: "Metalsmith"
date: "2014-06-27"
tags:
  - "Generde"
coverImage: "hangar_boy_detail.jpg"
---

Generatoren für statische Webseite, _static site generator_, gibt es wie Sand am Meer. Ich selbst habe schon angefangen zwei zu programmieren, es stellt also die Fingerübung des heutigen Contentprogrammierers dar, so wie früher alle mal eben ihr eigenes Blogsystem gebaut haben. In der Masse einen herrausragenden ist gar nicht so einfach.

[Metalsmith](http://www.metalsmith.io/) ragt heraus, und ist nur ein `npm install` entfernt, also in Node JS geschrieben. Es ist ein einfacher Generator für statische Seiten, aber kann mit zwei Konzepten aufwarten die wirklich interessant sind und es zu einer _eierlegenden Wollmilichsau_ der Site Generatoren macht und die wollen wir doch alle.

- Plugins: jeder Ablauf des Metalsmith-Prozesses kann zwischen dem Einlesen der Daten und dem Schreiben in das Zielverzeichnis, beliebig viele Plugins ausführen. Es bringt schon etliche Plugins mit, in Wahrheit ist ja auch praktisch alles im Metalsmith-Prozess ein Plugin, aber man kann ganz leicht eigene Plugins schreiben.
- Über das [API](https://github.com/segmentio/metalsmith#api), kann Metalsmith in andere Prozesse eingebunden werden, bspw. um die Basis für den eigenen _project scaffolding_ Prozess zu bilden.

Metalsmith kann man ebenso in grunt oder gulp nutzen, es aber selbst auch zu einem Build-Tool ausbauen, mit dem man seine Projekte strickt. Wenn man will, kann man es zum Blog ausbauen oder seine Sass-Dateien damit kompilieren. Auf der [Github-Seite](https://github.com/segmentio/metalsmith) finden sich reichlich [Beispiele dafür](https://github.com/segmentio/metalsmith#the-secret). Gleichzeitig kann man Metalsmith aber auch per CLI benutzen.

TL;DR: [Metalsmith](http://www.metalsmith.io/) ist der Alleskönner unter den Generatoren für statische Webseiten und dringend zum Test empfohlen.
