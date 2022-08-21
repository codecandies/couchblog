---
title: "Morgenlese XII"
date: "2016-10-13"
tags:
  - "Gefunden"
coverImage: "morgenlese.jpeg"
---

Die heutige Morgenlese kommt auch wirklich am Morgen und ist die erste, die sowas wie ein Motto hat, viel Wortspielerei jedenfalls. Finde ich fast schon so gut, dass ich das beibehalten könnte, aber man weiss ja leider wie das ist, wenn man sich festlegt, das hindert auch oft. Na mal sehen. Und dann muss man ja praktisch auch immer eine mäßig sinnvolle Einleitung schreiben… hüstel.

## Bedenkenswert

Vor kurzem hatte ich mal _das Glück_ zwischen Berlin und Hamburg das neue Bahn-WLAN _wifionice_ (klingt wie eine Walt-Disney-Show) auszutesten. Eigentlich funktionierte es gerade nicht, denn statt gratis zu sein, bot mir das blöde _captive portal_ und die gleiche Seite im Browser nur an, einen Tagespass für 4,95€ zu erwerben. Ein Blick in den Sourcecode und ein deaktiviertes `display:none` später, konnte ich allerdings trotzdem gratis surfen. Nicht ganz sauber gebaut habe ich mir da noch gedacht.

Offensichtlich ist die schlecht gecodete Startseite wohl noch das kleinste Problem, denn leider ist das neue Bahn-WLAN ausgesprochen geschwätzig: [Was das neue Bahn-Wifi über seine Nutzer ausplaudert](http://hannover.ccc.de/~nexus/dbwifi/). Und dabei ein offenes Tor für _cross site scripting_ Angriffe. Ach ja…

Update: anders als ich es erwartet hatte, müssen zur Behebung der Sicherheitslücke nicht alle ICEs wieder in die Werkstatt zurück, sondern [das Problem soll bereits behoben werden](http://t3n.de/news/kostenloses-wlan-ice-deutsche-bahn-fehler-755097/).

## Bemerkenswert

J. Renée Beach und Matt King von Facebook haben heraus gefunden, dass per CSS `clip: rect(1px, 1px, 1px, 1px);` [versteckter, aber zugänglicher Text](http://webaim.org/techniques/css/invisiblecontent/) von Screenreadern ohne Leerzeichen vorgelesen wird: [Beware smushed off-screen accessible text](https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe), also ohne Punkt und Komma sozusagen. Das ist natürlich unschön, kann aber mit hinzufügen von `white-space: nowrap` relativ schnell behoben werden.

## Sehenswert

Und zum Schluss etwas weniger technisches, aber sehr visuelles: in der gotischen Pfarrkirche [Saint-Eustache](https://de.wikipedia.org/wiki/Saint-Eustache_(Paris)) in Paris, hat der Künstler [Miguel Chevalier](http://www.miguel-chevalier.com/en/) eine _generative and interactive virtual reality installation_ vorgeführt, die neben der ganze Buzzwords in diesen Eintrag nahezu unglaubliche Lichteffekte an die Decken der Kathedrale zauberte: [Heavenly Vaults: Virtual Reality Ceiling Installation in a Gothic Cathedral](http://weburbanist.com/2016/10/12/heavenly-vaults-virtual-reality-ceiling-installation-in-a-gothic-cathedral/).

Bild:  [Parker Byrd](https://unsplash.com/@parkerabyrd) {:.copyright}
