---
title: "Javascriptökologie"
date: "2016-10-05"
tags:
  - "Generde"
keywords:
  - "Webentwicklung"
  - "Javascript"
coverImage: "photo-1468070454955-c5b6932bd08d.jpg"
---

Schön, selten habe ich über einen satiren Beitrag über das _javascript ecosystem_, die Javascriptökologie mithin, so gelacht, wie über [How it feels to learn javascript in 2016](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.7r39hudqb). Und ebenso selten habe ich mich zumindest so gut teilverstanden gefühlt, wie bei [Bastian Allgeiers Gedanken dazu](https://bastianallgeier.com/notes/pressure). Mit diesen beiden Links könnte dieser Artikel nun enden, aber hey…

Selbst habe ich natürlich auch ein paar Gedanken dazu. Zunächst mal gefällt mir Allgeiers Musikinstrumenteanalogie total gut. Ich bin selbst Quereinsteiger, habe mir das meiste selbst beigebracht und lerne jeden Tag neue Dinge dazu, auch noch nach 20 Jahren. Ich spiele allerdings kein Instrument, wenn man mal Technics 1210 nicht als Instrument rechnet. Aber das mit den Instrumenten ist ja auch persönliche Präferenz. Die Wahl eines Programmieransatzes, einer Library, oder auch schon einer Architektur ist aber nur in einem Teilaspekt Sache der persönlichen Entscheidung.

Natürlich soll jeder das Programmieren, was ihm am besten passt, womit er am besten leben kann, womit es ihm am meisten Spaß macht. Mir scheint diese einfache Aussage aber meist nur auf den Einzelkämpfer zu zutreffen, der keine Rücksicht auf sein Team nehmen muss. Wäre ja lustig, wenn in unserem Team Moritz alles in React, Anika alles in Angular, Thomas alles in jQuery und Tobias alles in _plain vanilla javascript_ schreiben würde. Und ich mach dann die _[code reviews](https://couchblog.de/nico/2016/07/peer-code-review/)_, oder was?! Aber natürlich kann man auch in einem Team, mit viel Diskussion, immer wieder und nochmal, herausfinden, was die Technologie ist, die für das Team am besten passt. Mit kleinen Scharmützeln zwischendurch.

Dann ist das aber leider immer noch nicht die Entscheidungsgrundlage, welche Frameworks, Libraries oder Toolsets einzusetzen sind. Der wichtigste Punkt nämlich ist und das fehlt mir in all den Diskussionen immer wieder, was für die zu erledigende Aufgabe eben das richtige oder passende Tool ist. Ob ein Framework _hip_, _cool_ oder _square_ ist, spielt da nur eine sehr untergeordnete Rolle und oft leider ebenso, ob alle Lust haben es zu benutzen. Und kommt mir nicht mit einer Komfortzone.

Jetzt gleich zu Argument Nummer eins: die machen doch alle das gleiche, da kann man nach Präferenz gehen. Nein stimmt nicht. Denn auch wenn alle Frameworks möglicherweise ähnliche Ziele verfolgen, sind sie ja eben nicht gleich. Und das zeigt der satirische Artikel von Jose Aguinaga ganz hervorragend: alle bringen eine Hölle von Abhängigkeiten mit sich. Ein Ast im Entscheidungsbaum mag ja bspw. aber sein, wie diese Abhängigkeiten eines Frameworks aussehen und wie stabil diese sind. Und vielleicht schaut auch mal wer, ob es da Sublibraries ohne Sinn und Verstand gibt. Hier failen viele, wenn man zum Beispiel langlebige, stabile Produkte bauen will, mit einer Mindestlebensdauer von vier bis fünf Jahren.

Bei ZEIT ONLINE haben wir im Relaunch 2015 unsere Architektur versucht so zu bauen, dass man einzelne Teile leicht austauschen kann, damit wir eben nicht auf Abhängigkeiten festgenagelt sind. Trotzdem haben wir dann danach erstaunlich wenig _buzzwordgetriebene Entwicklung_ gemacht, sondern sind im Grunde beim alten Handwerkszeug (including the j-word) geblieben. Das liegt natürlich hauptsächlich daran, dass wir eine _content_ getriebene Website sind, keine One-Page-App. Und das wir auf so veraltete Dinge wie _progressive enhancement_ oder auch einfach _acessibility_ achten wollen. Aber eben auch daran, dass wir einiges an Erfahrung bei den Architekturentscheidungen zusammengetragen haben und uns bei maximaler Entscheidungsmöglichkeiten nicht maximal abhängig von irgendetwas machen wollten, dass morgen vielleicht schon wieder _unmaintainded_ ist.

Update: [Addi Osmani](https://medium.com/@addyosmani/totally-get-your-frustration-ea11adf237e3#.zf2fqxx3o) dazu.\[[Via](http://grochtdreis.de/weblog/2016/10/05/linkfutter-428/).\]

Bild:  [Markus Spiske](https://unsplash.com/@markusspiske) {:.copyright}
