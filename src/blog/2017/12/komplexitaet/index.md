---
title: "Komplexität"
date: "2017-12-14"
tags:
  - "Gerante"
coverImage: "strommast-e1514367667503.jpg"
---

Eine Website ist quasi per Definition ein kompliziertes Gebilde. Jedenfalls, wenn sie eine gewisse Größe erreicht hat. Also immer, wenn eine Website mehr erledigen soll als »Hello World« auszugeben. Es gibt in der Regel viele, wie ich sie nenne, _bewegliche Teile_. HTML, CSS, Javascript, alles voneinander abhängig, alles muss irgendwie gleichzeitig, mindestens aber im rechten Moment am rechten Ort sein, damit alles funktioniert. So sehr wir uns auch Bemühen, es anders erscheinen zu lassen und gleichzeitig die Komplexität nicht so groß werden zu lassen, sie ist trotzdem da.

Ausgehend von diesem Punkt, lässt sich die Komplexität einer Website bis ins unendliche steigern. Dafür werden Webentwickler gebraucht. Und gleichzeitig braucht man sie, um dieser Komplexität irgendwie Herr zu werden, durch immer neue Coding Guidelines, Namenskonventionen und Javascript-Frameworks. Denn Webentwickler **hassen** Komplexität. Und doch von irgendwoher kommt immer wieder neues Zeug, neue bewegliche Teile, mehr Code.

### Was ist also so schlecht an Komplexität?

Je größer und komplexer Website X oder Anwendung Y werden, um so höher wird die Hürde, an dem System etwas zu ändern. Einerseits geht der Überblick einfach verloren, d.h. man kann immer schwieriger vorher abschätzen, wie kompliziert eine Aufgabe werden wird, und schreckt schon vorher davor zurück. Und selbst wenn man einen Task angegangen ist, kriegt ja jeder normal gepolte Entwickler eine ausgewachsene Di­ar­rhö, wenn eine _pull request_ mit mehr als drei geänderten Dateien gestellt werden muss.

Nicht umsonst versucht man in einem Scrum-Planning ja nicht Zeit, sondern die Komplexität einer Story zu schätzen. Und nicht umsonst ist das der größte Bullshit des ganzen Systems, weil die Komplexität einer Aufgabe nach kurzer Besprechung im Planningpoker festzulegen ist mithin eine _mission impossible_, gerade weil man Komplexität eben so schwer erkennen kann.

Komplexität ist also ein hervorragendes Werkzeug um Arbeit zu verlängern und zu erschweren und mitunter auch, um sie ganz zu verhindern. Wenn man bspw. im Scrum sich vornimmt, Stories mit einer Komplexität größer 13 Punkten (nach Fibonacci) eher in kleinere Stories aufzuteilen (um die Komplexität zu senken), dann führt das oft auch dazu, dass etwas ganz unter den Tisch fällt. Letzteres ist übrigens das einzig sinnvolle Mittel gegen immer größer werdende Komplexität des Gesamtproduktes. Ansonsten kann man dessen Komplexität natürlich ganz hervorragend und agil auch iterativ erhöhen. Natürlich!

### Woher kommt sie nun, die Komplexität, diese Sau

Komplex wird es dann, wenn viele Dinge, die eben noch einfach erschienen, zusammen gepackt werden. Wie gesagt, eine Website ist an sich schon komplex. Hinzu kommen viele mehr oder minder komplizierte Einzelfeatures. Ein Beispiel:

Produktentwickler A möchte bestimmte Überschriften (die Links sind) von besonders schönen Artikeln besonders schön hervorheben. Er macht sich eine Skizze und kommt am Ende dazu, dass die Überschriften unterstrichen werden sollen.

```css
h1 a { text-decoration: underline; }
```

Mit seiner Skizze trifft sich Produktentwickler A mit Designer B und beide schauen sich die Überschriften noch einmal an. Am Ende kommt heraus, dass die Überschriften _farbig und fett_ unterstrichen werden sollen.

```css
h1 a {
    border-bottom: 5px solid yellow;
    text-decoration: none;
}
```

Das ganze wird als Story verfasst und landet in einem Planning. Frontendentwickler C, D und E schätzen die Komplexität auf einen Punkt.

Im Laufe des Sprints stellt sich heraus, dass es gar nicht so einfach ist, umbrechende Überschriften mit farbigen Unterstreichungen auszustatten. Dem Designer fällt außerdem auf, dass in einigen Browsern die Unterstreichung vor den Unterlängen der Schrift liegen in anderen dahinter und außerdem hätte man gerne noch eine weiße Umrandung um die Schrift. Typischer _feature creep_.

```css
h1 a {
    background-size: auto 7px;
    text-shadow: -4px 6px #fff,4px 6px #fff,0 6px #fff,1px 6px #fff,-3px -2px #fff;
    background-image: linear-gradient(90deg, #ffe52c, #ffe52c);
    text-decoration: none;
    background-position: 0 1.18em;
}
```

Was nicht in allen Browsern funktioniert, also muss es eigentlich heissen:

```css
h1 a {
    -webkit-background-size: auto 7px;
    background-size: auto 7px;
    text-shadow: -4px 6px #fff,4px 6px #fff,0 6px #fff,1px 6px #fff,-3px -2px #fff;
    background-image: -webkit-gradient(linear, left top, right top, from(#ffe52c), to(#ffe52c));
    background-image: -webkit-linear-gradient(left, #ffe52c, #ffe52c);
    background-image: -o-linear-gradient(left, #ffe52c, #ffe52c);
    background-image: linear-gradient(90deg, #ffe52c, #ffe52c);
    text-decoration: none;
    background-position: 0 1.18em;
}
```

Wobei die Vendorprefixe beim Builden des Frontend-Paketes eingefügt werden. Was nochmal so eine ganz eigene Ebene der Komplexität ist. Kopfschmerzen jedoch bereitet, dass diese Lösung so nur für den gewählten Überschriftenfont funktioniert.

Zwei Wochen später soll aus Performancegründen das Fontloading mit `font-display` optional gemacht werden, damit bei langsamen Verbindungen nicht lange auf den Webfont gewartet wird. Dead end.

Wir sehen: Produktentwickler machen Komplexität, Webdesigner machen Komplexität und ja, auch Webentwickler verursachen Komplexität. Es ist ein gemeinsames Leiden.

### „Was tun?“, sprach Zeus

Es ist schön, dass wir uns an Namensschemata halten. Es ist super, dass wir Dinge in Libraries weg abstrahieren. Es ist toll, dass wir regelmäßig Refactoring machen. Aber hier bezieht sich das wir natürlich hauptsächlich auf die Entwickler. Es sind aber noch mehr Leute verantwortlich für die Komplexität, was machen denn die?

- Komplexität mitdenken/mitdesignen: auch Produktentwickler und Webdesigner sollten mit der Zeit ein Gefühl dafür bekommen, wo immer wieder Komplexität entsteht, was die Schätzungen so richtig in die Höhe treibt und wo die Entwickler immer richtig ins Stöhnen geraten
- Aufräumen mitdenken: bei jeden Neubau sollte immer nach Dingen gesucht werden, die stattdessen überflüssig geworden sind. Diese Dinge sind zu entfernen und der Entfernung ist mitzuplanen und zu schätzen
- Aktiv aufräumen: wenn man schon jeden Userklick mittrackt, sollte man die Dinge, die augenscheinlich nicht funktionieren wieder ausbauen. Der _business value_ ist dabei eine geringere Komplexität für den Nutzer **und** das Team.

Photo by [Dina Lydia](https://unsplash.com/photos/mqnQ_vmLIGU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
