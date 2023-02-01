---
title: "Rezepte gegen die DIVterie"
date: "2009-05-08"
tags:
  - "Gecodet"
keywords:
  - "CSS"
  - "HTML"
---

![Diphterie aka. Corynnbacterium Diphtheria (Foto: CDC)](/img/codecandies/2653983350_a8762e7391_o.jpg)


Wir wissen ja schon lange, dass _valides_ HTML noch kein _gutes_ HTML ist. [Kalter Kaffee](http://webstandard.kulando.de/post/2009/05/05/valider-code-ist-nicht-gleich-guter-code). Sehen wir dabei einmal vom durchaus validem Tabellenlayout ab, sind die _größten Feinde_ mangelnde semantische Auszeichnung und in deren Schlepptau immer wieder _`DIV`terie_, soll heissen: übermäßige Benutzung von `DIV`\-Containern, wo andere Elemente angebrachter wären. Bekannte Nebenwirkung dieser Krankheit sind übrigens _Klassizismus_, _`ID`ologie_ und natürlich _Ver`SPAN`nung_.

Zugegeben: _`DIV`terie_ ist durchaus verbreitet (ich selbst zeichne für eine Seite verantwortlich, die deutlich darunter leidet) und auch irgendwie ansteckend. Infiziert von einem CSS-Framework kann man sich schon mal anstecken. Dem begegnet HTML5 übrigens (demnächst), indem ein ganzes Rudel semantisch bedeutungsvoller Block-Level-Elemente [eingeführt werden](/codecandies/2009/01/14/neue-html5-elemente/ "Archiv: Neue HTML5-Elemente"), die demnächst so manches `DIV` ersetzen könnten. Das würde auch ein wenig gegen die Nebenwirkungen helfen, aber soweit sind wir wohl noch nicht.

### Wo ist eigentlich das Problem

_`DIV`terie_ kann man von zwei Seiten betrachten: zunächst einmal ist ein `DIV` im Zusammenhang ziemlich bedeutungslos, ein Container, in den man Sachen packt, von denen dann niemand weiss, zu was sie gehören und warum sie dort herumlungern. Das kann man manchmal sogar brauchen, meist wäre es aber sinnvoll, wenn man ein Element einsetzt, ihm auch eine Bedeutung zu verleihen. Ja, **wenn man ein Element einsetzt.** Denn man kann und muss _`DIV`terie_ natürlich auch noch von einer anderen Warte aus beleuchten: zuviele `DIV`s, Klassen, IDs machen den Code fett, das HTML wächst krankhaft an, das zugehörige CSS gleich mit. **Schwerer Code ist langsamer Code.** Man mag das in Zeiten von Highspeed-DSL-Anschlüssen vernachlässigen wollen, aber im professionellen Umfeld kann man das nicht: die Menge an Code ist letztendlich so hoch, dass es auf jedes gesparte Zeichen ankommt.

### Was tun?

Beiden Betrachtungsweisen begegnen wir mit einer einfachen Regel:

> Prüfe zunächst, **ob** Du wirklich ein Element brauchst. Wenn Du Dir sicher bist, dass Du eines brauchst, prüfe alle Möglichkeiten kein `DIV` zu verwenden. Wenn all das nichts geholfen hat…

Das ist jetzt schwieriger, als es klingt. Hilfreich ist es übrigens, wenn man ein Bild von der Seite oder besser noch _den Seiten_, die man bauen will, hat. Nein, keinen Photoshop-Ausdruck, sondern eine Skizze, auf der man die benötigten Elemente (bspw. als Kästen) anordnet. Schon in dieser Phase lassen sich `DIV`s vermeiden. Wenn man einfach drauf loscodet ist man immer in Gefahr noch hier und da schnell noch einen Container drum zu ziehen, eine Klassen oder gar ID dranzuschreiben.

### Ein Beispiel

Hier mal ein Codeschnipsel als **schlechtes Beispiel**, bitte nicht nachmachen:

```html
<!-- Negativ-Beispiel, nicht nachmachen -->
<div class="container clearfix">
  <div class="teaser">
    <img alt="Lorem ipsum dolor sit amet" title="Lorem ipsum dolor sit amet: velit esse cillum dolore" src="loremipsum.jpg" class="img_left" />
    <h3 class="text">
      <a href="loremipsum.html" title="Lorem ipsum dolor sit amet">
        <span class="bold">Lorem ipsum:</span>
        Dolor sit amet
      </a>
    </h3>
    <div class="teasertext">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </div>
  <div class="teaser">
    <img alt="Lorem ipsum dolor sit amet" title="Lorem ipsum dolor sit amet: velit esse cillum dolore" src="loremipsum.jpg" class="img_left" />
    <h3 class="text">
      <a href="loremipsum.html" title="Lorem ipsum dolor sit amet">
        <span class="bold">Lorem ipsum:</span>
        Dolor sit amet
      </a>
    </h3>
    <div class="teasertext">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </div>
</div>
```

Dazu würde folgendes CSS passen (es passt auch in der Fehlerhaftigkeit, also bitte nicht als Vorlage verwenden):

```css
div.container {
  border: 1px solid #000;
  color: #000;
  font-size: 12px;
  margin: 0;
  padding: 0;
}

.container .teaser {
  margin: 10px;
}

img.img_left {
  float: left;
  margin: 0 10px 7px 0;
}

h3.text {
  font-size: 14px;
  font-weight: 400;
}

span.bold {
  font-weight: 700 !important;
}

.container .teaser .teasertext {
  font-size: 10px;
  line-height: 14px;
}
```

Geht so gar nicht! Geradezu klassisch übrigens, die Klasse "container". Aber mal im Ernst: hier haben wir einen Container, der mehrere Text-Bild-Blöcke enthält, die den gleichen Aufbau haben. Und einen typischen Fall von _`DIV`terie_. Zunächst wäre zu überlegen, ob man nicht ein paar `DIV`s und ein paar Klassen loswerden kann. Möglicherweise so:

```html
<div class="container clearfix">
	<div>
		<img alt="Lorem ipsum dolor sit amet" title="Lorem ipsum dolor sit amet: velit esse cillum dolore" src="loremipsum.jpg" />
		<h3>
			<a href="loremipsum.html" title="Lorem ipsum dolor sit amet">
				<strong>Lorem ipsum:</strong>
				Dolor sit amet
			</a>
		</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
	</div>
	<div>
		<img alt="Lorem ipsum dolor sit amet" title="Lorem ipsum dolor sit amet: velit esse cillum dolore" src="loremipsum.jpg" />
		<h3>
			<a href="loremipsum.html" title="Lorem ipsum dolor sit amet">
				<strong>Lorem ipsum:</strong>
				Dolor sit amet
			</a>
		</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
	</div>
</div>
```

Von oben nach unten: wenn wir davon ausgehen, dass der "Container" gebraucht wird, bspw. weil die Teaser eine inhaltliche Einheit dartellen und ggf. mit einer `border` umschlossen werden sollen, dann fällt zunächst das `<div class="teaser">` auf. Gäbe es keine anderen `DIV`s in dem Block, wäre die Klasse überflüssig. Ebenso scheinen alle Bilder die gleiche Klasse zu haben. Dann weg damit. Das `<h3 class="text">` war ja schon ein netter Versuch, die Klasse allerdings ist überflüssig und ausserdem ist "text" ein denkbar schlechter Klassenname. Weg bitte auch mit dem (zugegeben etwas konstruierten) `<span class="bold">`, dafür bitte `<strong>` verwenden. Ebenso _falsch_ ist `<div class="teasertext">`, denn dort passt viel besser ein `<p>`. Das ist ja nun schon ein wenig kompakter, aber auch sinniger, wie ich finden muss. Alle Elemente sind immer noch voll per CSS ansprechbar und können genauso gestyled werden wie oben.

Passendes CSS sähe dann so aus:

```css
.container {
  border: 1px solid #000;
  color: #000;
  font-size: 10px;
  line-height: 14px;
}

.container div {
  margin: 10px;
}

.container img {
  float: left;
  margin: 0 10px 7px 0;
}

.container h3 {
  font-size: 14px;
  font-weight: 400;
}
```

Zur Erläuterung: Durch die bessere semantische Auszeichnung haben wir auch im CSS schon viel gewonnen. Ich mühe mich immer redlich eine Balance zwischen generellem und spezialisierten CSS-Anweisungen zu finden, es stellen sich also häufig Fragen wie: »sind vielleicht alle H3 auf der Seite gleich, oder nur das in dem Container?«. Das ist im zweiten CSS-Schnipsel besser umgesetzt. Eine Formatierung des `<p>` ist z.B. – vorrausgesetzt es wird an anderer Stelle nicht umformatiert – gar nicht nötig, da es schon die _geschickt_ gewählten Eigenschaften des Containers erbt (zugegeben: man müsste sich ggf. noch um `margin` und `padding` kümmern). Ebenso sind die übertriebenen Klassenverkettungen (wie `.container .teaser .teasertext`) entfernt.

Das ist nun schon ganz guter Code, geht aber vielleicht auch noch besser. Eben schrieb ich, wir hätten es mit Container, der mehrere Text-Bild-Blöcke enthält, die den gleichen Aufbau haben zu tun. Klingt fast nach einer Liste von Text-Bild-Blöcken. Wenn man will, kann man sich also komplett aller `DIV`s entledigen:

```html
<ul class="teaserlist">
  <li>
    <img alt="Lorem ipsum dolor sit amet" title="Lorem ipsum dolor sit amet: velit esse cillum dolore" src="loremipsum.jpg" />
    <h3>
      <a href="loremipsum.html" title="Lorem ipsum dolor sit amet">
        <strong>Lorem ipsum:</strong>
         Dolor sit amet
      </a>
    </h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </li>
  <li>
    <img alt="Lorem ipsum dolor sit amet" title="Lorem ipsum dolor sit amet: velit esse cillum dolore" src="loremipsum.jpg" />
    <h3>
      <a href="loremipsum.html" title="Lorem ipsum dolor sit amet">
        <strong>Lorem ipsum:</strong>
         Dolor sit amet
      </a>
    </h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </li>
</ul>
```

Das CSS dazu:

```css
.teaserlist {
  border: 1px solid #000;
  color: #000;
  font-size: 10px;
  line-height: 14px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.teaserlist li {
  margin: 10px;
}

.teaserlist img {
  float: left;
  margin: 0 10px 7px 0;
}

.teaserlist h3 {
  font-size: 14px;
  font-weight: 400;
}
```

Beim CSS ist der Gewinn nicht mehr so groß, aber dafür ist der HTML-Code semantisch ausgezeichnet **und** schlanker als der Ausgangscode. In meinen Augen _besserer_ Code.
