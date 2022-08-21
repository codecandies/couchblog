---
title: "Clever CleverCSS"
date: "2008-09-24"
tags:
  - "Gecodet"
keywords:
  - "CSS"
  - "Python"
---

In welcher Reihenfolge man CSS-Eigenschaften notieren soll, [haben wir nun wohl genug diskutiert](/codecandies/2008/09/22/you-never-have-expected/), kommen wir nun zu etwas völlig anderem: **programmiertes CSS**.

Hatte schon die Idee (in Webkit bereits testweise implmentiert) von [Konstanten in CSS](/codecandies/2008/04/26/css-variablen/) die Welt in [Aufregung](/codecandies/2008/08/06/css-entwicklung/) versetzt, dürfte man [CleverCSS – the pythonic way of webdesign](http://sandbox.pocoo.org/clevercss/) als die endgültige Gotteslästerung betrachten. Um es kurz zu machen zitiere ich flugs:

> CleverCSS is a small markup language for CSS inspired by Python that can be used to build a style sheet in a clean and structured way. In many ways it's cleaner and more powerful than CSS2 is.

Hmmm… _pythonic_, das könnte meinem Wunsch nach Formatierung und Sauberkeit doch entgegenkommen. Und CleverCSS kann einige witzige Sachen, ausser einfach CSS wieder raus zu printen. Bspw. gibt es einen _grouping operator_, der Attribute zu Gruppen zusammenfasst. So:

```
#main p
  font->
    family: Verdana, sans-serif
    size: 1.1em
    style: italic
```

Ausgegeben würde hierfür:

```css
#main p {
    font-family: Verdana, sans-serif;
    font-size: 1.1em;
    font-style: italic;
}
```

Mal bitte, das ist ja lustig. Und dann wirds spannend, CleverCSS beherrscht natürlich **Konstanten**, um z.B. Farbwerte einmalig festzulegen und editierbar zu machen. Ich weiß schon, nichts, was man nicht auch mit suchen & ersetzen erschlagen kann… nur, CleverCSS kann damit auch ein wenig rechnen:

```
background-position: $foo + 2 + 3 $foo - 2
```

Das täte `background-position: 15 8;` ergeben. Mit CleverCSS kann man beinahe richtig rechen, sogar mit Farben (`#fff - #ccc => #333333`). Und als wär das nicht schon genug: es gibt auch noch einen ganzen Satz Methoden, wie Number.abs(), String.length(delimiter), Color.brighten(amount) oder String.split(). Klingt doch spannend.

Allen Features zum Trotze muss man natürlich die Frage nach dem Sinn stellen. Ehrlich gesagt: weiss ich noch nicht. Fällt mir aber sicherlich noch ein. Zusammenhänge könnten Frameworks, Templatesysteme, …, ja was?

Prädikat: unbedingt mal [runterladen](http://pypi.python.org/pypi/CleverCSS/) und ausprobieren.
