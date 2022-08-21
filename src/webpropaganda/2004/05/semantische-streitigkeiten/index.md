---
title: "Semantische Streitigkeiten"
date: "2004-05-10"
tags:
  - "Gestaltet"
---

[Matthew Thomas](http://mpt.net.nz/) schreibt in [When semantic markup goes bad](http://mpt.net.nz/archive/2004/05/02/b-and-i) über die falsch verstandene Nutzung semantischer HTML\-Tags. Er hält es für schlicht falsch, `<em>` (em = emphasis = die Betonung) und `<strong>` (= strong emphasis = starke Betonung) für alle Gelegenheiten zu benutzen, bei denen etwas kursiv oder fett dargestellt werden soll. So stellt man beispielsweise Text aus anderen Sprachen eher kursiv dar, ohne es zu betonen oder muss bestimmte mathematische Formelzeichen fett darstellen, aber nicht betonen. Thomas besteht stattdessen auf die weitere Nutzung von `<i>` und `<b>`. Ich selbst [bevorzuge ja auch ausdrücklich](http://www.couchblog.de/couchblog/archives/2002/12/xhtml_attributes_used.php), soviel semantischen Code zu schreiben wie möglich, Thomas wirft jedoch interessante Fragen auf. Auch die Gegenartikel [Understanding semantics](http://bestkungfu.com/archive/?id=471), [Matthew Thomas Sematic Markup](http://illuminosity.net/thoughts/archives/matthew_thomas_semantic_markup/) (und mehr) helfen so recht nicht weiter.

**Warum Semantik?**

Am Anfang war HTML. Denkpause. Man bastelte sich seine Seiten zurecht, so dass sie gut aussahen. Dazu benötigte man Tags, die einem bestimmten Aussehen auf der Webseite entsprachen, also zum Beispiel **bold/fett** oder _italic/kursiv_, oder die font-Tags. Womit man das Aussehen seiner Webseiten erreichte war ziemlich egal, schließlich wurde alles in eine Datei gepackt, die nur einen Sinn hatte: mit Webbrowsern angesehen zu werden. Wichtig ist was hinten raus kommt. So entstanden mit der Zeit die tollsten Konstruktionen, so richtiger Scheiss-Egal-Code, den niemand lesen konnte, oft nicht mal der “Designer” selbst. Aber: wir haben uns weiterentwickelt. Vor der Tür steht ein Web, das eben nicht mehr nur für die Anzeige im Browser geeignet sein soll, sondern von allen möglichen Programmen, Diensten und Geräten genutzt werden soll, vom vorlesenden Browser für Sehbehinderte bis zum Mobiltelefon. Und um dies zu erreichen gibt es eigentlich nur eine Lösung: die Trennung von Inhalt und Design bzw. richtiger: “Content and Presentation”. Aller Inhalt kommt in das HTML-File und alle das Aussehen der Seite betreffenden Dinge werden im CSS geregelt. Da passen die Tags, die lediglich das Aussehen bestimmen natürlich nicht wirklich hinein. Denn **dieser Text ist fett** ist noch lange keine inhaltliche Aussage. Stattdessen benutzen viele (und meist auch richtig) `<strong>` beispielsweise. Das heisst, etwas wird _stark_ betont, was einer inhaltlichen Aussage gleich kommt. Aber: wie die Webbrowser dies nun interpretieren ist dabei nicht vorgegeben (nennen wir es mal glücklichen Zufall, dass eigentlich alle Browser hier den Text fett drucken). Soll der Text anders aussehen, dann wäre das wieder Sache des CSS.

**Aber geht das immer?**

Das wäre dann ja auch alles gar kein Problem, wenn es denn für jede Gelegenheit den richtigen semantischen Tag gäbe. Matthew Thomas [zählt Beispiele auf](http://mpt.net.nz/archive/2004/05/02/b-and-i), wo das nicht so passt. Zum Beispiel eben, die Geschichte mit dem Text in Fremdsprache: _je ne sait pas_. Er will an diesen Stellen schreiben:

> `<i lang="fr">je ne sais pas</i>`.

Von anderer Seite wird vorgeschlagen stattdessen ein span-Element zu benutzen, ungefähr so:

> `<span lang="fr">je ne sais pas</span>`.

Was aber auch wieder nicht der Weisheit letzter Schluss ist, denn `<span>` ist jetzt auch nicht gerade das “Semantische HTML-Element des Jahrhunderts”. Aber zurück zu den alten Tags? In einem [zweiten Artikel zum Thema](http://mpt.net.nz/archive/2004/05/09/semantic) stellt Thomas heraus, dass beispielsweise `<i>` und `<b>` keinesfalls in den aktuellen Standards des W3C als abgelehnt (“depreciated”) eingetragen sind, erst im Draft zu XHTML2.0 fehlen diese Elemente (genauso übrigens wie das lang-Attribut).

**Und nun?**

Bleiben nun welche Auswege?

- Auf Semantik pfeifen und weiter alles so schreiben, wie einem die Nase gewachsen ist. Das macht das Netz nicht schöner, und wer auf Zukunftssicherheit setzt, wird mit XHTML2.0 seinen Spass haben, aber das ist ja mindestens noch 10 Jahre hin.
- Nur semantische Tags verwenden, aber in wenigen Fällen, wenn das nicht passt nach Ersatzlösungen suchen bzw. Text zwangsweise falsch auszeichnen.

Beides nicht so toll, wie ich finde. Da haben wir noch einen langen Weg vor uns, bis wir Content und Presentation wirklich getrennt haben. Hoffentlich gibt es das Web dann noch. Und mein Blog. Und XHTML. Vielleicht können wir ja mit Evangilismus nicht alles lösen, schließlich wartet der Kunde, der Chef, der Leser auf seine Website.
