---
title: "Kurz gecodet: Multiple Backgrounds"
date: "2009-11-22"
tags:
  - "Gecodet"
keywords:
  - "CSS"
---

Es hat sich vielleicht schon ein wenig herumgesprochen: Safari, Google Chrome und demnächst auch Firefox unterstützen _[multiple backgrounds](http://www.css3.info/preview/multiple-backgrounds/)_. Ein kleines Snippet aus dem CSS zu [9](/codecandies/2009/11/21/nine/):

```css
html body {
	background: url(img/9-freigestellt-666633.jpg) #666633 no-repeat 100% 107%;
	background: url('img/juteverlauf.jpg') repeat-x 0 0, url(img/9-freigestellt-666633.jpg) #666633 no-repeat 100% 107%;
	-moz-background-size: 300px 645px, contain;
}
```

Die einzeln gesetzte `background` ist ein Fallback für jene Browser, die noch keine multiplen Hintergründe kennen. Dann werden die multiplen Backgrounds gesetzt, mit allen weiteren Eigenschaften. Als Zugabe hier noch `-moz-background-size`. _background-size_ wird zwar auch von Safari und Chrome (mit Prefix -webkit-) unterstützt, der kennt allerdings noch nicht das Schlüsselwort `contain`, das das Hintergrundbild auf die Seitenbreite skaliert.
