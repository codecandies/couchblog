---
title: "Skalierbarkeit"
date: "2006-04-18"
tags:
  - "Generde"
---

Vor kurzem wurde ich sehr direkt von höherer Stelle gefragt, warum wir unsere aktuelle Applikationen in PHP5 programmieren würden, und ob eine Programmierung in Java nicht eine wesentlich skalierbarere Anwendung zum Ergebnis hätte.

Ich musste zunächst stutzen und mir – ganz ehrlich gesagt – mit ein paar Allgemeinplätzen hinsichtlich bereits geplanter Datenbankoptimierungen, möglicher Cachemechanismen und Hardwarekosten für gleichwertige Javaapplikationen (nebst Datenbankserver(n)) weiterhelfen. Das hat zwar zunächst funktioniert, hinterließ bei mir jedoch das schlechte Gefühl, uninformiert geurteilt zu haben, einfach beeinflusst durch meine persönliche Vorliebe für die freundliche Skriptsprache.

Ich habe mir also zu dem Thema über Ostern einiges angelesen, und komme letztendlich zu dem glücklichen Schluss, das meine Aussagen zwar sehr allgemein gehalten waren, im großen und ganzen jedoch, speziell für die von uns angestrebte Anwendung jedenfalls, den Nagel auf den Kopf getroffen hat. Neben vielen sinnlosen Flames habe ich doch einige gute Argumente für PHP sammeln können, sogar einige gegen Java. Geradezu erfrischend räumt bspw. Brian Fioca in [Digg PHP's Scalability and Performance](http://www.oreillynet.com/onlamp/blog/2006/04/digg_phps_scalability_and_perf.html) mit den allgemeinen Vorurteilen gegenüber PHP auf und gibt zudem gute Hinweise wie man PHP-Applikationen skalierbar machen und halten kann. In meiner eigenen Bibliothek fanden sich dazu auch sehr gute Hinweise in Georg Schlossnagles [Advanced PHP Programming](http://www.amazon.de/exec/obidos/ASIN/0672325616/).

Fassen wir einmal zusammen: mögliche Schwierigkeiten entstehen eher in Zusammenhang mit der Anspache und Nutzung der Datenbanken, sowie einer oft mangelhaften Konfiguration der Seitenauslieferung, nicht jedoch in der Spache PHP selber (also im Compiling und Includieren von Klassen bspw.). Für die allermeisten dieser Probleme gibt es eine Fülle von fertigen Lösungen, die, neben einer sauberen Programmierung, leicht einsetzbar sind. Apropos saubere Programmierung... in diesem Zusammenhang wird immer wieder als Möglichkeit zur Verbesserung der SQL-Queries angegeben, man müsse ja nicht `SELECT *...` schreiben, sondern es wäre gesünder einzelene Spalten zu matchen. Hallo? Wer fröhlich zehn Mal hintereinander auf \* selektiert, der sollte sich vielleicht gar nicht an große Anwendungen herantrauen. ;)

Abschließend aber nocheinmal [Brian Fioca](http://www.oreillynet.com/onlamp/blog/2006/04/digg_phps_scalability_and_perf.html) dazu:

> It turns out that it really is fast and cheap to develop applications in PHP. Most scaling and performance challenges are almost always related to the data layer, and are common across all language platforms. Even as a self-proclaimed PHP evangelist, I was very startled to find out that all of the theories I was subscribing to were true. There is simply no truth to the idea that Java is better than scripting languages at writing scalable web applications. I won’t go as far as to say that PHP is better than Java, because it is never that simple. However it just isn’t true to say that PHP doesn’t scale, and with the rise of Web 2.0, sites like Digg, Flickr, and even Jobby are proving that large scale applications can be rapidly built and maintained on-the-cheap, by one or two developers.

Hab ich ja immer gesagt. ;)
