---
title: "jQuery hundertzwölf"
date: "2007-02-28"
tags:
  - "Gefunden"
keywords:
  - "jQuery"
---

Es gibt [eine neue Version von jQuery: 1.1.2.](http://jquery.com/blog/2007/02/27/jquery-112/), ein Bugfix-Release, dass einige interessante (von mir zumindest weitestgehend bisher unbemerkte) Bugs beseitigen soll:

> 1. Change: Event handlers (like element.onclick) are now removed when no more functions are bound to the event.
> 2. Fixed: DOM Manipulations for form elements.
> 3. Fixed: jQuery.isFunction to return false on nodes.
> 4. Fixed: jQuery.className.has, escaping regex characters in className (for metadata)
> 5. Fixed: an issue in IE where an event on a cloned element is fired during a .clone() inside of an event handler.
> 6. Fixed: IE ID selectors selecting by the name attribute.
> 7. Changed: Events are now internally stored in elem.$events rather than elem.events (due to a nasty bug relating to DOM 0 expandos).
> 8. Changed: .attr('href') is now consistent in all browsers.
> 9. Changed: @href is now consistent in all browsers.
> 10. Fixed: the slideDown flickering bug.
> 11. Fixed: Having a \\r endline in $("...") caused a never-ending loop.
> 12. Fixed: IE6 AJAX memory leak
> 13. Fixed: bug in pushStack, reporting an element at \[0\] in a jQuery object with length 0

Und weil man gerade dabei ist (und weil es natürlich immer noch weitere Bugs gibt), ist auch schon die Version 1.1.3. in Arbeit. Wer übrigens noch eine Version _vor_ 1.1. verwendet, sollte nun langsam mal die switch machen.
