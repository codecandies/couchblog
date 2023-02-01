---
title: "No use for a name"
date: "2009-05-05"
tags:
  - "Gecodet"
keywords:
  - "HTML"
---

Beim herumspielen mit HTML5 ist mir bzw. dem W3C-Validator jüngst aufgefallen, dass es in HTML5 [kein `name`\-Attribut u.a. für Links mehr gibt](http://www.w3.org/TR/2008/WD-html5-diff-20080122/#absent-attributes). Use `id` instead, ist die knappe Aussage.

Das `name`\-Attribut vermisst natürlich kein Mensch. Nun ja, bis auf ein paar Leute, die nunmal unbelehrbar `<a name="marke"></a>` schreiben. Das sind die gleichen Kandidaten, die auch die ganzen anderen Attrribute nutzen, die man besser in CSS umsetzen kann (welche deswegen auch mit HTML5 verschwinden): `align, background, bgcolor, width, height, clear, hspace, vspace, marginheight, marginwidth, nowrap, size, style, type, valign` um nur die bekanntesten zu nennen. Gut, `<br clear="all">` trifft man vielleicht noch recht häufig an, die anderen habe ich in jahrelanger Auflärungsarbeit und Überredungskunst aus meinem Umfeld weggeredet.

Einen Knüller überliest man allerdings zu schnell: **`style` fällt auch weg!** Hurra! Der Horror eines jeden CSSers hat ein Ende: endlich keine nur mit aller `!important`s überschreibbarer CSS-Pfuschereien in der HTML-Source mehr. Die letzte Bastion designfreudiger Programmierer gerät ins Wanken. Schön. Zu schön. Denn unterstützen werden es die Browser natürlich trotzdem. Aber ich habe den Validator als Waffe.

Die anderen wegfallenden Attribute gehören beinahe alle zu den eher Unbekannten: `rev, longdesc, scope, version` und einige mehr. Aber auch `profile`, wie in `<head profile="http://gmpg.org/xfn/11">`, was in praktisch jedem Wordpress-Blog steht. Oder auch `classid`, aber die <object>-Tags, die man allenorten kopieren kann, sind eh' nicht HTML5-pastekompatibel.

Es verschwinden aber nicht nur Attribute aus dem HTML-Fundus, sondern auch ganze Elemente. Sagen wir schon einmal »Tschüss« zu `<basefont>, <big>, <center>, <s>, <strike>, <tt>, <frame>, <frameset>` und natürlich `<noframes>`, aber auch `<acronym>, <applet>, <isindex>` und `<dir>`. Denen weinen aber jetzt auch nur [HTML3](http://www.w3.org/TR/REC-html32)\-Veteranen hinterher. Gibt ja auch genug [neue Elemente](http://www.w3.org/TR/2008/WD-html5-diff-20080122/#new-elements).
