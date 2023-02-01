---
title: "Dojo Offline"
date: "2007-01-04"
tags:
  - "Generde"
---

Das Dojo Framework schickt sich an, einen weiten Schritt nach vorne zu machen: Brad Neuberg arbeitet an einem neuen Projekt, dass sich das »[Dojo Offline Toolkit](http://www.sitepen.com/blog/2007/01/02/the-dojo-offline-toolkit/)« nennt und die Lücke zwischen On- und Offline-Applikation schließen soll, vielmehr Online-Applikationen auch offline verfügbar machen soll.

Die Entwicklungszeit ist auf drei Monate angesetzt und wird komplett von [SitePen](http://sitepen.com/) gesponsert. Am Ende soll eine Toolkit aus JS-Framework, Proxy und Installer (zunächst mal für Windows und OS X) herauskommen, mit dem sich Webapplikationen offline fähig machen lassen.

Entwickler Brad Neuberg erklärt das so:

> Imagine you are a sales woman, out on the road with your laptop, visiting suppliers and potential customers. Your company has set up a corporate portal that lists potential sales leads, contacts, opportunities, new products, important documents, and more; the information on this portal means the difference between making a big sale that pays the rent this month with its sales commision or working every weekend to make ends meet. What if your corporate portal could download important information into your Dojo Offline cache before hitting the road, so that when that potential customer asks about Widget X you can quickly pull it up in your browser without a network, making the sale?
>
> [SitePen Blog](http://www.sitepen.com/blog/2007/01/02/the-dojo-offline-toolkit/)

Klingt hervorragend, muss aber natürlich erstmal auch wirklich programmiert werden (das Toolkit und die Anwendungen natürlich auch). Laut Neuberg laufen die Kernkomponenten aber schon als Prototypen, konzeptionell scheint alles ausgearbeitet sein. Das Offline-Toolkit geht jedenfalls über die reine Javascript-Programmierung für den Browser weit hinaus. Um die offline-Zugriffe zu realisieren bspw. wird ein Webproxy benutzt, der auf dem jeweiligen Rechner installiert und konfiguriert werden muss. Insgesamt ein recht ambitioniertes Projekt:

> The important pieces of Dojo Offline have already been prototyped and found to work; all that remains is engineering work. An off-the-shelf, open source (GPL), C-based web-proxy will be used, named Polipo, saving months of development time creating a custom HTTP/1.1 proxy. Polipo compiles to only 150K and is portable to Windows, Linux, and Mac OS X; it is the smallest, most-full featured web proxy available. There are a few bugs in Polipo that will be cleaned up for Dojo Offline. The open source NullSoft Install System (NSIS) will be used for the Windows installer, while Linux installation will be through Firefox’s Cross-Platform Installer (XPI) technology; the Mac OS X installer technology has not been determined yet.
>
> [SitePen Blog](http://www.sitepen.com/blog/2007/01/02/the-dojo-offline-toolkit/)

Schauen wir mal in drei Monaten..
