---
title: "Präsentationen mit reveal.js"
date: "2014-07-08"
tags:
  - "Getestet"
coverImage: "presentation.jpg"
---

Für meinen letzten [Vortrag](http://wir-sind-geek.de/slides/longform/), habe ich mal Keynote links liegen lassen und mich an [reveal.js](https://github.com/hakimel/reveal.js) herangewagt. Im Großen und Ganzen wird damit aus einer Präsentation eine Website. Darin eingeschlossen sind allerdings beinahe alle Funktionen, die man auch von einer Präsentationssoftware kennt, wie Übersichtsmodus, Speakernotes mit Vorschau und Uhr, PDF-Export, Übergangseffekte. Und reveal.js kann auch noch ein paar Dinge, die mein Keynote nicht hinbekommt, beispielsweise einen parallax scrollenden Hintergrund, Markdown-Support oder Themenstacks. Mit [slide.es](http://slid.es) gibt es sogar einen Onlineeditor für den HTML-Unkundigen.

## Installation

Die Installation ist in zwei Varianten möglich. Will man nur schnell eine Präse ohne Zusatzfunktionen bauen, kann man [dieses Release von reveal.js](https://github.com/hakimel/reveal.js/releases) herunterladen, die enthaltene `index.html` editieren und diese dann im Browser öffnen. Funktioniert sogar ohne Webserver.

Mehr Möglichkeiten hat man allerdings, wenn man sich [die Sourcen von reveal.js per Github auscheckt](https://github.com/hakimel/reveal.js/) und die Node-Module installiert. Via `grunt serve` bekommt man dann einen lokalen Webserver mitgeliefert, der einem einige interessante Zusatzfunktionen, beispielsweise die _Speakernotes_, zur Verfügung stellt.

Demopräsentation von reveal.js:

## Folien anlegen

reveal.js kommt mit einem recht anschaulichen Default-CSS daher (kann man [hier in der reveal.js-Demo sehr schön sehen](http://lab.hakim.se/reveal-js/#/)), so dass man im Grunde gleich loslegen kann. Um Folien einzufügen, kann man bspw. die vorhandene `index.html` öffnen und das nötigr Code-Gerüst herstellen. Minimal sieht das so aus:

```html
<div class="slides">
    <section>
        <!-- content slide 1 -->
    </section>
    <section>
        <section>
            <!-- content slide 2.1 -->
        </section>
        <section>
            <!-- content slide 2.2 -->
        </section>
    </section>
</div>
```

Eine Folie entspricht also einem `section`\-Element innerhalb des `div` mit der Klasse `slides`. Eine der Stärken von reveal.js sieht man hier auch schon: es gibt nicht nur eine Inhaltsebene, sondern zwei. `section`s die direkte Kinder von `slides` sind, werden horizontal nebeneinander dargestellt, Kindelemente von `section`s werden als Stack untereinander dargestellt, das erste ist dabei auf einer Höhe mit den Umliegenden. Nun kann man nicht nur links und rechts, sondern zeitweise auch von oben nach unten durch die Slides gehen. **Tipp:** mit den Pfeiltasten kann man frei durch die Slides navigieren, will man sich linear durch das Dokument sliden, geht das mit `space` bzw. `SHIFT-space`.

So kann man die Slides einzeln anlegen. Wer kein eigenes HTML oder Markdown schreiben will, kann aber auch den Online-Editor [http://slid.es/](http://slid.es/) nutzen, der reveal.js Präsentationen produzieren und auch exportieren kann. Zum ersten Ausprobieren eine durchaus sinnvolle Einrichtung.

## HTML und/oder Markdown

Eine Gesetzmäßigkeit kann man für reveal.js festhalten: alles was als Folie angezeigt werden soll, muss in eine `section`. Hier kann man HTML eintragen wie man möchte. Die wichtigsten Elemente sind in den CSS-Themes bereits brauchbar gelayoutet, also `h1`\-`h6`, `p`, `ul`, `ol` und so fort kann man direkt nutzen.

Ich nutze allerdings auch sehr gerne Markdown. Kann reveal.js natürlich auch, man kann es sozusagen `inline` eintragen.

```html
<div class="slides">
    <section data-markdown>
        <script type="text/template">
            ## Page title

            A paragraph with some text and a [link](http://hakim.se).
        </script>
        <aside class="notes" data-markdown>
            - talk about page titles
            - anecdote about paragraphs
        </aside>
    </section>
</div>
```

Wie man hier auch sieht, können Speakernotes mit eingebaut werden, als `<aside class="notes">`.

Die Frage ist, ob man eine der beiden Optionen eigentlich möchte. Es ist natürlich für einen Webdev das Naheliegendste, seine Slides in HTML zu bauen. Übersichtlich ist das allerdings nicht, jedenfalls nicht während man noch am Inhalt schreibt. Das Inline-Markdown ist gleichsam kompliziert und durch die zusätzlichen `<script type="text/template"></script>` noch ein wenig mehr _bloated_.

Die beste Lösung ist also, man packt das Markdown in eine externe Datei. Dies ist letztendlich die beste Option für die Markdownliebhaber, da hier dann der Text aller Folien fein getrennt vom Anzeigesystem in einem Textdokument liegen.

```html
<div class="slides">
    <section data-markdown="example.md"
        data-separator="^---"
        data-vertical="^***"
        data-notes="^Note:"
        data-charset="utf-8">
    </section>
</div>
```

Man kann Text zum Trennen der Folien und zum Auszeichnen von Notes angeben. Das passende Markdown würde dann so aussehen:

```md
# Folie 1

Der Text auf Folie 1.

---

# Folie 2

Der Text auf Folie 2.

Note: Notiz auf Folie 2

***

# 1. Unterfolie der 2. Folie

---

# Folie 3
```

Tipp: Als Trenner zwischen den horizontalen Folien eignet sich meiner Meinung nach die `<hr>` wesentlich besser, als die standardmäßig verwendeten Zeilenvorschüben. Da man in Markdown `---` und `***` als Linien benutzen kann, lassen sie sich gut als Trenner nutzen.

### Fragmente

Einzelne Elemente können als Fragmente nacheinander innerhalb einer Folie angezeigt werden. Dabei kann die Reihenfolge der Elemente auch noch frei gewählt werden. Eine Liste, bei der zunächst Punkt 2 und dann Punkt 1 angezeigt wird sieht dann so aus:

```html
<ul>
    <li class="fragment" data-fragment-index="2">Appears second</li>
    <li class="fragment" data-fragment-index="1">Appears first</li>
</ul>
```

oder in Markdown (hier werden spezielle Auszeichungen als Kommentare hinzugefügt):

```md
- Item 1 <!-- .element: class="fragment" data-fragment-index="2" -->
- Item 2 <!-- .element: class="fragment" data-fragment-index="1" -->
```

Zuätzlich gibt es eine Liste von Effekten, die sich auf die Fragment-Darstellung anwenden lassen, u.a. `grow`, `shrink`, `roll-in`, `fade-out` usw. Diese werden einfach als Klassenname angefügt:

```html
<ul>
    <li class="fragment roll-in" data-fragment-index="2">Appears second</li>
    <li class="fragment grow" data-fragment-index="1">Appears first</li>
</ul>
```

### Hintergründe und Übergangseffekte

Jede Folie kann ihre eigene Hintergrundfarbe und/oder win Hintergrundbild haben. Dieser werden als `data`\-Attribute an die Slide geschrieben. Den Übergangseffekt für die Folien kann man global festlegen, es besteht aber die Möglichkeit, per Folie diesen Wert zu überschreiben.

Attribute die an eine einzelne Slide festgemacht werden, schreibt man im Markdown so:

```md
<!-- .slide: data-background="#ff0000" data-transition="linear" -->
# Folie 2

Der Text auf Folie 2.
```

### Tastentricks

Zwei Quickwins die reveal.js mitbringt sind noch das leichte Umschalten in den Fullscreenmodus. Während der Präsentation einfach Taste **f** drücken, schon ist man im Präsentationsmodus des Browsers. Mit der **ESC**\-Taste verlässt man diesen Modus wieder. Ist man nicht im Fullscreen führt die **ESC**\-Taste übrigens in den sogenannten Overviewmodus, mit der man eine Draufsicht auf seine komplette Präsentation bekommt. Eine gute Ansicht um den Zuhörer am Beginn auf die kommenden Themen vorzubereiten, beispielsweise. Hierin kann man wieder navigieren. Den Overviewmodus kann man auch mit der Taste **o** aktivieren.

Wie schon erwähnt, mit den Pfeiltasten kann man sich durch die Slides navigieren, **Space** und **SHIFT-Space** gehen linear vorwärts und rückwärts. Man kann noch weitere Tasten dafür festlegen, standardmäßig machen das noch **n** für _next_ und **p** für _previous_.

Mit den Tasten **b** oder **.** wird der Bildschirm schwarz geschaltet, beispielsweise, wenn man in einem anderen Fenster außerhalb der Präse etwas zeigen möchte, oder externen Filminhalt hat o.ä.

### Speakernotes

Ich hatte nun schon ein paar Mal die Speakernotes angesprochen. Die werden, jedenfalls, wenn man die Node-Version laufen lässt (mit `grunt serve`, s.o.), direkt mitgeliefert. Einfach während die Präse im Bild ist, die Taste **s** drücken, und in einem neuen Browserfenster poppen die ggf. eingetragenen Notizen auf. Dazu gibt es ein Bild der aktuell angezeigten Folie und der darauffolgenden, sowie einen Timer. Alles was man so braucht, um eine professionelle Präse abzuhalten.

Ich hatte bei meinem Vortrag leider mit den Speakernotes ein paar technische Probleme, u.a. mit Links in den Slides bzw. Notizen. Links stellen ein kleines Problem für reveal.js dar, dazu gleich noch mehr, jedenfalls schienen die Notes den Kontakt zur Präse verloren zu haben, beides lief auseinander. So leicht lässt sich das für mich nicht reproduzieren, weil man während einer Präse leicht in Panik gerät, geht mir jedenfalls so. In einer späteren Präsentation beim [Holtzbrinck Technology Day 2014](https://www.youtube.com/watch?v=45UcjyClLbY) hat es aber problemlos geklappt.

### Konfiguration

Über den Konfigurationsabschnitt in der HTML-Datei der Präsentation kann man nochmal weitere Funktionen freischalten und beeinflussen.

```
Reveal.initialize({
    controls: true, // Navigationspfeile zeigen
    progress: true, // Fortschrittsbalken
    center: true, // Inhalt zentrieren

    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

    // Parallax scrolling
    parallaxBackgroundImage: 'img/wood.jpg',
    parallaxBackgroundSize: '2880px 1920px',
```

Die [Liste der Optionen](https://github.com/hakimel/reveal.js/#configuration), mit denen man Standardverhalten vorgeben kann ist lang. Vom Anzeigen einzelner Option, Standardwerte für Effekte, Einrichten eines parallaxen Hintergrundbildes oder geänderter Tastenkombinationen ist einiges möglich.

## Probleme

Probleme gibt es auch, die betreffen aber eher alle HTML-Präsentationen. Bei eingeschaltetem Fullscreenmodus bekommt man schnell Probleme, wenn man versucht Links innerhalb der Vortragsfolien aufzurufen, was ja erstmal nahe liegt. Wenn man einen Link in einem neuen Tab oder neuem Fenster öffnet, fliegt man aus dem Fullscreenmodus natürlich wieder raus. Das ist zwar an sich noch keine dramatisches Problem, nur sollte man den Umgang damit vielleicht vorher einüben, vor allem in der Situation mit zwei Bildschirmen, bei denen man sich auf die Notizen vor sich konzentriert, erfordert das teilweise etwas Übung (den Shortcut für das Wechseln zwischen zwei Fenstern einer Applikation muss beim Mac auch erstmal [an die richtige Stelle legen](http://www.ienno.de/fenster-wechseln-wie-windows/)). Einfacher wird es, wenn man einfach einen komplett anderen Browser hernimmt und alle Links darin sozusagen vorbereitet. Dorthin kann man dann direkt springen, wobei die Präse im Hintergrund im Fullscreen offen bleibt. Das hat mir bisher am besten gefallen.

## Und dann noch

Das soll es für einen Einsteigerartikel aber auch gewesen sein. Es soll aber nicht unerwähnt bleiben, dass man sich _natürlich_® noch eigene Themes für reveal.js anlegen kann, man jede Menge Erweiterungsmöglichkeiten hat, sich per Javascript an [alle möglichen Events](https://github.com/hakimel/reveal.js/#ready-event) zu hängen, überhaupt hat reveal.js ein [ausgewachsenes API](https://github.com/hakimel/reveal.js/#api). Es bringt ein Theme für Codebeispiele mit, kann Bild stretchen, man kann prima Videos einbetten, der PDF-Export funktioniert über den Druckendialog. Und über [Multiplexing](https://github.com/hakimel/reveal.js/#api) kann man seine Präsentation auch direkt auf den Smartphones und Tablets der Besucher anzeigen. Ich habe jetzt selbst noch nicht alles ausprobiert.

Artikelbild:  [Bestimmte Rechte vorbehalten](https://creativecommons.org/licenses/by-nc-sa/2.0/) von [Photogestion](https://www.flickr.com/photos/photogestion/)  {:.copyright}
