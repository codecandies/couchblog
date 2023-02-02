---
title: "Redesign: Einfaches Menü"
date: "2004-08-17"
tags:
  - "Generde"
---

Menüs als hübsch gestylte HTML-Listen (`ul`), ein alter Hut, gewiß. Schon einhundert Mal beschrieben und alles was dem in letzter Zeit noch hinzugefügt wurde ist entweder langweilig, oder—sagen wir mal—suboptimal.

Für das aktuell anstehende Redesign habe ich auf eine aufwendige Tabnavigation, auf das Sliden von Backgroundimages und was es sonst noch an fetten, aber schweren Effekten und Techniken so gibt… verzichtet. Gerade die aktuelle Navigation, die sicherlich ein Eyecatcher ist (in den Browsern, in denen sie wie vorgesehen funktioniert), ist vor allem eins: schwer zu handlen und null erweiterbar. Das ist überhaupt die Crux der horizontal angeordneten Navigation auf einer in der Breite festgelegten Website: irgendwann ist kein Platz mehr da.

Zurück also in die Vertikale. Und auch dort lassen sich ansprechende Effekte erzielen, ohne gleich mit dem Monsterhackcsshammer zu schwingen oder gar Javascript zu bemühen.

HTML:
```html
<div id="navigation">
  <ul>
    <li>
      <a href="#" title="Artikel">Schreiberling</a>
    </li>
    <li>
      <a class="akt" href="#" title="Weblogger">Blogger</a>
    </li>
    <li>
      <a href="#" title="Entwicklung">Entwickler</a>
    </li>
    <li>
      <a href="#" title="Musik">Plattenalleinunterhalter</a>
    </li>
    <li>
      <a href="#" title="Persoenlich">Mensch</a>
    </li>
    <li>
      <a href="#" title="Fotos">Kamerabenutzer</a>
    </li>
  </ul>
</div>
```

Stimmt nicht ganz. Da der dumme IE mal wieder buggy spielt, habe ich in der Endversion alle Zeilenumbrüche weglassen müssen, da sonst ungewollte Abstände zwischen den Listenpunkten angezeigt werden.

CSS:
```css
#navigation {
  margin-bottom: 2em;
}
#navigation ul {
  list-style:none;
  margin:0;
  padding:0;
  background: transparent url(/images/webpropaganda/brd7c6750bottom.png) repeat-x top;
}
#navigation ul li {
  background: transparent url(/images/webpropaganda/brd7c6750bottom.png) repeat-x bottom;
  margin: 0;
  padding: 0;
}
#navigation a {
  display: block;
  margin: 0;
  padding: .7em .8em;
}
#navigation a.akt {
  font-weight: bold;
}
#navigation a:link,
#navigation a:visited {
  color: #7c6750;
  text-decoration: none;
}
#navigation a:hover {
  color: #fff;
  font-weight: bold;
  background: #7c6750;
}
#navigation a:active {
  color: #7c6750;
  text-decoration: none;
}
```

Das Hintergrundbild brd7c6750bottom.png ist ein simples 10×1px großes PiNG, welches die gepunktete Linie enthält (da ja, richtig geraten IE `border-bottom: 1px dotted #7c6750` fälschlicherweise als gestrichelte Linie darstellt. Und noch ein Unterschied zwischen IE und richtigen Webbrowsern: obwohl die Links als Blockelemente dargestellt werden, wird beim IE der Hovereffekt trotzdem nur gezeigt, wenn man direkt über die Schrift des Links fährt. Wie arm! Aber IE-Surfer dürften solche Dinge gewöhnt sein…

Eins sei noch angemerkt: Textpattern mit eingeschaltetem Textile ist für die Wiedergabe von Sourcecode mehr als ungeeignet. Das nervt.
