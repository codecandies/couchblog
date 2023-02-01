---
title: "Sicherheit?"
date: "2013-06-01"
tags:
  - "Generde"
keywords:
  - "Security"
coverImage: "sicherheit.jpg"
---

Mit der Sicherheit ist das so eine Sache, sie ist nämlich weniger ein Zustand, als mehr ein Gefühl. Das vielzitierte Sicherheitsgefühl. Dabei kann man sich nie ganz sicher sein. Im Internet jedenfalls sicher nicht. Kann ich versichern.

### Too many secrets?

[Ars Technica hat demonstriert](http://arstechnica.com/security/2013/05/how-crackers-make-minced-meat-out-of-your-passwords/), das unsere Passwörter nicht mehr sicher sind. Das amerikanische Technikmagazin ließ drei _Sicherheitsexperten_ auf eine lange Liste mit Passworthashes los, und die drei Kollegen crackten bis zu 90% der Passwörter. Bei der Liste handelte es sich um genau eine solche, wie man sie nach Einbrüchen in die Nutzerdatenbanken von Webseiten, bspw. last.fm im Netz finden konnte. Über 16.000 per _salted Hash_ verschlüsselte Passwörter. Vor allem mit gut koordinierten Wörterbuch- und _brute-force_\-Attacken, konnten die meisten davon innerhalb eines Tages geknackt werden, d.h. in ihre lesbare Form zurückübersetzt werden. Dabei waren die üblichen Verdächtigen von „Ernie”, über „Boss” zu „geheim” ebenso, wie elaboriertere Codes wie: „momof3g8kids” oder „n3xtb1gth1ng”, aber auch die vermeintlich sicher geglaubten Merksätze wie: „[correct horse battery staple](https://xkcd.com/936/)”. Und einen ganzen Tag hat es eigentlich nur gedauert, weil die Herren Sicherheitsexperten nur mit kleinem Geräte (also kleinen GPUs) angereist waren und nebenbei reichlich Interviews gaben.

### Vorsicht Falle!

Da kann man schon mal ins Grübeln kommen, über die Sicherheit, wenn man davon hört, dass Plattform XY, wo man auch mal kurz ein Profil betrieben hatte, gehackt wurde. War das Passwort einigermassen sicher? Und wenn nicht, wo hat man es schon einmal benutzt? Benutze ich vielleicht überall das gleiche Passwort? Und wie lange ist der Hack schon her? Der Plattformbetreiber hat alle Passwörter gelöscht, bin ich nun sicher?

Die größte denkbare Falle ist es in solch' einem Moment, überall das gleiche Passwort zu verwenden. Bei den _geleakten_ Nutzerdaten stehen natürlich auch Emailadressen. Und schon ist man nicht mehr Herr seines Email-Accounts, den man womöglich bei Google, Yahoo oder gmx.net nutzt. Mal davon abgesehen, dass man nun in meinem Namen prima Spammails verschicken, oder alle in meinem Adressbuch mit Trojanern ausstatten kann, ist das Mailpostfach nun allzuoft Endpunkt für weitere Accounts, die man so betreibt. Einmal Passwort zurücksetzen bei Twitter, Facebook und vor allem Dropbox, dann hat der Angreifer praktisch die komplette Onlineexistenz in der Hand.

### Best practices

Überall das gleiche Login und Passwort zu verwenden, bringt einem auf der Sicherheitsskala von null bis 100 also heutzutage eine glatte Null ein. Auch wenn das Passwort so ungeheuer sophisticated wie „L3tm3in” ist. Schlimmer sind eigentlich nur noch Standarddummheiten wie „12345”. Da kann man halt auch gleich seinen Zugang in der Stadt verteilen (und im dunkelsten Viertel damit anfangen). Natürlich gibt es auch Mittel und Wege, seinen Sicherheitslevel zu steigern. Blöderweise scheinen die aber niemanden zu interessieren. Wenn es selbst internetaffine Nutzer, die eigene Server betreiben und darauf ein eigenes Weblog, [offensichtlich nicht auf die Reihe bekommen](http://blog.wpde.org/2013/05/30/sicherheit-wordpress-benutzer-passwort.html), ihre Installationen gegen Eindringen wenigstens standardmäßig abzusichern, dann ist sicher noch viel Aufklärungsarbeit zu leisten.

Zumal die meisten Maßnahmen mit denen man sein Netzleben mehr absichern kann, nicht unbedingt immer sehr komfortabel oder leicht verständlich sind. Oder immer leicht umzusetzen. Man sollte **Two-Step-Verification** nutzen und zwar überall wo es geht (Dropbox, Google, Microsoft, Facebook, seit neuestem auch [Evernote](http://blog.evernote.com/blog/2013/05/30/evernotes-three-new-security-features/) und viele mehr). Bei dieser Anmeldemethode, muss man—neben Username und Passwort—zusätzlich einen sechsstelligen Zahlencode eingeben, den man entweder per SMS zugeschickt bekommt, oder sich von einer App wie bspw. Google Authenticator ([Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2), [iOS](https://itunes.apple.com/app/google-authenticator/id388497605?mt=8)) generieren lässt. Man kommt also nur noch in seinen Account, wenn man im Besitz des Passworts und des zum Account gehörenden Mobiltelefons ist. Klar, auch das ist 100%ig narrensicher, aber doch ziemlich. In dieser Liste fehlen derzeit Twitter und Apple. Während der Kurznachrichtendienst mit seiner kürzlich eingeführten Lösung [eher unangenehm auffällt](http://nicobruenjes.de/2013/05/twitter-sicherheit/), schützt die Two-Step-Verification bei iCloud zwar den Login (und so bspw. die Kreditkartendaten), [leider aber nicht die Daten selbst](http://arstechnica.com/security/2013/05/icloud-users-take-note-apple-two-step-protection-wont-protect-your-data/). Das muss man zumindest wissen.

Ansonsten: **Accounts kündigen** ist eine einfache Methode, sich sicherer zu fühlen und nachweislich auch zu sein. Als _early adopter_ hat man natürlich bei jedem Popeldienst, der mal kurzzeitig hochgeschrieben wurde einen Zugang. Vielleicht kann man da ein paar aussortieren? So 90%? Weg damit.[^1] Ebenso ist es eine gute Idee, nicht auf Links in Mails denen man nicht traut, zu klicken. Wenn mir PayPal etwas zu zeigen hat, kann ich das bestimmt auch finden, wenn ich die Seite über mein Bookmark anstatt über den Link der halb deutsch, halb russisch formulierten Mail zu klicken. Allerdings: auch die Zeiten, in denen man Phishingmails an den Schreibfehlern und Fehlübersetzungen erkennen konnte, [sind leider vorbei](http://www.heise.de/newsticker/meldung/Phishing-und-verseuchter-Spam-Betrug-fast-ohne-Makel-1874291.html). Und das gibt einem dann schon wieder schwer zu denken. Wie sicher ist das mit dem Bezahlen denn eigentlich noch…


[^1]: Dass _sich_ abmelden bei einigen Diensten gar nicht so einfach ist, steht auf einem anderen Blatt.
