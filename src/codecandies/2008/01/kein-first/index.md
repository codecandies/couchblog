---
title: "Kein .first()?"
date: "2008-01-17"
tags:
  - "Gecodet"
keywords:
  - "jQuery"
---

Simon Willison [fragt zu Recht](http://dev.jquery.com/ticket/2164), warum es im aktuellen jQuery eigentlich keinen Ersatz für die Pseudo-Selektoren `:first` und `:last` gibt. Tatsächlich fehlen `.first()` und `.last()`, obwohl sie natürlich einfach selbst nachzutragen sind:

```js
jQuery.fn.first = function() {
  return this.eq( 0 );
};
jQuery.fn.last = function() {
  return this.eq( this.size() - 1 );
};
```
