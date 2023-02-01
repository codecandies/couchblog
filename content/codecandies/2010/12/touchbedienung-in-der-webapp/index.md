---
title: "Touchbedienung in der Webapp"
date: "2010-12-01"
tags:
  - "Gecodet"
keywords:
  - "iPad"
  - "Javascript"
  - "jQuery"
---

![Bildergalerie, iPad Version](/img/codecandies/bildergalerie.jpg)

Die Touchbedienung ist einer der großen Unterschied zwischen Tablet- und Desktopcomputer. Dieses Bedienkonzept, wie es der Nutzer inzwischen auch schon aus den sog. _nativen_ Apps gelernt hat, so sinnvoll wie möglich umzusetzen und zu nutzen, sollte auf jeden Fall Teilaufgabe einer _HTML5-App_ sein. Leider stehen der App im Browser nicht alle Schnitsstellen und Fähigkeiten zur Verfügung, die bei der Programmierung einer nativen App genutzt werden können. Darauf kommt es aber allein auch nicht an, wie gesagt, es geht eben auch und vordringlich um das Bedienkonzepte.

Als _alten Hut_ muss man zum Beispiel die Bedienung mit Knöpfen sehen, denn _Buttons_ sind eben typischerweise Klickziele für den Mauszeiger und weniger für den Finger. Obwohl ein Button natürlich auch in der Touchbedienung funktionieren kann; dann muss er aber groß und gut zu treffen sein, und auch noch erkennbar, wenn der Nutzer den Finger darauf legt. Trotzdem, ein Button zum Vor- und Zurückblättern in einer Bildergalerie, ist nicht wirklich _tabletgemäß_.

Um es kurz zu machen: in einer [Bildergalerie wie dieser hier](http://www.zeit.de/wissen/2010-11/fs-schnueffelratten-landminen) will der Nutzer _sliden_ – mit dem Finger das Bild aus dem Viewport schieben – und nicht Knöpfe drücken. In der Tabletversion haben wir das im Ansatz umgesetzt. Nutzt man die Seite mit dem iPad, kann man mit dem Finger von einem Bild zum nächsten navigieren. Da ich danach gefragt wurde, will ich kurz erklären wie das funktioniert (und danach auch noch dazu kommen, was noch verbessert werden muss).

Zunächst mal haben wir das Konzept der meisten Bildergalerien auf ZEIT ONLINE übernommen. Die bestehen zum Ladenzeitpunkt nur aus ihrem ersten Bild, die restlichen Bilder werden nachgeladen und versteckt horizontal rechts vom ersten Bild aufgereiht. Klickt man einen der Buttons wird der Container mit den Bildern einfach immer um Bildbreiter nach links oder rechts bewegt.

Die Bedienung durch die Buttons haben wir nur durch die Touchbedienung erweitert. Vielleicht sei kurz erwähnt wie Javascript einen solchen Touchevent sieht: es gibt die vier Events `touchstart`, `touchmove`, `touchend` und `touchcancel`. Die ersten drei laufen immer nacheinander ab, wobei touchmove solange wiederholt wird, wie man mit dem Finger über die Touchoberfläche _slidet_. `touchcancel` tritt auf, wenn eine Touchaktion abgebrochen wird, bspw. wenn man mit dem Finger über den Bildschirm hinaus geht. Die Events haben als Eigenschaften (man kennt das von Mouseevents) u.a. die Bildschirmkoordinaten, wo sie ausgelöst wurden.

Damit lässt sich also leicht erkennen, ob zwischen `touchstart` und `touchend` eine Bewegung, also ein Swipe stattgefunden hat. Hier mein vereinfachtes, beispielhaftes jQuery-Plugin dazu (nur als Beispiel, nicht zur Implementation gedacht oder empfohlen):

```js
$.fn.addSomeTouch = function (options) {
  var xmoved = 0,
      xstart = 0;
  return this.each( function() {
    // touchstart event
    $( "img", this ).bind( "touchstart", function () {
      // jeder Finger ist ein Feld im Array // hier: 1-Finger-Geste
      if( event.touches.length == 1 ) {
        // Startpunkt merken
        xstart = event.touches[0].pageX;
      }
    });
    // touchmove event
    $( "img", this ).bind( "touchmove", function () {
      // Bewegungsentfernung messen
      xmoved = event.touches[0].pageX - xstart;
    });
    // touchend event
    $( "img", this ).bind( "touchend", function () {
      // Limit für Verzögerung
      if( xmoved >= 50 ) {
        alert( "I was touched and will move left." );
      } else if( xmoved <= -50 ) {
        alert( "I was touched and will move right." );
      }
      // Reset
      xstart = 0; xmoved = 0;
    });
    $( "img", this ).bind( "touchcancel" , function() {
      // bei Abbruch zurücksetzen
      xstart = 0;
      xmoved = 0;
    });
  });
};
```
Wie gesagt, das ist kein Code für den Produktionseinsatz.

Und was stimmt jetzt nicht? Nun, im Moment setze ich die Fingerbewgung nur als Schalterersatz ein. D.h., die Reaktion ist dieselbe, als würde man auf den Links- oder Rechtsknopf drücken, die ehrlicherweise ja auch noch da sind. Da bleibt ja noch Raum für die Weiterentwicklung, denn so richtig _responsiv_ ist das ja noch nicht.

Und am Schluss noch ein schöner Link dazu: bei [Touching and Gesturing on the iPhone](http://www.sitepen.com/blog/2008/07/10/touching-and-gesturing-on-the-iphone), gibt's viele Grundlagen nachzulesen und das meiste gilt auch für's iPad.
