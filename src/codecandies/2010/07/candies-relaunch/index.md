---
title: "Candies Relaunch"
date: "2010-07-26"
tags:
  - "Gecodet"
  - "Gebloggt"
keywords:
  - "CSS"
  - "HTML"
---

Was Feedlesern gar nicht auffällt, ist selbst für Besucher der Artikelseiten von Codecandies nur schwierig zu entdecken: am Freitag hat Codecandies ein neues Template bekommen. Dabei hat sich an der Artikeln nicht viel geändert, dafür erstrahlen die Homepage und alle Übersichtsseiten in neuem Glanze, nachdem ich hier in letzter Zeit viel herumexperimentiert hatte.

Dabei habe ich vor allem darauf Wert gelegt, viel der Techniken auszuprobieren, die ich in den letzten Wochen und Monaten an anderen Stellen gelernt habe. Darum ist auch viel mehr _unter der Motorhaube_ passiert, als die Dinge, die man nach aussen sehen kann. Namentlich sind das: Nutzung vieler neuer HTML5-Elemente, Verschlankung des CSS-Codes und Nutzung von _CSS media queries_ um eine angepasste Version für das iPad und Browser mit verkleinertem Fenster anzubieten, Verschlankung des Javascriptcodes, Verbesserung der Wordpress-Templates und meiner geliebten `functions.php`. Aber eins nach dem anderen.

## Welcome `figure` und `figcaption`

Das neue HTML5-Element `figure` gehört wirklich zu den sinnvollen Elementen, die schon immer gefehlt haben. Bei `figcaption` allein bin ich mir nicht so sicher. Der Name zeigt schon, dass man Schwierigkeiten hatte, das neue Element zu integrieren. In einem früheren Stadium war es auch tatsächlich geplant, die Elemente in `figure` als `Definitionslisten` zu gestalten. Mit diese Semantik war man schlussendlich aber nicht zufrieden, weshalb man ein eigenes Element erfinden musste und das erhielt den üblen Namen: `figcaption`. What a word. Ihhhh. Aber sei's drum, beide Elemente finden sich nun prominent in der Homepage wieder.

Außerdem habe ich die Seite, nicht nur visuell, sondern eben auch im Code, in `section`s unterteilt. Die HTML5-Elemente `header`, `article` , `footer` und noch ein paar mehr, waren schon vor diesem _Relaunch_ Teil des Codes. Damit bin ich der HTML5fizierung der Seite schon ein ganzes Stück weiter gekommen, ganz abseits der Buzzwordklopperei, rein im Code. Nun müsste man die Elemente nur noch ordentlich in den Artikeln nutzen können, ohne das Wordpress anfängt rumzumucken, aber da kümmere ich mich auch noch drum.

Eine neue Brotschrift gibt's nun auch, hier geht [Droid Serif](http://www.fontsquirrel.com/fonts/Droid-Serif) ins Rennen und ersetzt die Georgia, wo sie kann.

## CSS Media Queries

Man konnte ja schon vorher lesen, dass ich mich in der Vorbereitung auf das iPad schon ausgiebig mit den praktischen Media-Queries auseinanderhesetzt habe. Nun habe ich auch hier im Blog eine entsprechende Regeln implementiert. Ab sofort bekommen das iPhone im Portraitformat und Browser deren Fensterbreite unter **920px** liegt, eine verschmälerte Version der Seite angezeigt. Das kann ja jeder, der mit einem modernen Browser hier vorbeischaut leicht nachvollziehen, sonst hier auch mal ein Beispiel:

![So sieht es in breit aus…](/img/codecandies/relaunch_940.jpg)

![Hier die eher schmale Version.](/img/codecandies/relaunch_620.jpg)

Und so die schmale Version, 620px-einspaltig. Eigentlich hatte ich die schmale Version im _normalen_ Browser nur zum Testen genutzt, bis mir am Netbook auffiel, dass das natürlich auch für den Firefox durchaus Sinn machen kann.

Der eigentliche Seitencontent ist 940px breit, ich habe 20px Karenz gelassen, weil mir auffiel, dass wenn man bspw. genau 940px nimmt, der Sprung zur schmalen Version auch passiert, wenn er gar nicht nötig ist, zum Beispiel, wenn man das Fentser _genau_ auf Contentbreite bringen will. Insgesamt stört mich der Moment des _schwitchens_ ein wenig, das ist schade, das das so abrupt erfolgt.

```css
@media only screen and (max-width:920px), only screen and (max-device-width: 768px) and (orientation:portrait) { … }
```

Für das iPad im Landscape-Modus wird übrigens kein spezielles CSS geliefert. Stattdessen habe ich versucht, die _normale_ Seite so iPad gerecht wie möglich zu gestalten.

Zudem werden wohl nicht alle _art directed_ Artikel in die schmale Version passen. Da kann der geneigte iPad-Nutzer ja noch den Landscape-Modus nutzen.

## Wordpress- und/oder Javascriptcode

Nach längerer Zeit bin ich auch mal dabei gegangen und habe meine `functions.php` ein wenig aufgeräumt. Da meine Templates immer ziemlich egozentrisch gestaltet sind, habe ich keine Plugins gebaut, sondern alles was ich an zusätzlichen Funktionen benötigte in diese Datei codiert. Kann man machen, ist wie gesagt nicht so freundlich, wenn man das Theme veröffentlichen will. In der genannten Datei hat sich die letzten Jahre über aber auch ziemlich viel Müll angesammelt, den ich ersatzlos entsorgt habe.

Für meine _art directed_ Artikel habe ich mir ja selbst eine kleine Erweiterung geschrieben, mit der man zusätzliche CSS-Sourcen als Meta-Feld an den Artikel hängen kann. Ich habe mir nun das [Art Direction Plugin](http://wordpress.org/extend/plugins/art-direction/) nocheinmal genauer angesehen und es wieder verworfen, nicht nur wegen der dämlichen Zeile Pay your respects to print, get Art Direction. auf der Plugin-Seite, sondern auch weil ich es für überflüssig halte. Stattdessen habe ich meine Lösung erweitert und verbessert, sowie das [Silbentrennungsscript](http://code.google.com/p/hyphenator/) als Option auch für andere Artikel zugänglich gemacht.

Womit wir beim Javascript sind, denn auch hier habe ich ein wenig den Hammer kreisen lassen. Früher globale Scripte, die nur auf einigen wenigen Seiten gebraucht wurden, werden nun nur noch an den entsprechenden Orten geladen. Dafür habe ich mit meiner selbstgeschriebenem Artikelgalerie mal wieder echten Betacode auf Euch losgelassen. Das ist wie immer _work in progress_.
