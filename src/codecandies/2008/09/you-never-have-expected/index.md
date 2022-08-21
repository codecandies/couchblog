---
title: "You never have expected…"
date: "2008-09-22"
tags:
  - "Gecodet"
keywords:
  - "Development"
---

Hallo, hier spricht die heilige CSS-Inqisition. Sie hätten das sicherlich nicht erwartet, aber hier ging es ja schon das [eine](/codecandies/2008/05/21/css-coding-guidelines-i/) oder [andere](/codecandies/2008/05/22/css-coding-guidelines-ii/) Mal um CSS-Codepoetrystyleguidespießereien, da kann ich natürlich kaum an mich halten, wenn in einem von mir hochgelobten [Webmagazin](http://pisto-magazin.de) derartig [hahnebüchener Blödsinn](http://pisto-magazin.de/artikel/css-wir-raeumen-auf) verzapft wird.

Andreas Dölling ist laut Autorenangbae [Webentwickler](http://a-doelling.de/), kann es aber nicht lassen, seine Nase immer wieder in Bereiche zu stecken, die ihn eigentlich gar nichts angehen, und seine Meinung dazu kundzutun. Schon passiert würde ich mal sagen, obwohl ich dachte, dass CSS einen Webentwickler sehr wohl etwas angeht.

Zunächst einmal ist es natürlich eine super Sache, seine CSS-Klassen gut und semantisch zu benennen, es werden auch wirklich schöne und einleuchtende Besipiele genannt, die Herr Dölling einem _alten Hasen_ abgeschaut hat bzw. zu denen ihn das Qualitätsmanagement einer professionellen Firma _gezwungen_ hat. Scheinbar aus Rache gegen die Affront jedoch hat sich Herr Dölling noch einige Reste eigenen CSS-Stils bewahrt und die haben es in sich. Mein Vorschlag dazu: **auf gar keinen Fall nachmachen!**

### Anordnung von CSS-Eigenschaften

Es wird empfohlen, Eigenschaften in der Reihenfolge der Wichtigkeit zu notieren, wobei in fünf Wichtigkeitsgruppen eingeteilt wird (Verhalten, Position und Dimension, Abstände und Rahme, Schriftgröße und Zeilenhöhe, Hintergrund und übrige Eigenschaften). Dämliche Idee numero uno: erstens halte ich die _Wichtigeit von CSS-Eigenschaften_ für höchst diskutabel, das kommt halt immer auf den Fall an, in Wahrheit ist dies ein willkürliche Festlegung. Wogegen man eigentlich gar nichts einwenden kann, denn wenn es keine logische Reihenfolge gibt ist koordninierte Willkür der einzige Weg. Nur sind diese Gruppen schwer vemittelbar: man muss lernen, was zu welcher Gruppe gehört, lernen in welcher Reihenfolge die Gruppen anzuordnen sind und innerhalb der Gruppen, gibt es gar keine definierte Reihenfolge. Stellen sie sich einmal vor, sie sind Qualitätsmanager und sollen nun dieses Regelwerk an diverse Webentwickler und -dekorateure kommunizieren. Schönen Dank. Ich sag’s mal in CSS-Inquisitions-Sprache: _wird sich nicht durchsetzen_. Zu kompliziert, zu schwierig umzusetzen.

Der Gegenvorschlag bleibt bestehen: **CSS-Eigenschaften immer in aplhabetischer Reihenfolge notieren.** Das ist einfach, versteht jeder, ist eine nachprüfbare, also durchsetzbare Regel und super umsetzbar. Und führt auch auf lange Sicht zu lesbaren Stylesheets.

### Einrückung und Umbrüche

Endgültig die Haare zu Berge stehen einem dann, wenn man die Idee zum quer schreiben liest. Herr Dölling, lassen sie sich an dieser Stelle einmal folgendes sagen: wer quer schreibt, ist noch lange kein Querdenker, eher schon ein Quertreiber. Mal davon abgesehen, dass die letzte Übersichtlichkeit, die Herrn Döllings drolliger Dialekt noch bietet, einzig und allein durchs Synthaxhighlighting zustande kommt, ist dies ein CSS-Code der sagt: »Fass mich nicht an! Mein Autor ist so von sich selbst überzeugt, dass er nicht glaubt, dass jemand anderes ausser er selbst Änderungen vornehmen möchte.« Danke schön.

Sowas darf man sicherlich auf den Server stellen, es spart eine Menge Platz und sicherlich das eine oder andere Byte an Gewicht. Aber während der Entwicklungszeit ist so eine Schreibweise einfach nur eins: kontraproduktiv. Man stelle sich nur vor, man soll jetzt hier eine CSS-Regel hinzufügen, womöglich nach der vorgenannten Fehllehre, sozusagen irgendwo in der 400 Zeichen langen Zeile. Wir wünschen fröhliches horizontal scrollen. Das ist wirklich eine dumme Idee. **Auf gar keinen Fall nachmachen.**

Hoffe, das war jetzt inquisitorisch genug, war ja auch so gewünscht. Da kann einem aber auch der Geduldsfaden reissen.
