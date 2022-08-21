---
title: "CSS Coding Guidelines II"
date: "2008-05-22"
tags:
  - "Gecodet"
keywords:
  - "CSS"
---

[Teil 1](/codecandies/2008/05/21/css-coding-guidelines-i/) wurde ja schon ausgiebig diskutiert, daraus habe ich schon einiges mitgenommen. Machen wir also fröhlich weiter mit meinen Ideen, wie man CSS am besten notiert…

![»It's not everything that bad…« © BBC](/img/codecandies/ZZ46E36474.jpg)

#### Kommentare

**Mehrzeilige Kommentare, mit Einrückung et al.** sind zu platzieren:

- am Beginn jeder Datei
    - mit Angabe wozu und an welcher Stelle das Stylesheet benötigt wird, kurze Inhaltsangabe o.ä.
    - Abhängigkeiten
- vor jedem Themenabschnitt

**Codebespiel:** mehrzeiliger Kommentar

```css
/**
 * Hello World
 * Dies ist ein mehrzeiliger Kommentar
 */
```

In allen anderen Fällen ist der Zeilenkommentar zu nutzen

**Codebespiel:** einzeiliger Kommentar

```css
/* Dies ist ein einzeiliger Kommentar */
```

#### Leerzeilen

Einzelne Regeln sind durch **1** Leerzeile voneinander zu trennen. Es sollten niemal mehr als **2** Leerzeilen aufeinander folgen.

**Codebespiel:** Leerzeilen

```css
.note { border: 1px solid #000; }

.black_note {
    background: #ff00ff;
    color: #000;
}
```

Anm.: _Bitte den Code immer so leserlich wie möglich gestalten. Optimierung des CSS auf Größe wird in späteren Buildprozessen umgesetzt und ist vom Layout unabhängig._

#### Kurzschrift-Eigenschaften

Wo immer _möglich **und** sinnvoll_ sollen die Deklarationen in Kurzschreibweise zusammengefasst werden.

**Codebespiel:** Kurzschreibweisen 1

```css
.small {
    background: transparent url(img/border-bottom.gif) repeat-x bottom;
    border: 1px solid #000;
}
```

Trotzdem bitte flexibel bleiben und davon abweichen, wenn es sinnvoll ist:

**Codebespiel:** Kurzschreibweisen 2

```css
a:link {
    background: transparent url(img/sprite.gif) no-repeat 0 0;
}

a:hover {
    background-position: 0 -16px;
}
```

#### Best practice

Bitte jede Deklaration immer mit einem Semikolon abschließen.

#### Namen

- alle Namen in Kleinbuchstaben
- zusammengesetzte Namen mit \_ (underscore) verbinden
- eher aber kurze Namen suchen, höchstens 1 Zusammensetzung
- Update: Klassennamen verraten nicht das Aussehen eines Elementes. ([via](http://cyberer.wordpress.com/2008/07/21/css-und-html/)) D.h. Klassen heissen nicht ".grey-border" oder ähnliches.

**Reservierte IDs:** folgende IDs sind in der Regel für das HTML-Gerüst vergeben und sollen außerhalb dessen nicht benutzt werden:

- #wrapper
- #container
- #header
- #content
- #sidebar
- #footer

**To be continued.**
