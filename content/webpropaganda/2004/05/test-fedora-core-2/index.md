---
title: "Test: Fedora Core 2"
date: "2004-05-21"
tags:
  - "Generde"
---

![75](/images/webpropaganda/75.jpg)

Einen kurzen Testbericht gibt’s auch bei [LinuxLookUp](http://www.linuxlookup.com/modules.php?op=modload&name=Reviews&file=index&req=showcontent&id=59). Und da kann ich mich zum Teil nur anschliessen. Wenn man davon ausgeht, Fedora sei ein weiterer Schritt in der Konkurrenz zu Windows, dann muss man das wohl verneinen. Zwar läßt es sich einfach installieren, so wie es dann jedoch auf der Platte liegt, ist es für den Anfänger schlichterdings unbrauchbar. Alles sieht schön aus, allerdings kommt man ohne einen kräftigen Griff unter die Haube, also auf der Kommandozeile nicht zu einem System, dass mit Windows konkurrenzfähig ist. Da ist zunächst mal das Problem, dass Fedora aufgrund von Lizenzproblemen (die andere Distros nicht haben), weder MP3s abspielen kann, noch DVDs erkennt. Das kannte man ja schon von Redaht und Fedora 1. Um an die benötigten Pakete zu kommen (die zur Zeit noch wirklich schwierig zu bekommen sind) muss man zunächst zur “yum”-Paketverwaltung einige Server hinzufügen (`/etc/yum.conf`) oder besser gleich apt für rpm installieren. Nichts für Anfänger.

Ebenfalls sehr störend: up2date, ein auf yum basierendes Updatetool für die Installation funktionierte nur sporadisch. Sinnigerweise zeigt es dem User mit einem dicken roten Ausrufezeichen, dass es Updates gibt, kann sie dann aber nicht runterladen und installieren, sondern friert regelmäßig ein oder findet die passenden Header nicht (404Error). Peinlich. Auch hier ist wieder Handarbeit nötig. Und wenn man andere Sachen installieren möchte, als Fedora für die Distro vorgesehen hat, hilft “Hinzufügen/Entfern von Applikationen” auch kein Stück weiter, wieder müssen yum oder apt bemüht werden. Zusammengefasst: die RPM-Verwaltung ist eine Frechheit.

Fedora glänzt auf anderem Parkett: der neue Kernel 2.6 scheint ein echter Fortschritt zu sein, IMHO vor allem in Sachen Geschwindigkeit und was z.B. das Einbinden von WLAN-Komponenten angeht. Gnome 2.6 als Standarddesktop ist einfach herrlich, wenn es auch Kritiker am neuen Verhalten des Dateimanagers Natilus gibt (spatial windows). Apache2-Server und Datenbank sind leicht einzurichten, die Konfiguration der Internetverbindung schafft sogar meine Oma. Statt CVS kommt nun Subversion als zur Versionskontrolle zum Einsatz, statt XFree86 setzt man auf den “neuen” X-Server von X.org (der erste, der schon bei der Installation meine GraKa-Bildschirm-Kombi erkannte und richtig auf 1280×1024px einstellte (mehr ist leider nicht drin ohne Augenkrebs), herzlichen Glückwunsch dafür). All das arbeitet hervorragend.

Zusammengefasst: beim Paketmanagement muss man auf jeden Fall nachlegen, aber ansonsten ein gutes System. Und nachdem ich in den letzten Woche x Distros ausprobiert habe, bleibt Fedora 2 jetzt erstmal auf der Platte.
