---
title: "Die Unzuverlässigkeit unserer Bluetooth-Kopfhörer hat nichts mit den Corona-Apps zu tun"
date: "2020-04-12"
tags:
  - "Gesellschaft"
  - "Generde"
keywords:
  - "Apple"
  - "Corona Warn App"
  - "Coronavirus"
  - "Google"
  - "SARS-2"
  - "Software"
persons:
  - "Ben"
coverImage: "gian-cescon-unsplash.jpg"
---

Ich lese derzeit viel über Corona-Tracing-Software, also jene Apps, die ano- oder mindestens pseudonymisiert Kontakte zu anderen Smartphones sammeln sollen und dann mit Nachrichten über positive Tests auf Sars-CoV-2 deren Träger:innen abgleichen sollen. Gerade haben Apple und Google eine (bis dato einmaligen) Zusammenarbeit [angekündigt](https://blog.google/inside-google/company-announcements/apple-and-google-partner-covid-19-contact-tracing-technology), um diese Funktionalität zunächst als API und dann auf Betriebssystemebene in iOS und Android zur Verfügung zu stellen, aber auch in Deutschland wird bereits länger an Apps nach dem sogenannten [Pepp-PT](https://www.pepp-pt.org/)\-Prinzip gearbeitet. Wer wissen will, wie derlei Apps funktionieren können, kann das [hier bei netzpolitk.org nachlesen](https://netzpolitik.org/2020/corona-tracking-datenschutz-kein-notwendiger-widerspruch/#spendenleiste), oder hier im [Logbuch Netzpolitik auch nachhören](https://logbuch-netzpolitik.de/lnp338-corona-tracking-app). **Vereinfacht** gesagt informieren sich Smartphones mit der App untereinander, wenn sie sich bspw. für 15min. näher als 1,5m kommen. Nutzer der App, bei denen ein positiver Test auf Corona vorliegt, geben diese Infomation in die App ein und alle zutreffenden Kontakte bspw. der letzten zwei Wochen (Inkubationszeit) werden automatisch informiert, dass sie einen Kontakt hatten und sich in Isolation begeben sollen. So soll es mögoch werden, dass sich Leute isolieren, die noch keine Symthome haben, die Infektionsketten können durchbrochen werden, ohne das wir alle in Isolation leben müssen.

Tatsächlich reden und schreiben darüber allerdings viele Menschen, die davon nur wenig oder keine Ahnung haben. Ich will nun gar nicht Teil [dieser selbsternannten Experten](https://futurezone.at/meinung/corona-krise-die-zeit-der-halbgebildeten/400808087) sein, aber… eine Sache ist mir doch aufgefallen, die ich mal loswerden möchte und zwar wird als Gegenargument gegen solche Apps **Bluetooth** genannt. Also Erfahrungen, die man als Nutzer von Bluetooth-Kopfhörern und ähnlichen Gerätschaften gemacht hat, wenn sie sich mal wieder nicht mit dem daneben liegenden Smartphone koppeln lassen, ein Gerät das andere nicht findet oder auch Übertragungen einfach abbrechen. Das hat aber mit der Technik, die diese Apps verwenden sollen nichts zu tun. Der Bluetooth-Standard ist offenbar breiter gefächerter, als sich der durchschnittliche Airpod-Nutzer sich das vorstellen kann, hier geht es zunächst mal um [Bluetooth LE](https://de.wikipedia.org/wiki/Bluetooth_Low_Energy) (low energy) und der Nutzung dessen Broadcastfähigkeiten und der sogenannten [iBeacons](https://de.wikipedia.org/wiki/IBeacon), die ein regelmäßiges Broadcastssignal senden, ein kleines „Hallo hier bin ich“, mit einem kleinen Satz Daten. Geräte müssen zur Sicherstellung der Funktion der App **nicht miteinander gekoppelt werden** und schlechte Erfahrungen damit sind damit für diese Apps belanglos und kein Argument.

Warum mich das aufregt? Die Corona-Tracking-Apps werden nur auf freiwilliger Basis funktionieren. Aus diesem Grund müssen sie einerseits datenschutzmäßig Vertrauen schaffen und andererseits müssen die zukünftige Nutzer der App Vertrauen in deren Funktionsweise haben, damit genug Menschen bereit sind, sich eine solche App zu installieren. Und das widerum ist nötig, damit das Konzept der Apps funktioniert. Auf Unwissenheit basierende Argumentationen nach dem Prinzip „das kennen wir doch alle, das funktioniert doch wieder nicht“ führen da unnötig in die Irre und zerstören das Vertrauen, noch bevor es aufgebaut werden kann. Dabei gibt es durchaus [noch genug Probleme zu lösen](https://netzpolitik.org/2020/warum-freiwilliges-handy-tracking-nicht-funktioniert/), bevor wir Software haben werden, die hilft, uns gegenseitig vor Corona zu schützen.

Ich wäre jedenfalls bereit, der Technologie hier eine Chance einzuräumen und das hat für mich mit [magischem Denken](https://lauerundwehner.de/eugh-zu-visegrad-staaten-corona-bonds-dividende-trotz-staatshilfen/?t=1%3A18%3A22%2C1%3A27%3A23), deus ex machina gar nichts zu tun. Tatsächlich weiss ich aus Erfahrung, dass es noch etwas dauern wird, bis die Technik ausgereift genug ist, bis genug Bugs beseitigt sind, bis alles funktioniert, leider funktioniert Softwareentwicklung so und das ist schon schlimm genug. Kollege Ben hat an dieser Stelle immer lachend gesagt: „Zum Glück bauen wir keine Herzschrittmacher!“, aber in diesem Fall kommt man dem schon ziemlich nahe…

Artikelbild: Foto gemeinfreiähnlich freigegeben von [Gian Cescon](https://unsplash.com/@giancescon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) auf [Unsplash](https://unsplash.com/@giancescon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) {:.copyright}
