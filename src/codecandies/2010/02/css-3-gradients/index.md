---
title: "CSS3 Gradients"
date: "2010-02-16"
tags:
  - "Gecodet"
keywords:
  - "CSS"
---

Einige der neuen CSS3-Funktionalitäten sind ein wenig schwer zu merken, vor allem da man sich hinsichtlich der Syntax bei Webkit und Mozilla noch nicht ganz einig ist. Ein schönes Beispiel sind _gradients_, für die es sogar noch M$ Filter gibt, den man setzen kann, wenn man das will. Und nur bei linearen Farbverläufen. [Einmal zum Mitschreiben](http://robertnyman.com/2010/02/15/css-gradients-for-all-web-browsers-without-using-images "CSS Gradients For All Web Browsers, Without Using Images"):

```css
.linear {
    /* Firefox --> https://developer.mozilla.org/en/CSS/-moz-linear-gradient */
    background: -moz-linear-gradient(0 0, #000, #fff);
    /* Webkits --> http://webkit.org/blog/175/introducing-css-gradients/ */
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#000), to(#fff));
    /* IE 5.5 - IE 7 */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#000000, endColorstr=#FFFFFFFF);
    /* IE 8 */
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#000000, endColorstr=#FFFFFFFF)";
}

.radial {
    /* Firefox --> https://developer.mozilla.org/en/CSS/-moz-radial-gradient */
    background: -moz-radial-gradient(40% 40%, farthest-side, #fff, #000);
    /* Webkits --> http://webkit.org/blog/175/introducing-css-gradients/ */
    background: -webkit-gradient(radial, 40% 40%, 0, 40% 40%, 60, from(#fff), to(#000));
}
```
