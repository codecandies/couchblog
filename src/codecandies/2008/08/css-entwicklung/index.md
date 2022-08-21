---
title: "CSS Entwicklung"
date: "2008-08-06"
tags:
  - "Gecodet"
  - "Gestaltet"
keywords:
  - "CSS"
---

Während in Webkit CSS Konstanten schon testweise eingebaut sind und es inzwischen auch ein _proposal_ an die CSS Working Group beim W3C gibt, CSS Konstanten einzuführen, gibt es natürlich auch gute Gründe, dies nicht zu tun. [Bert Bos hat diese in einem ausführlichen Essay zusammengefasst](http://www.w3.org/People/Bos/CSS-variables). Das Essay wirkt zwar ein wenig wie ein Rückruf aus den Neunzigern, aber ganz unrecht hat der Mann natürlich nicht: das ich mich täglich mit roundabout 2000 Zeilen CSS-Code herumschlagen muss, liegt ja nicht am CSS, sondern ist letztendlich ein Projektmanagement- und Maintainanceproblem. Da hefen dann auch CSS Konstanten nichts.

Das stimmt mich jetzt nachdenklich bis ambivalent…

[Jens Meiert hingegen](http://meiert.com/en/blog/20080805/html-css-frameworks/) hat in Sachen CSS/HTML-Frameworks das gleiche herausgefunden, wie wir: ein CSS-Framework, das es irgendwo zum herunterladen gibt, wird uns nicht helfen können. Ich habe in den letzten Tagen ein halbes Dutzend evaluiert um zu verschriftlichen, was ich schon wusste: wir haben unser eigenes _Framework_ bereits, es ist dreckig, bissig und widerspenstig, aber es braucht nur in die richtige Form gegossen zu werden.

Ich könnte mir allerdings vorstellen, beides zu vermischen und mit ein richtigen Programmiersprache ein Buildtool zu zimmern, das uns a) CSS-Templates mit Konstanten b) modulare CSS-Sourcen und c) am Ende ein bis zwei eingedampfte CSS-Files mit nur den benötigten Modulen bringt. Oder gibt es sowas schon?
