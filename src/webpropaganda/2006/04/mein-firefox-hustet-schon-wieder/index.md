---
title: "Mein Firefox hustet schon wieder"
date: "2006-04-11"
tags:
  - "Gefunden"
---

Seit einigen Wochen kämpfe ich mit meinem Firefox den täglichen Kampf um Arbeitsspeicher. Seit Firefox 1.5 – das ist ein bekanntes Problem – nimmt es unser aller Lieblingsbrowser (und wohl auch Thunderbird) mit der Speicherverwaltung leider nicht so genau und beginnt nach relativ kurzer Zeit Arbeitsspeicher zu fressen (die Bugliste mit Memory-Leaks ist ausnehmend lang). Es ist ja nicht so, dass hier keine Speicherpower zur Verfügung stehen würde (1.5 Ghz PowerPC G4, 1 GB RAM), aber wenn der Browser den ganzen Arbeitstag läuft, dann wird spätestens am nachmittag das Laden von Webseiten zu einer Sat1-Ball-Orgie, will sagen, man könnte das OSX-Ladezeichen auch durchaus gegen die gute alte Sanduhr ersetzen, das wäre wenigstens ehrlich.

Nun sind ja schon seit einiger Zeit diverse Fixes im Umlauf, ich musste jedoch feststellen, dass mir diverse einzelne Änderungen über _about:config_ erstmal nicht geholfen haben. Es waren eine ganze Reihe von Änderungen nötig, um das **w**elt**w**eite **W**arten wieder unter Kontrolle zu bringen. Im [The one and only "Memory usage" thread & FQA](http://forums.mozillazine.org/viewtopic.php?t=354828#2051115) in den MozillaZine Foren kann man gesammelt alle Verdächtigen Speicherfresser (Einstellungen, Plugins) und Tricks finden. Natürlich ist es sinnvoll, schlecht programmierte Plugins zu entfernen, und optimale Konfiguration ist auch etwas schönes, aber das Problem liegt letztendlich doch beim Firefox selbst. IMHO wurde da ein wenig schlampig gearbeitet (BTW: ich hasse _garbage collection_ genauso wie ihr, Jungs ;). Die Erweiterbarkeit des Firefox ist dabei gleichzeitig ein Problem, da es offenbar (Überraschung?) Plugins gibt, die gelinde gesagt speichergierig sind.

Zusammengefasst: mein Firefox tut es wieder, erstmal. Ich habe dazu die _browser.cache.memory.capacity_ festgelegt (8MB) und diverse Plugins gelöscht, die ich sowieso nie benutzt habe. Schweren Herzens habe ich mich auch von einigen Plugins getrennt, die ich zwar benutzte, die aber als verdächtig einzustufen sind (Session Saver, Forecast Fox). Schätze eine Neuinstallation wäre schneller gegangen.

Wer jetzt »benutz' doch IE« postet, wird mit Katzenscheisse beworfen... ;)
