---
title: "Bulletproof @font-face"
date: "2009-09-15"
tags:
  - "Gefunden"
keywords:
  - "CSS"
  - "Typographie"
---

Paul Irish hat soeben die [die totsichere Methode zur Einbindung externer Schriften](http://paulirish.com/2009/bulletproof-font-face-implementation-syntax/) gefunden. Kurz zusammengefasst:

```
@font-face {
  font-family: 'Graublau Web';
  src: url(GraublauWeb.eot);
  src: local('Graublau Web Regular'), local('Graublau Web'),
         url(GraublauWeb.otf) format('opentype');
}
```

Puh. Ist das gekärt.
