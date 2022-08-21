---
title: "Mozilla 3.6beta"
date: "2009-11-01"
tags:
  - "Gefunden"
keywords:
  - "Browser"
  - "CSS"
  - "Firefox"
---

Seit vorgestern gibt es die erste [Betaversion des Firefox 3.6 zum Download](https://developer.mozilla.org/devnews/index.php/2009/10/30/firefox-3-6-beta-1-is-now-available-for-download/) und es gibt damit einige recht interessante Neuerungen im Bereich CSS.

### \-moz-background-size

Da ist Mozilla ja etwas hinterher gewesen, denn die Größe des Hintergrundbildes anzupassen gestatten [andere Browser schon länger](http://www.css3.info/preview/background-size/) (Opera ab 9.5, Safari3 und Konqueror). Dabei lässt sich das Hintergrundbild von der `-moz-background-origin` auf verschiedene Arten vergrößern und/oder verkleinern. Neben Angaben in Länge oder Prozent, sind auch Schlüsselwörter wie `auto`, `contain` (so groß wie möglich, wenn das Bild kleiner als die Größe des Container ist) und `cover` (so klein wie möglich, wenn das Bild größer ist) erlaubt. Die letzten beiden Schlüsselwörter sind bisher firefoxproprietär.

### image-rendering

Passend dazu wird die Eigenschaft `image-rendering` eingeführt, eine Analogie zu Microsofts `-ms-interpolation-mode`. Während man bei M$ aber zwischen `bicubic` und `nearest-neighbour` wählen kann, bietet Mozilla vier Werte an: `auto`, `optimizeQuality`, `optimizeSpeed` und `-moz-crisp-edges`. Wobei im Moment zumindest gilt: auto = optimizeQuality und optimizeSpeed = -moz-crisp-edges. Jedenfalls soll damit dem Browser eine Renderingmethode für vergrößerte oder verkleinerte Bilder an die Hand gegeben werden.

### -moz-linear/radial-gradient

Ebenfalls neu und im Hintergrund tätig sind `-moz-linear-gradient` und `-moz-radial-gradient`. Firefox stellt damit die Möglichkeit zur Verfügung, Farbverläufe zu generieren, die sich in der Verlaufsrichtung genauso beeinflussen lassen, wie in den Verlaufslänge. Außerdem können beliebig viele Vias bzw `color-stop`s agebeben werden, d.h. man kann auch (wenn man das will) Regebogenverläufe erzielen. Democode dazu:

```css
.beispiel {
  background: -moz-linear-gradient(left, right,
      from(red), color-stop(16%, orange),
      color-stop(32%, yellow), color-stop(48%, green),
      color-stop(64%, blue), color-stop(80%, indigo),
      to(violet));
}
```

Neben den Farbschlüsselwörtern funktionieren natürlich auch Hexoces, `rgb()` und (Achtung!) auch `rgba()`, also auch Transparenzen.

Dieses Feature gibt es übrigens auch schon bei anderen Browsern, nämlich seit IE 5.5 als `filter: progid:DXImageTransform.Microsoft.Gradient()` und auch in Safari 4, als `-webkit-gradient(linear,…)` (man ist sich mal wieder nicht über die Syntax einig).

### Weitere Mediaqueries

Bereits ab Version 3.5 unterstützt Firefox die [CSS3 media queries](http://www.w3.org/TR/css3-mediaqueries/), womit man Stylesheets anhand bestimmter Eigenschaften des Mediums auswählen kann, auf dem eine Website angezeigt wird. Einige Berühmtheit hat dieses Feature bereits durch das iPhone erlangt, denn mit `<link media="only screen and (max-device-width: 480px)" href="../iphone.css" type="text/css" rel="stylesheet"/>` kann man eben ein Medium ansteuern, dessen maximale Darstellungsbreite 480px ist, also bspw. das iPhone. Solche queries kann man über viele Eigenschaften machen, bspw. Farbtiefe, Seitenverhältnis des Bildschirms, dessen Höhe und Breite, die Höhe und Breite des Viewports und einige mehr.

Firefox ab 3.6 kann noch ein paar mehr, mozilla spezifische Queries verstehen und auswerten. Damit lassen sich tatsächlich sehr spezielle Dinge über das genutzte Medium erfahren, zum Beispiel, ob die Website unter einem ungethemeten Windows angezeigt wird (`moz-windows-classic`) oder unter OS X mit „Graphite” Erscheinungsbild (`-moz-mac-graphite-theme`) oder eben – und das wirds m.M. nach interessant – ob ein Touchscreen vorliegt: `-moz-touch-enabled`. Mit letzterm könnte man bspw. auch für Touchscreens das normale CSS verwenden, aber Buttons einfach ein wenig vergrößert darstellen. Da ist noch einiges drin… zur Zeit aber nur proprietär für Firefox.

### :indeterminate

Ich geb hier mal zu, dass ich nicht wusste, dass man mit Javascript seit Firefox 3.2 eine Checkbox den Zustand „indeterminate” zuweisen kann `document.getElementById(”check1″).indeterminate = true;`, oder [was es damit auf sich hat](https://developer.mozilla.org/web-tech/2009/02/05/a-new-checkbox-type/) (wenn man das Beispiel sieht, ist alles klar). Ab FF3.6 kann man diesen Zustand über eine CSS-Pseudoklasse nutzen, also bspw. die Hintergrundfarbe des Checkbox ändern.

### WOFF
Und _last but not least_ unterstützt Firefox 3.6 das Fontformat [WOFF](http://people.mozilla.com/~jkew/woff/woff-2009-09-16.html) (Web Open Font Format). WOFF erklärt sich so:

> WOFF (Web Open Font Format) is a new web font format developed by Mozilla in concert with Type Supply, LettError, and other organizations. It uses a compressed version of the same table-based sfnt structure used by TrueType, OpenType, and Open Font Format, but adds metadata and private-use data structures, including predefined fields allowing foundries and vendors to provide license information if desired.

Ich sag mal [Erik Spiekermann befürwortet das neue Format](http://www.edenspiekermann.com/woff/) und es sieht so aus, als das dies der Weg aus der Linzenzfalle beim einbetten von Schriften via [`@font-face`](/codecandies/2009/06/30/embedden-sie-jetzt/) ist.
