---
title: "CSS 3 Media Queries"
date: "2010-03-10"
tags:
  - "Gecodet"
keywords:
  - "CSS"
---

_Media types_ kennen wir ja nun alle (bspw. `@media screen{…}`), noch ein wenig unbekannt noch dagegen sind die sog. _media queries_. Schauen wir uns einmal so eine Query an, ich hab da mal etwas vorbereitet:

```html
<link rel="stylesheet" type="text/css" href="style.css" media="screen and (max-width: 300px)">
```

…könnte in unserem `<head>` stehen, oder im CSS:

```css
@media screen and (max-width: 300px) {
  /* eine oder mehrere CSS Regeln */
}
```

Sieht seltsam aus, ist aber so. Was diese Regeln nur machen (beide machen natürlich das gleiche, nur an unterschiedlichen Orten): sie beschränken das verlinkte Stylesheet bzw. die eingeschlossenen Regeln auf Fälle, die durch das _media feature_ bestimmt werden. In diesem Falle greift unser Stylesheet also nur, wenn wir unsere Seite auf einem Bildschirm dargestellt wird **und die Breite des Browserfenster kleiner als 300px ist.** Herrjeh, da tun sich ja Abgründe auf, was man damit alles anstellen kann. Zum Beispiel – mit dem hier gezeigten `max-width` und seinem Kumpel `min-width` – unterschiedliche Stylesheets für unterschiedliche Fenstergrößen ausliefern.

Ein kurzer Einschub: _welche der beiden Arten der Einbindung ist vorzuziehen, als `<link>`?_ Das ist natürlich eine Glaubensfrage, nur soviel dazu: genauso wie bei `@media print {…}` lege ich solche Sachen lieber ins CSS selbst, das spart Dateien und damit Connections.

Natürlich kann nicht jeder Browser damit umgehen (hallo IEs!), aber alle _richtigen_ Browser können das ausreichend. Für Webkit gibt es zudem [eine Erweiterung für `transform-2d` und `transform-3d`](http://webkit.org/specs/MediaQueriesExtensions.html). Die [Liste der von Firefox (ab 3.5) unterstützten _media features_](https://developer.mozilla.org/En/CSS/Media_queries) ist auch sehr umfangreich.

Und hier noch ein Beispiel: so setzt man unterschiedliche Styles, wenn ein Device, bspw. das iPad, gedreht wird:

```css
body {
  background:#fff;
}
@media all and (orientation:portrait) {
  body {
    background: #ff0000;
  }
}
@media all and (orientation:landscape) {
  body {
    background: #ff00ff;
  }
}
```
