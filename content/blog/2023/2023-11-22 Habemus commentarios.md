---
title: "Habemus commentarios"
date: "2023-11-22T06:26:36+0100"
tags:
  - "Gebloggt"
keywords:
  - "Kommentare"
---

Wer hätte das gedacht? Seit langer Zeit versprochen und nun, die Liste der Dinge, die noch bis zum Ende des Jahres umgesetzt werden müssen, fest im Blick, endlich umgesetzt! 

Dieses Blog hat wieder eine Kommentarsektion.

Eine einigermaßen rudimentäre, aber Kommentare ans Blog pappen und gleichzeitig den Datenschutz im Auge zu behalten und das Blog Cookie frei zu halten, das ist mitunter etwas viel verlangt. Die technischen Hürden, die interaktive Elemente auf statisch generierten Webseiten verursachen, sind da noch das kleinere Problem.

Also kann eins, kannst du, jetzt unter jedem Artikel kommentieren. Für die/den Kommentierende\*n sieht es dann zunächst so aus, als würde der Text direkt gerendert, dem ist aber nicht der Fall. Stattdessen wird der Text an ein API geschickt und wartet dort in einer Pipeline darauf, dass ich ihn freigebe. Das wiederum ist nötig um dem immer noch nervigen Spamming entgegen zu wirken. Ich habe heute nacht diese Funktion das erste Mal aktiviert und heute morgen lagen schon die ersten zwei Spamnachrichten in der Pipeline… that escalated quickly. Es kann also etwas dauern, bis ich mich herablasse, eure Kommentare freizugeben. Erst dann rendert Netlify die Webseite neu und erst dann kann außer mir und der/dem Kommentarautor\*in auch andere den Kommentar lesen.

Wichtig dabei: es werden keinerlei Cookies zur Wiedererkennung gesetzt, lediglich der Kommentartext wird in einem Localstorage-Objekt geparkt. Niemand braucht seinen echten Namen anzugeben, und auch keine Emailadresse. Gespeichert wird am Ende nur der Inhalt, beispielsweise so:

```json
{
	"author": {
		"name": "Nico",
		"website": "https://couchblog.de"
	},
	"date": "2023-11-21T23:58:06Z",
	"id": "01HFT53NPNDSB0Z2P16QAK4VS4",
	"message": "Das war ein schöner Tag _auf_ dem Darß.",
	"message_html": "<p>Das war ein schöner Tag <em>auf</em> dem Darß.</p>"
}
```

Keine Cookies heißt natürlich auch: das Formular muss immer komplett ausgefüllt werden und keine Email heisst, keine Benachrichtigungen, wenn jemand auf einen Kommentar antwortet. Wie in den alten Zeiten.

Der Dienst, den ich für all das nutze, stellt in der Hauptsache eine Github-App zur Verfügung, die aus den Kommentaren JSON macht und in mein [Repository](https://github.com/codecandies/couchblog) pusht. Was dann einen Netlify-Build anstößt. Das ist erstmal nicht die beste Art, wie sowas umgesetzt werden kann. Und der Dienst wird auch seit 2021 nicht mehr wirklich weiterentwickelt (deshalb verlinke ich ihn jetzt ausdrücklich nicht), aber er ist so einfach gestrickt, dass ich den Datenschutzlevel anpassen konnte, ohne Cloudengineer (m/w/d) zu werden. In Zukunft werde ich mal [Staticman](https://staticman.net/) und [Utterances](https://utteranc.es/) evaluieren. Das aber erst im nächsten Jahr.

So, dann kommentiert mal schön. Vielleicht blogge ich dann auch wieder mehr…