---
title: "IE7 Development Details"
date: "2005-04-23"
tags:
  - "Gestaltet"
---

So als Webdesigner muss man auch einfach mal das Säbelgerassel der Browserwars überhören und nach vorne schauen. Und am Horizont manifestiert sich mehr und mehr Internet Explorer 7. Im [IEBlog](https://blogs.msdn.com/ie/default.aspx) sind zu dessen Entwicklung immer mal wieder [einige Details zu erfahren](https://blogs.msdn.com/ie/archive/2005/04/22/410963.aspx), Lippenbekenntnisse bis dato, aber das kann schon Hoffnung machen:

> - Support the alpha channel in PNG images. We’ve actually had this on our radar for a long time, and have had it supported in the code for a while now. We have certainly heard the clear feedback from the web design community that per-pixel alpha is a really important feature.
> - Address CSS consistency problems. Our first and most important goal with our Cascading Style Sheet support is to remove the major inconsistencies so that web developers have a consistent set of functionality on which they can rely. For example, we have already checked in the fixes to the [peekaboo](http://www.positioniseverything.net/explorer/peekaboo.html) and [guillotine](http://www.positioniseverything.net/explorer/guillotine.html) bugs documented at positioniseverything.net so use of floated elements become more consistent.
>
> [Chris Wilson - IEBlog](https://blogs.msdn.com/ie/archive/2005/04/22/410963.aspx)

Via: [Veerle's Blog](http://veerle.duoh.com/index.php?id=D20050423)

Die längst überfällige Unterstützung von transparenten PNGs soll also kommen. Das ist ein &emdash; nicht zu unterschätzendes &emdash; Feature, das direkte Auswirkungen auf die Ansehnlichkeit von Webseiten haben kann. Viel zu lange mussten wir mit Blick auf IE<7 auf die intensive Nutzung verzichten.

Die angesagte Beseitigung von floating-bugs freut natürlich auch, man kann alerdings nur hoffen, dass dies in einer Weise geschieht, dass geläufige CSS-Hacks überleben können. Sonst haben alle passionierten Hack-Nutzer ein hässliches Problem. Vielleicht hat ja auch schon mal jemand vom IE-Entwicklungsteam eine standardgemäße Website gebaut und weiss worum es geht (... vielleicht auch nicht).

Eins ist jedoch sicher, _wenn_ IE7 kommt, ist damit noch lange nicht der Webdesignhimmel erreicht. Man überlege nur einmal, wie lange wir schon IE5 unterstützen (würg). Windowsuser sind ja sowas von updatefaul, herrje! Aber vielleicht geht dann IE5 langsam mal ein... IE6 wird uns noch viele viele Jahre nerven. Und wer weiss schon, was IE7 wieder an lustigen Bugs mitbringt...
