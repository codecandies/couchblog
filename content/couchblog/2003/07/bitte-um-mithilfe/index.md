---
title: "Bitte um Mithilfe"
date: "2003-07-11"
tags:
  - "Gecodet"
---

Seit einiger Zeit funktioniert bei mir der Ping auf [weblogs.com](http://www.weblogs.com) nicht mehr. Von einem Tag auf den anderen, nur das ich es zunächst nicht bemerkt habe. Ich habe jetzt so ziemlich alles ausprobiert (alle anderen Pings an/abgeschaltet, PingTimeOut verändert) was mir dazu einfiel: **es pingt einfach nicht!**

Abwechselnd erscheinende Fehlermeldungen im Log:

> Ping ‘http://rpc.weblogs.com/RPC2’ failed: Ping error: Can’t open named stream because TCP/IP error code 11001 - Host not found. (DNS error).

…und…

> Ping ‘http://rpc.weblogs.com/RPC2’ failed: HTTP error: 500 read timeout

Zumindest letztere Meldung hat man auch sonst öfter Mal, wenn MT nicht lange genug auf die Antwort von weblogs.com wartet, man erscheint dann aber normalerweise trotzdem in der Updateliste (es fehlt ja nur die Rückmeldung). **So ist es in diesem Fall aber nicht.**

Pings auf [blo.gs](http://blo.gs) und so weiter funktionieren übrigens. Weiß jemand was da los ist?
