---
title: "Kommentare: Update"
date: "2026-01-10T17:52:54+0100"
tags:
  - "Gebloggt"
keywords:
  - "Couchblog"
---

Kurzes Update zur [kürzlich](https://couchblog.de/blog/2026/01/07/erstes-neujahrsversprechen-eingeloest/) (wieder-) eingeführten [Kommenarfunktion](#comments__container), ich hatte heute ein wenig Zeit und habe nach den ersten Beobachtungen ein paar Fixes und Features hinzugefügt:

- Ich habe das optionale Email-Feld entfernt. Zuviele füllen es pflichtbewusst aus, ich will die Daten aber doch gar nicht haben. Seid vorsichtig mit euren Daten, ich bin es jedenfalls…
- Das Formular wird nun dynamisch abgeschickt, das spart den Umweg über die Success-Meldung, spart also einen Klick.
- Dabei wird das Formular auch verarbeitet und geprüft, es gibt jetzt Fehlermeldungen und ein paar für die Accessibility ungünstige Konstrukte wurden gefixt.
- Im Formular kann jetzt (und sollte) Markdown verwendet werden. Es sind alle wichtigen Auszeichnungen erlaubt. Das HTML wird jetzt auch *sanitized*, um es auf genau diese Tags einzuschränken.

	Ich danke für eure Aufmerksamkeit und die bereits eingegangene Kommentare natürlich.