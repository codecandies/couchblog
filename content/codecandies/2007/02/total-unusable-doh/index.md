---
title: "Total unusable, doh!"
date: "2007-02-28"
tags:
  - "Generde"
keywords:
  - "Javascript"
---

Kleine Anekdote: es gibt Firewalls (und/oder Proxies, keine Ahnung, da bin Anwender), die bei allen eingehenden Dateien bestimmte Tags bzw. Zeichenketten ausfiltern, bspw. `object` durch `obje!t` o.ä. ersetzen. Doch gibt es. Hinter einer solchen Firewall funktionieren alle Anwendungen nicht, in den im JS-Code das native Javascript-Objekt erweitert wird: `Object.extend…` (je nach Library). Kein Witz: bspw. kein [script.aculo.us](http://script.aculo.us/) und auch kein [jQuery-Interface-Plugin](http://interface.eyecon.ro/). No go. Kein [Basecamp](http://www.basecamphq.com/), und, und und… ist eigentlich nicht zum Lachen.

Da braucht man sich über Usability keine Gedanken zu machen. Falls man das aber doch will (**und das wollt ihr, AJAX-Entwickler**, ganz sicher), dann kann man hier einen guten Ansatz finden: [ajax.stealthsettings.com: Usability Guidelines/Defining Usability](http://ajax.stealthsettings.com/tutorial/usability-guidelines-defining-usability.html). Wer Herrn Nielsen so mag wie ich, der ersetze beim Lesen einfach alle Referenzen auf ihn durch den gesunden Menschenverstand. ;)
