---
title: "Responsive Images: How they Almost Worked and What We Need"
date: "2012-02-10"
tags:
  - "Gestaltet"
keywords:
  - "CSS"
  - "HTML"
---

[Vorschlag für HTML5-responsive-Images](https://alistapart.com/article/responsive-images-how-they-almost-worked-and-what-we-need/). Ist mir letzte Woche leider durch den TL;DR-Filter gerutscht.

```html
<picture>
  <source src="high-res.jpg" media="min-width: 800px" /> <source src="mobile.jpg" />
  <!-- Fallback content: -->
  <img src="mobile.jpg" />
</picture>
```
