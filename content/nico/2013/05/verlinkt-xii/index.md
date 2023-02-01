---
title: "Verlinkt XII"
date: "2013-05-12"
tags:
  - "Gefunden"
keywords:
  - "DRM"
  - "HTML"
  - "Twitter"
coverImage: "2012-04-18-16.58.20.jpg"
---

### Twitterhacks revisited

Gar nicht witzig: [wie zuvor bei AP oder dem Guardian](http://nicobruenjes.de/2013/04/twitter-guardian-hacks/ "nicobruenjes.de: Twitterhacks"), wurde beim Satiremagazin „The Onion” ebenfalls der Twitter-Account von der SEA gehackt. Anders als zuvor, gibt es dort aber einen Artikel darüber, wie die Phishing-Attacke von statten gegangen ist.

[The Onion Tech Blog: How the Syrian Electronic Army Hacked The Onion](http://theonion.github.io/blog/2013/05/08/how-the-syrian-electronic-army-hacked-the-onion/)

> After discovering that at least one account had been compromised, we sent a company-wide email to change email passwords immediately. The attacker used their access to a different, undiscovered compromised account to send a duplicate email which included a link to the phishing page disguised as a password-reset link. This dupe email was not sent to any member of the tech or IT teams, so it went undetected. This third and final phishing attack compromised at least 2 more accounts. One of these accounts was used to continue owning our Twitter account.

### Webdevnachrichten

Lesen! [DRM in HTML5 is a victory for the open Web, not a defeat](http://arstechnica.com/business/2013/05/drm-in-html5-is-a-victory-for-the-open-web-not-a-defeat/#p3)

> Deprived of the ability to use browser plugins, protected content distributors are not, in general, switching to unprotected media. Instead, they're switching away from the Web entirely. Want to send DRM-protected video to an iPhone? "There's an app for that." Native applications on iOS, Android, Windows Phone, and Windows 8 can all implement DRM, with some platforms, such as Android and Windows 8, even offering various APIs and features to assist this.
>
> In other words, the alternative to using DRM in browser plugins on the Web is not "abandoning DRM"; it's "abandoning the Web."

DRM wird also in HTML5 eingebaut werden (bzw. die Möglichkeit dazu geschaffen) und macht es so konkurrenzfähig mit Apps.

Das <picture>-Element ist ebenfalls noch in keinem Browser eingebaut, schon stehen wir vor den ersten Problemen:

> The <picture> element supports a number of different types of fallback content, but the current implementation of these fallbacks is problematic. In this article, we’ll explore how the fallbacks work, how they fail and what can be done about it.

Das <img>, das als Fallback verwendet wird, wird nämlich **immer** geladen, also hat man doppelte Downloads von Bildern (yet again). Der Artikel bietet einen haarsträubenden Workaround an… [Smashing Mobile: Keeping The Big <picture> Small — How To Avoid Duplicate Downloads In Responsive Images](http://mobile.smashingmagazine.com/2013/05/10/how-to-avoid-duplicate-downloads-in-responsive-images/)

Wer <picture> heute schon nutzen will, es gibt ein [Polyfill](https://github.com/scottjehl/picturefill).

### Elefantenrunde?

Storify über die sog. onlinejournalistische Elefantenrunden bei der re:publica. [Generationswechsel oder digitale Spaltung in den Redaktionen?](http://www.onlinejournalismus.de/2013/05/09/republica-onlinejournalismus-wegner-borchert-ploechinger/ "onlinejournalismus.de")

### und schließlich:

[10 Reasons Why Humor Is A Key To Success At Work](http://www.forbes.com/sites/jacquelynsmith/2013/05/03/10-reasons-why-humor-is-a-key-to-success-at-work/)

> “In workplaces that encourage people to be themselves–that are less hierarchical and more innovative–people tend to be more open with their humor,” he says. “Even people who aren’t always comfortable sharing their humor tend to do so in more relaxed environments where the use of humor becomes second nature with everyone’s style.”
