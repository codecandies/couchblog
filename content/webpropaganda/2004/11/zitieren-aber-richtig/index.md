---
title: "Zitieren, aber richtig"
date: "2004-11-24"
tags:
  - "Generde"
---

Schöne Zusammenfassung darüber, [wie man in HTML richtig zitiert](http://www.456bereastreet.com/archive/200411/quotations_and_citations_quoting_text/) findet sich heute bei [456 Berea Street](http://www.456bereastreet.com). Steht eigentlich nahezu alles Wissenwerte drin. Zum Thema `<blockquote>` hätte ich allerdings noch etwas hinzuzufügen:

```html
<blockquote>
  <p>Hier der Text der gequotet werden soll.</p>
  <p>Etwas länger sollte er schon sein.</p>
  <address><a href="http://adresse.deszitats.de/">Urheber des Zitats</a></address>
</blockquote>
```

Den Tag `<address>` kann man sich dann natürlich noch schön via CSS gestalten. Entnommen habe ich das der [Mozilla Markup Reference](http://www.mozilla.org/contribute/writing/markup#quotations), die Seite antwortet im Moment allerdings gerade nicht :(.
