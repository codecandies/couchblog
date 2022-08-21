---
title: "CSS Spielereien II Update"
date: "2003-05-09"
tags:
  - "Gefunden"
---

Der so schöne [Trick mit den Fähnchen hinter den Outside-Links](http://www.couchblog.de/couchblog/archives/2003/04/css_spielereien_ii.php "couchblog.de: CSS Spielereien") funktioniert so nicht in Konqueror (Unix). Genauer: es gibt jede Menge Browser, deren User die Icons die einen Hinweis auf die Sprache der verlinkten Seiten nicht zu Gesicht bekommen, in Konqueror jedoch sieht man davon viel zu viele, der Link wird dummerweise völlig unlesbar (und im Falle, daß ich eine deutschsprachige Seite verlinke sieht’s aus, als hätte ich ‘nen Nationalfimmel schwarz-rot-gold quer über den Link, bäh!). Safari-User haben sich noch nichtbeschwert, ich meine auch, dort wäre der Bug schon ausgebügelt (ganz sicher bin ich mir nicht).

Da hilft nur eins: ein Hack. Und wer hat die Lösung parat? Na klar: [Mark Pilgrim](http://diveintomark.org/safari/csshacks/star7.html "diveintomark: hiding hacks"). Ich geb mal nur ein Besipiel, dies muß natürlich auf alle Zeilen angewendet werden, die die Icons darstellen:

1. `div*.blog a[href^="http:"] {   background: transparent url('pfad/zum/Externlinkicon.gif') 100% 50% no-repeat;   padding-right: 10px;   }`

Der Stern \* machts. Zumindest für Konqueror (und Opera, dafür ist der Hack gedacht gewesen, aber da haperts mit der CSS-3-Unterstützung eh) sind die Icons damit gestorben. Neuere Safari-Versionen allerdings sollten nicht mehr darauf hereinfallen, vielleicht gibt mal jemand laut, ob alles lesbar ist.

−14
