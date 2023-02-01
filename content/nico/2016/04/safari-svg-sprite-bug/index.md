---
title: "Safari SVG Sprite Bug?"
date: "2016-04-05"
tags:
  - "Generde"
keywords:
  - "Browser"
  - "Bugs"
coverImage: "unspecified.png"
---

Update: Der hier besprochene Bug [wurde inzwischen gefixt](http://nicobruenjes.de/2016/05/safari-svg-sprite-bug-fixed/).

Ich hatte es schon [getweetet](https://twitter.com/nicobruenjes/status/715103362111381504), aber es liegt mir doch sehr auf der Seele, deswegen nochmal ausführlich hier…

Vor ein paar Tagen haben unsere Backend-Kollegen einen starken Anstieg an Downloads einer bestimmte Datei unserer Website festgestellt, nämlich jener SVG-Datei, in der unsere SVG-Sprites abgelegt sind. Die Datei wurde mit einem Male so exorbitant oft heruntergeladen, dass es in den Logs auffiel. Zunächst gingen wir natürlich von einem Fehler unsererseits aus, auffällig war allerdings von Anfang an, dass nur Safaribrowser (Desktop, vor allem aber Mobile) ab Version 9 die vielen Downloads verursachten.

Meiner Meinung nach haben wir es mit einem Bug in Safari zu tun. Und seit nun schon ein paar Tagen bin ich auf der Suche nach diesem Bug. Ich habe [einen Testcase gebaut](http://phpscripts.zeit.de/svg-use-testcase/) (um Knnfigurations- und Serverfehler zu vermeiden auf einem anderen Server), mit dem man das Problem nachvollziehen kann. Und nachdem ich nach langer langer Recherche sprichwörtlich nichts darüber im Netz finden konnte, habe ich einen Bug bei Apple eingetütet und ein Issue bei [svg4everybody](https://github.com/jonathantneal/svg4everybody/issues/110) erstellt, dort wird die betroffene Technik ausgiebig genutzt, die sollten sich dafür interessieren. Bisher gab es keine Reaktionen.

![svguse](/img/svguse-1024x606.jpg)

## Was ist denn das Problem?

Wir nutzen eine externe SVG-Spritemap. Darin befinden sich alle Icons und Logos, und braucht man ein Icon, wird es auf diese Weise in den Code eingebunden:

```html
<svg class="svg-symbol logo_bar__brand-logo" role="img" aria-labelledby="title">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="icons.svg#svg-logo-zon-black"></use>
</svg>
```

Das geht natürlich nur in modernen Browsern, deswegen nutzen wir [svg4everybody](https://github.com/jonathantneal/svg4everybody) um das ganze für ältere Browser zu polyfillen, was aber keinen Einfluss auf den Bug hat. Auf einer Artikelseite mit Kommentaren, können so bis zu 30 Icons auf einer Seite auftauchen. In Chrome, Firefox und anderen wird das Sprite genau einmal geladen pro Seitenaufruf und dann natürlich gecached. In Safaris > 9 (unter iOS 9.3.1 oder auf dem Desktop 9.1.1) **wird die SVG-Datei einmal pro angezeigtem Icon heruntergeladen**, was ein sehr hohes Datenaufkommen verursachen kann (siehe oben). Uns fällt sowas in den Logs auf, Nutzer von mobile Safari spüren es womöglich auf ihrer Telefonrechnung.

## Was bedeutet das?

Einfach gesagt: das Netz ist sowas von kaputt… man braucht keine `leftpadding`\-Funktion via npm einzubauen, um eine Website kaputt zu machen. Allein schon ein Browserupdate kann einen in Teufels Küche bringen. Kann natürlich immer noch sein, dass der Fehler bei mir liegt (und ja, die Datei ist viel zu groß, da kann man ansetzen), vielleicht findet ja einer meiner Leser etwas… Mich beschleicht aber auch irgendwie das Gefühl, dass Apple [SVG nicht so richtig im Safari](http://caniuse.com/#feat=svg-fragment) haben will.

Für uns bedeutet das letztlich, dass wir unsere Art der SVG-Einbindung [nochmal komplett überarbeiten müssen](http://nicobruenjes.de/2016/04/svg-yeah-you-know-me/), wir wollen ja nicht _noch mehr_ Daten ausliefern, als wir sowieso schon tun…

Update: Martin Wolf hat den [Screencast zum Bug gedreht](https://www.youtube.com/watch?v=OAbmDlnq1UE).
