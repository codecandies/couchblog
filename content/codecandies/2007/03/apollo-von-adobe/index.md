---
title: "Apollo von Adobe"
date: "2007-03-28"
tags:
  - "Gestaltet"
keywords:
  - "Adobe"
  - "Apollo"
---

![Apollo Logo](/img/codecandies/ZZ57FE6807.jpg){:.inline-image} [Apollo](http://labs.adobe.com/technologies/apollo/) heisst ein, nein vielleicht **das** neue Produkt für's Web aus dem Hause [Adobe](http://www.adobe.com) und es ist das erste echte Kind der Ehe mit Macromedia. Was Apollo macht bzw. machen soll: es fasst die aus dem Netz bekannten Techniken, also HTML, Javascript, Flash und später auch PDF unter einer virtuellen Maschine zusammen und ermöglicht dem geneigten Webentwickler **Desktopanwendungen** zu erstellen, mit den schon vorhandenen Skills.

Das kann man schon einen Trend nennen: _Offlinefunktionalität_. Da passen Dojos [Offline Toolkit](http://www.sitepen.com/blog/2007/01/02/the-dojo-offline-toolkit/) genau so rein, wie [Firefox 3](http://developer.mozilla.org/devnews/index.php/2007/03/23/gran-paradiso-alpha-3-available-for-download/), der mit solchen Features aufwarten wird. Eigentlich witzig, denn durch die komplette Zeit meiner Onlineerfahrung habe ich (und sicherlich viele andere) es immer als höchstes Ziel empfunden, irgendwann letztendlich _always on_ zu sein, also immer Verbindung zum Netz zu haben. Nun verkehrt sich diese Idee, das Netz geht sozusagen offline weiter.

Adobe greift zur Herstellung Desktop- und Offlinefähigkeiten auf viele eigene Technolgien zurück (Flash/Flex, PDF), nutzt bekannte Sprachen (HTML, JS/AJAX) und fügt das alles in einer Anzeigeengine zusammen, die auf (man höre und staune) **Safari** basiert.

Funktionieren kann das schon, denn im Grunde ist Apollo von unten betrachtet, nichts anderes als ein plugingeschwängerter Webbrowser mit Offlinefunktionalität, soll heissen, einSafari, dass zwei zusätzliche Fähigkeiten besitzt:

- Erkennen, wann eine Verbindung zum Internet besteht und wann nicht
- auf die lokale Festplatte o.ä. Daten zu schreiben

Simple Idee eigentlich. Die Anwendungen sind dabei genauso zu schreiben wie im Netz, widerum erweitert um ein paar nötige Fähigkeiten:

- Daten für die Arbeit aus dem Internet holen und auf der Platte cachen
- wahlweise mit _Live-Daten_ oder mit gecachten Daten arbeiten können
- beim Wiederverbinden Interaktion mit dem passenden Webservice ausführen, bspw. Live-Daten und Cache abgleichen, synchronisieren

Im Grunde wars das schon. Nochmal: simple Idee eigentlich. Nun stellt sich trotzdem die Frage, inwieweit sich soetwas durchsetzen wird. Dem User von Flash (viele, viele…) wird man die Apollo-Runtime wohl als Flash-Uodate unterschieben können (oder zumindest anbieten), somit könnten auf Userseite die nötigen Kapazitäten wohl erreicht werden. Aber anders als Flash verlangt Apollo die Verlagerung der eigentlichen Online-Arbeit in eine andere Applikation, heraus aus dem Webbrowser. Das könnte für den Benutzer etwas unsinnig wirken: schätzen wir nicht beispielsweise Gmail, **weil** es im Browser läuft? Und wollten wir offline damit arbeiten, würden wir dann zur Gmail-Offline-Anwendung wechseln? Oder Gmail immer dort nutzen? Und: wenn ich doch wirklich Offlinefunktionalitäten brauche, benutze ich dann nicht eher Firefox3, der dieses Feature mitbringen wird?


