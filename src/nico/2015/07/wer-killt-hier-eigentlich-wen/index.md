---
title: "Wer killt hier eigentlich wen?"
date: "2015-07-21"
tags:
  - "Gesellschaft"
  - "Generde"
keywords:
  - "Ads"
  - "iOS"
  - "Werbung"
coverImage: "bosch_public_domain.jpg"
---

Performance, performance, performance. Als Webentwickler mit Verantwortungsbewusstsein reisst man sich ja seit Jahren den Arsch auf, um hier und da noch ein paar Bytes einzusparen, die Requests zu reduzieren, die Downloads zu beschleunigen und wenn alles nichts hilft, das Rendering so zu optimieren, dass wenigstens die gefühlte Geschwindigkeit stimmt. Ich habe kiloweise Artikel dazu gelesen, Vorträge gesehen, verlinkt, selbst gehalten, wie alle meine Kollegen. Und das alles stecken wir in die tägliche Entwicklung, reviewen uns gegenseitig und treten gegenüber Designern, PO und Stakeholdern permanent als die Warner und Mahner auf, Bedenkenträger by profession, alles um am Ende ein paar Millisekunden Speed herauszuholen.

Eigentlich können wir uns das aber auch schenken. Vergessen. Unsere Lebenszeit besser einsetzen. Denn es bringt alles nichts. Ist nutzlos, vergebene Liebesmüh. Auf die Idee könnte man zumindest kommen.

Denn wenn die möglicherweise hochperformante Website dann live ist, wird sie zugeballert von eine ganzen Phalanx von Trackingskripten, Werbeeinbindungen und Bannerwerbungen, die alle das Erstladerecht für sich beanspruchen und gefühlt von Leuten programmiert werden, die wahlweise keine Ahnung haben oder auf Performance täglich ihre Notdurft verrichten, einfach nur so, weil sie es können. Lese ich auch beim Guardian, [Ad tech is killing the online experience](http://www.theguardian.com/media/2015/jul/19/ad-tech-online-experience-facebook-apple-news?CMP=Share_AndroidApp_Gmail), dessen Website natürlich ebenso mit Werbung zugekleistert ist:

> \[R\]eally it’s not the website’s fault, since to a very large degree the owner of the website you’re visiting doesn’t actually control what you see, when you see it, how you see it, or even whether you see it. Instead, there are dozens of links in the advertising-technology chain, and every single one of them is optimising for financial value, rather than low-bandwidth user experience.

Da ist viel dran: denn neben dem Betreiber weiss natürlich auch der Techniker einer Website nicht, was werbemäßig passiert. Ist eine Website erstmal vermarktet, gibt es dort Bereiche, auf die deren Betreiber nur in sehr kleinem Maße noch Einfluss hat. So ist die Technik. Aber auch der Betreiber des Adservers von dem die Werbung eingespielt wird, zuckt regelmäßig mit den Schultern. Denn dort sind schon lange keine echten Ads mehr eingebucht, sondern wieder nur Links und Weiterleitungen zu anderen Adservern, Agenturservern, irgendwelchen Servern, die zumeist auch selbst wieder irgendwohin weiterleiten. Und jeder bringt noch schnell seinen eigenen Tracker mit. Deswegen kann man beispielsweise gar nicht sagen: wir haben drei/vier/fünf Tracker auf der Seite, da man nicht wissen kann, was noch dazu kommt, je nach ausgespielter Werbung. Nochmal der Guardian:

> Web-based articles, these days, are increasingly an exercise in pain and frustration. In many ways, the experience of reading such things is worse today than it was in the early days of dial-up internet. Because at least back then web pages were designed with dial-up users in mind. \[…\] Today, by contrast, everything is built for a world where everybody has a high-bandwidth supercomputer in their pocket.

Obwohl wir natürlich alle tatsächlich einen Supercomputer in Hosentasche mit uns herum tragen. Ein iPhone6 beispielsweise ist heute genauso leistungsstark, wie ein 11 Zoll MacBook Air von vor ein paar Jahren. Nur, warum funktionieren Webseiten dann darauf nicht besser? Bei The Verge hat man dafür die Hersteller von mobilen Browsern als Schuldigen ausgemacht, [The mobile web sucks](http://www.theverge.com/2015/7/20/9002721/the-mobile-web-sucks):

> But man, the web browsers on phones are terrible. They are an abomination of bad user experience, poor performance, and overall disdain for the open web that kicked off the modern tech revolution.

Wobei lustig ist, dass die Website von The Verge nicht gerade eine Performance aus dem Bilderbuch abliefert. Auf der Seite meldet Ghostery 26 (!) Tracker, sie zu laden hat bei mir eben lange acht Sekunden gedauert. Am Desktoprechner wohlgemerkt. Wie alle werbefinanzierten Seiten eben.

> And yes, most commercial web pages are overstuffed with extremely complex ad tech, but it's a two-sided argument: _we should expect browser vendors to look at the state of the web and push their browsers to perform better, just as we should expect web developers to look at browser performance and trim the fat._ But right now, the conversation appears to be going in just one direction.

Hervorhebung von mir. Naja. Ob das so stimmt? Also zumindest im Falle Apple muss man sich schon fragen, warum es mit der Entwicklung des Safaris nicht so richtig voran geht, ob vielleicht sogar die Aussagen zutirfft [Safari is the new IE](http://nolanlawson.com/2015/06/30/safari-is-the-new-ie/).

> They never send anyone to web conferences, their [Surfin’ Safari blog](https://www.webkit.org/blog/) is a shadow of its former self, and nobody knows what the next version of Safari will contain until that year’s WWDC. In a sense, Apple is like Santa Claus, descending yearly to give us some much-anticipated presents, with no forewarning about which of our wishes he’ll grant this year. And frankly, the presents have been getting [smaller and smaller](https://twitter.com/jaffathecake/status/612992537238896641) lately.

Auffällig allerdings, dass Apple zuletzt sowohl ein Adblocking für iOS9 ankündigte, als auch den Start einer eigenen Newsapp. Für letztere stellen sie sogar Journalisten ein. In die gleiche Kerbe schlägt Facebook mit seinen [Instant Articles](http://nicobruenjes.de/2015/05/instant-articles/), auch wenn diese immer noch nicht in ernstzunehmender Zahl stattgefunden haben. Fakt ist: Apple und Facebook wollen in Zukunft immer mehr Newskonsumenten in ihre _walled gardens_ locken.

Ich will ja nicht schon wieder [The End Of The World As We Know It](https://www.youtube.com/watch?v=Z0GFRcFm-aY) verkünden, mache mir aber doch Sorgen, ob es nun mit dem Umbruch weg von adfinanzierten Modellen zu noch in den Sternen stehenden Finanzierungsmöglichkeiten nicht etwas schnell geht. Zumal da doch noch einiges drin wäre, würde sich nur mal jemand bewegen. Die Webwerbebranche müsste sich gehörig ändern, um Strukturen zu entwickeln, die in dieser Gemengelage konkurrenzfähig wären. Ist ja nicht so, dass man an den völlig veralteten Bannereinbindungen nicht noch viel an Performance raus zu holen ist. An _responsive webdesign_ will ich dabei noch gar nicht denken, obwohl das natürlich auch Pflicht wäre. [Ein kleines Beispiel gefällig?](https://www.youtube.com/watch?v=UjRi_4OaJAE)

Gleichzeitig muss man natürlich immer und immer wieder die Frage nach den Alternativen stellen. Denn, angenommen, man will seine werbefinanzierte Website weiterbetreiben, was sollten man denn verkaufen, wenn es mit Werbung nicht geht und mit Bezahlschranken nicht klappt? Ja, was?
