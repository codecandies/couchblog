---
title: "Visited Links mal anders"
date: "2004-05-21"
tags:
  - "Generde"
---

Es gibt manchmal so Sachen, da hätte man einfach auch selbst mal drauf kommen können. Wie man im Menü von [CollyLogic](http://www.collylogic.com/index.php/weblog/comments/40/) die bereits besuchten Links behandelt, das ist so eine Idee. Naheliegend, nur man muss drauf kommen. Sehr schön.

BTW: gewusst, dass es auch in der Behandlung von Linkzuständen einen kleinen Bug im IE gibt? Um wirkliche Kontrolle über das unterschiedliche Aussehen von Links, Hoverlinks, aktiven Links und bereits besuchten Links hinzubekommen, muss man im CSS bei der Defintion der Link-Pseudoklassen immer folgende Reihenfolge einhalten: **L**ink, **V**isited, **H**over, **A**ctive. Bei Zeldman gab’s dazu mal eine Eselsbrücke: **L**o**V**e? **HA**! Naja.

Beispiel:
```css
a:link {
  color:blue;
  text-decoration:none;
}
a:visited {
  color: gray;
  text-decoration:line-through;
}
a:hover {
  color: red;
  text-decoration:underline;
}
a:active {
  color:red;
  text-decoration:none;
}
```
