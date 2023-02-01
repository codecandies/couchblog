---
title: "phpinfo() considered harmful"
date: "2007-03-05"
tags:
  - "Generde"
keywords:
  - "considered harmful"
  - "PHP"
---

Rein instinktiv fand ich es immer ein wenig seltsam, eine Infodatei ins Root zu legen, die nur `phpinfo()` aufruft. Und tatsächlich, darin versteckt sich eine XSS\-Anfälligkeit, wie [MonthOfThePHPBug No. 8](http://www.php-security.org/MOPB/MOPB-08-2007.html) belegt. Der Bug war schoneinmal gefunden und erschlagen, wurde aber für bestimmte PHP-Versionen »reintroduced«. Man sollte das mit frei zugänglichen Infos einfach komplett lassen.
