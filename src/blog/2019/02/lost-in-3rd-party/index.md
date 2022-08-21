---
title: "Lost in 3rd Party"
date: "2019-02-26"
tags:
  - "Generde"
---

“Sag mal, warum wird eigentlich auf unserer Seite `Roboto.woff` von einem fremden Server geladen, wenn man auf den “Feature-A-Button“ klickt? Der fremde Server hat doch mit Feature A überhaupt nichts zu tun. Und vor allem wird da weit und breit kein Roboto-Font benutzt!”

“Ja, alsooooo… hm… chrchrchrchrchr…………”

“………”

“Alsooooo… das besagte 3rd-Party-Script lädt mit sich eine `app.js` nach und diese lädt ein `app.css`, das netterweise Fonts für unsere Website sozusagen global definiert, eben auch die Roboto…“

„Ja, aber die würde doch nur geladen, wenn sie benutzt würde, was wenn ich das richtig erinnere nur passiert, wenn man das Popup der 3rd-Party aufruft.“

„Richtig. Aber in unseren Videos, die in einem iframe laufen, wird ein kleines HTML mit viel CSS und Javascript geladen, dass Funktionen zur Steuerung der Werbung bereitsstellt. Und dort wird ein Fontstack `Roboto, Arial, Helvetica, sans-serif` verwendet. Das war wohl so gedacht, auf verschiedenen Geräten immer den Standardfont darzustellen, auf Android-Telefonen also Roboto.”

“Das ist ja ganz schön blöd, dass sich dieses 3rd-Party-Gewämse gegenseitig beeinflusst, hätte man das nicht anders machen können?”

“Tja, die eine 3rd-Party könnte einfach darauf verzichten, für ihren fast nie sichtbaren Sch… auch noch Webfonts zu benutzen. Oder die Werbefritzen hätten `font-family: sans-serif;` schreiben können, um überall den Standardfont zu treffen… Aber so ist da eben, wenn man die Kontrolle über die eigene Website abgegeben hat.”
