---
title: "HTML5: Wie war das mit Firefox 2?"
date: "2009-01-15"
tags:
  - "Gecodet"
keywords:
  - "HTML"
persons:
  - "John Resig"
---

Die 2. Antwort auf die Frage, ob man [HTML5 bereits jetzt produktiv einsetzen sollte.](/codecandies/2009/01/14/neue-html5-elemente/) Es wird nicht besser.

Wie schon in der [letzten Antwort](/codecandies/2009/01/14/neue-html5-elemente/) demonstriert, kann man den IEs mit ein wenig Javascript jedes Element beibiegen, es landet korrekt im DOM, es lässt sich mit CSS stylen. Auch schon angemerkt: **Firefox 2 bereitet da mehr Probleme.**

Und zwar liegen die bei den neuen Block-Level-Elementen, die ihrerseits Block-Level-Elemente enthalten, also beispielsweise ein `<h1>` in einem `<article>`. Ein wenig ausführlicher [bei den Kollegen von webmasterpro.de](http://www.webmasterpro.de/coding/article/benutzbarkeit-von-html5-elementen-aktueller-stand.html#goto-firefox) nachzulesen. FF2 schliesst das `<article>` vor dem `<h1>` einfach `<article></article><h1>` und macht so jeden Versuch, styling anzuwenden zu Nichte. Und richtig ärgerlich: es gibt keinen praktikablen Workaround.

Es sei denn, man nutzt XHTML5, schreibt also XML-valide und vor allem [zwingend erforderlich](http://hixie.ch/advocacy/xhtml "Sending XHTML as text/html Considered Harmful"), liefert die Datei mit dem Mimetype `application/xhtml+xml` aus. Da beisst sich die Katze jedoch in den Schwanz, denn das geht nun wieder gar nicht mit dem IE, der will solche Dateien bekanntlich zum Download anbieten, er braucht `text/html`.

Bis hier haben wir nur _neins_ gegen den Einsatz von HTML5 schon heute auf der Liste. Allerdings nur gegen den Einsatz der neuen Elemente. Nein, das ist auch nicht ganz richtig: es sind Argumente _gegen das stylen neuer Elemente_. Soll heissen: natürlich kann man den HTML5 Doctype bereits einsetzen. Natürlich kann man neue Elemente wie `<nav>` schon benutzen. Nur wenn man per CSS diese Elemente styled, dann fallen FF2 und IEs ohne Javascript aus der Unterstützungsliste. Wie John Resig schreibt:

> You don't have to use any new aspect of HTML 5 in order to get the standards-mode benefits of using the HTML5 DOCTYPE. This DOCTYPE is able to push Firefox, Safari, Opera, IE6, IE7, and IE8 into standards mode and allow us to (as best as we can) develop web applications in a standards-based way (CSS, HTML, JavaScript, DOM). You don't have to use a single one of the new features in order to make this happen and can begin doing so today.

Schliesst sich die Frage an: **Warum sollte man das tun?** Gibt es denn schon Sachen, die funktionieren, die man nutzen kann?
