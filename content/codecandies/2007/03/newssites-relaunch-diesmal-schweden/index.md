---
title: "Newssites Relaunch… diesmal: Schweden"
date: "2007-03-15"
tags:
  - "Gestaltet"
keywords:
  - "Javascript"
  - "Webdesign"
  - "A11Y"
---

Noch mehr Zeitungssites Redesigns… es nimmt kein Ende: [diesmal in Schweden, rezensiert von Roger Johansson](http://www.456bereastreet.com/archive/200703/failed_vs_unfailed_redesigns_of_newspaper_websites/). Und da geht es richtig zur Sache, denn der Relaunch des [Göteborgs-Posten](http://www.gp.se/) ist wohl Müll, im Gegensatz zu dem des [Helsingborgs Dagblad](http://hd.se/), an dem Johansson selbst mittelbar beteiligt war.

Aufgehorcht habe ich an dieser Stelle, weil es zufällig eine aktuelle Problematik beleuchtet, an der ich zur Zeit arbeite:

> JavaScript is used to make entire paragraphs clickable without turning them into huge links, and a lot of inline event handlers are used for that. Not very pretty, but at least the event handlers are unobtrusive, and better than linking the full paragraphs.

Der Hintergrund dazu: Designer und -inner von Zeitungswebsites verlinken gerne komplette Teaserabsätze anstatt einzelner Links, weil sie a) Angst haben, der Leser könnte bis zum Link am Ende des Absatzes (bspw. »weiterlesen…«) bereits ausgestiegen sein und weil sie b) den Internetbenutzern nicht zutrauen, Links von Text unterscheiden zu können und solche zu finden. Die Kehrseite des Problems: in Screenreadern (Webbrowser für Sehbehinderte) wird gerne mit Linklisten gearbeitet, bei denen der Reader dann URL und den Linktext vorliest. Dies ist eine Option um schnell Links zu finden und abzusurfen **ohne** die komplette Seite lesen zu müssen: die Verlinkung ganzer Absätze verhindert das natürlich.

Es gibt wohl ausserdem SEOs, die behaupten, das gemeinsame Verlinken eines kompletten Teasers, also Überschirft **und** Teasertext zusammen, würde zu einer höheren Bewertung der Links führen. Was ich zumindest anzweifle, aber ich halte bekanntermaßen nicht viel von den _Runendeutern des 21. Jahrhundert_. Die Linkliste im Screenreader ist damit aber auf jeden Fall dahin.

Da gefällt mir die Idee per Script Absätze zu verlinken deutlich besser.
