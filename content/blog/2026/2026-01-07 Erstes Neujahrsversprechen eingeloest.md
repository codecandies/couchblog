---
title: "Erstes Neujahrsversprechen eingelöst"
date: "2026-01-07T07:39:01+0100"
tags:
  - "Gebloggt"
keywords:
  - "Couchblog"
---

Kleine Randnotiz: ich habe bereits meinen ersten Vorsatz aus den Silvesternacht umgesetzt: **in diesem Blog [kann wieder kommentiert](#comments__form) werden!**

Nach der halbgaren Umsetzung mit der ich einst gestartet bin, habe ich *zwischen den Jahren* endlich den Arsch hoch bekommen und mich mit Netlifys Formular und Server-Side-Funktionen auseinandergesetzt. Mit Hilfe [dieses Artikels](https://storiknow.com/add-comments-to-static-site-built-with-netlify-and-eleventy/) habe ich das dann tatsächlich umgesetzt und heute nacht den ersten Betat-Test gelauncht.

Das Verfahren der Kommentarverarbeitung ist etwas komplex, aber auch irgendwie lustig: Netlify erkennt die Kommentarformulare selbstständig und wertet diese beim Abschicken aus. Das triggert dann eine *server side function*, die den Kommentar nimmt und damit bei Github einen Branch und einen *pull request* gegen `main` eröffnet. Das ist sozusagen mein Kontrollinstanz, wenn ich den PR merge, triggert das wieder den Buildprozess und keine fünf Minuten später ist der Kommentar dann live. Alles überhaupt nicht neu, hatte nur nie Zeit, mir das mal ordentlich anzuschauen.

An dem Formular schraube ich noch etwas, die *experience* nach dem Abschicken ist noch etwas ungewohnt altmodisch, aber hey… wo gehobelt wird. Jedenfalls ist dieses Blog nun wieder ein echtes Blog, mit Kommentaren.