---
title: "Firebugging, und nocheinmal"
date: "2007-09-10"
tags:
  - "Gefunden"
keywords:
  - "Javascript"
  - "Firebug"
---

Lange nichts mehr zu meinem meistverlinktem Tool [Firebug](http://getfirebug.com) gebracht: ein etwas in die Tiefe gehendes Tutorial dazu gibt's bei [Michael Sync](http://michaelsync.net/2007/09/09/firebug-tutorial-logging-profiling-and-commandline-part-i/ "Firebug Tutorial - Logging, Profiling and CommandLine (Part I)"). Es geht über die einfachen `console`\-Befehle hinaus und zeigt bspw. wie man in Konsolenmeldungen Strings ersetzt:

> <table cellspacing="5" cellpadding="0" border="0"><tbody><tr><td>%s</td><td>String</td></tr><tr><td>%d, %i</td><td>Integer (numeric formatting is not yet supported)</td></tr><tr><td>%f</td><td>Floating point number (numeric formatting is not yet supported)</td></tr><tr><td>%o</td><td>Object hyperlink</td></tr></tbody></table>

Weiter geht's mit _Message-Grouping_, `console.dir(), .dirxml(), .assert(), .trace()`. Ein zweiter Teil ist bereits angekündigt.
