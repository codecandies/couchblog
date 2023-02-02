---
title: "Mehr Spass mit CSS3 in Webkit und Safari"
date: "2010-02-25"
tags:
  - "Gecodet"
keywords:
  - "CSS"
  - "Safari"
  - "Webkit"
---

Anmerkung vorne weg: dieser Artikel enthält Demonstrationen von CSS-Techniken, die weder in allen Webbrowsern _schon_ noch in RSS-Readern _jemals_ funktionieren werden.

Am weitesten bei der Implementierung von [CSS 3D Transformationen](http://www.w3.org/TR/css3-3d-transforms/) sind [Webkit (der Browser), Safari4 und mobile Safari (iPhone OS 3)](http://webkit.org/blog/386/3d-transforms/). In meiner Chrome 5.0.322.2dev-Version auf dem Mac funktioniert es noch nicht, sehr wohl aber im iPhone-Simulator. In der folgenden Demo (die nur Nutzer der genannten Browser live sehen können, für die anderen gibt's ein Video) wird eine einfache 3D Transformation gezeigt, basierend auf zwei Bildern, von denen eines um 180° auf der Y-Achse gedreht wurde, und dann werden auf "onclick" beide Ebenen gedreht. Bitte nicht nachmachen: den onlick-Event habe ich zu Demozwecken inline definiert, sowas macht man nicht. Und so sieht das ganze aus:



[![Demovideo](/images/codecandies/vlcsnap-00009.png)](https://www.youtube.com/watch?v=M8i15iEFJaY)

Nebenbei, die Bilder sind übrigens aus _Clerks II_, ein von mir dringend empfohlener Streifen über die soziale Lage in den USA. Hier jedoch zunächst als Beweis sozusagen der HTML-Code auf dem der Trick beruht:

```html
<div id="flip-container">
  <div class="card" onclick="jQuery(this).toggleClass('flipped');">
    <div class="front face">
      <img src="img/vorne.png" alt="Jay und Bob" />
    </div>
    <div class="back face">
      <img src="img/back.png" alt="Jay und Bob" />
    </div>
  </div>
</div>
```

Und hier das CSS mit allen Erklärungen in den Kommentaren.

```css
#flip-container {
  display: none; /* unsichtbar, stattdessen ist .video zu sehen \*/
  position: relative;
  height: 353px;
  width: 620px;
  z-index: 1;
}

/*
 * Hier die Magic, Teil 1:
 * mit diesem CSS-Mediaquery wird auf die Fähigkeit
 * geprüft, CSS 3D darstellen zu können
 * siehe auch: http://reference.sitepoint.com/css/mediaqueries
 */
@media all and (-webkit-transform-3d) {
  .video {
    display: none; /* Video ausblenden */
  }
  #flip-container {
    cursor: pointer;
    display: block; /* ausgeblendeten Container einblenden */
    -webkit-perspective: 800; /* unser Betrachtungsabstand zum Objekt, 200 wäre sehr nah, 1200 weit weg… */
  }
  .card {
    height: 100%;
    width: 100%;
    -webkit-transform-style: preserve-3d; /* weitere Möglichkeit: "flat", aber dann wäre der schöne Effekt des Drehens weg */
    -webkit-transition: -webkit-transform 1s; /* Dauer einer Drehung */
  } .face.back {
    /*
     * Magic Teil 2:
     * Das zweite Bild wird an der Y-Achse um 180° gedreht und ist dann hinter dem ersten Bild.
     */
    -webkit-transform: rotateY(180deg);
  }
  .face {
    position: absolute;
    height: 100%;
    -webkit-backface-visibility: hidden; /* gibt an, welches der beiden Bilder zu sehen ist, hier: das HINTERE ist versteckt */ }
  .card.flipped {
    /*
      * Der Magic dritter Teil:
      * per onclick wird die Klasse .flipped an das Element gesetzt,
      * die Transformation läuft ab, mit dem Zeitweit der Klasse .card, also 1s
      */
    -webkit-transform: rotateY(180deg);
  }
} /* Ende: @media \*/
```
