---
title: "Kein einheitlicher Codec für HTML5 Video und Audio"
date: "2009-07-02"
tags:
  - "Gecodet"
keywords:
  - "HTML"
  - "Video"
persons:
  - "Ian Hickson"
---

Mit der Einführung des Videotags `<video>` in HTML5 hatte ich (und sicherlich viele andere auch) die Hoffnung verbunden, dass es einen einheitlichen Videocodec bzw. Audiocodec geben wird, den alle Browser unterstützen. Dies hätte letztendlich der Produktion von Video im Netz und seiner Verbreitung einen weiteren Schub, hinaus über Seiten wie youtube.com und die Nutzung proprietärer Software wie Flash, geben können.

Leider wird das nicht passieren. [Wie Ian Hickson am Montag in der WHAT-WG-Mailingliste bekannt gab](http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2009-June/020620.html):

> After an inordinate amount of discussions, both in public and privately, on the situation regarding codecs for `<video>` and `<audio>` in HTML5, I have reluctantly come to the conclusion that there is no suitable codec that all vendors are willing to implement and ship.

Damit stehen `<video>` und `<audio>` ungefähr so da, wie bspw. das `<img>` Tag, den Browserherstellern ist kein Codec vorgeschrieben, der zu unterstützen ist und es wird sich sozusagen im Wettbewerb herausstellen müssen welche Codecs erfolgreich sind. Während es bei Bldern eine relative schnelle Beschrnkunf auf GIF, JPEG und später PNG gab, darf man gespannt – und auch vielleicht ein wenig ängstlich sein – welches Format oder welche Formate sich durchsetzen. Im Moment gibt es bei den Herstellern in Sachen Video wenig Gemeinsamkeiten, obwohl nur 2 Codecs in Frage kommen. Ian Hickson:

> - Apple refuses to implement Ogg Theora in Quicktime by default (as used by Safari), citing lack of hardware support and an uncertain patent landscape.
> - Google has implemented H.264 and Ogg Theora in Chrome, but cannot provide the H.264 codec license to third-party distributors of Chromium, and have indicated a belief that Ogg Theora's quality-per-bit is not yet suitable for the volume handled by YouTube.
> - Opera refuses to implement H.264, citing the obscene cost of the relevant patent licenses.
> - Mozilla refuses to implement H.264, as they would not be able to obtain license that covers their downstream distributors.
> - Microsoft has not commented on their intent to support `<video>` at all.

Das sind schwer vereinbare Punkte. Natürlich kann sich OGG Theora noch entwickeln, es können auch weitere Codes dazukommen, aber der »One To Rule Them All«-Codec ist gestorben. So wird man also in Zukunft dann Filme für das Web (wie schon üblich) in verschiedenen Formaten produzieren müssen und Flashvideo bleibt uns auch noch ein wenig erhalten. Im allerschlimmsten Fall, verkümmern `<video>` und `<audio>` zur Bedeutungslosigkeit.

BTW: wer heute Video einbetten will und in ausreichend Formaten zur Verfügung stellen kann, [Video for everybody](http://camendesign.com/code/video_for_everybody) stellt sie auf jedem Browser/Betriebssystem dar…
