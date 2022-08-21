---
title: "Wieso nicht standalone?"
date: "2006-05-09"
tags:
  - "Generde"
---

[Emil Stenström](http://friendlybit.com/about/) veröffentlichte einen [offenen Brief an Microsoft](http://friendlybit.com/css/open-letter-to-the-ie-team/) und fordert darin, einen Standalone IE7 für Webdeveloper zur Verfügung zu stellen.

Wie das bei den M$ Produkten so ist, sie werden vornehmlich per Windows Update ausgeliefert, und die Browser im speziellen sind bekannt dafür, die Vorgängerversion gnadenlos zu ersetzen. Was den Anwender freut ist ein Kreuz für denjenigen, der darauf angwiesen ist, auf mehreren Browserversionen zu testen. Für ältere Browser als IE6 existieren dafür Lösungen, für IE7 ist das zumindest noch nicht in Sicht.

Stenström präsentiert die möglichen Lösungen und fragt gleich an, welche uns den Microsoft zu empfehlen gedenkt:

- _Get another computer._ Für viele Entwickler sicherlich die beste Lösung, meist stehen ja genug Maschinen rum, Linuxserver, MacBook, Windowskiste. Mir selbst fehlt letztere aus religiösen Gründen, jetzt gleich zwei Maschinen einzurichten scheint mir... Blasphemie, ehrlich gesprochen.
- _Install a virtual machine on my current computer._ Die Lösung mit der ich zur Zeit arbeite. Naja, so ungefähr. Ein auf Linux laufender IE6 (wine!) hält als Bugtester her, auf der Arbeit ist es eine virtuelle Maschine mit Windows 2000. Nichts destotrotz muss der gemeine Entwickler aber auch hier investieren, in zusätzliche Lizenzen beispielsweise.
- _Drop support for IE6._ Schöne Idee... aber irgendwie scheint mir das nicht ganz praktikabel. Man wird sich wohl noch einige Zeit mit IE6 herumschlagen müssen. [Roger Johansson](http://www.456bereastreet.com/archive/200605/testing_in_both_ie_6_and_ie_7/) schätzt, dass es noch sechs bis sieben Jahre dauern wird, eh die Zahlen des IE6 genug abgesunken sind.
- _Hack IE7 to work standalone._ IMHO die beste Lösung, \*ggg. Mal vom Geruch der Illegalität abgesehen. Und, mal ganz ehrlich, dann könnte doch auch gleich M$ ein Standalone-Produkt zur Verfügung stellen.

Aber das wird wohl nicht klappen. Nach wie vor behauptet Microsoft ja, der IE ließe sich nur schlecht bis gar nicht vom Betriebssystem trennen. Und umgekehrt. Und vielleicht hat man dorten vor lauter Bugfixing ja auch gar keine Zeit, an die blöden Webdeveloper zu denken, die meckern ja eh' immer nur rum, von wegen Standards und so. Man wird das Gefühl nicht los, dass man bei Microsoft immer noch nicht richtig begriffen hat, wie das Netz funktioniert.
