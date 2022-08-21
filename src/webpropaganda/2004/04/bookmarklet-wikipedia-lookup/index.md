---
title: "Bookmarklet: Wikipedia Lookup"
date: "2004-04-29"
tags:
  - "Generde"
---

Klein und nützlich, for ya pleasure:

Dieses kleine Wikipedia-Bookmarklet in die Favoriten kopieren, Text auf einer Website markieren, Bookmarklet anklicken und schon weiß [Wikipedia](http://wikipedia.de/) die Antwort (naja, oft)...

```js
javascript:grabtext=document.selection?document.selection.createRange().text:document.getSelection();void(wikipedia=window.open(‘http://de.wikipedia.org/wiki/’ +escape(grabtext)+’’,’_top’));
```

Update: Joerg schlug vor, auf das Öffnen eines neuen Fensters zu verzichten (statt target ”_blank”, target ”_top”). Stimmt eigentlich, mache ich ja sonst auch so. Angepasst.
