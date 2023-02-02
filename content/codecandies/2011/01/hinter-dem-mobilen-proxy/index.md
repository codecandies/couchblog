---
title: "Hinter dem mobilen Proxy"
date: "2011-01-20"
tags:
  - "Gecodet"
keywords:
  - "Development"
  - "Mobile"
---

![](/images/codecandies/new_religions.jpg "Hinter dem mobilen Proxy")

Ich hatte jüngst großen Spaß mit dem mobilen Proxy der Telekomiker und—würde es nicht immer eine besonders störungsanfällige Nutzerschar treffen—ich würde glatt darüber lachen. Denkt man allerdings die Gutsherrenartigkeit mit der alle Mobilprovider mit unseren Websites im mobilen Netz umgehen konsequent zu Ende, wird einem leider Angst und Bange.

Erste Erfahrungen damit, das im mobilen Internet der Sourcecode einer Website beim Nutzer nicht so ankommt, wie man ihn am Server losgeschickt hat, hatten wir kurz nach dem Launch unserer iPad-Website. Eins der zahlreichen Scripte auf der Seite nutze einen `<meta>`\-Eintrag im Head der Seite, um zu erfahren, in welchem Ressort es sich gerade befand. Informationen, die man zwischen Datenbasis und Frontend sicherlich auch bspw. mit Hilfe einer Klasse am `<body>`\-Element übertragen hätte können. Aber unsere Templatehasen haben uns einst einen dicken `<head>` mit massig Informationen über die Seiten unserer Anwendung gegeben, warum sollte man die nicht nutzen und auslesen? Weil im mobilen Netz (zum Zwecke der Geschwindigkeitserhöhung) von den diversen _mobile proxy_ alle `<meta/>` herausgefiltert werden, zum Beispiel.

Ok, das kann man ja noch verstehen, steht ja auch nichts drin, was so ein Handy, iPhone oder auch iPad im 3G-Betrieb brauchen könnte. Da zuckt der Entwickler kurz mit den Schultern und programmiert drum herum. Ein wenig komplizierter wurde es, als wir feststellten, dass im mobilen Netz nicht nur Daten aus dem `<head>` entfernt werden, es werden auch welche hinzugefügt. Dort verlinkte Javascripte bspw. werden komprimiert und direkt in den `<head>` ausgegeben. Das ist ja nett. Ich nehme mal an, ein derart aufbereitete Seite wird dann so gecached, spart ja auch reichlich Verbindungen. Technisch alles durchaus verständlich.

Und wenn man sich denn darauf verlassen könnte. Aber bspw. die Telekomiker _verbessern_ ihre Systeme natürlich auch und da dieses Treiben nur wenig oder gar nicht dokumentiert ist, gibt es natürlich auch keine Releasetermine, keine Vorwarnung. Dass man wieder in die 3G-Falle gelaufen ist, merkt man genau dann, wenn der erste Nutzer sich meldet.

Dazu ein kurzer murphyesker, aber logischer Merksatz: _Fehler am Livesystem werden **immer** zuerst von einem Nutzer entdeckt, niemals vom Entwickler_.

Vor kurzem hatte also mein Lieblingsprovider wieder an seinem Proxy herumgespielt und folgendes Verhalten hinzugefügt: ähnlich wie die Javascripte wurden nun auch CSS statt wie vorgesehen verlinkt zu werden, direkt in den `<head>` _geechoet_, schick auf eine Zeile komprimiert. Das sollte weiter nicht stören, es sei denn man nutzt eine Technik zum Austauschen von verlinkten Styles zur Ladezeit. Dieser Hack um Stylesheets bei Bedarf zu dis- und/oder enablen funktioniert dann so gar nicht mehr.

Und wenn diese Technik dann für die Seite **wichtig** ist, dann kann man schon mal ins Schwitzen kommen. Die Lösung war in diesem Fall recht einfach: schreibt man statt `<link rel="stylesheet" href="../styles.css"/>` genauer `<link rel="stylesheet" href="../styles.css" media="screen"/>`, zeigt sich der Proxy derzeit gütig und lässt die Styles in Ruhe. Mal davon abgesehen, dass sich das leider morgen ändern kann, kann man nun auch keine `@media` innerhalb des CSS mehr machen.

Im Grunde ist das ja auch alles nicht so schlimm, so lange der Mobilprovider sich nicht auch noch am Inhalt der Seite zu schaffen macht. Es zeigt aber, dass eine iPad-HTML-Anwendung sehr viel defensiver gebaut werden müsste, als ich es bisher getan habe. Vielmehr muss man berücksichtigen, dass ein Tablet eben auch ein mobiles Device _sein kann_ und dann eben den gleichen Restriktionen unterliegt, wie das schnöde Handy in meiner Tasche. Hier klafft imho noch eine _mobile-Web-Smartphone-und-Tablet-Lücke_, die sich auch darin zeigt, wie drastisch niedrig die Datenmengen von den Providern beschränkt werden (statt die Infrastruktur auszubauen oder die Technik zu verbessern). An Seiten, die eine Tonne wiegen und zwei Minuten Ladezeit bei UMTS auf die Ur bringen, hat der Nutzer in zweierlei Hinsicht wenig Freude.

_One Web_ ist gar nicht so einfach.

Artikelbild: [Some rights](http://creativecommons.org/licenses/by-sa/2.0/) reserved by [Masked Malayan](http://www.flickr.com/photos/maskedmalayan/) {:.copyright}
