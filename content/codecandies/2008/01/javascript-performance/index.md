---
title: "Javascript Performance"
date: "2008-01-29"
tags:
  - "Gecodet"
keywords:
  - "Javascript"
  - "Performance"
---

Mal ganz ehrlich, als ich gerade [»A Study of Ajax Performance Issues«](http://www.coachwei.com/blog/_archives/2008/1/22/3480119.html) gelesen habe, ist es mir doch ziemlich kalt den Rücken hinuntergelaufen. Ich fasse mal kurz zusammen – die folgenden Programmiertechniken sind in Zukunft zu vermeiden, da sie, auf dem einen und/oder dem anderen Browser, einen Performanceeinbruch zur Folge haben:

- das Anlegen von Arrays (alle) und Objekten (FF), sowie Operationen auf Arrays (alle), speziell "in"-Operationen (FF)
- Operationen auf dem DOM (alle)
- Berechnungen von _computed style_ und des _box-model_
- Manipulationen an Strings, jeglicher Art und seien sie noch so einfach (IE)

Die gute Nachricht: `if` und `else` sind noch erlaubt, insofern stehen uns alle Möglichkeiten offen. Gnnpf.
