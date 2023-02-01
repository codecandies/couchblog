---
title: "Sliden und Scrollen mit jQuery"
date: "2008-12-09"
tags:
  - "Gecodet"
keywords:
  - "Javascript"
  - "jQuery"
---

Elemente eines Webseite ein- und auszublenden gehört ja irgendwie zum Handwerkszeug aller Web2.0-Geschädigten, denn dadurch entstehen Effekte, die an Destop-Anwendungen erinnern, statt an einfache Webseiten. [jQuery](http://jquery.com) bringt das Handwerkzeug dazu natürlich schon mit: `show/hide`, `fadeIn/Out`, `slideDown/Up/Toggle` und `aninamte`. Kombiniert man diese Effekte, kommt man schon relativ weit.

Jedoch, man muss sich andererseits auch vergegenwärtigen, dass es sich um einfache Effekte handelt. Wenig Code, aber auch wenig komfortabel, im Zweifelsfall ein wenig ruppig. So können Einblendeffekte schon mal etwas ruckeln (je nach Browser) und Slides eben auch an der _falschen Stelle_ enden. Mit ein wenig Gehirnschmalz und ein paar Handgriffen kommt man jedoch ebenfals zum Ziel…

Gänzlich nutzlos ist ein Effekt natürlich, wenn man ihn nicht sehen kann. Das passiert zum Beispiel, wenn der Effekt am unteren Ende der Seite stattfinden soll, bspw. beim Einblenden eines Footers. Hier ein Beispiel: [Sliding mit slideDown](http://projektkrematorium.de/codecandies/sliding/normal.html) \[ggf. Browserfenster ein weig verkleinern\].

```js
  $(document).ready(function() {
    $(".slideDownClick").click(function() {
      $(".hidden").slideDown("slow");
    });
  });
```

Klickt man auf den roten Text unten, findet das _hineinsliden_ des unsichtbaren DIV im unsichtbaren, sozusagen unter Ausschluss der Öffentlichkeit statt. **Jetzt macht man sich solch eine Arbeit, und dann sowas!**

Dieser Frechheit muss begegnet werden. Zum einfachen Sliding-Effekt muss eine _Bewegung_ der Seite zugefügt werden, ein Scrollen also. Eine kurze Überlegung ergibt hier: soll etwas vom unteren Browserfensterrand ins Bild _sliden_, muss man eigentlich nur scrollen, also animiert scrollen.

Da hatte ich ja mal bei [Learning jQuery](http://www.learningjquery.com/2007/09/animated-scrolling-with-jquery-12) etwas dazu gelesen, dort werden alle Sprünge zu Ankern mit einer Animation versehen:

```js
  // Animated Scrolling with jQuery 1.2
  // by Karl Swedberg
  // http://www.learningjquery.com/2007/09/animated-scrolling-with-jquery-12
  $(document).ready(function(){
    $('a\[href\*=#\]').click(function() {
      if (location.pathname.replace(/^\/\/,'') == this.pathname.replace(/^\/\/,'') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('\[name=' + this.hash.slice(1) +'\]');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body').animate(
            {scrollTop: targetOffset}, 1000);
            return false;
          }
        }
      });
    });
```

Dies wird nun kombiniert:

```js
  // Showing an element an scroll to it
  $.fn.betterSlide = function(destination) {
    // where in px from top is the element?
    var dest = $(destination).offset().top;
    // show the element and as callback scroll it into the viewport (if not animated)
    jQuery(this).show(1, function() {
      $("html:not(:animated),body:not(:animated)").animate({
        scrollTop: dest
      }, 2000, "swing" );
    });
  };

  $(document).ready(function() {
    $(".betterSlideClick").click(function() {
      $(".hidden").betterSlide("#clicker");
    });
  });
```

Die [Demo dazu](http://projektkrematorium.de/codecandies/sliding/better.html). Nochmal zur Erklärung: zunächst mal wird nachgesehen, wo das Element ist, zu dem gescrollt werden soll. Da nimmt man ein Element direkt **über** dem anzuzeigenden Element (siehe auch unten an dieser Seite). Dann zeigen wir unser verborgenenes Element mit `show(1)` und nutzen die Callbackfunktion von show() (`show( speed, callback )`) um das Scrolling auszulösen, so findet nicht beides gleichzeitig statt. Animiert werden (und das ist wichtig) `<html>` bzw. `<body>`, wenn sie nicht gerade schon animiert werden `:not(:animated)`. Die Zei für den Effekt ist 2000ms, von den beiden in der Standard-jQuery-Version nutzbaren Easing-Methoden `linear` und `swing`, habe ich mich für `swing` entschieden.

Fertig, der Footer scrollt in den Viewport des Browsers.
