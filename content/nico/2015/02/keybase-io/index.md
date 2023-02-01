---
title: "keybase.io - Cryptoparty im Netz"
date: "2015-02-13"
tags:
  - "Getestet"
  - "Generde"
  - "Generde"
coverImage: "nixHANHJTEp_QkblXlDf4sGk7KoRHEnss9hXkxVQz34.png"
---

Ich bin jüngst zur _early alpha_ von [keybase](https://keybase.io/) eingeladen worden und nach ein paar Tagen herumprobieren kann ich sagen: die Idee hat wirklich potential. Keybase ist sozusagen eine sehr große PGP-Cryptoparty und soll ermöglichen, mit Leuten, die man noch nicht persönlich getroffen hat (und vielleicht nie treffen wird) ein _web of trust_ aufzubauen und so letztlich verschlüsselte Kommunikation zu ermöglichen. Zusätzlich gibt es noch einige Hilfsmittel, um bspw. über die Kommandozeile oder sogar über Twitter, verschlüsselt zu kommunizieren.

> Get a public key, safely, starting just with someone's social media username(s). From there, unbounded potential!

## Meine Accounts sind mein Ausweis

Einer der Kernpunkte verschlüsselter Kommunikation mit PGP ist ja, dass man Leute findet, die man ihrem PGP-Schlüssel zuordnen kann und ihnen so vertraut. Bisher musste man sich dafür persönlich treffen und die Schlüssel austauschen und beglaubigen. Keybase will eben diese Beglaubigung herstellen, ohne dass man sich treffen muss. Dazu identifizieren sich die Nutzer gegenüber von Keybase auf möglichst vielfältige Weise. Ich habe zum Beispiel [einen speziellen Tweet](https://twitter.com/nicobruenjes/status/565440317495996417) abgesetzt um mich mit meinem Twitteraccount auszuweisen. Und weil das noch nicht reicht (den Tweet könnte ja auch jemand veranlassen, der einen Twitteraccount gekapert hat), habe ich noch [ein spezielles Gist erstellt](https://gist.github.com/codecandies/e2cb03903755b8d9ed72), um meinen Github-Account identifizierbar zu machen. Und um es noch genau zu machen, habe ich den DNS-Text von nicobruenjes.de so angepasst, dass keybase jetzt weiss: ich bin der Besitzer der Domain. Das geht noch mit einer ganzen Reihe weiterer Accounts und Eigenschaften, bis hin zur Bitcoin-Adresse. Mit je mehr man sich ggü. Keybase ausweist, um so sicherer wird die Sache natürlich. Anhand dieser verbrieften Eigenschaften können mich nun andere Keybase-Nutzer finden und erkennen (ich zeige hier die Kommandozeile, weil das einfacher hierher zu kopieren ist, geht alles auch per Website):

```
› keybase id nicobruenjes
✔ public key fingerprint: 9DCF BD30 2843 0CBE 78E5 F1A8 B51E 2E22 55CF BFF6
✔ "nicobruenjes" on twitter: https://twitter.com/nicobruenjes/status/565440317495996417
✔ "codecandies" on github: https://gist.github.com/e2cb03903755b8d9ed72
✔ admin of the DNS zone for nicobruenjes.de
```

Man findet andere natürlich auch anhand der identifizierten Accounts:

```
› keybase id twitter://nicobruenjes
› keybase id web://nicobruenjes.de
› keybase id github://codecandies
```

Wer nun der Ansicht ist, das ich der Nico Brünjes bin, mit dem er gerne kommunizieren möchte, dann kann er mich _tracken_, so wie _frienden_ oder _followen_, nur eben geekiger.

```
› keybase track nicobruenjes
✔ public key fingerprint: 9DCF BD30 2843 0CBE 78E5 F1A8 B51E 2E22 55CF BFF6
✔ "nicobruenjes" on twitter: https://twitter.com/nicobruenjes/status/565440317495996417
✔ "codecandies" on github: https://gist.github.com/e2cb03903755b8d9ed72
✔ admin of the DNS zone for nicobruenjes.de
› Is this the nicobruenjes you wanted? [y/N] y
› Permanently track this user, and write proof to server? [Y/n] Y
```

## Copy & Paste Verschlüsselung für Twitter

Nun kann man schon Daten verschlüsseln:

```
› keybase encrypt nicobruenjes -m 'Verschlüssel das mal'
-----BEGIN PGP MESSAGE-----
Comment: GPGTools - https://gpgtools.org

hQIMA9IkQTsc+mSQARAAoeIqoS7D+C3aWuymUomVJWU
e1FiqMNWJDyTzT4I5cRkiwKWLCLmPlYIO1oLhNl670l
tfp+Qof7CJDGIUx02vRydT5coUwt8MtEhJUPDGi3cAG
-some-extra-lines-omitted-here :-)
0LUvVNuYCvjR4Rt7fkfeVcSuakEpUfufGnFqow==
=4DrQ
-----END PGP MESSAGE----
```

Und entschlüsseln: `keybase decrypt antwort.asc`. So kann man, per copy und paste, bspw. über Twitter oder Slack oder anderen Diensten mit denen man planen Text versenden oder Dateien teilen kann verschlüsselt kommunizieren. Meist will man ja aber verschlüsselte Mails senden. Deswegen landen alle Leute die man (per Kommandozeile) trackt auch direkt in der GPG-Keychain, man kann ihnen also auch direkt verschlüsselte oder gesignte Mails schicken.

> That's it. It's really pretty simple. We're not reinventing any cryptography here - the goal is a simple way to look up and trust keys, based on known public identities.

Die [Website](https://keybase.io/) ist übrigens weitestgehend ein Client für keybase, dort kann man alle Funktionen im Web abrufen. Das zeigt aber auch den Knackpunkt von Keybase: es ist ein [open source Programm](https://github.com/keybase), das man wiederum beliebig in andere Programme einbauen kann. Oder Dienste nutzen das [API](https://keybase.io/docs/api/1.0). Da ist wirklich noch viel drin.
