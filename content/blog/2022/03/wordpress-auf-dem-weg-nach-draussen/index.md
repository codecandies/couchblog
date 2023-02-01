---
title: "Wordpress auf dem Weg nach draußen"
date: "2022-03-01"
tags:
  - "Generde"
keywords:
  - "11ty"
  - "Wordpress"
---

Reisende soll man nicht aufhalten.

Während Marc schon [die Vorzüge des neuen full-site editing in Wordpress feiert](https://marc.tv/wordpress-migration-full-site-editing/), trauere ich hier unten in Villa Bacho noch dem Bloggen wie es mal war hinterher. Der Block-Editor von Wordpress geht mir nun seit seiner Einführung auf den Sack, nicht nur damit, dass ich _jedes einzelne Mal_ mit "Willkommen zum neuen Block-Editor" begrüßt werde. Dabei bin ich gar nicht genereller Gegner von block-orientierten Editoren, drüben bei Notion beispielsweise nutze ich ein ähnliches System exzessiv und sollte mich jemals jemand fragen, wie ich den Editor in unserem CMS bei meinem Arbeitgeber gestalten würde, dann genauso. Aber das sind eben andere Anwendungsfelder. Hier will ich einfach nur reinschreiben und da steht mir Wordpress immer häufiger mehr im Weg, als dass es hilft.

Nicht erst seit ich mein erstes Projekt mit dem static site generator [11ty](https://www.11ty.dev/) gebaut habe, schiele ich darauf, mein Blog dahin zu migrieren. Inzwischen ist der in der 1.0 Version angekommen und ich hatte jüngst Gelegenheit noch einmal ein größeres Projekt mit einer recht großen Menge von Markdown-Dokumenten damit umzusetzen. Als das fertig war, habe ich gedacht: so willst du eigentlich dein Blog betreiben, schau doch mal, ob es ein Programm gibt, dass deine Wordpress-Datenbank in Markdown-Dokumente umwandelt. [Natürlich gibt es das](https://www.npmjs.com/package/wordpress-export-to-markdown).

Und so bin ich seit bin ich seit ein paar Tagen dabei, mein Wordpress-Theme um den ganzen Müll den ich nicht mehr brauche entledigt auf meiner lokalen Eleventy-Instanz fertig zu bauen. Inzwischen stehen die Homepage, die Artikelseiten, die (bei der Gelegenheit gleich ein wenig aufgeräumte) Themenübersicht und der RSS/Atom-Feed. Kommentare habe ich ja eh schon lange abgeschaltet (auf einen Kommentar kamen seinerzeit rund 5000 blockierte Zugriffsversuche), die fehlen mir in der statischen Welt also auch nicht. Es wird natürlich auch weiterhin die Devise gelten: **no cookies required**.

Und in diesem Zustand von fertig habe ich zwar viel Javascript auf für die Erstellung der Seiten geschrieben, **aber noch keine Zeile für das Frontend.** Wenn ich das Menü, das aufgrund der hier ja obligatorischen Langeinträge wie "Impressum", "Datenschutzerklärung" und "Autobahnmittelstreifenbepflanzungsmaßnahme" eine mobile Lösung braucht, auch noch ohne den obligatorischen Hamburger und JS hinbekomme, dann kauf ich mir von der gesparten Prozessorpower eine eigene Eisscholle.

Was noch fehlt ist der Weg vom Rechner (oder Github?) zum Server. Moderne Viele Menschen machen sowas ja mit den tollsten Lösungen aus Containern, CI und CD, Github Actions, oder cloud computing Diensten (also den Computern anderer Leute)… ich dachte ich trolle da etwas in SCP oder rsync zusammen, der guten alten Zeiten wegen… schließlich weiß ich noch, wie man Datei- und Verzeichnisrechte richtig setzt. :)
