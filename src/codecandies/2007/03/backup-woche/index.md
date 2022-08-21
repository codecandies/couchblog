---
title: "Backup-Woche"
date: "2007-03-06"
keywords:
  - "Wordpress"
tags:
  - "Gebloggt"
---

**Backups sind etwas für Feiglinge!**

OK, wer nach dieser Maßgabe seinen Webauftritt verwaltet geht nach dem Panzer-Prinzip vor: »Breit fahren, schmal denken.« Mag sein, dass man sich erst verbrennen muss, um das Feuer zu scheuen, aber man kann auch einfach mal Vertrauen haben und den erfahrenen Jungs aus dem Netz auch mal glauben schenken. Zu diesem höchst evagelistischem Zwecke und vielleicht auch unter dem Eindruck des [aktuellen Sicherheits-Super-GAU](/codecandies/2007/03/03/wordpress-updaten/) bei wordpress.org veranstaltet [das deutsche Wordpress-Blog](http://blog.wordpress-deutschland.org/) vom 5. bis 11. März 2007 die Backup-Woche. Dort gibt es Tips und Anleitungen zum Thema Backup.

Und wie ich meine Dateien sichere? Zur Zeit werden die Datenbanken einmal täglich gedumpt. Einmal wöchentlich werden diese Dumps zusammen mit allen neuen veränderlichen Daten (also Bildern, Themes, Plugins, Logs etc.) an einen anderen Server ge_rsync_t. Da sollte reichen. Die installierte Software (wordpress, mediawiki und ein paar Eigenproduktionen) verwalte ich auf einem lokalen Rechner als SVN\-Repository. Das ist aber mehr zum üben. Im Falle des Super-GAU jedenfalls muss ich mir nur alles auf dem Server wieder zusammenkopieren, ein Job der innert 10-15 min. erledigt werden kann (und im Plan von Hand abläuft). Natürlich könnte man das auch wieder scripten und automatisieren…
