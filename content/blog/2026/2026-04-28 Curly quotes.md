---
title: "Curly quotes"
date: "2026-04-28T09:33:45+0200"
tags:
  - "Gecodet"
keywords:
  - "KI"
---

In einem Stück Code, das ich Claude zum refaktorieren hingeworfen habe, sind nun alle als Anführungszeichen genutzten Zollzeichen, durch echte Anführungszeichen („curly quotes“) ersetzt[^1]. Das Dumme ist, dass Letztere bei der Auszeichnung von Attributen in HTML leider falsch sind. Auf meine Bitte, diesen Fehler zu beheben, kann Claude keinen Fehler entdecken und tauscht stattdessen im Inhalte vorhandene deutsche Anführungszeichen (an der Stelle richtig) gegen ihre englische Version (an der Stelle falsch) aus. Beim nächsten Versuch tauscht er diese wieder zurück und präsentiert stolz das Ergebnis. Da der HTML-Code aber nach wie vor falsch ist, bitte ich erneut um Reperatur, und liefere ein Beispiel mit: `<div class=„curly-quoted-attribute“>` vs. `<div class="not-curly-quoted-attribute">`, in dem Claude aber ebenfalls keinen Fehler entdecken kann. Der protokollierte Denkprozess neigt inzwischen zur Verzweiflung: „The user wants me to correct the quote signs but these are already correct. I must have missed something.“ Mein innerer Pädagoge hat Mitleid mit dem armen LLM, während mein innerer Software Engineer die Stirn auf die Tischplatte schlägt. Ich liefere ein [Diff](https://de.wikipedia.org/wiki/Diff "Wikipedia: Diff") zwischen altem Code (mit richtigen Zeichen) und neuem Code (mit falschen Zeichen), in dem Claude aber nichts auffälliges entdecken kann. 

Ich gebe auf. 

Jetzt sind wir beide sauer. 

*Ich* könnte natürlich *selbst* in dem Schnipsel die falschen Zeichen suchen und ersetzen, aber ich kann auch sehr stur sein. Ich wechsle von Claude zu ChatGPT und dieser erkennt die falschen Zeichen sofort und ersetzt sie durch Zollzeichen. Zur gleichen Zeit untersucht ein neues Claude-Modell im Auftrag eines bisher ungekannten, aber spontan geschaffenen Kartells sämtlicher nennenswerter Softwarefirmen, Banken und Behörden, Code von Betriebssystemen und systemrelevanter Software auf Schwachstellen und Schlupflöcher. Ich frage mich, ob die dann auch ChatGPT mit der Reparatur der gefundenen Probleme beauftragen.

Dieser Kopfschmerz ist irgendwie unerträglich. 

[^1]: Dazu gibt es ein [langes Issue](https://github.com/anthropics/claude-code/issues/1599) in Claude Code, dass sich inzwischen ins Gegenteil verkehrt hat, von macht keine curly-quotes nach macht viel zu viele.
