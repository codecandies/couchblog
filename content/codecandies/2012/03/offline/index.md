---
title: "Offline"
date: "2012-03-20"
tags:
  - "Gecodet"
keywords:
  - "HTML"
  - "Mobile"
  - "Apps"
---

![Apps!!!](/img/codecandies/folien_boot.png)

Als Alternative zur _Apptisierung_ des mobilen Internets wird immer wieder die Webapp genannt. Ebenso oft wird betont, dass native Apps den Webapps in UI und Features überlegen sind. Die Browser holen jedoch langsam auf, z.B. mit der Möglichkeit Geodaten zu lesen, oder auch Zugriff auf eine im Smartphone integrierte Kamera zu erhalten. Und dann ist das noch das Feature der _offlinefähigkeit_. Im folgenden will ich einige Techniken dazu kurz anreissen, zum einen um (mir) einen Überblick zu verschaffen, zum anderen um feststellen zu können, wie weit wir denn technologisch heute sind, in Sachen _offline_. Zum über den Onlinezustand hinaus gehenden Speichern von Daten stehen im wesentlichen drei Techniken zur Verfügung.

### DOM Storage

Als [DOM Storage](https://developer.mozilla.org/en/DOM/Storage) bezeichnet man einen kleinen, leicht zugänglichen Speicherbereich, auf den vom Browser über eine sehr einfaches Interface zugegriffen werden kann: es werden jeweils Key-Value-Paare gespeichert. Das DOM Storage kommt in zwei Ausführungen: als Localstorage ist der Speicher persistent, als Sessionstorage hält er nur bis zum Sessionende.

DOM Storage besticht vor allem durch die Einfachheit mit der man ihn nutzen kann und ist zudem weit verbreitet. Deswegen wird er wohl vielerorts als das Schweizer Messer der Offlineapplikationen angespriesen; ja, das wäre ja zu schön… die Wahrheit ist: [DOM Storage is considered harmful](http://hacks.mozilla.org/2012/03/there-is-no-simple-solution-for-local-storage/), vor allem wegen seiner grausigen Performance. Zudem ist die Menge an Speicher, die man damit zur Verfügung bekommt ziemlich klein. Unter iOS stehen wohl nicht mehr als 5 MB zur Verfügung, da kann man eh' keine großen Sprünge machen, auch wenn Androiden und Desktopbrowser mehr Speicher zu lassen.

### Application Cache

Die Mutter der Offlinefunktionalitäten dürfte der [Application Cache](http://diveintohtml5.info/offline.html) sein. Hier steuert man unter Zuhilfenahme einer Manifest-Datei, welche Dateien der Browser für die eigene Webapp in den Application Cache legt. Der Clou dabei ist, dass im Offlinezustand diese gecachten Dateien völlig transparent zur Verfügung stehen. Ohne die Meldung »Ey Alter, geh' mal online« werden Bilder aus dem Cache geladen und Scripts interpretiert. So sollte es jedenfalls sein. Hier zeigt sich der _Browser called Browser_ (aka. Android-Webkit) aus Android 3.2 etwas unwillig und beschwert sich per Popup, das man ja nun offline sei, nur um danach alles wie gewünscht zu verarbeiten.

Für den Application Cache gibt es auch etwas [Javascript-Interface](https://developer.apple.com/library/safari/#documentation/iPhone/Conceptual/SafariJSDatabaseGuide/OfflineApplicationCache/OfflineApplicationCache.html#//apple_ref/doc/uid/TP40007256-CH7-SW5) mit dem man bspw. den Cache leeren kann. Auch gut geeignet zum Debuggen, denn wegen der oben erwähnten Transparenz, sind Fehler manchmal etwas schwierig zu finden. Hilfreich: [hier kann man seine Manifest-Datei validieren lassen](http://manifest-validator.com/). Wermutstropfen Nummer eins: [auch der AppCache wird durch das störrische iOS auf einer Untergrenze von 5 MB festgenagelt](http://techblog.viewbook.com/2011/02/mobile-safari-offline-application-cache-limit/).

### Browserdatenbanken

Wer bis hier mit den vorgeschlagenen Möglichkeiten zurecht kommt, oder mit anderen Worten: wer nicht mehr als 5 MB offline zu speichern hat, der hat Glück gehabt, denn er ist nicht auf die DB-Funktionalitäten der modernen Browser angewiesen. Diese stellen zwar wesentlich mehr Speicherplatz zur Verfügung, selbst im mobile Safari kann man, nachdem der Nutzer zugestimmt hat, bis zu 50 MB Daten in Datenbanken speichern und offline wieder abrufen. Trotzdem steht man derzeit vor einem Schlachtfeld.

Auf der einen Seite steht WebSQL, dass zwar in vielen Browsern zur Verfügung steht (Chrome, Opera, Safari, Android Browser…), aber vom W3C letztendlich [verschmäht](http://www.w3.org/TR/webdatabase/) wurde, weil alle Browserhersteller das gleiche Backend nutzten. Stattdessen arbeitet man nun an [IndexedDB](https://developer.mozilla.org/en/IndexedDB). Das wäre sicherlich eine genauso gute Lösung, ist aber zumindest zum heutigen Zeitpunkt [nicht gerade verbreitet](http://caniuse.com/#feat=indexeddb): Firefox kommt seit Version 4 damit, Chrome (ab 12) kann beides, IE 10 wird es haben [hat es](http://blogs.msdn.com/b/ie/archive/2012/03/21/indexeddb-updates-for-ie10-and-metro-style-apps.aspx), eines Tages. Der neue Chrome für Android kommt ebenfalls mit IndexedDB. Momentaner Stand hier ist allerdings, dass sich die Implementierungen doch noch sehr stark unterscheiden, zwischen den Browsern, aber vor allem auch von einer Browserversion zur nächsten, die ja heutzutage praktisch wöchentlich kommen…

Da muss man sich dann natürlich fragen, ab wann sich der Aufwand lohnt, denn um eine Browser-Offline-Datenbank-Anwendung zu schreiben, braucht man schon ein paar ausgewachsene Abstraktionsstufen, um die Daten in allen Browsern ordentlich wegzuschreiben und auch wieder zu finden…

### Ein Fazit

Es ist nicht alles Gold, was sich HTML5 nennt. Beim Storage geht es jedenfalls, vor allem bei den Datenbanken noch sehr holprig zu. Somit liegt die Grenze für Offlinedatenspeicherung doch sehr sehr sehr niedrig. Definiert wird diese Untergrenze regelmäßig von den iOS-Geräten, man könnte Apple verdächtigen, den Webapp-Entwicklern Steine in den Weg legen zu wollen, um seine liebgewonnene App-Welt zu schützen, aber andererseits, man will ja auch keine Verschwörungstheorien verbreiten. ;)
