---
title: "Chris Wilson@TAE: Debugging in IE"
date: "2007-07-27"
tags:
  - "Generde"
keywords:
  - "Microsoft"
  - "Internet Explorer"
  - "Browser"
---

[Ajaxian berichtet](http://ajaxian.com/archives/chris-wilson-keynote-at-tae) natürlich ausführlich von »[The Ajax Experience](http://ajaxexperience.techtarget.com/west/index.html "The Ajax Experience Homepage")« und von Chris Wilsons (_Internet Explorer Platform Architect_) Auftritt dort.

Einigermaßen interessant sind Wilsons Hinweise, wie man den Internet Explorer zu einer Debugging-Umgebung ausbaut:

> **What are your top 5 tips to making IE a good debugging env?**
>
> ([Microsoft Download Center](http://www.microsoft.com/downloads))
> 1\. Install Visual Web Developer Express.
> 2-4. Get [IE Debug Toolbar](http://www.microsoft.com/downloads/details.aspx?familyid=e59c3964-672d-4511-bb3e-2d5e1db91038&displaylang=en).
> 5\. Keep updating the debug toolbar.
> 6\. Get the full version of [Expression Web Designer](http://www.microsoft.com/expression/products/overview.aspx?key=web). (it’s pay-for so he’s making it #6).
> oh, and #3. [Fiddler](http://www.fiddlertool.com)\[.\]

Es fehlt der Hinweis auf [Firebug](http://getfirebug.com), den es als [Firebug Lite](http://getfirebug.com/lite.html) auch für IE und andere Browser gibt (…ich weiss: _www.gebetsmuehle.de_…). Einen wichtigen Tipp für Entwickler unterr Vista hat Wilson allerdings noch parat: IE läuft dort standardmäßig in einer _Sandbox_ (»Protection Mode«), die Verbindungen des Programms zu anderen Prozessen und umgekehrt verhindert. Zur Nutzung der Debugging-Tools, muss man dies [ausschalten](http://blogs.msdn.com/ie/archive/2006/02/09/528963.aspx).

Offenbar wurde Wilson auch gefragt (frech?), ob er »Firefox« als Entwicklungsbrowser empfehlen würde. Dazu liess er sich nicht hinreissen, merkte aber an, dass man zunächst »_standardgemäß_« entickeln solle und dann in verschiedenen Browsern testen müsse.
