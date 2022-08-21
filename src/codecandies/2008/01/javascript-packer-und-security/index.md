---
title: "Javascript Packer und Security"
date: "2008-01-28"
tags:
  - "Gecodet"
keywords:
  - "Javascript"
  - "Security"
---

Was man bei [SecureWorks](http://www.secureworks.com/research/threats/thepacker/) \[[via](http://ajaxian.com/archives/is-using-a-js-packer-a-security-threat)\] nachlesen kann entspricht genau der Diskussion, die wir vorige Woche mit unseren Serverwächtern zu führen hatten. Tenor, hier wie dort:

> While the use of packers is widespread, all have drawbacks. These include:
>
> - The inability to easily verify and audit code
> - The administrative overhead of repacking code for each change
> - Suboptimal compression
> - The increased risk of false negatives which may lead to a site being used to spread malicious code
> - The increased risk of false positives, which may lead to a site or some of its functions being blocked by security controls
> - Noticeable negative impact on client-side performance.
>
> Site owners, operators, developers and administrators can achieve intended results -- typically reducing the number of bytes downloaded from the server -- with greater degree of success and fewer side-effects using one or more alternative tactics:
>
> - Not compressing JavaScript code at all
> - Reliance on increases in average available bandwidth
> - Reliance on local and network caching
> - Not using more JavaScript functions than necessary (smaller library "builds")
> - Using only safe whitespace/comment reduction techniques
> - Automatic application of safe techniques as a last step in the publishing process
> - The use of mod\_deflate/mod\_gzip for compressing the HTTP response data
> - The use of jar files to package JavaScript (these can be cryptographically signed to further enhance authenticity of code, and hence improve security)

OK, das ist einleuchtender, als das Voodoo-Ihr-Programmieraffen-seid-alle-blöd-Zeugs, das ich mir sonst anhören muss. Wir sind auch bereits dazu übergegangen, wieder ungepackten Code zu schicken. Teilweise sofort, teilweise wird es releaseabhängig noch ein wenig dauern.

Ich bin gar nicht so traurig, den Packer zu kicken… der Releasecycle war immer sehr nervig. Zudem bin ich mal wieder völlig leidenschaftslos, zudem ich ja auch selbst immer wieder sage, wie _evil_ `eval()` ist. ;)
