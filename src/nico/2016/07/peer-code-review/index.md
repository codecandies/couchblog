---
title: "Code review ohne Furcht und Tadel"
date: "2016-07-27"
tags:
  - "Generde"
keywords:
  - "Code Review"
coverImage: "factorycrowd-960x350.jpg"
---

Wir halten, in unserem Workflow gekoppelt an den _pull request_ bei github, für praktisch allen Code, der in die Entwicklung eingehen soll, sogenannte _peer code reviews_ ab, d.h. ein Mitglied des Teams begutachtet zusammen mit dem jeweiligen Autoren seinen Code. Zusammen kontrollieren sie einerseits die Plausibilität des Codes, andererseits aber auch den Codingstyle, Codesauberkeit und _maintainablity_. Mithilfe dieses Vier-Augen-Prinzips soll unsere gesamte Codebasis auch auf lange Sicht einen hohen Qualitätsstandard halten, gut pflegbar bleiben. Als wichtigster Aspekt: Autor und Reviewer sollen voneinander lernen, einerseits, wie die anderen Teammitglieder ihren Code schreiben, aber auch über das jeweilige Feature, das gerade geschrieben wurde. Auf lange Sicht soll sich so eine gemeinsame Auffassung wie Code zu schreiben ist im Team verfestigen, zusätzlich wird neuen Teammitgliedern der Einstieg erleichtert.

## Collective code ownership und die persönliche Kreativität

Unser Code gehört uns allen, aber gleichzeitig ist jeder Pull request als Beitrag und geistige Erweiterung dieser Codebasis zu respektieren. Meist gibt es kein richtig oder falsch, sondern nur Geschmäcker, oft ist es aber auch umgekehrt. Wir haben für viel oft strittige Themen [gemeinsame Vorgaben](https://github.com/ZeitOnline/coding-guidelines) erarbeitet. Jenseits davon hat natürlich jeder Coder seinen eigenen Stil. Diese Stile zu vereinen, die Herangehensweise des Anderen zu achten und zu respektieren und im Gegenzug, nicht in die Defensive zu geraten, sich nicht von Änderungsvorschlägen angegriffen fühlen, ist die große Schwierigkeit und gleichermaßen Pflichtübung eines _code review_.

Codeautor und Reviewer müssen jeweils über ihren Schatten springen und sich in der Mitte treffen. Dafür sollen beide aus dem Review herauskommen, mit dem guten Gefühl, etwas gelernt zu haben, etwas beigetragen zu haben, etwas geleistet zu haben. Das ist weit weniger esoterisch, als es klingt.

## Das Review

Hier einige einfache Regeln und Hinweise, wie ein gutes Review ablaufen kann. Zunächst sollten sich beide Teilnehmer Zeit für die Sache nehmen. Der Autor hat sich schon vor dem _pull request_ vom ordnungsgemäßen Zustand seines Codes überzeugt:

- er hat seine Commits klein und inhaltlich zusammenhängend gestaltet und [gute _commit messages_ geschrieben](http://chris.beams.io/posts/git-commit/),
- kommentiert wo es nötig erschien,
- [Todos](http://c2.com/cgi/wiki?TodoCommentsConsideredHarmful) und auskommentierte Codezeilen aufgeräumt,
- nochmal überprüft, ob die [Guidelines](https://github.com/ZeitOnline/coding-guidelines) eingehalten wurden
- und die Variablen- und Klassennamen noch Sinn ergeben,
- sowie überflüssigen Code gelöscht.

Der Reviewer braucht zunächst natürlich etwas Zeit, sich in den Code einzulesen, es empfiehlt sich, zunächst das ganze [_diff_](https://de.wikipedia.org/wiki/Diff) zu lesen, am Ende vielleicht noch die korrespondierende Story, Bug o.ä. heranzuziehen, um inhaltliche Aussagen machen zu können.

Beide Parteien sollten sich ausreichend Zeit nehmen (und bekommen) und eine möglichst entspannter Arbeitsatmosphäre herstellen (Kaffee?). In der ersten Phase wird der Reviewer Rückfragen zu solchen Stellen im Code stellen, die er nicht versteht (kommt bestimmt nur selten vor). Dann wird er wahrscheinlich verschiedene Änderungsvorschläge machen (wenn das nötig erscheint). Reviewer und Autor sollten in dieser Phase gemeinsam diskutieren/kommunizieren. Das ist über _line comments_ in github möglich (und dort dann vorteilshaft auch dokumentiert), geht aber im gemeinsamen Gespräch viel besser, ggf. auch per Skype oder Slack/[Screenhero](https://screenhero.com/). Für Änderungsvorschläge ist es auf jeden Fall sinnvoll, dieser zunächst als Kommentar zu formulieren und nicht direkt den Code anzupassen. Auch das Hin- und herreichen von _diffs_ und _patches_ kann sinnvoll sein.

### Wonach suchen wir?

Kein Code ist perfekt. Selbst beim kleinsten _hello world_ kann man über die Schreibweise streiten. Schreibt man mehr als ein paar Zeilen, schleichen sich auch immer Bugs ein. Oberste Priorität eines Review ist, diese Bugs zu finden. Erst in zweiter Linie geht es darum, durch Erhöhung der Codequalität die Wartbarkeit des Codes auf lange Sicht zu erhalten. Konkret suchen wir:

- **Potentielle Fehler:** _off-by-one_, Schleifen ohne Abbruchbedingung, _error handling_, Antipattern, _scope_
- **Browserkompatibilität:** Läuft der Code auf allen angesteuerten Browsern und deren Versionen?
- **Plausibilität:** macht der Code was er soll, was angefordert wurde und was beschrieben ist?
- **Effizienz:** Arbeitet der Code effizient, speicherschonend, schnell? Möglichst wenige _reflows_ und _repaints_, DOM-Zugriffe minimiert/optimiert, keine Leaks?
- **Codeduplizierung:** einmal Code kopieren ist noch vertretbar, beim dritten Auftreten gleichen Codes sollte _refactored_ werden
- **Tests:** Für jedes neue Feature sollte es mindestens einen Test geben. Wird das Richtige getestet?
- **_Naming things_**: ist immer eine schwierige Sache, aber machen allenVariablennamen oder Klassennamen Sinn? Entsprechen sie den geltenden Konventionen (bspw. BEM)?
- **Coding Guidelines:** Überall eingehalten?
- **Codesauberkeit**

### Grundregeln zur Herangehensweise

- Reihenfolge für die Diskussion: zuerst Stellen die nicht verstanden wurden, dann Dinge die möglicherweise nicht funktionieren, dann erst Codingstyle und Codesauberkeit
- erst kommunizieren, dann machen
- tauchen beim Reviewer Fragen auf und er versteht Codestellen nicht, sind sie wahrscheinlich auch für andere in der Zukunft schwer zu verstehen
- schlägt der Reviewer eine Änderung vor und es ist kein Grund zu finden, diese nicht zu übernehmen, dann sollte man sie höchstwahrscheinlich übernehmen
- nicht vergessen, dass man etwas lernen möchte: der Reviewer vom Autoren und der Autor vom Reviewer
- immer alles erklären

## Um jeden Preis?

Nein. Wir wollen den besten Code, aber man sollte auch Kompromisse machen können. Der eigene Codingstyle ist niemals das nonplusultra und der des anderen niemals die Wurzel allen Übels. Wenn man schon sehr lange über bspw. inhaltliche Punkte diskutiert hat, darf man an anderer Stelle auch mal etwas weniger streng sein, solange alles funktioniert. An dieser Schnittstellen zwischen _time to deliver_ und _code quality delivered_ ist tatsächlich ein wenig Spielraum, den man ruhig ausnutzen sollte.
