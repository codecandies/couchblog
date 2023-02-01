---
title: "Tweaking Image Resampling"
date: "2008-11-13"
tags:
  - "Gecodet"
keywords:
  - "CSS"
  - "Internet Explorer"
---

Die flickr-Labore haben zwei [fantastische Tips, wie man Bilder _besser_ in IE6 und 7 resamplen kann](http://code.flickr.com/blog/2008/11/12/on-ui-quality-the-little-things-client-side-image-resizing/). Man ärgert sich ja immer wieder, dass man x verschiedene Größen einer Grafik erstellen und lagern muss, bloss weil die IEs per `width/heigt` verkleinerte Bilder immer derartig verhunzen (hier im Blog pfeife ich in der Regel darauf: Bilder, die für vorige Versionen von Layouts erstellt wurden, werden gnadenlos heruntergesamplet).

Mit zwei Tricks lässt sich die Situation verbessern:

IE7 versteht die CSS-Eigenschaft `-ms-interpolation-mode:bicubic;`, mit der das verbesserte bikubische Resampling angeworfen wird. Für IE6 muss es mal wieder ein Filter sein: `filter:progid:DXImageTransform.Microsoft.AlphaImageLoader (src='/path/to/image.jpg', sizingMethod='scale');`. Letzteres ist ein wenig ungünstig, weil man ja in der klassischen CMS-Situation im CSS kaum an die Bild-URL herankommt (jedenfalls nicht automatisch). Wenn man den IE6 noch ernsthaft mit sowas bedienen will, müsste man das dann _inline_ (buh!), am besten mit _conditional comments_ umsetzen. Das ist aber irgendwie böse. Der Lösungsansatz für IE7 ist natürlich ebenso properitär, gehört also allenfalls in spezielle IE-Stylesheets.

Trotzdem: unbedingt testen!

\[Und endlich das code.flickr [abonnieren](http://code.flickr.com/blog/feed/)!\]
