---
title: "Versteckt: Microformate und FOAF"
date: "2008-05-08"
tags:
  - "Gecodet"
keywords:
  - "Microformate"
  - "FOAF"
persons:
  - "Tim Berners Lee"
---

Es gibt so Sachen, die können einem zum Steckenpferd gereichen. So habe ich ja als Jugendlicher immer versucht, alle Anschlüsse, die hinten an meiner Stereoanlage so dran waren auch wirklich mit Geräten zu belegen: eine fixe Idee natürlich, aber am Ende hat man doch eine ganz nette Anlage. Ganz ähnlich erging es mir, als ich auf das Firefox-Plugin [_Operator_](https://addons.mozilla.org/de/firefox/addon/4106) gestossen bin. _Operator_ durchsucht Webseiten nach diversen Microformaten und bietet zu diesen passende Aktionen an. Findet es zum Beispiel eine Visitenkarte (hCard), wird das angezeigt und Aktionen wie “dem Adressbuch hinzufügen”, “in Google Maps anzeigen” und so fort zur Verfügung gestellt. Das ist mal ein echter Mehrwert möchte ich meinen. Mit einer kleinen Einschränkung: trotz eines kurzen Hypes im letzten Jahr, scheinen Microformate nicht sondernlich verbreitet zu sein…, jedenfalls nicht in den Seiten, die ich so regelmäßig besuche. Zumindest hier hat sich das jetzt drastisch geändert.

### Microformate – _semantic web_ für Ungeduldige

Microformate _verstecken_ semantische Informationen in bereits vorhandenem XHTML-Code. Sie funktionieren deswegen bereits hier und heute, ohne gigantische Ontologien, zusätzliche Dateien etc. pp. Wer seine Website mit semantischer Bedeutung anreichern will, aber nicht auf Tim Berners Lee »semantic web« warten will, kommt damit zumindest ein Stück weiter.

Es gibt eine ganze Latte verschiedener Microformate, bspw. die schon genannte [Visitenkarte](http://microformats.org/wiki/hcard), ein Format für die Darstellung von [Produktkritiken](//microformats.org/wiki/hreview) oder zur Darstellung von [Beziehungen zwischen Webseiten](http://microformats.org/wiki/XFN). Die komplette Liste gibts im [Microformats-Wiki](http://microformats.org/wiki/).

Auf diesem Weblog kommen zur Zeit fünf einzelne Microformate zum Einsatz. Zunächst mal die schon strapazierte Visitenkarte, völlig klar. Darin enthalten sind zwei Unterformate: **adr** und **geo**. Die sogenannte _hCard_ liegt im Sidebar in einem versteckten `div`, da ich die Adresse nicht für das menschliche Auge darstellen wollte. Programme wie Operator finden die Informationen natürlich trotzdem. Der Code sieht ungefähr so aus:

```html
<div class="hidden">
	<a class="url fn" href="http://www.zeit.de/">Nico Brünjes</a>
	<div class="org">Die Zeit online</div>
	<div class="adr">
		<div class="street-address">Buceriusstr. 1/Eingang Speersort</div>
	  	<div><span class="postal-code">20095</span> <span class="locality">Hamburg</span></div>
		<div class="country-name">Germany</div>
	</div>
	<div class="geo">GEO:
	 <span class="latitude">53.5497</span>,
	 <span class="longitude">9.9985</span>
	</div>
</div>
```

Damit kann man jetzt schon via Operator auf meine Visitenkarte zugreifen, die Adresse meines Büros in Google Maps (o.a.) sehen, vielleicht den Weg dorthin anzeigen lassen, das zugehörige KML nach Google Earth exportieren und so fort. Ich finde das sehr cool. Warum ist das nicht mehr verbreitet? So geekig ist das nicht. Zumal man sich die eigene hCard auch erstellen lassen kann, z.B. vom [hCard Creator](http://microformats.org/code/hcard/creator). Na los, macht schon…

Bei mit trat an dieser Stelle der oben angeführte Effekt ein: Operator kann natürlich noch viel mehr Microformate visualisieren, das wollte ich ausprobieren. Aus diesem Grund habe ich die Linkverwaltung von Wordpress in die Tonne getreten und stattdessen eine eigene (zugegeben derzeit noch nicht komplette) Lösung gestrickt, bei der Artikel mit der Kategorie “Bookmark” und einem Link in den zusätlzichen Metadaten, als Linktipps gerendert werden. Bei der Darstellung widerum wird das Microformat [xFolksonomy](http://microformats.org/wiki/xfolk) genutzt. Das ist so ähnlich aufgebaut, wie die Linklisten in [del.icio.us](http://del.icio.us). Der grandiose Effekt: mit Operator kann man meine Linktipps nun direkt in del.icio.us oder auch [Magnolia](http://ma.gnolia.com/) hinzufügen oder im Browser bookmarken. Praktisch ist das.

### Social Web mit FOAF

Bei Thema _social web_ habe ich allerdings auf den Einsatz von einfachen Microformaten verzichtet. Viele nutzen hierfür XFN, weil Wordpress es in der Linkverwaltung anbietet. Ich bin allerdings der Ansicht, dasß man, wenn es ein semantisches Format gibt, dieses Nutzen sollte. Und für derartig soziale Gefüge gibt es das: [FOAF](http://www.foaf-project.org/).

> FoaF (Friend of a Friend) ist ein Projekt zur maschinenlesbaren Modellierung sozialer Netzwerke. Herzstück des Projekts ist ein RDF-Schema, das Klassen und Eigenschaften definiert, die in einem XML-basierten RDF-Dokument verwendet werden können. Es handelt sich bei FoaF um eine der ersten Anwendungen von Semantic-Web-Technologien \[[Wikipedia](http://de.wikipedia.org/wiki/FOAF)\]

Friend Of A Friend ist der Versuch, ein soziales Netzwerk zwischen Webseiten und ihren Betreibern zu spinnen, ohne dabei die Hilfe eines _social networking tools_ zu nutzen. Webseiten die an FOAF teilnehmen – und das kann jede sein – bauen sich ein sogenanntes FOAF-File, das ist eine nach einem bestimmt RDF-Schema codierte Textdatei, und verlinken diese mit einem `<link>`\-Element im `<head>`\-Bereich ihrer Website. Beispielsweise so:

`<link rel="meta" type="application/rdf+xml" title="FOAF" href="/codecandies/wp-content/foaf/foaf.rdf"/>`

Ein einfaches FOAF-File kann man sich vieleicht noch selbst stricken, viel einfacher geht es jedoch mit einem der FOAF-Genratoren, beispielsweise: [FOAF-a-Matic](http://www.ldodds.com/foaf/foaf-a-matic.de.html) oder [FOAF Maker](http://peoplesdns.com/make/). Teilweise kann man dort über sich und seine Freunde viele Informationen eintragen, im Zweifelsfalle muss man sich natürlich genau überlegen, welche Informationen wirklich zur Freigabe bestimmt sind.

Natürlich können diese Informationen auch wieder sichtbar gemacht werden, [Martin Borho](http://blog.borho.net/) hat dafür den sogenannte [FOAFer](http://foafer.org/) gebaut, der die _gefoaften_ Daten [eindrucksvoll aufbereitet](http://foafer.org/?file=http%3A%2F%2Fcodecandies.de%2Fwp-content%2Ffoaf%2Ffoaf.rdf) und auch schon ein absurfen des _unsichtbaren sozialen Netzes_ möglich macht, wenn genug Informationen vorhanden sind.

Neben diesem Spaß an der Sache hat FOAF auch sehr konkrete Vorteile, nämlich wird es ausdrücklich von Google zur Erstellung von [Social Graphs](http://socialgraph-resources.googlecode.com/svn/trunk/samples/findyours.html?q=codecandies.de) genutzt, eine Sache, die IMHO in Zukunft noch sehr bedeutend werden wird.

**Mehr zu:** [Microformate](/codecandies/index.php?s=microformate) und [FOAF](/codecandies/index.php?s=foaf) in Codecandies.
