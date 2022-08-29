---
title: "Google Static Maps"
date: "2008-02-24"
tags:
  - "Gecodet"
keywords:
  - "Google"
  - "API"
---

Irgendwo noch eine Site ohne Google Map? Kann ja kaum angehen. Darum jetzt ganz neu: [Google Static Maps](http://code.google.com/apis/maps/documentation/staticmaps/index.html "Static Maps API Developer's Guide"). Damit kann sich nun seine Map stricken, ohne einen Fetzen Javascript o.ä. zu nutzen oder gar zu beherrschen. Dafür ist die Karte dann aber auch, öh… **statisch**, logisch. Denn diese Karten sind Bilder.

Angefragt wird am API über URL-Parameter im `<img />`-Tag, also `https://maps.google.com/staticmap?parameters`. Ein Beispiel aus dem Hause Google:

```
# Ohne Umbrüche, dafür mit API Key einzugeben!
https://maps.google.com/staticmap?center=40.714728,-73.998672&zoom=
14&size=512x512&maptype=mobile&markers=40.702147,-74.015794,blues%
7C40.711614,-74.012318,greeng%7C40.718217,-73.998284,
redc&key=MAPS_API_KEY
```

Da bekommt man schon ganz nette Kärtchen mit hin, man muss halt nur ein paar Daten kennen. Hier mal eine solche Karte:

![Google Static Map](https://maps.google.com/staticmap?center=53.549768,9.999468&zoom=14&size=420x350&maptype=mobile&markers=53.549768,9.999468,reda&key=ABQIAAAALF-_g5rNREDtjEue6txM3xQP7nTGYYVCHHTU9L3Hb_ZDidErMhSGz6PAfvIlqt6bAp17W_SZPV9HeA)

Sieht nett aus, ist rasend schnell erstellt, selbst händisch noch, und lädt auch ganz angenehm fix. Klar, ist jetzt keine echte Map, aber möchte wetten, für min. 30% aller Anwendungsfälle ist diese Art der Darstellung sinnvoller, als schwerwiegende interaktive Karten.
