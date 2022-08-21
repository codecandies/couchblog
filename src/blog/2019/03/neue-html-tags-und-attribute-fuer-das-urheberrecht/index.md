---
title: "Neue HTML-Tags und Attribute für das Urheberrecht"
date: "2019-03-31"
tags:
  - "Generde"
  - "Gesellschaft"
---

Pünktlich zum Ende des 1. Quartals 2019 hat die [Web Hypertext Application Technology Working Group (WHATWG)](https://whatwg.org/) ihre Vorschläge für neue HTML-Tags vorgelegt. Dabei will die WHATWG, die sich schon lange [um das Copyright ihrer eigenen Standards bangt](https://blog.whatwg.org/copyright-license-change), die kürzlich im EU-Parlament beschlossene Reform des Urheberrechts unterstützen und die nun angeblich nötige weltweite Einführung von Uploadfiltern vereinfachen bestenfalls sogar überflüssig machen und so „letztlich das Internet retten“, wie die WHATWG Steering Group bekannt gab.

## Neue Auszeichnung kennzeichnet erlaubte Inhalte

Helfen sollen dabei die Einführung eines gänzlich neuen Tags, das zur Markierung satirischer Äußerungen genutzt werden kann. Mit `<satire>` ausgezeichnete Texte sollten sich leicht von jedem Uploadfilter erfassen lassen und dann dort entsprechende Berücksichtigung finden, also ignoriert werden. Kritiker hatten immer wieder ausgesagt, Uploadfilter könnten unmöglich den künstlerisch inhaltlich korrekten Gebrauch von urheberrechtlich geschützten Werken automatisch erkennen. Das neue Tag hilft hierbei nun. „Immer mehr Autos würden an ihren vier Kanten mit kleinen Funkfeuern ausgestattet, um den künstlichen Intelligenzen in selbstfahrenden Autos das Rückwärtseinparken zu erleichtern.“, so die WHATWG in ihrer Presseerklärung. „Wir helfen nun beim Einparken im Internet.“, heisst es dort weiter.

```
<p>Ich halte es dabei mit Isaac Newton, der ja <satire>schon 2001 gesagt hat, man solle nicht alles glauben, was im Internet steht</satire></p>
```

Mit Browserherstellern wurde abgesprochen, für mit dem `<satire>` ausgezeichneten Text, standardmäßig kursive Schrift einzusetzen. Durch setzen des optionalen `type`\-Attributs sollen dann alternative Schriftbilder genutzt werden können, beispielsweise…

- Frakturschrift für `<satire type='old'>`
- spiegelverkehrte Schrift für `<satire type='political'>`
- weiße Schrift auf weißem Grund bei `<satire type='real'>`
- und die völlige Unlesbarmachung durch Buchstabenvertauschung bei `<satire type='brexit'>` bzw. `<satire lang='en-GB'>`.

## Attribute für Bilder und Videos machen Uploadfilter womöglich überflüssig

Noch mehr Durchschlagskraft verspricht sich die Gruppe der Standardautoren allerdings von neuen Attributen, die an Medienauszeichnungnen wie `<img>`, `<audio>` und `<video>` notiert werden können. Mithilfe von `satire="[(start/stop),]"`und `remix="[(start/stop),]"` soll auf legale Nutzungen von Fremdwerken innerhalb bspw. von Videos hingewiesen werden können. Zusätzlich sollen mit `euillegal="[(start/stop),]` kopierten Inhalte in ansonsten im Sinne der Richtlinie _sauberen Daten_ ausgezeichnet werden können, was dann Webseiten in der EU direkt herausfiltern können, während das Werk in anderen Ländern, beispielsweise im Rahmen des sogenannten _fair use_ unangetatstet bleiben kann. Hier baut die WHATWG auf die guten Erfahrungen, die man in den USA mit dem Atrribut `parentaladvisory` gemacht hat, mit dem schon seit Jahren Audios und Tonspuren von Youtube-Videos _überpiept_ werden.

## „Die Welt ist bereit“

„Wir brauchen Standards, um die Entwicklung eines _free open source software world wide web (fosswww)_ vorantreiben zu können“, sagt jemand von der WHATWG dazu. Das mit den neuen Tags und Attributen Schindluder getrieben werden könne glaubt er hingegen nicht. Vielmehr ist man der Ansicht, „dass die faire und entspannte Debatte bei der Entstehung der europäischen Urheberrechtsrichtlinie schon gezeigt hat, dass die Welt nun für künstlich-intelligente und alternativfaktische Lösungen bereit ist.“
