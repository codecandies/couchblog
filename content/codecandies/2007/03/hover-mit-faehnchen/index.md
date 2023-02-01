---
title: "Hover mit Fähnchen"
date: "2007-03-29"
tags:
  - "Gecodet"
keywords:
  - "HTML"
---

Gerade ging mir durch den Kopf, dass man ja, wenn man einen Link schreibt, in den Attributen durchaus mit angeben kann, in welcher Sprache das Ziel dieses Links gehalten ist. Dazu gibt es das Attribut **`hreflang`**. Ein Link auf das US-Google würde dann so aussehen:

```html
<a href="http://google.de" hreflang="en-us">US-Google</a>
```

Der Sprachcode richtet sich dabei [nach ISO 639-1](http://www.mathguide.de/info/tools/languagecode.html). Die Frage nach dem Sinn liegt natürlich auf der Hand: das [W3C schreibt dazu](http://www.w3.org/TR/i18n-html-tech-lang/#ri20040310.074302350):

> If you add some text or graphic to a link indicating that the target document is in another language, it may allow the reader to decide in advance whether or not to follow the link, according to their language skill. If the user has to waste time following the link to find out that they cannot read the target document, this introduces fatigue, and they may lack confidence when faced with links that actually do go to readable pages.

Das würde natürlich nur Sinn machen, täte der Webbrowser anzeigen, welche Sprache den geneigten Leser denn nun erwartet. Macht aber kein mir bekannter Browser von alleine. Mit ein wenig CSS kann man ihn aber dazu überreden. Beispielsweise so:

```css
a[hreflang='en']:hover {
   padding-right: 18px;
   background: transparent url(flags/gb.gif) no-repeat center right;
}

a[hreflang='en-us']:hover {
   padding-right: 18px;
   background: transparent url(flags/gb.gif) no-repeat center right;
}

a[hreflang='fr']:hover {
   padding-right: 18px;
   background: transparent url(flags/fr.gif) no-repeat center right;
}

a[hreflang='nl']:hover {
   padding-right: 18px;
   background: transparent url(flags/nl.gif) no-repeat center right;
}
```

Links mit den Sprachcodes von englisch, amerikanisches englisch, französisch und holländisch bekommen nun beim _hovern_ ein nettes Fähnchen angezeigt. Die Fahnen gibt's für lau bei [FamFamFam zu laden](http://www.famfamfam.com/lab/icons/flags/), freundlicherweise. Natürlich passen die Landesfahnen nicht immer zur Sprache und umgekehrt, aber der Benutzer versteht's sicherlich trotzdem…

BTW: Man sollte natürlich seinen Content insgesamt sprachlich identifizieren, bspw. durch die Angabe der Spache im <html>-Tag, ungefähr so `<html lang="de">`. Und wenn man dann fremdsprachlich Texte verwendet identifiziert man diese widerum, bspw. mit einem lang-Attribut in einem Absatz: `<p lang="en">This is englisch</p>`. Der eine oder andere Screenreader soll diese Auszeichnugen tatsächlich beachten können und beim Vorlesen den richtigen Akzent auswählen.


