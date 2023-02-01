---
title: "Semantisches bei der BBC"
date: "2008-06-24"
tags:
  - "Generde"
keywords:
  - "A11Y"
  - "Standards"
  - "Usability"
---

Die BBC hat das Microformat [hCalendar](http://microformats.org/wiki/hcalendar) aus seinen [semantic markup standards](http://www.bbc.co.uk/guidelines/newmedia/technical/semantic_markup.shtml) entfernt, weil [es `<abbr />` _mißbraucht_](http://www.bbc.co.uk/blogs/radiolabs/2008/06/removing_microformats_from_bbc.shtml), was widerum die Zugänglichkeit der Dokumente für bestimmte Nutzergruppen erschwert.

Durchaus diskutabel, wie ich leider finden muss. Die `<abbr />` und deren `title`-Attribut werden zur Auszeichnung der Datumsangaben genutzt. Das ist zunächst mal eh' semantisch nicht korrekt und führt wohl auch zu einem doppelten Vorlesen und damit zu allgemeiner Verwirrung. Hier müsste man das [abbr-Design-Pattern](http://microformats.org/wiki/abbr-design-pattern) wohl anzweifeln.

Cool sind nebenbei bemerkt allerdings die [semantic markup standards](http://www.bbc.co.uk/guidelines/newmedia/technical/semantic_markup.shtml) der BBC. Die werde ich jetzt mal direkt kopieren, übersetzen und ein Logo draufknallen… ;) wirklich phat!
