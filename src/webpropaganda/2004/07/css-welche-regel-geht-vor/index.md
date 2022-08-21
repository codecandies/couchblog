---
title: "CSS: Welche Regel geht vor?"
date: "2004-07-21"
tags:
  - "Gecodet"
keywords:
  - "CSS"
---

Wenn man an Seiten arbeitet, die von anderen gecodet wurden, kann man manchmal sehr interessante Erfahrungen beim editieren von CSS-Regeln machen. Es gibt Arten ein CSS zu schreiben, die das nachträgliche Editieren der Seiten wahrlich zur Hölle machen. Will man nun aber nicht die komplette Struktur verändern, also die Site komplett neu schreiben, ist man manchmal zu drastischen Mitteln gezwungen.

Die Frage die sich aufdrängt: wenn zwei CSS-Regeln auf ein Element zutreffen, welche Regel zieht?

Beispiel aus dem CSS:
```css
td {
  color: red;
}
.test {
  color: blue;
}
td.test {
  color: black;
}
```
Beispiel aus dem HTML:
```html
<td class="test" style="color:green">
  Welche Farbe habe ich nun?</td>
```

Antwort: Grün. In diesem Falle, denn das dem `td` zugeordnete `style`-Attribut überschreibt die anderen Regeln, es ist die _speziellste_ Anweisung. Das mit dem “speziell” ist also sehr wichtig. Wenn wir das `style`-Attribut weglöschen:

```html
<td class="test">Welche Farbe habe ich nun?</td>
```

... wird der Text nun **schwarz**, weil `td.test` gegenüber `.test` spezieller, schwerwiegender ist. Was überstimmt nun aber welche Regeln?

- die speziellere Regel geht vor der unspezielleren Regel
- im Code angewendete Styles überstimmen Regeln aus dem Stylesheet (sind aber meist unschön!)
- CSS Klassen gehen vor Zuweisungen an HTML-Elemente
- CSS Anweisungen die für mehrere Elemente gelten überstimmen solche, die nur für ein Element gelten
- ID’s überstimmen Klassen

Auch nachzulesen bspw. [hier](http://www.westciv.com/style_master/academy/css_tutorial/advanced/cascade_inheritance.html).
