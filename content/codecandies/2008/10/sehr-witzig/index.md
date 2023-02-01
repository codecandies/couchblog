---
title: "Sehr witzig!"
date: "2008-10-24"
tags:
  - "Gecodet"
keywords:
  - "Bugs"
---

Für [Marc](http://marctv.de) unsere kurze [Erklärung, wie es zur Finanzkrise kam](http://www.zeit.de/online/2008/44/bg-finanzkrise). Aus Sicht eines Programmierers hat sich hier leider ein kleiner Fehler eingeschlichen, hier das passende Suchbild:

![Screenshot](/img/codecandies/img007.png)

Und hier nun der glamouröse Codeschnipsel XSL/T:

```xml
<xsl:value-of select="date:day-in-month($dlm-date)"/>.
<xsl:value-of select="date:month-in-year($dlm-date)"/>.
<xsl:value-of select="date:year($dlm-date)"/> -
<xsl:value-of select="format-number(number(date:hour-in-day($dlm-time))+2,'00')"/>:
<xsl:value-of select="format-number(number(date:minute-in-hour($dlm-time)),'00')"/> Uhr
```

WTF. Sehr witzig.
