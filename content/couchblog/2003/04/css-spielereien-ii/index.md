---
title: "CSS Spielereien II"
date: "2003-04-27"
tags:
  - "Gefunden"
---

Immer noch führt die Zweisprachigkeit meines Weblog zu Verwirrungen, mit meinem Projekt die Sprache (nur deutsche oder nur englische Artikel oder beides) auswählbar zu machen komme ich zur Zeit auch nicht wirklich weiter. Aber: basierend auf dem [CSS Trick mit den Outsidelinks](http://www.couchblog.de/couchblog/archives/2003/03/css_spielereien_i.php "couchblog: CSS Spielereien I") kann man jetzt hier schon an einem Link erkennen, ob sich dahinter ein deutschsprachige oder englischsprachige Quelle verbirgt. Viel war dazu nicht nötig, ausser vielleicht, daß ich [meine eigenen Vorschläge zum semantischen auszeichnen von Links](http://www.couchblog.de/couchblog/archives/2002/12/xhtml_attributes_used.php "couchblog: (X)HTML attributes used") ein wenig besser beherzigen muss, als mir das in letzter Zeit gelungen ist.

Wie es funktioniert:
Jeder externe Link bekommt das semantische Attribut `hreflang` zugeordnet. Ein Link auf eine englischsprachige Seite sieht also beispielsweise so aus: `<a href="http://www.superlink.com" title="some phat pictures" hreflang="en">an outside link<a>`. Über die Funktionen in CSS 3 kann nun auf dieses Attribut zugriffen werden. In meinem Stylesheet findet sich also folgende Einträge:

```css
div.blog a[href^="http:"] {
  background: transparent url('pfad/zum/Externlinkicon.gif') 100% 50% no-repeat;
  padding-right: 10px;
}
div.blog a[hreflang^="en"] {
  background: transparent url('pfad/zum/enoutside.gif') 100% 50% no-repeat;
  padding-right: 10px;
}
div.blog a[hreflang^="de"] {
  background: transparent url('pfad/zum/deoutside.gif') 100% 50% no-repeat;
  padding-right: 10px;
}
div.blog a[href^="http://www.couchblog.de"],
div.blog a[href^="https://couchblog.de"] {
  background: inherit;
  padding-right: 0px;
}
```

Die erste Zeile zeigt generell bei externen Links ein kleines Icon an. Die beiden folgenden Zeilen überschreiben dieses Verhalten, wenn ein `hreflang` angegeben wurde, je nach Sprache. Ganz am Schluss werden widerum die Links herausgepickt, die auf dieses Blog zeigen, also intern sind und dort das Icon wieder gelöscht. Fertig. Ach ja: das ganze funktioniert nur in Browsern, die bereits CSS3 unterstützen… ratet welche das sein könnten.

**Weiterführende Links:**
[External link icons the CSS way](http://www.kryogenix.org/days/173.html " External link icons the CSS way")
[W3C Recommendations (Phrase elements)](http://www.w3.org/TR/REC-html40/struct/text.html#h-9.2.1 "W3C")
