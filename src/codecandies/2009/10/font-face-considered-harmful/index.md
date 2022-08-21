---
title: "@font-face considered harmful?"
date: "2009-10-14"
tags:
  - "Gecodet"
keywords:
  - "Browser"
  - "CSS"
  - "Typographie"
---

Nachdem sich die Kunde von den [Möglichkeiten des Fontembedding](/codecandies/2009/06/30/embedden-sie-jetzt/) nun reichlich verbreitet hat, tauchen leider die ersten Problme auf. [Steve Sounders hat einige Quellen zu Problemen beim Fontembedding zusammengefasst und eigene Untersuchungen angestellt](http://www.stevesouders.com/blog/2009/10/13/font-face-and-performance/ "@font-face and performance"), unbedingt lesen bitte, auch wenn ich hier kurz die unliebsamen Fakten zusammenfasse: im Bereich _high performance websites_ muss man wohl von `@font-face` zunächst mal Abstand nehmen.

Natürlich ist es mal wieder die Internet-Explorer-Familie, die extreme Performanceprobleme aufweisen, aber auch sämtliche andere Browser bekleckern sich im Umgang mit der noch recht jungen Technologie kaum mit Ruhm. FOUT – flash of unstyled text ist dabei noch das kleinste Problem, wenn die Fontdateien nicht schnell genug vom Server geliefert werden. In IEs wirkt sich das noch schlimmer aus: bis zum Download des Fonts zeigt _Bill Gates Rache_ **gar nichts an**. In anderen Browsern bleiebn nur die Textteile, die mit `@font-face` gerendert werden sollen unsichtbar, Firefox zeigt die Ausweichschrift(en) an.

Solchen (und den anderen im Text genannten) Performancefallen kann man natürlich mit Caching, Zipping und ähnlichen Techniken begegnen. Ob man sich aber den Aufwand leisten will, bereits zum jetzigen Zeitpunkt, ich stelle das mal in Frage…
