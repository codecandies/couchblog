---
title: "Label Platzierung"
date: "2008-08-05"
tags:
  - "Gestaltet"
keywords:
  - "CSS"
  - "HTML"
  - "Usability"
---

[Kurzer, aber guter Artikel](http://css-tricks.com/label-placement-on-forms/) zur Platzierung von Feldbezeichnungen in Formularen. Klassischerweise kann man ja das `label` über oder links neben das `input` schreiben und im letzteren Fall den Text auch noch links oder rechts ausrichten. Überraschende Lösung des Problem: _es kommt darauf an_. Immer dasselbe.

Je nach Aufgabe und Formular scheint es verschiedene passende Lösungen zu geben. Das `label` über das Formularfeld zu schreiben, hilft dem Benutzer am besten beim Ausfüllen des Formulars, benötigt aber viel vertikalen Raum, ist also bei langen Formularen eher anstrengend. Links ausgerichtete, links stehende `label` scheinen hier die Lösung zu sein, während die links stehenden, aber rechts ausgerichten eher für kurze, oft genutzte Formulare (bspw. Username/Passwort) passend sind.

[![screenshot](/images/codecandies/ZZ198385EF.jpg)](/codecandies/wp-content/uploads/beispiele/formular_hilfen.html)

Auffällig gut gelöst finde ich allerdings [in den Beispielen](http://css-tricks.com/wp-content/csstricks-uploads/top-aligned.png), die Platzierung der Hilfetexte (»first«, »MM/DD/YY«) an Formularteilen mit mehr als einem Feld, kleiner und grau, aber eben direkt am Input-Feld. Das sieht super aus, hat maximalen Hilfseffekt und braucht kein Javascript etc. um aufzupoppen. Allerdings kommt man hier ein wenig durcheiander, was `label` ist, denn ein Label kann ja immer nur für ein Formularfeld stehen[1](#anm1). Damit wäre **Name** hier also eher ein `fieldset`, vielmehr die `legend` dazu, dann würde aber bei **Email** bspw. das `label` fehlen oder eben genauso aussehen. Andererseits, wenn man das konsequent macht und immer eine Legend-Label-Kombination findet…

Hier ein [kurz zusammengestricktes Beispiel](/codecandies/wp-content/uploads/beispiele/formular_hilfen.html), erst das HTML:

```html
<form method="get" action="">
    <fieldset>
        <legend>Name:</legend>
        <p>
            <label>
                <input value="" type="text" /><br />
                <span>Vorname</span>
            </label>
        </p>
        <p>
            <label>
                <input value="" type="text" /><br />
                <span>Nachname</span>
            </label>
        </p>
    </fieldset>
    <fieldset>
        <legend>Netzleben:</legend>
        <p>
            <label>
                <input value="" type="text" /><br />
                <span>Email</span>
            </label>
        </p>
        <p>
            <label>
                <input value="http://" type="text" /><br />
                <span>Homepage</span>
            </label>
        </p>
    </fieldset>
</form>
```

Und dann das CSS (ich schätze, nicht IE-kompatibel):

```css
* { /* So nur wenns schnell gehen soll */
     margin: 0;
     padding: 0;
}
body {
     font-family: "Lucida Grande", "Lucida Sans Unicode", sans-serif;
     font-size: 10px;
}
form {
    margin: 50px;
}
fieldset {
    border: none;
    margin-bottom: 10px;
    overflow: hidden;
    width: 400px;
}
legend {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 5px;
}
form fieldset p {
    float: left;
    line-height: 180%;
    width: 190px;
}
form fieldset p input {
    font-size: 12px;
    padding: 2px;
    width: 170px;
}
form fieldset p span {
    color: #666;
}
```

1 Gewußt? Wenn man auf das Label klickt, bekommt das zugehörige Formfeld den Fokus. Und: das `<label>` kann Labeltext und Input-Feld auch umschließen, dann braucht man kein for-Attribut und spart sich die ID am Formularfeld.
