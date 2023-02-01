---
title: "Mind your Kleinerzeichen"
date: "2004-12-07"
tags:
  - "Gelebt"
---

Das ist mir ehrlich gesagt überhaupt noch nicht passiert: Webseite gebaut (mit all den bösen Sachen von Imagemap bis Javscript)... es ist ein Bug drin. Firefox macht er nichts aus (jedenfalls sieht alles auf den ersten Blick i.O. aus), aber IE zerhaut komplett alles. Auf fehlende schließende Tags geprüft. Nichts. Die Seite validiert auch einwandfrei. Ums kurz zu fassen: ich hab über eine Stunde gesucht, kurz vorm Abdrehen: "Hey, wo ist eigentlich der Untertitel?" Aha, also zeigt auch Firefox nicht alles an. Hurra, da ist es ja:

> `<h2>**<**Der Fehlerteufel</h2>`

Zum Auswachsen.
