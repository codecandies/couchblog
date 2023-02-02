---
title: "Javascript schöner und schneller machen"
date: "2010-11-26"
tags:
  - "Gecodet"
keywords:
  - "Javascript"
  - "jQuery"
---

![Javascript schöner und schneller machen](/images/codecandies/aintbroke.jpg)

Javascript ist, angesichts seiner [etwas holprigen Entstehungsgeschichte](http://en.wikipedia.org/wiki/JavaScript#History) eine eigentlich recht elegante Scriptsprache. Es krankt jedoch daran, dass in Javascript im Grunde alles geht und alles gemacht wird und jedesmal anders. Will man mit Kollegen zusammen an einem Javascriptprojekt arbeiten, ist der eigene Dialekt ebenso hinderlich, wie mangelnde Sauberkeit beim Codeschreiben. Beachtet man aber neben einem guten Stil in Javascript einige elementare Regeln, kann man seine Scripte dadurch auch noch merklich schneller und kompakter machen.

## Coding Guidelines

In Sachen Coding Guidelines gilt auf jeden Fall: jede Regel ist besser als keine Regel. In Javascript kann man viele böse Dinge schreiben, die kein Mensch versteht, die aber trotzdem hervorragend funktionieren. Die Sprache lässt einfach vieles zu, was trotzdem schlechter Stil ist. Vor kurzem haben sich die Entwickler von jQuery einen Styleguide verpasst, die [JQuery Core Style Guidelines](http://docs.jquery.com/JQuery_Core_Style_Guidelines), das ist schon eine wunderbare Grundlage. Einfach copy & pasten.

Wichtig ist dabei auch, die Verwendung von [JS Lint](http://jslint.com/) (JSLint will hurt your feelings.). Mit diesem Tool kann man die übelsten Stylefehler vermeiden und die Einhaltung des Styleguides automatisiert überprüfen. [Die Einführung dazu](http://www.jslint.com/lint.html) ist mehr als lesenswert. Besonders praktisch für Nutzer von [Textmate](http://macromates.com/) (_Lieblingseditor_) ist das [JS Lint Bundle](http://andrewdupont.net/2006/10/01/javascript-tools-textmate-bundle/).

## Codeverbesserung: erster Durchgang

Sich aufzuraffen, seinen Code zu überarbeiten, ist nicht leicht. Aber: der Wille zur Verbesserung und das Wissen, dass der erste Aufschlag meist nicht optimal ist, trennt den Programmieren vom Scriptingguy, oder so. Hier ein paar schnelle und einfache Schritte, die Javascript schon deutlich verbessern. Federice Galassi hat darüber eine [wunderbare Präsentation](http://www.slideshare.net/mobile/fgalassi/refactoring-to-unobtrusive-javascript) gemacht. Die Maßnahmen führen aber nicht nur in Richtung _unobtrusiveness_, sondern sind auch geeignet, Javascript schneller und wartbarer zu machen. Kurz zusammengefasst:

### 1. Entferne alles Inline-Javascript aus dem HTML-Code.
Also `<script> Code…</script>` raus aus den Seiten und in eigene Dateien (besser eine eintige) packen. Diese dann mit `<script src="datei.js"></script>` aufrufen. Und das am besten **am Ende der Seite**, direkt vor `</body>`.

### 2. Alle Inlineevents aus dem HTML entfernen
Weg mit `<a class="klick" href="#" onclick="foo();">Klicken Sie hier</a>`. Das kann besser machen. Mit jQuery beispielsweise: `$("a.klick" ).bind("click", function() { foo(); });`, jedenfalls aber in der externen Javascriptdatei.

### 3. Javascript-Pseudolinks entfernen
Mit Todesstrafe wird der uralte Javascript-Pseudolink bestraft! Sowas geht gar nicht: `<a href="javascript:foo()">Klicken Sie hier</a>`

### 4. CSS-Code aus dem Javascript entfernen.
Innerhalb des Javascriptes sollte kein CSS verwendet werden (Trennung von Präsentation und Programmierlogik). D.h. sowohl Zuweisungen wie `$("a" ).css("background","#ff0000" );` oder auch `document.getElementById("id").style.color("#ff0000");` und ähnliches schreiben teilweise lange unüberschaubare style-Attribute in den HTML-Code und produzieren DOM-Zugriffe. Stattdessen schreibt man die CSS-Anweisungen in eine CSS-Datei

```css
/* bspw. base.css */
a.rot { background: #ff0000; }
```

und nutzt im Jquery

```js
$("a").addClass("rot"); // Farbe an
$("a").removeClass("rot"); // Farbe aus, oder gleich:
$("a").toggleClass("rot"); // je nach dem \[/js\]
```

CSS _bewegt_ sich wesentlich schneller und gewandter durch das DOM als Javascript.

### 5. Businesslogik aus dem Javascript entfernen (Client-Server-Anwendungen)
Bei Client-Server-Anwendungen kann es einen entscheidenen Geschwindigkeitsvorteil bedeuten, komplizierte Berechnungen nicht auf dem Client (also mit Javascript) sondern auf dem Server auszuführen. Wenn man sich also schon Daten vom Server holt, dann sollte man vermeiden mit diesen Daten Berechnungen auf dem Client auszuführen. Ein Beispiel:

```js
// Schlecht!
$.get("action.php", function ( data ) {
  if ( data ) {
    if ( data.kontostand > data.dispokredit ) {
      alert("Konto überzogen" );
    }
  }
});

// Besser!
$.get("action.php?dispoberechnung", { konto:"123456" }, function ( data ) {
  if ( data.dispo === false ) {
    alert("Konto überzogen");
  }
}
```

### 6. DOM-Operationen auf ein Minimum beschränken!
Nicolas Zakas formuliert es in „High Performance JavaScript (Build Faster Web Application Interfaces)“ so:

> An excellent analogy is to think of DOM as a piece of land and JavaScript (meaning ECMAScript) as another piece of land, both connected with a toll bridge (see John Hrvatin, Microsoft, MIX09, http://videos.visitmix.com/MIX09/T53F ). Every time your ECMAScript needs access to the DOM, you have to cross this bridge and pay the performance toll fee. The more you work with the DOM, the more you pay. So the general recommendation is to cross that bridge as few times as possible and strive to stay in ECMAScript land.

Daraus ergibt sich eine klare Anweisung: greife sowenig wie es eben geht auf das DOM zu! Ein Domzugriff ist dann gegeben, wenn ein DOM-Element erschafft, ins DOM einhängt, ein Element im DOM verschiebt, Attribute hinzufügt und so weiter und so fort. Am allerschlimmsten sind die sogenannte HTML-Coolections und das iterieren hierauf.

```js
// ein ganz böses Beispiel!
function innerHTMLLoop () {
  for ( var i = 0; i < 15000; i++ ) {
    document.getElementById("meinLink" ).innerHTML +="a";
  }
}
```

Hier erleben wir schlappen 15000 DOM-Aufrufe der übelsten Art. Stattdessen vermeidet man solange wie möglich den Zugriff aufs DOM:

```js
// dann besser so
function innerHTMLLoop2 () {
  var content ="";
  for ( var i = 0; i < 15000; i++ ) {
    content +="a";
  }
  document.getElementById("meinLink" ).innerHTML += content;
}
```

**Goldene Regel: pro Funktion sollte es nur einen Zugriff auf den DOM geben.** So kann es beispielsweise Sinn machen, sehr lange auf Strings mit HTML zu arbeiten und erst am Ende alles zusammen per `$( var ).appendTo( 'body' );` ins DOM zu hängen. Ausser in Chrome und Safari ist es sogar noch schneller `innerHTML` zu benutzen, in jQuery `$("#meinKram" ).html( var );`. Hier scheiden sich allerdings die Geister, weil innerHTML nicht standardkonform ist, wohl aber von jedem Browser unterstützt wird.

### 7. Große HTML-Chunks ggf. durch Templates ersetzen.
Wegen der schon oft angesprochenen Trennung von Content und Präsentationslogik ist zu überlegen, ob man für große HTML-Stücke die man in den Code einspeisen muss, vielleicht besser HTML-Templates verwendet, den Code also in externe Dateien auslagert und nachlädt (auf welche Weise auch immer). Als Vorstufe dazu und Kompromiss kann man auch bis mittelgroße Codeschnipsel im verborgenen Teilen des HTML-Dokuments unterbringen und sich dann per .clone() oder wieder .html() einlesen und wiederverwenden.

Die Verwendung eines Templatesystems setzt aber bspw. wieder ein eingenes Plugin voraus, Schnipsel im HTML verursachen beim Laden wieder DOM-Zugriffe. Hier muss man genau abwiegen, was der Performance hier zuträglich ist, sicherlich auch in Abhängigkeit vom der Größe des HTML-Codes der benötigt wird.

### 8. Keine/wenig globalen Variablen nutzen!
Variablen die ausserhalb von Funktionen definiert werden, sind, auch wenn sie mit `var` geprefixt werden, globale Variablen, die im window-Namensraum gespeichert werden. Es besteht die Gefahr, dass diese an anderer Stelle ungewollt überschrieben werden, außerdem ist der Zugriff auf window langsam. Stattdessen speichert man Variablen aus dem Window-Namensraum in lokalen Variablen zwischen, auf die der Zugriff wesentlich schneller erfolgt.

## Fortsetzung folgt
Dieser 8-Punkte-Plan ist aber nur ein Einstieg. Wenn man ein Programm so optimiert hat, kann man praktisch direkt wieder von vorne anfangen und weitere Verbesserungen einbringen. Das wird dann das Thema eines weiteren Artikels hier.
