---
title: "Das “Social-Network-Overdose”-Problem"
date: "2007-08-03"
tags:
  - "Gerante"
keywords:
  - "Web Zwo Null"
  - "Social Media"
---

Im Moment stelle ich mir dir Frage, ob es nun eigentlich schon mehr »soziale Netzwerke« gibt, als potentielle User vorhanden sind. Sollte mal jemand ausrechnen. ;)

Sei's drum, gehen wir jedenfalls davon aus, dass es **zuviele** Netzwerke gibt, als dass ein einzelner noch den Überblick behalten könnte. Man könnte geradezu den ganzen Tag damit zubringen sich irgendwo zu registrieren, Freunde zu adden bzw. Addwünsche zu bestätigen. **Das kann es doch nicht sein.**

Mal wirtschaftlich gedacht, werden sich am Ende einige wenige Netzwerke durchsetzen, der Rest wird einschlafen. Das wird zwei Konsequenzen bringen: Konzentration und Einfältigkeit. Letztendlich werden viele Daten an einem Ort konzentriert und kleine themenbezogene Monopole entstehen, Wahlmöglichkeiten entfallen. Zudem wird sich die Spezialisierung verringern: und ganz am Ende kaufen sich Google, Microsoft oder meinethalben Yahoo! eine Monsternetzwerkmulticommunity zusammen.

An welcher Stelle dieser Schreckensvision der Web2.0-Gedanke den Weg in die Mülltonne gefunden hat, möge jeder selbst entscheiden.

Es gibt aber schon interessante [Überlegungen](http://blog.webreakstuff.com/2007/08/fixing-social-networks/) und Ansätze, wie diesem Effekt bei zu kommen sei, teilweise wohl [auch schon weit fortgeschritten](http://noserub.com/blog/) \[[via](http://anmutunddemut.de/2007/08/02/lesezeichen-noserubcom/)\]. Die _social networks_ miteinander zu vernetzen, sie zu kompatibiliesieren ist natürlich eine hervorragende Idee, sehr webzwonullig auch, man stelle sich vor: »die Schwarmintelligenz der Schwarmintelligenzen«. Na gut, das ist ein wenig zu weit gedacht,…(schwelg)…, aber eine Austauschbarkeit von Daten ist natürlich ein fantastische Idee.

Mindestens zwei Werkzeuge dazu stehen schon zur Verfügung:

- **Microformate:** die maschinen- und menschenlesbaren Datenformate sind einfach sexy für den Austausch von Daten zwischen den Netzwerken.
- **OpenId:** zum einen natürlich der Luxus des einen Passworts für alle Dienste, zum anderen möglicherweise genau der Ort, Funktionalitäten wie oben genannt unterzubringen.

Zumindest der erste Punkt lässt sich direkt und beinahe überall sofort umsetzen. Auf geht's. [Last.fm](http://last.fm) oder Twitter bspw. haben schon _microformat_ierte Profildaten. Los, nachmachen! Wichtiger jedoch sind die Möglichkeiten des Imports. Wenn man bei _social network_ X ein neues Profil anlegt, muss die Frage kommen, von wo Daten importiert werden sollen und los geht's. Dazu stehen [hCard](http://microformats.org/wiki/hcard) und [XFN](http://microformats.org/wiki/xfn) zur Verfügung. Oder [FOAF](http://www.foaf-project.org/). Wie das gehen soll [wird auch schon überlegt](http://microformats.org/wiki/hcard-brainstorming#Representative_hCard_discovery).

Nun liegen die meisten Profildaten aber ja auch in geschützen Bereichen (ja, natürlich). Und dort kommt OpenID ins Spiel. Selbiger Dienst hat nebenbei sowieso schon die Möglichkeit, Profildaten seines Besitzers zu speichern und an die Clients weiterzuleiten. Allerdings noch keine Synchronisierungsfunktionen wie ich meine.

Und da ist man dann an der Stelle, wo man sich doch einen mehr oder weniger übergeodneten Dienst vorstellen muss, der dafür sorgt, das…

- meine Daten sicher und konsistent abgelegt sind und zur Verfügung stehen und
- immer auf dem neuesten Stand sind.

Das muss jetzt keine **Mastercommunity** sein (»one to rule them all…«), sondern kann auch durch Standardisierung bzw. Kombination der vorhandenen Standards bzw. Techniken geschehen. In diesem Fall könnte jeder seine Daten auf dem eigenen Server ablegen (hat doch jeder, oder?). Da steckt viel Stoff drin. Ich bin echt gespannt.

Noch mehr dazu (weitere vias…): [Planblog](http://www.plansphere.com/blog/?p=618) und [Sprechblase](http://sprechblase.wordpress.com/2007/08/01/noserub-dirk-olbertz-entwickelt-eine-architektur-fur-ein-dezentrales-social-network/) und [Agenturblog](http://www.agenturblog.de/2007-08/die-portabilitaet-von-sozialen-netzwerken/).
