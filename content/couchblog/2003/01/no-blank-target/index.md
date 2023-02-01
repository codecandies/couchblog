---
title: "No blank target"
date: "2003-01-07"
tags:
  - "Gecodet"
---

[Gord](http://www.poeticgeek.net/log/2003/01/07/07012003-0119h.php "poeticgeek: Compliance is Fun Archives") points out, that the code MT produces when anchoring to an external authors URL is not compatible with [XHMTL 1.1](http://www.w3.org/TR/xhtml11/ "W3C - XHTML 1.1"), cause the used attribute `target="_blank"` has been deprecated.

But he also shows a way to edit your `context.pm` (Movable type installation directory/lib/MT/Template/) to fix that problem. Edit these lines:

Line 721:
`return sprintf qq(<a target="_blank" href="%s">%s</a>), $a->url, $name;`

Line 1006:
`return sprintf qq(<a target="_blank" href="%s">%s</a>), $url, $name;`

In both lines you can remove the `target="_blank"` attribute. This seems to fix the problem.

Surely you should make a backup copy of the `context.pm` before editing…
