---
title: "Video und Audio in Firefox 3.1"
date: "2008-10-28"
tags:
  - "Gecodet"
keywords:
  - "Firefox"
  - "HTML"
---

Wenn man ein wenig sucht, findet man [einige Artikel](/codecandies/index.php?s=html5) zu **HTML5** und meist fehlte nicht die pessimistische Anmerkung, wie lang das wohl noch dauern würde, bis das umgesetzt ist, _yadayadayada_. Die Wahrheit ist: einiges ist bereits heute umgesetzt und zwar [in Firefox 3.1](http://ajaxian.com/archives/firefox-31-to-support-html-5-video-and-audio), dessen erste Betaversion ich seit ein paar Tagen als Standardbrowser nutze (und schätze).

Im Moment wird _zwar nur_ das offene Ogg-Format unterstützt, weitere Formate kann man sich allerdingsleicht vorstellen. Und je nach Willen der Zusammenarbeit der Lizenzinhaber sicherlich auch umsetzbar. Jedenfalls mit…

```html
<video src="http://v2v.cc/~j/theora_testsuite/320x240.ogg" autoplay>
    Your browser does not support the <code>video</code> element.
</video>
```

… ist in windeseile ein Videoplayer umsetzt, der Ogg-Videos abspielt und sich mit Javascript auch steuern lässt.
