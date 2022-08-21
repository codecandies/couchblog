---
title: "Media Queries und Bilder"
date: "2012-01-25"
tags:
  - "Gecodet"
keywords:
  - "CSS"
---

Nur für die Akten, eine Art, unterschiedlich große Bilder in den Content zu bekommen…

```html
<!DOCTYPE html>
  <html>
    <head>
      <title>H1 Test</title>
      <style type="text/css">
        body { min-height: 500px; }
        @media screen and (min-width: 680px) and (max-width: 1024px) {
          h1::before {
            content: url('img/freude\_680.jpg');
            display: block;
          }
        }
        @media screen and (min-width: 1024px) {
          h1::before {
            content: url('img/freude.jpg');
            display: block;
          }
        }
      </style>
    </head>
  <body>
    <h1>Meine tolle H1</h1>
    <p>Lebowski ipsum vee vant zat money, Lebowski. Dolor sit amet, consectetur adipiscing elit praesent ac magna justo. I did not watch my buddies die face down in the mud so that this fucking strumpet. Pellentesque ac lectus quis elit blandit fringilla a ut turpis. Praesent felis ligula, malesuada suscipit malesuada non, ultrices non urna. It's a complicated case, Maude. Lotta ins. Lotta outs. And a lotta strands to keep in my head, man.</p>
  </body>
</html>
```

Getestet gerade nur in Chrome. Kommt von [hier](http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2012-January/034490.html).
