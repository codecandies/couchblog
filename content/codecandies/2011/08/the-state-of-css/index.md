---
title: "The state of CSS"
date: "2011-08-12"
tags:
  - "Gecodet"
keywords:
  - "CSS"
  - "HTML"
---

![Da ist ein Eisbär im Raum?](/images/codecandies/bestpracticeicebear.jpg)

Im Moment gibt es wieder viel zu lernen, in Sachen CSS. Da sind zunächst die vielen neuen Dinge, die CSS3 bringt. Durch die derzeit rasante Browserentwicklung, Polyfills oder einfache Fallbacklösungen kann man vieles davon schon heute oder wenigstens morgen gebrauchen. Dazu kommen die _Learnings_ aus einigen Jahren intensiven Einsatzes von CSS, seit der internationalen Ächtung des Tabellenlayout ist viel passiert.

Seit CSS dem style-Attribut entwachsen ist, unterlag es lange Zeit einer eher langsamen Entwicklung. Gehemmt durch den Internet Explorer hat es ewig gedauert, bis sich CSS 2(.1) überhaupt durchgesetzt hat. Man hat lange Zeit eher mit den gegebenen Umständen hantiert, anstatt CSS weiter zu entwickeln. Die _floats_ lösten die Tabellen ab, die CSS Hacks beherrschten die Szene lange, machten zweigleisige Entwicklung für potente und für beschränkte Browser möglich. Das Set an Techniken hat sich aber in der Menge kaum verändert, vielmehr lernten wir immer besser damit umzugehen. Dabei sind aber auch viele Standardlösungen entstanden, die heute einer genaueren Prüfung unterzogen werden müssen.

## Our best practices are killing us!

Nicole Sullivan ([die](http://www.stubbornella.org/content/), nicht [die](http://de.wikipedia.org/wiki/Nicole_Sullivan)) tritt derzeit mit einem [Vortrag](http://www.slideshare.net/stubbornella/our-best-practices-are-killing-us) unter [diesem Titel](http://aneventapart.com/2011/minneapolis/) auf, den ich sehr beeindruckend finde, weil er so sehr das trifft, was ich derzeit selbst in der Praxis feststelle. Viele der _best practices_, die in den letzten Jahren ersonnen, gepaukt und umgesetzt wurden, klingen gut, haben sich aber in den Jahren ihres Einsatzes vielleicht gar nicht bewährt. Andere wurden von der Entwicklung überholt, wurden zur Angewohnheit. Um mal ein klassisches Beispiel aus einem anderen Bereich zu bringen: wenn Sie _script_\-Blöcke in einem HTML-Document nutzen, umgeben sie den Code dann auch noch mit HTML-Kommentarzeichen? Eine Technik, die [heute lange nicht mehr nötig ist](http://www.javascripttoolbox.com/bestpractices/#comments). Trotzdem sieht man sie immer wieder. So geht es auch mit vielen Angewohnheiten in CSS.

Nicole Sullivan [nennt viele Beispiele](http://www.stubbornella.org/content/2011/04/28/our-best-practices-are-killing-us/). Unter anderem findet sie:

- die Angabe von Schriftgrößen **nicht** in Pixel sei kontraproduktiv,

- etwas mehr _Klassizitis_ wäre gar nicht so schlecht, da so lange Selektorketten vermieden würden,

- durch semantische Klassennamen würde der Codewiederholung der Weg bereitet,

- der Mythos, kein zusätzliches Markup für das Layout einführen zu dürfen, sei mehr als schädlich, da durch Container Layoutprobleme auf festgelegte Bereiche beschränkt werden könnten.


## In der Praxis nicht bewährt

Da geht es ihr genau wie mir. Wenn man betrachtet, wie wirklich große Website-Projekte entstehen, stellt man fest, dass durch die genannten _best practices_ Nötiges nur von einer Ecke des Projekts in die andere verschoben wurde. So kann man wunderbares, absolut semantisch reines HTML schreiben, ohne jegliche Layout-Divs, so klein wie nur irgend möglich, ob die Seite dadurch wirklich schneller wird? Oder übersichtlicher? Nun, das HTML natürlich schon, aber wenn wir uns anschauen, wieviel sich gegenseitig überschreibendes CSS benötigt wird, merkt schnell, das man die Komplexität nur verlagert hat. Miss Sullivans Beispiel: bei Facebook hatte man vor einem umfassenden CSS-Relaunch 706 CSS Dateien, in denen 261 Mal die gleiche Farbe blau definiert war. Do not repeat yourself?

Und dabei geht's nicht mal darum, sich gegenseitig den schwarzen Peter zuzuschieben: Komplexität im CSS schadet allen Beteiligten, denn sie drückt auf die Performance. Mein Beispiel ist die tägliche Praxis. Bei einem großen Projekt wurden nahezu nach Lehrbuch beim Schreiben von HTML-Code (und Javascript[^1]) auf auf eine ganze Reihe _best practices_ geachtet. Das hat zunächst mal dazu geführt, dass wir zwar schlankes HTML, aber ziemlich viel CSS (und Javascript) über die Leitungen schicken. Dabei ist die Menge an CSS und seine Komplexität eine direkte Folge der semantischen Strukturen im HTML. Aber wo im HTML bspw. nur wenige Klassen stehen, muss im CSS mit unendlich langen Selektorketten auf Elemente zugegriffen werden, was die Menge an CSS erhöht, die Geschwindigkeit des Renderings aber herabsetzt. Nach einigen Jahren ist diese Situation immer schlimmer geworden. Sie ist dabei kaum noch überschaubar, weil man praktisch nur noch mit dem Firebug entscheiden kann, welche CSS-Regel auf ein Element greift. Und die schiere Menge an Code macht es nicht besser. Abhilfe schafft da oft, einfach mal eine Klasse ins HTML zu schreiben, die direkt angesteuert wird. Und die darf dann vielleicht auch mal "blue" heissen, naja, vielleicht besser "main-color".

## CSS _Refactoring_?

Will man sich aber, mindestens in Teilen nun aber von dieser Praxis abwenden, dann hat man jetzt den GAU, den man eigentlich vermeiden wollte: Änderungen an der Codebasis **und** am CSS. Zumindest kann man das Nutzen, um die IE6-Unterstützung endgültig zu _droppen_ und so das ganze CSS etwas zu modernisieren. So stehen nun vieler Orten viele Änderungen in Sachen CSS an. Neues hinzufügen, alte Zöpfe abschneiden. Alte Projekte auf den aktuellen Stand heben.

[^1]: Noch ein Nebensatz zur Rolle von Javascript: dies wurde erstaunlicherweise viel zu oft genutzt, um die selbst gesetzten Grenzen bei HTML und CSS zu überwinden oder umgehen. Hüstel…
