---
title: "Wieder neue YUI-Version"
date: "2007-08-01"
tags:
  - "Gefunden"
keywords:
  - "Javascript"
  - "YUI"
---

Soeben ist [YUI 2.3.0 erschienen](http://yuiblog.com/blog/2007/07/31/yui-2-3-0-released/ "YUI 2.3.0: Six New Components and a Prettier Face"), natürlich wieder mit einer Menge an Erweiterungen und Neuerungen. Yahoo geht ganz deutlich den Weg zu einem schwergewichtigen Javascript-Framework weiter, weg von der Utility-Sammlung hin zum »Alles-aus-einer-Hand-Tool« für die Websiteentwicklung. Das machen die neuen Komponenten deutlich:

- YUI 2.3.0 kommt mit einem Rich-Text-Editor, der selbst zwar noch beta ist, sich aber bereits rühmt _die_ Hürde für RTEs genommen zu haben: Cross-Browser-Support (zumindest für sog. _A-Grade-Browser_).
- Das CSS System wurde nocheinmal aufpoliert und aufgestockt, in vier ineinandergreifenden Komponenten gibt es jetzt CSS zum Rücksetzen der unterschiedlichen Browserstandards, ein Basis-CSS – das oft gebräuchliche Designstandards implementiert, ein CSS ür die Typographie und eines für die (inzwischen schon berühmten) Grids.
- Mit dem neuen (beta) YUILoaderUtility bewegt man sich fast schon in Richtung Dojo, denn es sorgt dafür, dass nur die benötigten YUI-Komponenten geladen werden (so eine Art Bootstrapping). Der Ansatz hat mir schon bei Dojo gut gefallen und kann bei großen Projekt extrem wichtig sein um die Menge des übertragenden Codes schmal zu halten oder zumindest weg vom Seitenladevorgang zu verlagern. Eine Besonderheit ist dabei, dass man Komponenten vom eingenen Server oder aus dem Yahoo-Netzwerk (nach)laden kann, dass als weltweit verteiltes Netzwerk User in allen Teilen der Erde schnell mit Code bedient.
- Ähnliches gilt für das neue ImageLoader Utility. Ebenfalls eine gute Idee: Bilder die der Benutzer zunächst gar nicht sieht kann man auch ruhig später nachladen…
- Eine kleinere Neuerung ist das Color Picker Control.
- Und noch ein neues Feature zum Schluss: das YUI Test Utility. Damit wird ein Unit-Testing-Framework in YUI integriert.

Die LoadingUtilities erinnern doch sehr an Dojo. Ich traue dem YUI-Team ohne weiteres zu, das vernünftig umzusetzen, denn trotz der guten Idee, funktionierten gerade diese Funktionen bei unseren Dojo-Experimenten nur sehr unbefriedigend und noch dazu nahezu ohne Debuggingmöglichkeit. Wir haben genau wegen dieser Komponenten den Einsatz von Dojo im produktiven Umfeld gekippt, ich hoffe bei YUI funktioniert das besser.
