---
title: "Angriff der Banner"
date: "2008-01-21"
tags:
  - "Generde"
keywords:
  - "Werbung"
  - "Security"
---

Auf dem [O'Reilly Radar erschien vor kurzem: »Dangers of remote Javascript«](http://radar.oreilly.com/archives/2008/01/dangers_of_remo.html), die Beschreibung eines Angriffs über durch Ads eingeschleustes _remote Javascript_. [perl.com](http://perl.com) wurde Opfer einer solchen Attacke, die Besucher dort wurden an eine Pornoseite weitergeleitet.

> It only took three things to turn perl.com into porn.com: (1) the advertiser's domain lapsed, (2) the porn company bought it, (3) they replaced the Javascript that we were loading with a small chunk that redirected to the porn site (note that nothing on or about perl.com changed).

Und perl.com ist nicht die erste große Site, die es auf diese Weise erwischt, die Umleitung auf explizite Inhalte ist jedoch genauso neu, wie stümperhaft. Offenbar waren sich die Angreifer bewusst, dass sie schnell auffliegen würden und haben deswegen den offensichtlichen Direktangriff mit Umleitung gewählt, um so in kürzester Zeit möglichst viel abzusahnen.

Schlimmer geht's natürlich immer: denn was hier noch als Angriff sichtbar wurde, geht natürlich auch wesentlich ruhiger und unauffälliger. Man muss keine Adserver-Adressen kapern, um sein ganz eigenes Javascript in fremden Seiten unterzubringen – manchmal sogar von eigenen (!) Server aus – man kann die Werbeplätze dafür ganz legal kaufen. Und man muss es ja nicht so offensichtlich machen und zu expleziten Seiten umleiten… wie wär's denn mit einer gefakten Login-Seite des Angebots, auf dem man seine »Schadbanner«[^1] geschaltet hat? Ach, die Möglichkeiten sind so vielfältig und die Netzwerbebranche liegt so ungeschützt da…

Bei perl.com stellt man sich nun einige Fragen, die sich alle mal kurz vergegenwärtigen sollten:

> So here are the questions we're asking ourselves, questions that all of you who run sites that take a lot of advertising or load a lot of widgets would do well to consider: do you know all the Javascript your pages load? When do those domains expire? What other risks have you identified around remote Javascript, and what are you doing to mitigate those risks?

In diesem Zusammenhang möchte ich weiteres hinzufügen (aus der Realität nachgeschoben): Der Programmierer sagt: »Können wir überprüfen, ob Scripte die wir schon überprüft haben noch geändert werden?«, jemand aus dem Marketing hingegen: »Wie hoch sind die Einnahmen in Abwägung zum Risiko?«

[^1]: Das Schadbanner richtet im Unterschied zum Problembanner Schaden an… (frei nach Stoiber)
