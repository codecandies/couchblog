---
title: "Safari SVG Sprite Bug fixed"
date: "2016-05-18"
tags:
  - "Generde"
keywords:
  - "Browser"
  - "Bugs"
  - "Safari"
  - "SVG Sprite Bug"
coverImage: "3941701730_d8cf9fe222_b.jpg"
---

Der [Safari SVG Sprite Bug](http://nicobruenjes.de/2016/04/safari-svg-sprite-bug/), der mich nun ein paar Wochen verfolgt hat, ist gefixt. Schnell nach bekannt werden des Bugs hatte sich [Antti Koivisto](https://twitter.com/anttikoivisto) der Sache angenommen und einen Fix gebaut, der in den aktuellen Updates von iOS (9.3.2) und Safari für OS X 9.1.1 (11601.6.17) landete, beide Updates sind seit Montag erhältlich. Besucht man mit leerem Cache nun eine Seite mit SVG-Sprite, wird dieses gecached und **nicht so oft geladen**, wie Icons aus dem Sprite auf der Seite verwendet werden.

![safari-svg-sprite-bug-fixed](/img/safari-svg-sprite-bug-fixed-1024x684.png)

### Notlösung zurückbauen

Es wird wahrscheinlich noch ein wenig dauern, bis wir unsere [Notlösung](http://nicobruenjes.de/2016/04/svg-yeah-you-know-me/) zumindest teilweise wieder zurückbauen können, je nachdem wie schnell sich der Fix verbreitet, da die Seiten aber trotz Bug ja grundsätzlich funktionsfähig bleiben, wird man damit nicht allzu lange warten brauchen. Da wir doch einen sehr fehleranfälligen und komplizierten Herstellungsprozess für die SVG-Sprites hatten, bin ich mir sicher, das wir exakt diesen nicht wieder implementieren werden.

### Hektisches Geteste führt zu nüscht…

Gestern habe ich versucht, nach der Rückkehr aus dem Urlaub, mal schnell die Updates zu ziehen und zwischen zwei Terminen den Fix, der mir schon [von](https://twitter.com/pscheuerl/status/732317814673965056) [verschiedenen](https://twitter.com/pscheuerl/status/732333338560618498) [zugetweetet](https://twitter.com/stn1978/status/732360337224286208) worden war und die ich schon retweetet hatte.

Um es kurz zu machen, Safari verhält sich beim sogenannten _hard reloaden_ (Tastenkombi CMD-SHIFT-R) immer noch anders als vielleicht Chrome oder Firefox, und lädt in diesem Fall das Sprite mehrmals herunter, aber im Grunde ist das nur richtig, by the word [Reload page without cache](https://twitter.com/pscheuerl/status/732667102364979204), also es wird tatsächlich nichts gecached. Das hatte mich ehrlich gesagt zunächst [etwas durcheinandergebracht](https://twitter.com/nicobruenjes/status/732541248838459392).

### Und die Moral von der Geschichte

Ich habe ein paar Dinge gelernt, bei der Sache:

- Find's Du einen Bug, brauchst Du einen Testcase… ich hatte im Laufe der Zeit mehrere, einigermaßen brauchbar ist wohl erst [der Aktuellste](http://codecandies.github.io/safari-sprite-bug/external-with-symbols.html) gewesen
- Hast Du einen Testcase, lass ihn von vielen testen (hat super funktioniert
- Willst Du einen Bug in Safari gefixt haben, mach Dir nicht die Mühe bei Apple direkt zu fragen, sondern geh ins [Webkit-Bugboard](https://bugs.webkit.org/)
- Ist ein Bug im Bugboard, [einfach mal nachfragen, wann er denn gefixt wird](https://twitter.com/maddesigns/status/723742330109464576)
- Wenn dann der Fix da ist, Zeit nehmen, ihn zu testen
- Zeit nutzen um alternative Ansätze zu entwickeln
