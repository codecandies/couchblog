---
title: "Embedden Sie jetzt!"
date: "2009-06-30"
tags:
  - "Gecodet"
keywords:
  - "Browser"
  - "CSS"
  - "Firefox"
  - "Safari"
  - "Typographie"
---

![Embedded Font im Firefox 3.5rc3](/img/codecandies/fontatfirefox.jpg)

Mit `@font-face` lassen sich Schriften in Webseiten einbetten. Machen Sie das!

Ok, es ist soweit, mit dem neuen [Firefox 3.5](http://www.mozilla.com/en-US/firefox/all-rc.html) (und Safari 4 und [Opera 10beta](http://www.opera.com/browser/next/)), steht immer mehr Nutzern unserer Websites _Fontembeddingdownloading[^1]_ zur Verfügung. Damit widerum steht der flächendeckenden Umsetzung typographisch ordentlich gestylter Websites nicht mehr viel im Weg, ausser natürlich die IE-Familie, aber die ignorieren wir hier einfach einmal.[^2]

#### Und so geht's

Das obige Beispiel nutzt das Embedding, der Code dafür sieht ungefähr so aus:

```
@font-face {
    font-family: Kaffeesatz;
    font-weight: normal;
    src: url(fonts/YanoneKaffeesatz-Regular.otf) format('opentype');
}
h1 {
	font: normal 3em/120% Kaffeesatz, sans-serif;
	text-shadow: 1px 1px 1px #eee;
}
```

Der genutzte Font ist die unter CC Lizenz stehende [Kaffeesatz](http://yanone.de/typedesign/kaffeesatz/). Der Code ist vielleicht nicht ganz selbst erklärend: mit `@font-face` legen wir selbst eine Font fest, den Namen der `font-family` kann man dabei frei wählen, ein dem Font nahe stehender Name empfiehlt sich natürlich. Als `src` wird der Pfad zum OTF\- oder TTF\-File angegeben, danach noch das `format`. Fertig. Damit steht uns die `font-family` „Kaffeesatz” zur weiteren Nutzung zu Verfügung. Das `H1` macht auch gleich Gebrauch davon, noch ein wenig versüsst mit etwas CSS3-`text-shadow` (wenn wir auf den IE sch…sen, dann aber richtg).

#### Mehr Gewicht, bitte

Folgendes ist zu beachten: wir haben bis hier nur den Font für die `font-weight` _normal_ definiert. Wollen wir eine _bold_e Schrift, muss ein Font dafür _embedded_ werden, und zwar bspw. so:

```css
@font-face {
    font-family: Kaffeesatz;
    font-weight: normal;
    src: url(fonts/YanoneKaffeesatz-Regular.otf) format('opentype');
}
@font-face {
    font-family: Kaffeesatz;
    font-weight: bold;
    src: url(fonts/YanoneKaffeesatz-Bold.otf) format('opentype');
}
h1 {
	font: normal 3em/120% Kaffeesatz,sans-serif;
	text-shadow: 1px 1px 1px #eee;
}
h2 {
    font: bold 2em/120% Kaffeesatz, sans-serif;
    text-transform: uppercase;
}
```

In diesem Falle würden die H2s bold gesetzt, da wir hierfür _YanoneKaffeesatz-Bold.otf_ embedded haben. Ähnliches können wir nun auch mit `font-style: italic` anstellen.

Nochmal zurück zur Fettung: Safari kann einige Fettungsstufen mehr anzeigen als Firefox. Unterstützt wird eine genauere Abstufung des Fettungsgrades, wenn man bspw. einen Font hat die Kaffeesatz. Das kann dann so aussehen:

```css
@font-face {
    font-family: Kaffeesatz;
    font-weight: 100;
    src: url(fonts/YanoneKaffeesatz-Thin.otf) format('opentype');
}
@font-face {
    font-family: Kaffeesatz;
    font-weight: 300;
    src: url(fonts/YanoneKaffeesatz-Light.otf) format('opentype');
}
@font-face {
    font-family: Kaffeesatz;
    font-weight: 400;
    src: url(fonts/YanoneKaffeesatz-Regular.otf) format('opentype');
}
@font-face {
    font-family: Kaffeesatz;
    font-weight: 700;
    src: url(fonts/YanoneKaffeesatz-Bold.otf) format('opentype');
}
```

Das geht sicherlich auch mit _keywords_ wie „light” oder „bolder” etc.

![schriftenvergleich](/img/codecandies/schriftenvergleich.gif)

Das Fontrendering unterscheidet sich mitunter, links Firefox, rechts Safari 4 (Mac).

#### Fonts von der Platte zuerst

Was ja auch angehen kann, ist dass man eher einen Font nutzen möchte, der sowieso schon lokal vorhanden ist und nur wenn dieser nicht vorhanden ist, will man einen Download anbieten. Geht auch, wie man bei [John Dagget](http://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/) nachlesen kann, mit der Eigenschaft „local”:

```css
@font-face {
  font-family: NeueHelvetica;
  src: local("Helvetica Neue"),
       local("HelveticaNeue"),
       url(fonts/MgOpenModernaRegular.ttf);
}
```

Hier sind zwei `local` angegeben, über diese Liste wird iteriert, genauso wie in der normalem `font-family` Zuweisung, wo die Schriften durch Kommata getrennt werden (das diese Zusammenstellung von Namen nicht immer ganz einfach ist, [lesen wir bei Herrn Preidel](http://www.qxm.de/webdesign/20080317-155549/helvetica-neue-light-in-firefox-3)).

#### Und nun?

Natürlich sollte man nur Schriften nehmen, die man auch fürs embedding benutzen darf, sonst gibt's schnell Lizenzärger. [Hier gibt's ein paar freie Schriften](http://opentype.info/blog/2008/08/05/10-great-free-fonts-for-font-face-embedding/), die das ausdrücklich zulassen. Ach ja und zum guten Schluss, sollte man `font-size-adjust` [auf keinen Fall vergssen](http://www.peterkroener.de/schoenes-neues-css-font-size-adjust/ "Peter Kröner: Schönes neues CSS: font-size-adjust").

#### Updates

[^1]: Von „Embedding“ zu sprechen ist eigentlich nicht richtig, weil der Font tatsächlich auf den Rechner des Nutzers heruntergeladen wird. Das schlägst sich natürlich auch in der Größe der Website nieder und ist auch für die Lizenzfrage nicht unerheblich.

[^2]: Na gut, ich hab noch einen Link [aus meinen Bookmarks geangelt](/codecandies/2008/11/05/font-face-in-ie-making-web-fonts-work/), der mehr in Sachen IE verrät.
