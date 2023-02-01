---
title: "CSS Tables, next big thing?"
date: "2008-03-05"
tags:
  - "Gecodet"
keywords:
  - "CSS"
  - "HTML"
  - "Standards"
---

Dieser [Artikel im Sitepoint-Blog über `CSS Tabellen`](http://www.sitepoint.com/blogs/2008/02/28/table-based-layout-is-the-next-big-thing/) läßt mich ein wenig nachdenklich werden. Kurz zusammengefasst: ab der Version 8 wird der IE die sog. _CSS Tabellen_ unterstützen. Das sind Konstruktionen, bei denen HTML-Elemente wie bspw. `<div>` als Tabellenzeilen und -zellen behandelt werden. Dies wird über ein Eigenschaft von `display` erreicht: `display: table-cell`, bspw.

CSS Tabellen gibt es schon lange, IE war nur der einzige Browser, der das nicht unterstützt hat, deswegen sind sie so selten anzutreffen. Tatsächlich jedoch sind sie natürlich ein hervorragendes Werkzeug um spaltige Layouts zu realisieren, denn so kompliziert der HTML-Code für Tabelle immer war (und der fällt ja weg), so einfach zu begreifen ist die visuelle Idee hinter einer Tabelle. Es bestehen gute Chancen, dass in ein bis fünf Jahren – je nachdem wie lange es braucht, bis sich IE8 ausreichend durchgesetzt hat – CSS Tabellen die komplizierten `position`\- und/oder `float`\-Konstruktionen der heutigen Zeit ersetzt haben werden.

Nachdenklich macht mich das ganze nun aus zwei drei Gründen:

- Die **Reihenfolge des Contents** in Code und Präsentation ist gleich. Es besteht keine Möglichkeit, den wichtigen Content zuerst zu liefern, Navigation etc. nach hinten zu stellen, diese Reiehenfolge in der Präsentation jedoch umzudrehen. SEO-Leute stehen da aber total drauf und bei Nutzern von Screenreadern ist das wohl auch sehr gewünscht.
- So einfach dieses Konstrukt für simple Layouts auch ist, aus den Zeiten des Tabellenlayouts weiss man, wie kompllziert das ganzen wird, wenn man beginnt Tabellen zu verschachteln. Dies wird aber nötig sein, um das umzusetzen, was sich Screendesigner ausdenken, wenn sie wieder beginnen _in Tabellen zu denken_.
- Ich halte Tabellen für ein böses Relikt aus schlimmen Tagen. Böse. Böse böse böse.
- Ich glaube Tabellenlayouts, ob nun in HTML oder CSS realisiert, sind total 90er. Ebenso kopieren die Gridlayouts, die man heute allenortens trifft, Paradigmen aus der Zeitungswelt, sind also ebenfalls total 90er (allerdings 1890er). Will sagen: ich bin mir nicht sicher, ob es nicht Layouts gibt, die besser ins Netz passen, und für die vielleicht keine Tabellen gebraucht werden. Aber das… ist nur so ein Gefühl. ;)
