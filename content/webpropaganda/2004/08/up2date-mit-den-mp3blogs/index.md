---
title: "Up2date mit den MP3Blogs"
date: "2004-08-26"
tags:
  - "Gefunden"
---

Du hörst gerne Musik? Du liest jede Menge MP3 Blogs? Du hast wunde Finger von dauernden Einzeldownloads dort? Du hast eine grosse Platte und Linux? [Jeffrey Veen](http://www.veen.com/jeff/) hatte die Lösung dazu schon vor über einem Monat: [MP3 Blogs und wget](http://www.veen.com/jeff/archives/000573.html). Geiol!

> wget -r -l1 -H -t1 -nd -N -np -A.mp3 -erobots=off -i ~/mp3blogs.txt
