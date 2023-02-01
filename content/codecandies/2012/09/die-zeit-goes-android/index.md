---
title: "DIE ZEIT goes Android"
date: "2012-09-17"
tags:
  - "Gearbeitet"
keywords:
  - "Mobile"
  - "Work"
---

Möglicherweise ist es an der einen oder anderen Stelle schon ein wenig durchgesickert, seit heute ist es nun aber auch [offiziell](http://www.zeitverlag.de/pressemitteilungen/die-zeit-app-ab-sofort-fur-android-tablets-trusted-shops-siegel-fur-das-digital-paket-der-zeit/): die ZEIT-App für Android Tablets _ist draussen_ und [im Play Store erhältlich](https://play.google.com/store/apps/details?id=de.zeit.webapp.android) oder kann (allerdings nur auf Android Tablets) im [Browser aufgerufen werden](https://webapp.zeit.de). Es gibt eine Probeausgabe, die gratis verfügbar ist, wer mehr ZEIT will, muss ein Abo abschließen.

Die App basiert auf den HTML5-Webviews, die auch schon in der iPad-App genutzt werden. Das ganze wird per JS mit einem Ausgabenmanagement, Inhaltsverzeichnis, viel drumherum und einer Swipingengine versehen. Lädt man sich eine Ausgabe herunter, wird sie in der Datenbank des Browsers abgelegt (derzeit noch ausschließlich WebSQL, die IndexedDB-Komponente ist noch nicht fertig). Was an Grafik und Gedöns nicht zu einer Ausgabe gehört wird über ein `Cache Manifest` gespeichert und im `local storage` des Browsers landen auch ein paar Daten. So kann man dann die Ausgabe, die man sich heruntergeladen hat auch [offline](/codecandies/2012/03/20/offline/) anschauen, bspw. im Zug, ich bin da in den letzten Wochen begeisterter Tester gewesen. Das alles funktioniert mit dem Standardbrowser ab Android 3, besser aber im Chrome, noch besser unter Android 4, nahezu perfekt auf [Nexus 7](/codecandies/2012/09/04/habemus-nexus-7-3/).

Nun kommt also die Zeit der Bugfixes und Reparaturen, das ist klar bei dem, was da draussen an Android Geräten herumgeistert. Wir haben zwar viele Tablets angeschafft und auf ihnen getestet, aber funktioniert und _funktioniert_, naja, man weiß ja schon.

So eine App wird ja von einer ganze Horde Menschen erstellt und gebaut. Da sind die Redaktion(en), das Produktmanagement, Agenturen mit denen wir zusammen gearbeitet haben. Alles tofte Leute, ohne die wir keinen Schritt tun könnten und denen ich hoffentlich nicht allzu sehr vor den Kopf stosse, wenn ich trotzdem an dieser Stelle ausschließlich mein Team namentlich erwähne, das in den letzten Wochen wirklich Außergewöhnliches geleistet hat: **Anika Szuppa** und **Arne Seemann**. Thanx a lot.
