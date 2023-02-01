---
title: "SVG, yeah you know me"
date: "2016-04-20"
tags:
  - "Generde"
keywords:
  - "SVG"
coverImage: "unspecified.png"
---

Update: Der hier besprochene Bug [wurde inzwischen gefixt](http://nicobruenjes.de/2016/05/safari-svg-sprite-bug-fixed/).

Oder eher _I know you_. Über den meiner Meinung nach vorliegenden [Safari SVG Sprite Bug](http://nicobruenjes.de/2016/04/safari-svg-sprite-bug/) hatte ich ja schon berichtet. Kurz zusammengefasst: neuere (mobile) Safari laden ein SVG-Sprite jedesmal komplett runter, wenn ein SVG-Icon daraus angezeigt wird. Das konnten beim ersten Aufruf ohne gefülltem Cache bei der Homepage von [zeit.de](http://zeit.de) schon mal bis zu 17MB sein. Um es kurz zu machen, die Welt interessiert sich nicht dafür, weder Apple, die den Safari baut, und auch nicht die Autoren von _svg4everybody_, die die SVG-Sprite-Technik populär gemacht haben (unter Webentwicklern).

Update: Martin Wolf hat den [Screencast zum Bug gedreht](https://www.youtube.com/watch?v=OAbmDlnq1UE).

## Lösungssuche

Also mussten wir anderweitig handeln und die Sprites ersetzen. Wenn man nun einmal SVG eingeführt hat, will man nicht wieder zurück auf Pixelbilder umsteigen. Ich habe also lange recherchiert, nach Techniken gesucht, versucht das Problem irgendwie wegzubekommen, allerdings ohne Erfolg. Eine Idee war, und die halte ich durchaus für valide, die SVG per XHR in die Seite zu laden. Für uns sprachen jedoch zwei entscheidende Dinge dagegen:

- **progressive enhancement**: es gibt in dem Sinne keine wirkliche Basis, von der die AJAX-Lösung enhancen könnte, ausser vielleicht man schreibt einen Text anstelle des SVG und lädt an dieser Stelle dann die Grafik hinein. Grafik und Text nehmen aber nur selten den gleichen Raum ein, ein fürchterliches Geruckel und Gezucke wäre vorprogrammiert, überall dort, wo der Text größer als die Grafik wäre
- **unsere großen und komplizierten Logos**: die Signets der ZEIT, des ZEIT MAGAZIN und so fort sind auch nach vielen Optimierungen immer noch sehr große SVG-Dateien mit vielen Knotenpunkten, gerade diese sollten aber immer vorhanden sein, dürfen also nicht durch Text ersetzt und per XHR nachgeladen werden. D.h. für die Logos musste sowieso eine andere Lösung gefunden werden (die noch verbleibenden Icons sind dann schon fast unerheblich klein).

Für die Logos war schnell klar, dass wir diese _oldschool_ in das HTML einbetten müssen, so wie es auch bspw. [Github mit seinen Icons macht](https://github.com/blog/2112-delivering-octicons-with-svg). Am Ende haben wir uns entschieden, es mit allen Icons so zu machen: wir betten sie ins HTML ein.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" class="svg-symbol" preserveAspectRatio="xMinYMin meet" role="img" aria-label="Leserempfehlung">
    <path d="M8.5 11.454L3.322 15l1.983-5.73L.12 5.73l6.405.004L8.5 0l1.975 5.734 6.404-.005-5.185 3.54L13.678 15"></path>
</svg>
```

## Nach- und Vorteile

Das birgt tatsächlich ein paar Nachteile, vor allem weil die Grafiken damit zu Textcontent werden, zumindest aus Sicht des Cachings, es wird also nahezu nicht gecached. Das SVG-Sprite, dass nun wegfällt hingegen wurde natürlich auf ewig gespeichert. So wiegt die Seite nur beim initialen Laden weniger als vorher. Das ist leider weitestgehend ungelöst, auch wenn ich die Hoffnung habe, dass sich die SVG wenigstens sehr gut gzippen. Es bleibt aber eine lästige Abhängigkeit, die man eigentlich nicht haben will. Ohne Zweifel ist der Gewinn für Nutzer des mobile Safari allerdings grandios.

Die Lösung bringt aber auch Vorteile. Zunächst mal können wir uns nun eine Sonderlösung für cross-domain-Seiten einsparen und haben eine Menge _polyfills_ abgeschafft, da das inlinen von SVG [eine hervorragende Browserunterstützung](http://caniuse.com/#feat=svg) genießt. Unser Grunt-Workflow hat sich dadurch auch deutlich verschlankt, weil wir bspw. keine Fallback-Bilder im PNG-Format mehr produzieren. Für das Einlesen der SVG habe ich einen Jinja-Helper geschrieben, der die Daten von der Platte holt (und das Ergebnis wegcached), und noch ein paar Änderungen am Code vornimmt, die wir sonst im Grunt mit [svgstore](https://www.npmjs.com/package/grunt-svgstore) gemacht haben (bspw. fill-Attribute wegstrippen). Außerdem kann man beim Aufruf das Füllen der ARIA-Attribute beeinflussen, damit in Situationen, in denen das Icon direkt neben einem erklärenden Text steht, kein doppeltes Vorlesen passiert:

```html
<a href="#leserempfehlung">
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" class="svg-symbol" preserveAspectRatio="xMinYMin meet" role="img" aria-hidden="true">
    <path d="M8.5 11.454L3.322 15l1.983-5.73L.12 5.73l6.405.004L8.5 0l1.975 5.734 6.404-.005-5.185 3.54L13.678 15"></path>
</svg>
Leserempfehlung
</a>
```

Zumindest wurde so der Prozess auf Entwicklerseite stark vereinfacht. Und ein paar _nodige_ Abhängigkeiten entfernt.

## Geschmäckle

Was bleibt ist die Frage, warum das Problem eigentlich niemanden so richtig interessiert. Zunächst mal nehme ich inzwischen an, dass wir als Hochlastwebsite mit Massencontent zu den Paradiesvögeln gehören, wenn wir moderne Techniken des Web einsetzen. Die Verbreitung einer Lösung wie SVG-Sprites und da kann Chris Coyier noch auf sovielen Konferenzen [dafür Werbung machen](https://vimeo.com/99828116), scheint vergleichsweise gering, jedenfalls auf Seiten, die vielleicht mehr als ein oder zwei Icons pro Seite haben. Und dann interessiert es die Betreiber der Seiten, die das nun doch nutzen vielleicht auch nicht richtig, wieviel Megabytes für iPhone-Nutzer durch den Äther gejagt werden. Vielleicht monitoren sie das auch nicht so. Der Kunde merkt es vielleicht auch nur, wenn die sogenannte _Flatrate_ schon Mitte des Monats leergesaugt ist. Apples Verhältnis zu Safari scheint sowieso ein Gebrochenes zu sein, was sich widerum im Verhältnis von Safari zu aktuellen Webtechnologien zeigt, da wird sogar [zurückgebaut](http://caniuse.com/#feat=svg-fragment)! Und schlussendlich muss ich auch zugeben, wahrscheinlich haben wir es mit unserem Sprite von der Größe her ein wenig übertrieben, zumindest hat das dem Bug vorschub geleistet.
