---
title: "dojo.query"
date: "2007-02-05"
keywords:
  - "Development"
  - "Javascript"
tags:
  - "Gecodet"
---

Kurze Zusammenfassung: **[Dojo kann jetzt auch Queries](http://blog.dojotoolkit.org/2007/02/04/dojoquery-a-css-query-engine-for-dojo).** Der Rest: die üblichen Anfeindungen mit der mangelhaften Dojo-Dokumentation. ;)

Einer der Gründe, warum beispielsweise [jQuery](http://jquery.com) in letzte Zeit so ausgesprochene Erfolge zu verzeichnen hat, dürfte deren eingebaute Query-Language sein, also die Möglichkeit, über CSS- und/oder XPath-Queries auf DOM-Elemente zuzugreifen. Es kommt einfach ziemlich handy, wenn man mal eben in einem Rutsch alle `<a>` mit der Klasse `.popup` beispielsweise mit einem prima Klick-Ererignis verknüpfen kann. In jQuery sieht das ungefähr so einfach aus: `$('a.popup').click(function(){alert('So einfach ist das!')});`. Das macht die Zugriffe aufs DOM einierseits zu alles anderem als Hexenwerk und kommt anderseits ziemlich handy daher (zumal man speziell bei jQuery nun noch beliebig viele andere Methoden mit weiteren '.' an die Geschichte anhängen kann).

Das ist eine sinnvolle Sache, haben sich die Dojo-Entwickler gedacht, und prompt etwas ähnliches eingebaut: `dojo.query`. Buh, billig kopiert könnte man jetzt anmerken, oder: »Jungs, dokumentiert die Codemassen, die ihr so ausspuckt, doch erst mal richtig, eh' ihr mit neuen Features prahlt«. Letzteres hätte sicherlich durchaus seine Berechtigung, anderseits, wie gesagt: es ist einfach ein cooles Feature. Ob man nun damit angeben muss, dass Dojo diese Queries auf jeden Fall viel schneller ausführt, als alle anderen JS-Toolkits, ist eine müßige Angelegenheit und zeigt nur, dass die Entwickler der unterschiedlichen Frameworks tatsächlich irgendwie mitinander in Konkurrenz stehen, oder sich selbst setzen. Was eigentlich unnütz und kontraproduktiv ist, denn mir gefiele es besser, man besinne sich der Vorzüge des jeweiligen Frameworks, bei Dojo dürften das die Widgets sein. Stattdessen lernen wir, das Dojo über »div span span« in IE7 4mal so schnell iteriert, als jQuery. Schön…
