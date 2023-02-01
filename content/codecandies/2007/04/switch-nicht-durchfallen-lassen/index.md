---
title: "Switch nicht durchfallen lassen"
date: "2007-04-26"
tags:
    - "Gecodet"
keywords:
  - "Javascript"
  - "YUI"
---

Douglas Crockford gibt im [Yahoo! Interace Blog eine kleine Lehrstunde](http://yuiblog.com/blog/2007/04/25/id-rather-switch-than-fight/) in Sachen `switch`-Statement. `switch`, geerbt aus einer langen Ahnenreihe von Programmiersprachen (Java, C++, C), kann ein mächtiges Instrument sein. Aber – mächtige Instrumente habe das oft an sich – es ist auch gefährlich: man kann es viel zu sehr zu einem `goto` umwandeln, was man nicht will. Auch wenn die Erinnerung an alte Brotkastentage lebt:

```
10	print "Dummes Zeug"
20	goto 10
```

LOL. Nein, nein, das wollen wir nicht.

Und `switch` hat noch ein anderes Problem: die sogenannten _Fallthroughs_{:lang=en}. Allzuoft (das sieht man auch gerne mal in PHP-Programmen) wird es benutzt, um für eine Bedingung mehrere Tasks auszuführen, ganz einfach indem man das `break` am Ende eines `case`\-Blocks weglässt. Denn dann wir bekanntermaßen fröhlich weitergeswitched. Was als prima Trick daherkommt, ist gar nicht so schlau, weil das _Vergessen_ eines `break`s eben auch ein unfreiwilliger Bug sein kann. Und wer geht nun hin und findet in ein paar tausend Zeilen Code die Blöcke, die absichtlich kein `break` haben und welche nicht? Eben.
