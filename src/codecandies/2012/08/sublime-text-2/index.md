---
title: "Sublime Text 2"
date: "2012-08-19"
tags:
  - "Generde"
keywords:
  - "Development"
  - "Editoren"
---

Als Chuck Norris Webdeveloper braucht man meiner Meinung nach, neben einer ordentlichen Shell und einem modernen Webbrowser, nur noch einen _vernünftigen_ Texteditor. Ein guter Browser ist heutzutage [leicht zu finden](http://jtaby.com/2012/04/23/modern-web-development-part-1.html "Modern Web Development") und auf der Shell kann man die nötigen Dateiübertragungen durchführen. Nur mit dem Texteditor tun sich viele nicht so leicht. Dort ist man vielmehr [auf einer ewigen Suche](http://grochtdreis.de/weblog/2012/08/02/die-ewige-suche-nach-dem-richtigen-editor/ "Jens Grochtdreis: Die ewige Suche nach dem richtigen Editor").

Speziell bei Macusern tritt bei diesem Thema in letzter Zeit der Angstschweiss auf die Stirn. Schuld daran ist Textmate, bzw. Textmate 2. Die unbeliebte, bisher nur als Alpha erhältliche, Nachfolgeversion des bislang beliebten Texteditors Textmate, wurde [zu Open Source erklärt](http://blog.macromates.com/2012/textmate-2-at-github/ "TextMate 2 at GitHub"). Nach der langen Zeit ohne sichtbare Weiterentwicklung, wohl eher ein schlechtes Zeichen für die Zukunft des Programms.

Sich an einen Texteditor zu gewöhnen erfordert bekanntermaßen viel Zeit und Geduld. Entwickler und Editor sind nur schwer voneinander zu trennen. Wobei der geneigte Entwickler zwar gerne neues ausprobiert, selten aber wirklich wechselt, da er meist feststellt, dass die über Jahre eintrainierten Tastenkombinationen - die Combos der Webentwicklung sozusagen - neu gelernt werden müssen. Und Texteditoren können, trotz des zunächst eingeschränkt wirkenden Anwendungsgebietes, wirkliche Featuremonster sein. Nur nutzen einem diese Features nichts, wenn sie auf unbekannten Tastenkombos liegen oder solchen, die man sich für andere Aktionen gemerkt hat. Außerdem muss der Editor im Umgang mit dem Entwickler den richtigen Ton treffen. Kein Witz: Codecompletion wird gern genommen, aber bitte ohne die Geschwätzigkeit einer Monster-IDE wie bspw. Eclipse. Bei solchen Programmen ist man ja nie sicher, ob man noch selbst programmiert, oder schon selbst programmiert wird. Und dann soll alles natürlich auch noch chick und slick aussehen…

Getrieben von dem sich abzeichnenden Ende der Textmate-Ära hatte ich vor Wochen mal [Sublime Text 2](http://www.sublimetext.com/2 "Sublime Text 2"), einen Editor, den es sowohl für Mac, als auch für Windows und Linux gibt, angetestet. Sublime Text 2 (ST2) ist anders, das muss man schon zugeben, und vor allem in der Art, wie man Einstellungen vornimmt, überhaupt nicht Mac-OS-like, man braucht einfach ein wenig Anlauf um zu verstehen, das darin ein Monsterfeature liegt.

In ST2 kann man alles konfigurieren. Wirklich alles. Alle Einstellungen, vom Theme bis zur Zuweisung von Tastenkürzeln, werden in JSON-Dateien verwaltet. Und nun kommt das non-macianische: man editiert direkt diese JSON-Dateien, um Einstellungen vorzunehmen. Das schränkt den Nutzerkreis natürlich zunächst mal ein wenig ein. Konfigurationen können auf verschiedenen Ebenen vorgenommen werden, bspw. per User, per Projekt oder auch per Programmiersprache. Erweitert wird ST2 mit [Plugins](http://www.sublimetext.com/forum/viewforum.php?f=5&sid=ea4854f3f651dfc3b78ab749efea "Sublime Forum: Plugin Announcements"), die dann wieder mit eigenen Einstellungsdateien daherkommen.

Durch die Konfiguration auf Dateiebene entsteht nicht nur der Vorteil, dass man seine Config wunderbar backuppen und über mehrere Rechner teilen kann (bspw. per Dropbox), sondern man kann sie auch anderen Leute, zum Beispiel Kollegen im Projekt weitergeben. So kann man bspw. in einem Projekt die Codingstyles mithilfe voreingestellter Einrückungen und dem Plugin [Sublime Linter](https://github.com/Kronuz/SublimeLinter "SublimeLinter on Github") und der Weitergabe dessen Einstellungsfiles vorgeben. Wie genial ist das bitte?

ST2 kann Textmate Themes und Bundles übernehmen. Man findet relativ schnell [ansprechende Themes](https://github.com/buymeasoda/soda-theme) und [Plugins kiloweise](http://wbond.net/sublime_packages/community). Aber auch ohne Erweiterungen kann ST2 einige Dinge, die andere Editoren nicht hinbekommen, bspw. multiples selektieren und editieren von Text, ausgefeilte Suchfunktionen, eine gute Projektverwaltung und wenn man wirklich will, kann man ST2 auch Vim emulieren lassen. Es gibt eine [](http://www.sublimetext.com/docs/2/ "Dokumentation"), aber die [unoffizielle Doku](http://docs.sublimetext.info/en/latest/index.html) ist noch besser.

TL;DR: Sublime Text 2 ist ein guter Texteditor mit unglaublichen Einstellungsmöglichkeiten. Die Einstiegshürde ist hoch, aber nach kurzer Zeit überwindbar, was auf jeden Fall ein lohnenswerter Zeitaufwand ist.
