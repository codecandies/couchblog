---
title: "Open Couchblog"
date: "2020-07-02"
tags:
  - "Generde"
keywords:
  - "indieweb"
---

Eine Geschichte aus der Serie: ich wollte doch nur mal kurz, aber dann war es umfangreicher und komplizierter als gedacht und dann ist die Frau sauer, dass mann (sic!) trotz Urlaub am Rechner rumsitzt und verpasst das Abendessen wie früher, als ich noch jung war.

Vor geraumer Zeit habe ich hier mal Webmentions angeschmissen, weil ich liebe [ein offenes Netz](https://indieweb.org/) und so. Das tat erst mal noch nichts, da noch etliche weitere Plugins und Einstellungen fehlten.

Das habe ich nun weitestgehend nachgeholt. Über [Bridgy](https://brid.gy/) landen dann auch Twitter-Reactions hier an den Artikeln, wobei mir das informationsarchitektonisch noch nicht passt (sehen im Moment Kommentaren gleichwertig aus). Der Rückweg, also die Artikel nach Twitter posten steht (glaube ich, irgendwie verstehe ich die Doku nicht, wenn ich immer nur die Zeilenanfänge lese) noch aus. Der Teil ist aber ganz schön.

Ein weiteres [Plugin](https://github.com/indieweb/wordpress-uf2) versorgt meine Artikel jetzt mit (mehr) Mikroformaten, obwohl ich fast überzeugt bin, das selbst besser und codesparsamer zu können. Man muss es halt nur machen. Ich habe nun auch [semantische Linkbacks](https://github.com/pfefferle/wordpress-semantic-linkbacks), quasi hat mich aber noch nie ein Mensch semantisch gelinkbackt. Oder so. Aber ok.

Unfreundlicherweise behauptet nun der mobile Firefox übrigens, ich hätte einen social tracker von Twitter hier installiert, was mal einerseits Quatsch ist und Desktop auch nicht reproduzierbar ist. Das hat mich verunsichert.

Dann hab ich mit [Micropub](https://github.com/snarfed/wordpress-micropub) gespielt, weil ich gelesen habe, dass der IA Writer dann direkt ins Blog posten kann. Hab ewig mit den (eigentlich recht eindeutigen) Fehlermeldungen hantiert, bis ich begriffen habe, dass meine Firewall den Zugang zum API blockiert. Das Ergebnis war dann eher… ausbaufähig. Funktioniert möglichweise nur so richtig gut, wenn man den Classic Editor nutzt, in G…berg-Editor landelt alles in einem Classic-Block und außerdem wird der Dateiname zum Titel gemacht (und nicht etwa das H1 am Anfang des Textes), was also immer Nacharbeiten erfordert, was also schnelles Autoposting direkt verhindert. Und ich bin eh vor Jahren auf Ulysses umgestiegen bin. Dort gibt‘s dafür aber nur ein Feature-Request.

Schön war in diesem Zusammenhang, dass zum erstenmal überhaupt meine [Keybase-Account](https://keybase.io/nicobruenjes) beinahe für etwas gut gewesen wäre, wenn das Signieren per iOS-App geklappt hätte. So habe ich mich dann doch nur über Github ausgewiesen.

**Update**: das Microformat-Plugin habe ich erstmal wieder deaktiviert, da es in Bridgy Fehlermeldungen verursacht hat, dafür funktioniert jetzt wohl das POSSE-publishen nach Twitter.

**Update September 2020:** Ich hab das ganze Geraffel wieder deaktiviert. Mal von der ungeklärten Rechtslage in Sachen DSGVO abgesehen, hab ich es nicht genutzt (bspw. um nach Twitter zu bridgen), noch hat es jemand anders hier genutzt (bspw. um eine Mention zu hinterlassen. Bleiben die gelegentlichen Benachrichtigungen, wenn jemand hierher verlinkt hat, die ich aber ja eh hier nicht (Datenschutz!) rausgeschrieben habe.
