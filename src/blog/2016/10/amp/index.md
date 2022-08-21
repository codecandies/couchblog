---
title: "Couchblog und AMP"
date: "2016-10-18"
tags:
  - "Generde"
keywords:
  - "Amp"
  - "Mobile"
  - "Webentwicklung"
coverImage: "photo-1466278313810-9aca9abea861.jpg"
---

Dieser Artikel über AMP[^1], [Google May Be Stealing Your Mobile Traffic](https://www.alexkras.com/google-may-be-stealing-your-mobile-traffic/), erstaunt mich ein wenig, weil er trotz seiner naiven Herangehensweise an das Thema, ziemliche [Diskussionen](https://news.ycombinator.com/item?id=12722590) ausgelöst hat. Andererseits, naiv ist ja irgendwie genau mein Weg, wie ich mich dem Thema bisher genähert habe, also irgendwo auch genau richtig für mich.

Zunächst mal glaube ich nicht, dass Google mit AMP _traffic_ stiehlt. Natürlich läuft der Datenverkehr über Googles Cache und schlägt so nicht auf dem hauseigenen Server auf, aber gezählt wird er, wenn man ihn zählt, als eigene _views_, _pageipressions_, _visits_, whatsoever. Falls einen das groß artiginteressiert. Das ist aber der große Vorwurf des Artikels, man rufe AMP-Artikel auf und sei dann dort in einem _dead end_ gefangen und könne als einzige Möglichkeit zurück zur Google-Suche. Das mag so sein, wenn man einfach das Wordpress-Plugin installiert und einschaltet und sich nicht weiter darum kümmert, was an AMP-HTML dabei heraus kommt. Wir haben [AMP für ZEIT ONLINE implementiert](http://blog.zeit.de/dev/warum-googles-amp-%E2%9A%A1-schnell-sind/) und das war mehr Arbeit, als ein Plugin einzuschalten. Wir liefern eine spezielle Version unsere (responsiven) Seite aus, die, so gut es geht, die AMP-Erweiterungen nutzt, also spezielle Adtags, Imagetags und so weiter nutzt. Das Wordpress-Plugin versucht die Standard-Wordpress-Elemente automatisch in AMP umzusetzen und macht das erstaunlich gut. Trotzdem kann es natürlich sein, bspw. bei selbstgestrickten Templates, dass der Ergebnis nicht so ist, wie man möchte. Das mag ein _dead end_ produzieren, das ist dann aber eher nicht AMPs Schuld.

Ich habe mich bisher um meine AMP-Seiten auch überhaupt nicht gekümmert, wie sie aussehen [sieht man hier](https://couchblog.de/blog/2016/10/14/morgenlese-xiii/amp/). Warum ich mich noch nicht darum gekümmert habe: im Moment läuft da für mich noch nicht wirklich etwas. Derzeit gibt's AMP-Ergebnisse im Grunde nur in Google-News und in einer speziellen Box, da läuft in der Regel nur Medienverkehr, bei ZEIT ONLINE hat das durchaus Bedeutung, für das Couchblog heisst das bisher _no amp in the moment_. Eine geplante flächendeckende Einführung in Suchergebnissen ist zumindest international noch nicht fertig umgesetzt, aber für das Jahresende angekündigt. Insofern hat es für mich noch keine Relevanz.

Was mich wirklich in Sachen AMP ein wenig nervt, ist was auch [in diesem Kommentar eines AMP-Entwicklers](https://www.alexkras.com/google-may-be-stealing-your-mobile-traffic/#comment-55336) nochmal durchscheint, nämlich dass AMPs ja auch an anderen Stellen als nur der Google Suche erscheinen könnten, bspw. in Twitter oder Pinterest. Twitter ist seit den ersten AMP-Tagen immer mal wieder genannt worden, ausser in _twitter moments_ ist davon aber weit und breit nichts zu sehen. Das ist gelinde gesagt sehr schade, weil mit höherer Verbreitung der AMP natürlich auch das Ansehen steigen würde und sich zeigen würde, dass es um mehr geht, als Content für die Google Suche zur Verfügung zu stellen. Dabei sind AMP, wenn sie sich verbreiten, einerseits eine wundervolle und vor allem offene Alternative zu Facebook Instant Articles, andererseits ein guter Satz Daumenschrauben, die Google mit dem Suchtraffic als Pfand den krankhaft langsamen Newswebseiten anlegen kann. Zusammengenommen ein guter Schritt in Richtung schnelleres Web.

Bild:  [William Bout](https://unsplash.com/@williambout) {:.copyright}

Update: Nach längerem Test [habe ich die AMP-Unterstützung wieder dran gegeben](https://couchblog.de/blog/2017/01/18/die-abschaffung-der-url/).

[^1]: [AMP](https://www.ampproject.org/learn/about-amp/), Accelerated Mobile Pages, ist ein Projekt, das Google angestossen hat (es ist [open source](https://github.com/ampproject)), um das mobile Wen schneller zu machen. In der Hauptsache besteht es aus einem eingeschränkten HTML-Satz, vordefinierten Javascripten und einem fetten Caching
