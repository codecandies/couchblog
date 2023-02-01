---
title: "CSS3 in Action"
date: "2010-02-23"
tags:
  - "Gecodet"
keywords:
  - "CSS"
---

Jay & Bob

![Jay and Silent Bob](/img/codecandies/jayandbob.png)

Die Möglichkeiten, die uns CSS3 heute schon bietet, sind durchaus vielfältig. Klar, nicht alle Browser unterstützen das, aber _so what?_ Das Bild von Jay und Silent Bob ist nur eine sehr übertriebene Demo. Mit den neuen Funktionalitäten wie `border-image` lassen sich auch sinnvolle DInge anstellen, z.B. [Buttons](http://ejohn.org/blog/border-image-in-firefox/). Ebenso sollte man direkt anfangen, _gradients_ einzusetzen, Schriften und `text-shadow`. Hier der Code für die Demo oben:

```css
/* Schrift definieren */
@font-face {
  font-family: 'YanoneKaffeesatz-Bold';
  src: url('fonts/YanoneKaffeesatz-Bold.eot');
  src: local('YanoneKaffeesatz-Bold'), local('Yanone Kaffeesatz Bold'), url('YanoneKaffeesatz-Bold.otf') format('opentype');
}

.demo {
  background: #fff;
  /* Farbverlauf */
  background-image: -webkit-gradient(linear, left top, left bottom, from(#ff8000), to(#fff) );
  background-image: -moz-linear-gradient(-90deg,#ff8000,#fff);
  /* border-image */
  border: 137px solid #666;
  -webkit-border-image: url(img/frame.png) 137 137 137 137 repeat repeat;
  -moz-border-image: url(img/frame.png) 137 137 137 137 repeat repeat;
  /* der normale stuff */
  height: 480px;
  margin-bottom: 40px;
  position: relative;
  width: 340px;
}

.demo p {
  color: #fff;
  font-family: YanoneKaffeesatz-Bold;
  font-size: 80px; margin-top: 20px;
  text-align: center;
  text-shadow: #000 0 0 20px;
  -webkit-text-stroke: 1px #666; /* gibt's derzeit nur in Webkit */
}
```

Falls Du oben nichts, oder nur ein Bild mit einem langweiligen grauen Rahmen sehen kannst:

![So siehts aus in Google Chrome](/img/codecandies/jayandbobframe.png)
