---
title: "Vorwärts Männer, wir müssen zurück: Komprimieren oder Abbauen?"
date: "2007-08-30"
tags:
  - "Gearbeitet"
keywords:
  - "Javascript"
  - "Performance"
---

Mit der Kompression von Javascripten habe ich in letzter Zeit ein wenig Erfahrung gesammelt, aus gegebenem Anlass sozusagen. [Dean Edwards sammelt hierzu nocheinmal die Fakten](http://dean.edwards.name/weblog/2007/08/js-compression/), und hat ein paar gute Tips parat. Es bleibt aber eine Krux: Komprimierung ist super, besser ist es jedoch, von Anfang an mit kleinerem Datenaufkommen arbeiten zu können (das kann man dann immer noch komprimieren). Mit dem Mißverständnis, seit »Web2.0« könne man mit ein wenig Javascript auf Webseiten so ziemlich alles veranstalten, haben zwei wesentlich Fehler Einzug in die Aufgabenstellung am Frontend genommen:

- Javascriptanwendungen als Beigabe zu sowieso schon großen Websites – geparrt mit dem Glauben, nur weil man etwas machen könne, sei es auch gut einfach und sinnvoll: hier noch ein Widget, da noch ein Gimmick, über den “Sinn” wird sich dabei kaum oder zuwenig Gedanken gemacht.
- Unterschätzung einiger wichtiger Faktoren in diesem Zusammenhang: wie schränkt die extensive Nutzung von Javascript die Liste der Zielbrowser ein beispielsweise, oder welchen Aufwand bedeutet ist, selbige Liste trotz JS groß zu halten; wie wirken die genannten Widgets innerhalb des Auftritts und wie werden sie angenommen.

Und so weiter, leider. Da für den Auftraggeber derlei Programmierung oft Voodoo ist, kann er keine Abschätzungen zu diesen Fragen vornehmen, für ihn ist alles _immer ganz einfach_. Am Ende ist die Seite dann aber _zu groß_. Ergo: man muss immer schon sehr frühzeitig zum Ausdruck bringen, welche Folgen der massive Einsatz von Javascripten hat und den Aufwand-Nutzen-Faktor stets in Frage stellen. Denn: wenn's am Ende nicht klappt sind selten die Auftraggeber die Schuldigen…

Hat man den vorzeitigen Einfluss versäumt, vergeigt oder einfach nicht gehabt, kann man immer noch darauf zählen, dass die Zeit die Wunden heilt. Mit anderen Worten: man bietet zur Behebung von Problemen wie bspw. übermäßiger Seitengröße an, die kleinen Javascriptspielereien wieder zurückzubauen. _Letztendlich sind es ja nur Spielereien_, und eh' der Auftraggeber seine eigenen inhaltlichen Anteile in Frage stellt, wird er freudig zustimmen. Natürlich muss man ein wenig aufpassen, dass nicht andere mit den Rückbaumaßnahmen beauftragt werden.
