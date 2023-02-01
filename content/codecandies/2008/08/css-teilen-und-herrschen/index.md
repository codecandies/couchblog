---
title: "CSS teilen und herrschen?"
date: "2008-08-19"
tags:
  - "Gecodet"
keywords:
  - "CSS"
---

[Hier](http://www.smashingmagazine.com/2008/08/18/7-principles-of-clean-and-optimized-css-code/) finde ich kaum Neuigkeiten, außer dem interessanten Hinweis darauf, dass man im CSS Layout-Attribute von anderen Attributen über die Selektoren hinweg trennen könnte. Also sowas:

**Codebespiel:**

```css
#container { /* container layout */
    float: left;
    margin: 20px 30px 50px;
    width: 20em;
}
#container { /* container typography */
    font-family: Georgia, serif;
    font-size: 1.2em;
    line-height: 140%;
}
```

So in der Art. Und weitergedacht führt das natürlich zu einer auch räumlichen Trennung dieser Styles, beispielsweise in verschiedenen Stylesheets, bspw. `layout.css` und `typography.css`. So läufts in vielen CSS-Frameworks natürlich, weil es schön modular ist. Wo jedoch liegen die Vorteile dieser Methode, wo doch die Nachteile – viele Selektoren müssen doppelt geschrieben werden – auf der Hand liegen?

Zunächst mal: wenn man sowas anfängt, muss man es durchhalten, streng sein. Ist man es nicht, sucht man sich am Ende einen Wolf, selbst mit Firebug. Einige säuberlich aufgetrennte Stylesheets jedoch bewirken das Gegenteil: wenn man weiss wo zu suchen ist, ist man fix am Ziel. Der Entwicklungsprozeß einer Website, wie ich ihn beobachte, verlangt dabei fast immer Änderungen am Layout, selten an der Typographie – die bleibt meist, wie vorher festgelegt. Auch da ist man mit einer Trennung gut bedient.

Ich träume immer noch von einem CSS Build-Tool, was auch solche Dinge abdeckt: Selektoren über mehrere Stylesheets mergen. [Marc](http://www.marctv.de/), schreib das bitte mal für uns. So mit [CSS Tidy](http://csstidy.sourceforge.net/)…
