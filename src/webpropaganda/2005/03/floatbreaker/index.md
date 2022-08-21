---
title: "Floatbreaker"
date: "2005-03-01"
tags:
  - "Gestaltet"
---

Noch gestern haben [Fabian](http://www.ichbinharmlos.de/blog/) und ich uns über meine mannigfaltigen Benamsungen für CSS-Klassen amüsiert und zwar für solche Konstruktionen:

`<div class="floatbreaker">&nbsp;</div>`

Ganz klar, hier wird folgender Effekt erzielt: Der Container um zwei Elemente, von denen eines _gefloatet_ ist, wird soweit _heruntergezogen_, dass er beide Elemente umschliesst. Wichtigste Eigenschaft der Klasse `.floatbreaker` ist `clear: both;` im CSS. Das ist nötig, weil das _gefloatete_ Element aus der Blockkonstruktion herausfällt und über den Rand des umschließenden Elementes herausgeht, wenn es länger ist, als der Content des Containers.

Aber schön ist das nicht. Zum einen muss man `.floatbreaker` seltsame Einstellungen geben, damit es allerhöchstens 1px hoch ist. Das kann man auch noch vermeiden, indem man die Konstruktion so einsetzt:

`<div class="floatbreaker"><!-- --></div>`

Zum anderen haben wir es hier mit semantisch unsinnigem Code zu tun, der keine inhaltliche Funktion hat —wie auch, ohne Inhalt— und im Grunde ein hässlicher Hilfsanker ist.

Gestern abend nun plötzlich finde ich folgende _neue_ Techniken in der Diskussion, und ehrlich gesagt, die gefallen mir viel besser:

- [Alex Walker: Simple Clearing of Floats](http://www.sitepoint.com/blog-post-view?id=238086)
- [456BereaStreet mit Testcase](http://www.456bereastreet.com/archive/200502/simple_clearing_of_floats/)
- und weitergedacht: [Anne van Kesteren: Super Simple Clearing of Floats](http://annevankesteren.nl/archives/2005/03/clearing-floats) (super!).

Im Kern haben diese neuen Techniken eine Idee: dem Container-Element wird eine `overflow`\-Eigenschaft zugeordnet. Wer allerdings jetzt dachte, das funktioniert ohne Hacking in allen Browsern... natürlich nicht.

> I'm the floatbreaker
> the real undertaker
>
> (Traditional)
