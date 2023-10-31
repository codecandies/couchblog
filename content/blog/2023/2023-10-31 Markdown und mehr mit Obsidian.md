---
title: Markdown und mehr mit Obsidian
date: 2023-10-31T11:07:27+0100
tags:
  - Generde
  - Getestet
keywords:
  - Markdown 
  - Schreiben
  - Software
  - Tools
---

Ich schreibe meine Blogartikel in Markdown, mindestens [seit 2011](https://couchblog.de/codecandies/2011/05/31/der-schreiber/), wahrscheinlich schon länger. Und irgendwann bin ich dazu übergegangen, alles in Markdown zu schreiben, was ich mir so zu notieren habe. Zusammengefasst ist das eine ziemliche Menge locker ausgezeichneten Textes, die sich da in den Jahren angesammelt hat. 

Geschrieben habe ich diese Texte zunächst hauptsächlich mit dem [IA Writer](https://ia.net/writer), dann habe ich ein paar Jahre [Ulysses]([https://ulysses.app](https://ulysses.app/))[^1] genutzt. Dann wieder den IA Writer. Beide Programme glänzen auf ihre Art. IA Writer durch die wunderbare Typographie, die Simplizität und die Fokus-Modi. Ulysses dagegen ist vollgestopft mit Funktionen, vor allem für große Text-Projekte sicherlich das richtige Tool. Leider durch die unsägliche Abo-Politik auch ziemlich teuer. 

Was ich auch ausprobiert habe, ist [Notion](https://www.notion.so). Der Dienst geht schon sehr in Richtung Verwaltung und Ablage kompletten Wissens und hat mich in seiner Vielfalt und seinem feinen Layout erstmal durchaus fasziniert. Notion hat jedoch auch viele Funktionen, die ich nicht brauche, dafür aber wenig Möglichkeiten, das UX für mich zu beeinflussen. Was aber der ausschlaggebende Punkt meiner Ablehnung war: Markdown kann zwar zur Eingabe und als Exportformat genutzt werden, das war es dann aber auch schon wieder. Ich finde den blockbasierten Ansatz des Notion-Editors hervorragend und würde das unbedingt ins nächste ZON-CMS einbauen wollen, aber ich suche ja für mich eine Möglichkeit, Markdown-Dokumente zu schreiben und zu verwalten.

Kurz war die Phase, in der ich einfach Visual Studio Code zum Schreiben von Markdown verwendet habe. Das lässt sich zwar auch ganz gut konfigurieren (anderes Farbtheme für den Dateityp Markdown, Markdown-Tools, Focusmode), fühlte sich aber immer immer immer falsch an. _Don‘t write your texts where you code or all your texts become like a bad documentation._

## Was tun?

Nun habe ich mein _gesammeltes Wissen_ sehr lange sehr zerstreut… äh… gesammelt. Texte in Markdown auf der Platte, oder gleich ins Blog, zu lesende Artikel in Instapaper, Linkdatenbank noch in Notion, Zitate traditionell in die Notizen-App und so weiter und so fort. Das wollte ich gerne mal konsolidieren und glatt ziehen. 

Auftritt [Obsidian](https://obsidian.md/) könnte ich jetzt behaupten. Allerdings brauchte es zwei Anläufe, bis sich dieses feine Programm bei mir richtig verfing. Beim ersten Anlauf kam mir erstmal alles sehr hässlich vor, mit einer unangenehmen Typografie, Farben etc. Und die Möglichkeiten, was man alles einstellen kann sind zunächst schwierig zu finden und dann ein wenig _overwhelming_. Ich hab es zunächst also wieder weggelegt.

Ein Kollege zeigte mir allerdings kurze Zeit später seine Obsidian-Installation und die hatte nicht nur sehr interessante Features, sondern sah auch so viel besser aus, als das, was ich getestet hatte. Also habe ich mich noch einmal richtig mit Obsidian auseinander gesetzt. Und seitdem nutze ich es exzessiv.

## IA Writer look-a-like

Wichtig war mir erstmal, dass die Typographie stimmt. Da scheint sich auch schon das Standard-Theme verbessert zu haben, aber ich bin trotzdem (siehe oben) besseres gewohnt. Erster Stopp also „Theme“ aka. „Farbschema“ auswählen. Tatsächlich gibt es sogar ein ein Community-Theme „[IA Writer](https://github.com/mrowa44/obsidian-ia-writer)“. Letztlich habe ich mich aber für das „[Minimal](https://github.com/kepano/obsidian-minimal)“ Theme entschieden, welches sich mit dem Community-Plugin „[Minimal Theme Settings](https://github.com/kepano/obsidian-minimal-settings)“ noch ausführlich konfigurieren lässt. Wichtigste Änderungen: Schriftgröße rauf auf 20 - 22 Pixel, Zeilenhöhe auf 1.8 und einen Zeilenbreite von 48 Zeichen eingestellt. Freundlicherweise gibt es [die Fonts aus dem IA Writer zum Download](https://github.com/iaolo/iA-Fonts). Als Akzentfarbe habe ich `#18BEEC` eingestellt, das ist zwar nicht 100%ig wie im Writer (dort sind die Links grau und das Hellblau wird nur für den Cursor verwendet), aber ich mag die Links entsprechend hervorgehoben. Über ein CSS-Stylesheet ließe sich das natürlich noch weiter anpassen, das habe ich aber auf später verschoben.

<figure>
  {% image "./obsidian_screenshot.jpg", "Screenshot Editor-Ansicht Obsidian", null, null, "eager" %}
  <figcaption>Screenshot meiner Typografie-Anpassungen.</figcaption>
</figure>

## Bloggen mit Obsidian und Eleventy

Obsidian verwaltet seine Texte in den sogenannte _Vaults_, die aber erstmal einem Ordner auf einer Festplatte (mit einem unsichtbarem `.obsidian` Verzeichnis darin) entsprechen. Alles darin wird von Obsidian verwaltet und kann angezeigt und wenn es sich um Text/Markdown handelt, auch bearbeitet werden. Freundlicherweise funktionieren im Vault auch symbolische Links, denen klaglos gefolgt wird und deren Inhalte genauso zur Verfügung stehen.[^2] Auf den Content-Ordner des Checkouts meines [Eleventy](https://www.11ty.dev/)-Blogs[^3] zeigt also so ein symbolischer Link und schon gehören alle Bloginhalte zu meiner Wissensdatenbank (was ja nicht nur als Bild gut taugt). Vorbei die ganze Kopierarbeit, die ich mir früher noch machen musste, als ich Markdown in Programm XY schrieb, aber Frontmatter-Daten mit einem Texteditor drankleben musste und so weiter und so fort.

Comitten und pushen kann (und will) ich zwar nur an meinen Laptops, aber immerhin kann ich nun, dank [Obsidian-Sync](https://obsidian.md/sync)[^4], auch am Telefon und vor allem auf dem iPad Texte schreiben. Das habe ich anfangs per Apple iCloud versucht zu bewerkstelligen, was aber eine _mission impossible_ war. Minutenlange Denkpause beim Starten der mobilen App und das übliche Nicht-Synchronisieren von iCloud (Apple, it’s a shame!) machen es unerträglich. _Sync_ als Produkt funktioniert hingegen hervorragend und ist Ende-zu-Ende-verschlüsselt und alles. Da mein Textkorpus sehr groß ist, habe ich auf den mobilen Geräten alle Ordner außer den des aktuellen Jahres vom synchen ausgenommen.

Der Sache entgegen kommt auch, dass ich in Eleventy meine Content-Ordner (eher zufällig) so konfiguriert hatte, dass Texte und Bilder aus dem gleichen Verzeichnis kommen, eingeteilt nach Jahren (was bei meiner leidlichen Blogleistung zur Zeit leider ausreicht). So kann auch Obsidian direkt auf die Images zugreifen und synched diese auch gleich mit. Alles andere läuft über das praktische Obsidian-Plugin „Vorlagen“. So habe ich bspw. Vorlagen für komplette Artikel, mit vorausgefüllten Frontmatter-Daten, für die Datumsformate im Blog oder für spezielle HTML-Konstrukte wie die Inline-Bilder. 

Mithilfe der Vorlagen wiederum funktioniert auch das nächste praktische in Obsidian fest eingebaute Plugin „Eindeutige Notiz erstellen“. Mit diesem eigentlich für Zettelkästen gedachten Helferlein, erstelle ich alle meine Artikel. Es fügt dem Namen der Datei, einen konfigurierbaren Zeitstempel hinzu, so dass automagisch Dateinamen wie `2023-10-31 Markdown und mehr` entstehen[^5]. Ich nutze dieses Präfix aber nur zum Sortieren der Artikel in einem Jahr, für den Pfad im Blog ist Eleventy zuständig, er wird aus dem Datum des Artikel in den Frontmatter-Daten und dem Titel ebendort errechnet. Auf Knopfdruck erstellt Obsidian nun einen Artikel im Content-Ordner, mit Namen mit Zeitstempel-Präfix aus meiner Blogartikel-Vorlage. Bämm! Fertig ist das Mini-CMS. ;)

## Knowledge-Database im Aufbau

_Natürlich_ kann Obsidian aber mehr, als _nur_ mein Blog mit Texten zu füllen. Der Anspruch ist ja eher allumfassend und Notion dabei nicht unähnlich. In Obsidian soll alles zusammengeführt werden, was mensch so als Text produzieren kann, vom einfachen Zettelkasten bis zum großangelegten Wiki. Wichtigster Unterschied zu Notion: mein Content bleibt bei mir. Obsidian bietet zwar einen Sync und einen Publish-Dienst kostenpflichtig an (und ohne den Sync kommt mensch auch nur schwer aus), will aber von den Inhalten erstmal nichts wissen. Noch dazu wird alles in [reinem Markdown](https://www.markdownguide.org/tools/obsidian/) gespeichert.

Was Obsidian nicht selbst oder mit den offiziellen Plugins bewerkstelligen kann, wird von Community-Plugins nachgereicht. 1230 Stück wurden mir eben gelistet und sie enthalten alles von DB-Interface über Kanban-Boards, Day-Planner oder die Möglichkeit das UI mit Icons und Emojis vollzukleistern.

In einem weiteren Vault[^6] sammle ich also mein (hauptsächlich Arbeits-)Wissen. Das umfasst ein weiteres gesymlinktes Eleventy-Projekt (das ZEIT ONLINE Frontend Handbook) ebenso, wie meine Bookmarks und meine Zitatesammlung. Mit einem [Clipper-Plugin für den Webbrowser](https://forum.obsidian.md/t/latest-best-web-clipper/49980) kopiere ich mit Links und Textschnipsel von Webseiten in den Fundus. In diesem Vault sammle ich außerdem alle Notizen und Protokolle beispielsweise, oder Links zu externen Quellen im Verlag (wo leider viel mit Office 365, Confluence oder Diensten wie Miro gearbeitet wird/werden muss). 

Aber Obsidian ist auch in meine Arbeitsabläufe integriert. So führe ich täglich Buch über die Arbeit, die ich so mache. Dazu nutze ich „Daily Notes“, das ähnlich wie das zuvor genannte „Eindeutige Notiz erstellen“ funktioniert. In einem definierten Unterordner wird auf Knofpdruck eine Datei, die das aktuelle Datum als Namen erhält, aus einer definierten Vorlage erstellt. Als Vorlage habe ich eine Art Lückentext, den ich im Laufe eines Arbeitstages mit Daten über Checkin und -out, Termine und Portokollen fülle. Das läuft mal gut, mal weniger, aber die letzten drei Monate doch immerhin regelmäßig: es gibt für jeden Tag eine Datei und das wenigste was darin aufgezeichnet ist, ist meine Arbeitszeit, meistens aber viel mehr.

Eine echte Wissensdatenbank ist das aber jetzt noch nicht, weil ich zwar viel importiert habe, es aber nicht miteinander verlinkt ist. Dabei kann Obsidian solche Beziehungen sehr schön als Map anzeigen. Das muss in der nächsten Zeit einfach noch organisch wachsen. Jedenfalls macht es Obsidian durch die Funktionen für interne Verlinkungen sehr leicht, sein Wissen zu vernetzen (oder auch Wikis zu erstellen).

<figure>
  {% image "./obsidian_graph.jpg", "Beispielbild der Graphansicht", null, null, "eager" %}
  <figcaption>In der Graph-Ansicht werden die Verbindungen zwischen Dokumenten sichtbar</figcaption>
</figure>

## Nicht alles Gold

Natürlich habe ich auch Kritik an einigen Dingen: Was mir hin und wieder Probleme bereitet ist zum Beispiel die mobile App. Sie funktioniert besser, wenn mensch sich schon einigermaßen an die typische Obsidian-Bedienung gewöhnt hat (Beispiel: die Bedienung über die Kommandopalette, wie ich sie auch schon aus Visual Studio Code kenne). Trotzdem fällt mit das Navigieren in Texten, vor allem cooy und pasten oder auch die Auszeichnung mit Links mobil reichlich schwer. Neben meinem immer vorhandenen Dicke-Finger-Problem, ist das doch sehr hakelig, poppt viel auf was ich gerade nicht brauche oder der Cursor landet sonstwo. Das liegt IMHO hauptsächlich daran, dass mobile die Kommandopalette oder die Seitenleiste per Swipe von links nach rechts eingeblendet wird, was sich aber beißt mit Gesten wie Zoom durch Deep Touch und dann den Cursor bewegen. 

Etwas geholfen hat mir hier allerdings, dass ich die mobile Menüleiste editieren kann und diese Funktionen bietet, wie den Cursor eine Position nach links, rechts, oben oder unten zu bewegen. Außerdem habe ich Copy, Cut und Paste dort eingefügt. Die Leiste steht allerdings nicht immer zur Verfügung, bspw. wenn der Titel eines Dokuments geändert werden muss, oder beim Editieren der Properties eines Textes. 

Was ich nicht unerwähnt lassen will unter dem Stichwort „nicht alles Gold“: Obsidian ist (und das merkt mensch auch) eine Elektron-Anwendung, d.h. im Hintergrund arbeitet der Chromebrowser. Zu diesem Browser bin ich eigentlich nicht mehr so positiv eingestellt und ich vermeide wenn es geht seinen Einsatz im täglichen Browsen eigentlich. Hier komme ich leider nicht drum herum.

## TL;DR

Nachdem ich es mir in meiner Obsidian-Installation so richtig gemütlich gemacht habe, habe ich endlich das richtige Tool gefunden, mein Textaufkommen ordentlich zu verwalten, zu verweben und Teil davon zu veröffentlichen.


[^1]: Weil: [Setapp](https://couchblog.de/blog/2017/04/06/setapp/), was ich aber inzwischen nicht mehr nutze
[^2]: Es gibt wohl aber einen offenen Bug, der verhindert, dass Symlinks über Laufwerke hinweg funktionieren.
[^3]: Eleventy rendert für mich dieses Blog aus Markdown-Dateien, [siehe](https://couchblog.de/blog/2022/10/23/brand-new-good-for-you/).
[^4]: Der Sync-Dienst von Obsidian kostet $8/Monat, hier setze ich das aus 1. gesparte Geld wieder ein. _Seufz._
[^5]: Das Format reicht mir so, da mehr als ein Artikel pro Tag bei mir derzeit undenkbar ist, siehe Blogleistung.
[^6]: Obsidian Sync kann bis zu fünf Vault verwalten