---
title: "Hexangonie"
date: "2022-02-21"
tags:
  - "Gelebt"
  - "Gelesen"
keywords:
  - "Webentwicklung"
---

Am Wochenende hatte ich eine längere Begegnung mit einer Reihe Hexagonen, also mit Sechsecken. Im Laufe des Jahres hatte ich mit Microsoft Visio mit Hilfe einiger Sechseckformen aufgemalt, was mein Team und ich uns so überlegt haben, was jemand so können bzw. lernen sollte, um bei uns glücklich zu werden. Aus hysterischen Gründen darf ich das nicht Skillmap nennen, Eingeweihte wissen Bescheid.

Kurzer Ausflug zu Visio. Damit habe ich in den frühen 2000ern viel gearbeitet um Pläne und Schemata, Programmablaufpläne und so Zeug anzulegen. Leider verschwand das dann irgendwie vom Markt. Lustigerweise entdeckte ich es kürzlich in der Office-Suite unserer Firma als Online-Tool wieder. Und so baute ich da also eine Art Karte unseres Frontends zusammen. Pun not intended.

Jedenfalls kam mir die glorreiche Idee, diese Karte programmatisch zu erstellen, in Form einer Svelte-App, wo man vorne die Liste der Skills reinsteckt und hinten die hübsch bunte Karte aus Sechsecken wieder rauskommt. Ich fing völlig naiv zunächst an, Sechsecke per CSS zu malen, die ließen sich aber nicht so richtig flexibel platzieren, weswegen ich auf SVGs umstellte. Und dann, ja dann bin ich irgendwie in einer Rabbithole aus SVG-Programmierung, höherer Mathematik und Online-RPGs gefallen, aus dem ich mich am Montagmorgen nur schwer wieder befreien konnte.

Wieso jetzt RPG? Weil wenn jemand etwas über Hexagone bzw. Karten aus Hexagonen, also sogenannten Hexmaps oder -grids weiß, dann sind es die Spieleentwickler. Man findet dazu wahrhaft viel zu lesen, das Standardwerk für Hexagone [ist allerdings dieser Artikel](https://www.redblobgames.com/grids/hexagons/). Einfach nicht zu fassen. Soviel kann ich verraten: eine Karte aus Sechsecken anlegen, ist durchaus ein gelöstes Problem, ebenso Algorithmen wie man Sichtlinien zwischen den Hexagonen einrichtet, sie in Bereiche teilt, Entfernungen berechnet, oder den kürzesten Weg und so weiter. Spaß mit Sechsecken. Mit Sheldon Cooper sozusagen.
