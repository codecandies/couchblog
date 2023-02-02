---
title: "Jetzt schon HTML5 nutzen!"
date: "2009-01-16"
tags:
  - "Gecodet"
keywords:
  - "HTML"
  - "Standards"
---

Die 3. Antwort auf die Frage, ob man [HTML5 bereits jetzt produktiv einsetzen sollte.](/codecandies/2009/01/14/neue-html5-elemente/) Jetzt mit Gewalt.

Mir reicht's aber auch irgendwie: über drei Einträge hab ich nun Gründe gefunden, warum man HTML5 nicht einsetzen sollte – das wurmt mich ein wenig. Denn möglicherweise gibt es Gründe, warum man es einsetzen **will**. Zum Beispiel aus politischen, oder, weil man vorrausschauend arbeiten will; oder es gibt doch Features, die man jetzt schon nutzen will.

![It's our future?](/images/codecandies/2178405451_8be5bdde76_o.jpg)

Machen wir es also mal umgekehrt und sagen **JA!** zu HTML5, auch im produktiven Einsatz! Was geht dann?

### Doctype

Das haben wir schon gelernt, den sexy Doctype von HTML5 [kann man schon jetzt nutzen](/codecandies/2009/01/13/doctype-html/). Zur Zeit kann man damit nicht beim W3C validieren, dafür zunächst mal [bei validator.nu](http://html5.validator.nu/).

### Strukturierende Elemente mit Alternativen
Wenn man Firefox 2 und IE-Nutzer, die ihr Javascript abschalten an Bord behalten will, kann man die neuen strukturellen Elemente von HTML5 nicht nutzen. Andersherum gesagt: bei meinen Projekten würde ich damit ca. 10% der User ausschliessen (über den Daumen gepeilt: 6% FF2-Nutzer, plus js-lose IE'ler geschätzt). Das wird man kaum durchsetzen können oder wollen.

Stehen fürdahin zwei Wege zur Verfügung. Entweder kann man die _neuen_ [strukturierenden Tags](http://orderedlist.com/articles/structural-tags-in-html5) (bspw. `<head>, <article>, <figure>`) einsetzen **ohne sie zu stylen**. Dazu schreibt man sie zusätzlich ins Dokument, beachtet sie aber weiter gar nicht. Bspw. So:

```html
<!doctype html>
<head>
    <title>Nicht so gutes Beispiel?</title>
</head>
<body>
    <header>
        <div class="logo">
        <h1>Ich bin ganz oben</h1>
        </div>
    </header>
    <p>[…]</p>
</body>
```

**Nachteil:** Man füllt den Code mit zusätzlich, zunächst überflüssigen, Elementen (hier auch noch dumm benannt). Will man ja eigentlich nicht. Bringt im Grunde auch nur etwas, wenn Suchmaschinen morgen damit beginnen würden, nach den neuen Tags zu suchen und abzuwiegen. Wenn HTML5 dann einmal weitläufig unterstützt wird (oder die Anforderungen sich ändern), muss man aufwendig HTML und CSS auswechseln.

Wenn man das sowieso nochmal machen muss, kann man aber auf zusätzlich Tags auch verzichten. [Jon Tan hat schon im März letzten Jahres vorgeschlagen](http://jontangerine.com/log/2008/03/preparing-for-html5-with-semantic-class-names "Preparing for HTML5 with Semantic Class Names"), stattdessen eine angepasste semantische Auszeichnung mit Klassennamen vorzunehmen (wie in Microformaten), die an die HTML5-Elemente angelehnt ist. Ungefähr so:

```html
<!doctype html>
<head>
    <title>Nicht so gutes Beispiel?</title>
</head>
<body>
    <div class="header">
        <h1>Ich bin ganz oben</h1>
    </div>
    <p>[…]</p>
</body>
```

Das wird auch schon in _produktiven Umgebungen_ so gemacht, beispielsweise auf der Seite der [UX London](http://uxlondon.com/). Es gibt dazu auch [ein hervorragendes Cheat-Sheet](http://boblet.tumblr.com/post/60552152/html5 "HTML5 id/class name cheatsheet"), dass alle nötigen Elemente und Klassennamen aufführt. Wieder steht der Nachteil da, den Code nochmal anfassen zu müssen. Dies dürfte bei dieser Konstruktion aber wesentlich leicher fallen…

\[Bytheway, die letzten drei Links stammen alle aus der hervorragenden [der Sammlung, die Cameron Moll zum Thema HTML5 angelegt hat](http://cameronmoll.com/archives/2009/01/12_resources_for_html5/ "12 resources for getting a jump on HTML 5") (welche ich widerum [hier](http://twitter.com/coldheat/status/1121453555) gefunden hab).\]

### Warum?
Superdasallesist, aber zwangsläufig stellt sich doch die Frage nach dem _warum?_.

[Zwei Antworten gibt uns Jeremy Keith](http://adactio.com/journal/1540 "The Rise of HTML5"), der die UX London Site gebaut hat:

> Now our document structure has pre-built documentation. Want to know what class="article" denotes? [RTFM](http://www.w3.org/html/wg/markup-spec/#article).
>
> Apart from providing easier documentation, there’s another good reason to take this approach: interoperability. Think about how much easier [user styling](http://24ways.org/2008/user-styling) would be if sites shared many of the same class names. Even if you don’t think that they are the best class names—I know, for instance, that Malarkey doesn’t like the presentational smell of `footer`—the benefits of an aggregate shared vocabulary could be very empowering. So if you do insist on creating a CSS framework that mandates using certain specific names (a concept I despise) please, please, please use those class names.

So far, so good. Das ist ein **Ja!** So richtig überzeugt bin ich aber noch nicht. So wird's wohl auch Eric Meyer gegangen sein, der seinen Artikel dazu erst ganz euphorisch pro HTML5 beginnt, dann aber letztendlich doch zum _bekannten_ HTML4-Markup zurückkehrt…

Foto: [Mike Licht @ flickr](http://www.flickr.com/photos/9106303@N05/2178405451/)/[CC Lizenz](http://creativecommons.org/licenses/by/2.0/deed.en) {:.copyright}
