---
title: "HTML5-Elemente im IE ohne Javascript"
date: "2009-01-20"
tags:
  - "Gecodet"
keywords:
  - "HTML"
---

Bei [Peter Kröner steht's schon](http://www.peterkroener.de/html5-elemente-ohne-javascript-im-internet-explorer-verwenden/), aber ich trage das hier mal der Vollständigkeit halber mal nach: im [WHATWG Blog](http://blog.whatwg.org/) gibt es eine Anleitung, [wie man die neuen HTML5-Elemente für den IE stylen kann, wenn Javascript abgeschaltet ist](http://blog.whatwg.org/styling-ie-noscript). (Wie es mit JS [hatten wir schon](/codecandies/2009/01/14/neue-html5-elemente/).)

Simon Pieters schlägt einen Dreischritt vor:

> 1. Know what the DOM looks like and target other elements than the new elements for styling.
> 2. Use the universal selector (`*`) to target the right element.
> 3. Use `noscript`.

Dabei ist das Kernstück folgender CSS-Regeltrick: statt dieses schönen Konstruktes für Browser, die die Elemente stylen können…

```
article + header + h1 + p { font-weight:bold }
```

… schreibt man, speziell auf IE zugeschnitten…

```
body > * + * + h1 + p { font-weight:bold }
```

… ersetzt also die _unbekannten_ Elemente durch den universellen Selektor. Naja…

Ggf. auftretende Nebenwirkungen lassen sich vermeiden, in dem man sowas in ein Stylesheet nur für IEs ohne Javascript packt (das ist allerdings lustig):

```
<head>
    <!--[if IE]>
        <noscript><link rel="stylesheet" href="ie-noscript.css"></noscript>
    <![endif]-->
```

Darauf muss man nun wieder erstmal kommen. Im ganzen ziemlich großer Aufwand noch, aber immerhin, eine Möglichkeit.

> The above techniques might not be very scalable or might well impact maintanence, but the point of this article is to show that it is possible to use the new elements while still supporting IE with scripting disabled.
