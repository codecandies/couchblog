---
title: "jQuery 1.4: Funktionen übergeben beim Setting"
date: "2010-01-18"
tags:
  - "Gecodet"
keywords:
  - "jQuery"
---

Was offenbar (also an mir ist das irgendwie vorrüber gegangen) für `.attr()` schon länger funktioniert, wurde beim neuen jQuery 1.4 nun für alle Settingfunktion möglich gemacht: das Übergeben von Funktionen zum Setzen eines Wertes. Namentlich funktioniert das nun also bei: `.css()`, `.attr()`, `.val()`, `.html()`, `.text()`, `.append()`, `.prepend()`, `.before()`, `.after()`, `.replaceWith()`, `.wrap()`, `.wrapInner()`, `.offset()`, `.addClass()`, `.removeClass()` und `.toggleClass()`.

Bei `.css()`, `.attr()`, `.val()`, `.html()`, `.text()`, `.append()`, `.prepend()`, `.offset()`, `.addClass()`, `.removeClass()` und `.toggleClass()` wird zusätzlich als zweiter Parameter den momentane Inhalt an die Funktion übergeben. Dann geht sowas slickes:

```
// find all ampersands in A's and wrap with a span
$('a').html(function(i,html){
  return html.replace(/&amp;/gi,'<span class="amp">&amp;</span>');
});
```

Da tanzen die Coder unter uns doch gleich im Sonnenschein.
