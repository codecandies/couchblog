---
title: "Menü mit Hintergrund(farbe)"
date: "2008-10-03"
tags:
  - "Gecodet"
  - "Gestaltet"
keywords:
  - "jQuery"
persons:
  - "John Resig"
---

Dave Sheas [CSS Sprites2 - It's JavaScript Time](http://alistapart.com/articles/sprites2) zeigt eine Verfeinerung der seit Jahren gebräuchlichen [CSS-Spritetechnik](http://alistapart.com/articles/sprites/), bei der Hintergrundbilder beim Hovern über Links etc. verschoben werden. Dieses verschieben kann man natürlich, bspw. mit jQuery _smoother_ machen, und damit vielleicht noch ein wenig schöner.

Hier in diesem Block habe ich auf die Sprites bei den Menüs jedoch verzichtet, sie sind so minimalistisch, dass eine Änderung der Hintergrundfarbe völlig ausreichte. Trotzdem, kann man natürlich auch diesen Effekt ein wenig – ich sag's nochmal – _smoother_ gestalten. Natürlich auch mit jQuery, aber ein wenig anders als bei Shea.

### Plugin nötig

Zunächst mal gehören Farbanimationen nicht zur Standardausrüstung der aktuellen jQuery-Version, dazu ist ein kleines Plugin nötig, das jQuery-Erfinder John Resig freundlicherweise zur Verfügung gestellt hat: [jQuery Color Animations](http://plugins.jquery.com/files/jquery.color.js.txt).

### Ausgangszustand

Mein Menü basiert auf einer unsortierten Liste. Jedes der Listenelemente hat einen eigenen Klassennamen und einen Link darin.

**HTML**

```html
<ul class="nav">
  <li class="homepage"><a href="/codecandies/">Homepage</a></li>
  <li class="archives"><a href="/codecandies/archiv">Archiv</a></li>
  <li class="topics"><a href="/codecandies/ressort/themen/">Themen</a></li>
  <li class="about"><a href="/codecandies/about/">About</a></li>
  <li class="impressum"><a href="/codecandies/impressum/">Impressum</a></li>
</ul>
```

Das CSS für solche Situationen ist denkbar einfach, die Ankerelemente sind dabei als `display:block` ausgeführt. Um dem Besucher die aktuelle Position auf der Seite zu signalisieren, sind dem `<body>` passende Klassen hinzugefügt, die u.a. hier genutzt werden.:

**CSS**

```css
ul.nav li a {
  display: block;
  /* ein wenig gekürzt */
}
ul.nav li a:link,
ul.nav li a:visited {
  background: #45423a;
  color: #a59f8c;
}
ul.nav li a:hover {
  background: #8f8c86;
  color: #fff;
}
body.homepage li.homepage a,
body.archives li.archives a,
body.topics li.topics a,
body.about li.about a,
body.portfolio li.portfolio a,
body.bookmarks li.bookmarks a,
body.impressum li.impressum a {
  background: #5f5d59;
  color: #fff;
  cursor: default;
}
```

#### Los geht's

So funktioniert das Menü also, ganz ohne Javascript, schon seit Monaten. Ich weiss: kein Hexenwerk. Genauso wenig, wie das Javascript, dass man nun nur noch darauf packen muss, damit es _smoothed_:

**Javscript**

```js
jQuery(document).ready(function() {
  jQuery(".nav li:not(li." + document.body.className + ") a").hover(
    function() {
      jQuery(this).css("background-color", "#45423a");
      jQuery(this).stop().animate( { backgroundColor: '#8f8c86' }, 500);
    }, function() {
      jQuery(this).stop().animate( { backgroundColor: '#45423a' }, 500);
    }
  );
});
```

Auffälig vielleicht der Selektionsstring: `jQuery(".nav li:not(li." + document.body.className + ") a")`. Vorlesen erklärt es: selektiert werden innerhalb von `.nav li`, die nicht die gleiche Klasse wie der body des Dokuments haben und in denen alle Links, also `a`. Beim Hover-Event wird dort dann zunächst die Hintegrundfarbe zurückgesetzt (um das Original CSS ausser Kraft zu setzen) und dann die neue Farbe hinzu animiert. Fertig.

#### Weiterführende Links

- [jQuery interaction helpers: hover(over, out)](http://docs.jquery.com/Events/hover#overout)
- [jQuery: not-Selector](http://docs.jquery.com/Selectors/not#selector)
- [snook.ca: Using jQuery for Background Image Animations](http://snook.ca/archives/javascript/jquery-bg-image-animations/)
