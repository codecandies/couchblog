---
title: "Gegen der Trend: Privacy"
date: "2011-02-14"
tags:
  - "Gecodet"
  - "Gebloggt"
keywords:
  - "Datenschutz"
---

Ich hatte ja letzte Woche schon [darauf hingewiesen](/codecandies.de/2011/02/09/saubere-besucheranalyse-mit-piwik/), dass ich daran gehen wollte, Datenschnüffelei **in diesem Blog** zukünftig zu vermeiden. Zunächst habe ich dazu Piwik installiert (um eine Besucherzählung zu haben, die keine Daten in die USA exportiert oder einen fremden Dienst nutzt), am Wochenende habe ich mich nun hingesetzt und die beiden `iframes` für Twitter und Flattr unter den Artikeln entfernt. Buttons die auf `iframe`s basieren, senden (wie bspw. auch der Facebook Like-Button) Userdaten an die entsprechende Website, auch wenn der Nutzer gar nicht mit den Buttons interagiert.

## Nicos puristic twitter button

Twitter stellt eigentlich ein recht zufriedenstellendes Javascript-API zur Verfügung, wenn nicht beinahe alles darauf hinaus liefe, am Ende den Link zum Sharing durch den blöden `iframe` zu ersetzen. Technisch ist das natürlich die einfachste Lösung, man will ja nicht mal eine Datensammelwut unterstellen. Allerdings, der einzige Sinn des Frames ist dann die Anzeige des sog. _Tweetcount_, also die Anzahl, wie oft ein Link schon auf Twitter geshared wurde. Diese Information lässt sich auf keinem anderen Weg zurückbekommen, außer über den genannten `iframe` (Update:) [direkt über das Twitter-API](/codecandies.de/2011/02/14/gegen-der-trend-privacy/#comment-9057) (die Funktion fehlt bei mir allerdings noch).

Dagegen ist es ein leichtes, die Sharing-API per Link mit den nötigen Daten zu versorgen, die den Service, das Teilen des Artikels auf Twitter, vollumfänglich ermöglichen. Ich habe mich in diesem Zusammenhang gefragt, wen die Zahl des _Tweetcounts_ eigentlich wirklich interessiert und musste feststellen: hey, das bin ja ich. Ich glaube wenig an den Effekt: »das haben nun schon 20 Leute geshared, das teile ich auch«, sondern die Zahl ist allein zu meiner Auskunft gedacht.

Ergebnis: ich nutze jetzt den Twitterbutton ohne `iframe`. Namentlich ist es nur ein Link zur Sharing-Funktion. Ein kleines Javascript holt beim Klick auf den Link, die zum Artikel passende Kurz-URL vom [bit.ly](http://bit.ly)\-API und shared sie dann bei Twitter. So wird zwar doppelt redirected (hüstel), weil Twitter noch seinen doofen t.co-Urlverkürzer darüber haut, dafür kann ich aber das Sharing zählen, über bit.ly., ein Service, den Twitter für t.co nicht (offen) anbietet.

Ohne Programmierlatein heisst das folgendes: es werden keine Userdaten mehr an Twitter übertragen, ohne dass man auf den Button klickt.

## Flattr dieses Blog

Für den flattr-Button hatte ich noch kurz Hoffnung in das Update de Wordpress-Plugins gesetzt, denn hier kann man seit neuestem sein Blog mit den entsprechenden API-keys von flattr.com ausstatten, wenn man es als "Browser-App" bei flattr anmeldet. Zumindest zur Zeit wird das aber nur genutzt, um einen Button im RSS-Feed zu ermöglichen und im Blog wird weiterhin die `iframe`\-Version genutzt. Da ich im Moment nicht weiter in das REST-API von flattr selbst einsteigen wollte, habe ich also das Plugin schlicht abgeschaltet. Stattdessen habe ich nun einen globalen Button dort eingefügt, der ein simpler Link auf das Gesamt-Thing meines Blogs ist.

Ich verstehe natürlich schon, dass das nicht das gleiche ist, wie ein echter Flattr-Button pro Artikel, aber bis es eine bessere Lösung gibt, soll das erstmal reichen. Nebenbei sei zu flattr noch vermerkt, dass meine Einnahmen i.d.R. die Fünf-Euro-Grenze nicht überschreiten und bisher immer wieder in andere Blogs reinvestiert wurden.

Auch hier ist das Ergebnis nun aber, dass keine Daten von Leuten die nicht auf den Button klicken an flattr übertragen werden.

## Nächste Schritte

Als nächstes werde ich die versprochene Page zum Thema Datenschutz hier ins Blog stellen, dort wird es dann eine Opt-Out-Möglichkeit für meine Besucherstatistik geben, neben der genauen Übersicht, welche Daten hier erhoben werden. Fortsetzung folgt also.
