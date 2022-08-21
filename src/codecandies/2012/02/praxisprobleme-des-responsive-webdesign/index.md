---
title: "Praxisprobleme des responsive webdesign"
date: "2012-02-07"
keywords:
  - "Webdesign"
  - "Werbung"
tags:
  - "Gestaltet"
---

Wir wissen nun, wie man responsive Webdesign [in der Praxis umsetzt](http://www.alistapart.com/articles/responsive-web-design/) und haben uns auch schon Gedanken über [sich anpassende Inhalte](/codecandies/2012/02/06/responsive-content/) für unterschiedliche Nutzungssituationen gemacht. Nun stellt sich natürlich die Frage, was noch fehlt, damit sich _responsive Webdesign_ in der Praxis durchsetzt.

Zunächst mal begegnet man responsiven Lösungen ja eher im Bereich [Agenturseiten, Blogs und Landingspages](http://www.awwwards.com/available-in-all-sizes-30-flexible-websites.html), vielleicht mal ein—zugegeben—großes [Webdesign-Magazin](http://www.smashingmagazine.com/), eher konservative Bereiche des Webs, also die großen Portale oder Newsseiten halten sich bis dato noch zurück. Einzig die Webseite des Boston Globe setzt voll auf responsives Design. Wo liegen also die Probleme?

Problem _numero uno_ ist natürlich die mangelhafte Browserunterstützung. Wirklich große Webseiten haben sicherlich noch lange nicht alle die IE6-Unterstützung _gedroppt_. Javascripte die bei den alten Browsern nachhelfen gibt es, aber sie kommen in Hochlastumgebungen eher nicht in Frage. Und ebenso dort, wo Zugänglichkeit Vorraussetzung ist.

Unschön auch die Sachen mit den Bildern. Hier spielen zwei Faktoren einen Rolle: der Wunsch nach qualitativ hochwertigen Bildern und gleichzeitig soll bspw. dem iPhone-Nutzer eigentlich kein 1080p-Image zum Download zugemutet werden, wo es doch auf seinem Smartphone auf 300px herunterskaliert wird. Natürlich gibt es Lösungen, die entweder auf Javascript basieren oder [auch auf CSS](/codecandies/2012/01/25/media-queries-und-bilder/), aber gerade für CMS-basierte Seiten mit angeschlossener Bildverwaltung stellt es ein nicht triviales Problem dar, Bildobjekte entsprechend anders einzubetten, eine Einbettung via CSS Hintergrundbilders oder gar `:before` stellt eine unlösbare Aufgabe dar.

Der nächste große Blocker, ich wiederhole mich mit den Jahren, ist natürlich wieder Bannerwerbung. Bannerwerbung, mit ihrer kindischen Fixierung auf Pixelmaße, hat fluide Seiten genauso verhindert, wie sie jetzt dem responsiven Design im Wege stehen. Es ist aber auch viel verlangt, nach 10 Jahren haben sich die Bannerschrauber eben erst daran gewöhnt, dass Webseiten zentriert dargestellt werden wollen, nun wollen die doofen Seiten auch noch den ungenutzten Raum belegen, in der bisher nur Skyscraper und _sticky ads_ herumlungerten. So kann man allenfalls auf Ads innerhalb des Contents hin- und her verschieben, bis sich die Werbung der Bildschirmgröße an (ohne den ganzen Bildschirm ausfüllen zu wollen), darauf werden wir weitere zehn Jahre warten müssen.
