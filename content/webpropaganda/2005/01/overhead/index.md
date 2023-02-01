---
title: "Overhead"
date: "2005-01-13"
tags:
  - "Generde"
persons:
  - "Dave Winer"
---

[Dave Winer](http://archive.scripting.com) schlägt zur Überwindung der Lücke vom Webbrowser zum Feedaggregator eine [tonnenschwere Lösung mit zentralisierten Servern vor](http://archive.scripting.com/2005/01/11#theSolutionToTheYahooProblem), dabei ist die Lösung doch wirklich mehr als einfach (wie auch Anne van Kersteren [feststellt](http://annevankesteren.nl/archives/2005/01/feed-autodiscovery)): **Feed Autodiscovery**!

Aus meinem Header:

```html
<link rel="alternate" type="application/rss+xml" title="RSS 0.92" href="https://couchblog.de/webpropaganda/?rss=1" />
```

So einfach ist das.
