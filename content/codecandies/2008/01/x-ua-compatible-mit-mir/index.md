---
title: "X-UA-Compatible mit mir?"
date: "2008-01-23"
tags:
  - "Gecodet"
keywords:
  - "HTML"
  - "Browser"
  - "Standards"
persons:
  - "John Resig"
---

Wie gestern schon [angemerkt](/codecandies/2008/01/22/da-muss-ich-erst-mal-drueber-nachdenken/), wollte ich mir ein paar Gedanken zum neuen Vorwärtskompabiltätsfeature aus dem Hause Microsoft machen. Dazu habe ich erst mal viel gelesen.

Die Gründe für die Einführung einer neuen Methode zur Sicherung der Kompabilität zwischen Code und Browser finden sich, wie so oft, in der Geschichte des Internet Explorers. Beim Wechsel von IE5 auf IE6 (bzw. schon vorher beim IE5Mac) benutzte man den sogenannten [_DOCTYPE switch_](http://en.wikipedia.org/wiki/Quirks_mode), mit dem man via Code zwischen den Kompabilitätsstufen (Quirks- und Standardmode) des IE6 hin- und herschalten konnte (und bsi heute kann). Wissen wir alles, hat aber wohl für die Einführung des IE7 nicht so funktioniert, wie geplant:

> In IE7 we made a lot more changes to improve IE’s standards compliance, particularly with CSS. We limited these behavior changes to IE’s “standards mode” only, and we expected that this would help limit compatibility problems as it had in the past. Unfortunately, and somewhat surprisingly to us, this wasn’t true; many of those changes made IE incompatible with content that was already part of the web. It turned out by the time IE7 shipped in late 2006, roughly half of the top 200 US web sites were in “standards mode”. Many of those sites had been “opted in” to standards mode by a tool that generated their content; many of them had probably been hand-coded by someone who was trying to do the right thing, and make their HTML code valid according to the W3C. Regardless, users of those sites expected them to keep working the same, even when they downloaded a new version of IE. Unfortunately, that didn’t happen.

Womit man ungefähr abschätzen kann, welchen Überblick man beim IE-Team über den Stand der Webentwicklung hat. Aber egal: mit IE8 wird alles besser (sagt man), womit man nun auch irgendwie endgültig zu gibt, das IE6 ein Witz und IE7 auch noch nicht der groß0e Wurf waren – jedenfalls gibt es noch viel zu ändern.

Um nun zu verhindern, das die eigene Website im neuen Modus des (noch nicht vorhandenen) IE8 – und vor allem zukünftige Versionen – _möglicherweise falsch_ gerendert wird, hat man zu dem bekannten _DOCTYPE switch_ nun eine weitere Alternative: `<meta http-equiv="X-UA-Compatible" content="IE=8;FF=3;OtherUA=4" />`. So kann man seine Website _schützen_, vor ungewollter Innovation (?) – nein, gegen plötzlich auftauchende neue IE-Versionen. Nun mal im Ernst: so kann man sich ncoh vorne hin zumindeest absichern, eventuell neue oder reparierte Features kann man ja nachziehen, in späteren Versionen nutzen. Macht also so, neben aller Häme, einen ganz interessanten Eindruck. Allerdings: die vorgesehene Standardschaltung läasst einen schon die Nase rümpfen: wenn man nicht ausdrücklich dem Browser mitteilt, das die IE-8-Engine genutzt werden soll, wird die IE7-Engine benutzt. Ohne Doctype dann sogar nur IE5.5, gnnpf.

> When you put it that way, it does sound kinda nuts. No matter what future version of IE you’re using—be that IE8 or IE80—if the developer hasn’t added the appropriate meta tag, you’ll be viewing the site as if in IE7.

Streit ist da vorprogrammiert. [Anne van Kersteren regt sich reichlich auf](http://annevankesteren.nl/2008/01/ie-lock-in), und fragt sich wohl nicht ganz zu Unrecht, warum die Entwicklerwelt die IE folgen solle und nicht umgekehrt. Was ihn sehr wurmt ist vor allem, dass \[Teile des\] WSP sich zur Unterstützung der Sache haben 'rumkriegen lassen:

> It appears that they managed to convince “the experts” of the Web Standards Project to deliver the message on no less than A List Apart. Fortunately, the comment crowd does not seem to be buying it. \[As it turns out the Web Standards Project as a whole was not aware of this until publication on A List Apart.\]

Andy Budd sieht hier beinahe eine Chance:

> Clueless developers won’t know about this behaviour so every new site they build will automatically be rendered as IE7. Clued-up developers will use this as an excuse to freeze support for IE and turn their attentions to better browsers.

Unser holländischer Kollege P.P. Koch [sieht es ein wenig anders](http://www.quirksmode.org/blog/archives/2008/01/the_versioning.html), er meint, dass uns Microsoft einen Vertrag anbietet:

> There's a second difference: the versioning switch is a **contract**. The IE team tells people what will happen if they insert the `<meta>` tag in their pages, and it's up to individual web developers to decide whether they want to use this contract or not.

Sehr interessant.

Und die Moral von der Geschichte? Ich weiss nun immer noch nicht so genau, wie ich dazu stehe. Es ist natürlich verlockend, das einfach zu ignorieren, so lange wären unsere Sachen auf IE7 festgenagelt. Bis Microsoft es sich anderes überlegt und mit IE10 auf das mitliefern der IE7-Engine verzichtet, Vertrag hin oder her…

**Update/Nachtrag:** [John Resig hat herausgefunden](http://ejohn.org/blog/html5-doctype/), dass der HTML5-Doctype alle Browser in den Standardsmode, und IE8 in den IE8-Renderingmodus schaltet…
