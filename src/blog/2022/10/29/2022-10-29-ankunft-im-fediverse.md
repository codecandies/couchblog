---
title: "Ankunft im Fediverse"
date: "2022-10-29T20:48:00+02:00"
tags:
  - "Generde"
keywords:
  - "Fediverse"
  - "Mastodon"
  - "Twitter"
---

Wer wie ich aktuell von Twitter zu Mastodon gewechselt ist, oder sich darüber Gedanken macht, tut gut daran, sich mit den Unterschieden zwischen beidem zu beschäftigen. Nicht, dass nicht korrigierbare Fehler drohen, oder extensives Erwartungsmanagement nötig wäre, aber die Unterschiede sind doch so groß, dass so ein
leichtes Noob-Gefühl bei den ersten Gehversuchen im Fediverse aufkommen. 

## Fediverse?
Fediverse, die mittelmäßig nerdige Abkürzung für „federated universe“, „bezeichnet ein Netzwerk föderierter, voneinander unabhängiger sozialer Netzwerke, Microblogging-Dienste und Webseiten für Online-Publikation oder Daten-Hosting“[^1]. Mastodon ist wahrscheinlich noch der prominenteste Name dort, es gibt aber noch einige andere interessante Dienste dort. Wichtig ist: diese Dienste funktionieren dezentral, Nutzer\*innen können mit einem Account über das Netzwerk miteinander kommunizieren, die Dienste funktionieren auf Basis freier Software und freier Schnittstellen. Nach dieser Maßgabe gibt es Microblogging-Dienste (wie Mastodon), aber auch Dienste, die sich mit Facebook, YouTube oder Reddit vergleichen lassen. Am besten wird das erklärt [in diesem Buch](https://shop.digitalcourage.de/kurzmuendig-fediverse.html) (das auch frei als PDF erhältlich ist).

## Mastodon, aber welches?
Wer auf der Suche nach einer Twitter-Alternative etwas googlet, wird wahrscheinlich bei Mastodon landen. Und dann relativ schnell feststellen, dass dies kein einheitlicher Dienst wie Twitter ist, sondern dass das Mastodon-Netzwerk aus vielen verschiedenen Instanzen genannten Servern bestehen, die alle unterschiedliche Betreiber, mitunter unterschiedliche Themen und zum Teil auch sehr unterschiedliche Regeln für das Zusammenleben ihrer Benutzer\*innen haben. 

Sich einfach so [bei Mastodon anmelden](https://joinmastodon.org/de/servers) geht also schon mal nicht. Es gibt tatsächlich sehr unterschiedliche Instanzen und nicht auf allen ist eine direkte Anmeldung möglich. Vor allem zur Zeit, wo viele Menschen von Twitter nach Mastodon streben, setzen einige darauf, den Zustrom zu kontrollieren, bspw. durch das voraussetzen einer Einladung. So läuft es gerade bei [chaos.social](https://chaos.social/about). Bei wieder anderen wird ein monatlicher Mitgliedsbeitrag zur Sicherstellung des Serverbetriebs erhoben, so zum Beispiel bei [digitalcourage.social](https://digitalcourage.social/about/more). Wieder andere hadern gerade stark mit dem eigenen Erfolg, wie [det.social](https://det.social/about). „Det“ ist das Mainzelmännchen mit der Brille und der Server wird von Jan Böhmermann „Unterhaltungsfernsehen Ehrenfeld“ betrieben. Dort melden sich zur Zeit (dank Werbung durch Böhmermann himself) so viele Leute an, dass die Admins mit dem verschicken der Bestätigungsmails nicht mehr hinterherkommen. Aber Böhmermann scheint es durchaus ernst zu meinen, die Firma sucht bereits nach Admins in Festanstellung.

Es macht Sinn, bei der Auswahl seiner Instanz Sorgfalt walten zu lassen, die Leute auf diesem Server sind in Zukunft sozusagen die direkten Nachbarn. So gibt es als themenspezifische Communities, aber auch Server die sich an die Bewohner bestimmter Landesteile oder Städte wenden. Eine [Liste mit deutschsprachigen Instanzen](https://instances.social/list#lang=de) findet sich hier. Auf der gleichen Seite findet sich auch eine [Entscheidungshilfe für die richtige Instanz](https://instances.social/). 

Und wer bei der Auswahl nicht fündig wird (oder so ungeduldig ist wie ich), der mag sich bei [mastodon.social](https://mastodon.social/explore) registrieren. Das ist nicht nur der größte Server zur Zeit, mit rund 79.000 aktiven Nutzern, sondern er wird auch von Eugen Rochko betrieben, dem Erfinder von Mastodon. Es sei allerdings angemerkt, dass es gerade nicht die Idee des Fediverse und auch nicht Mastodons ist, dass sich alle an der gleichen Instanz anmelden.

## Ich bin drin, was nun?
Startpunkt sollte der Einfachheit halber die Desktopseite der gewählten Instanz sein, wo es sich ein wenig einzurichten gilt. Das Profil sollte gewissenhaft ausgefüllt werden, neben einem Beschreibungstext und einem Profilbild gehören dazu auch Links zu anderen Orten im Netz, die zu einem gehören, bspw. dem eigenen Blog. Als Besitzer\*in einer solchen Website, besteht die Möglichkeit sich bzw. die Website, [gegenüber Mastodon zu verifizieren](https://kaffeeringe.de/2022/10/28/wie-verifiziere-ich-meinen-account/).

Wer sich mit Twitter auskennt, dem wird die Ansicht auf der Mastodon-Seite nicht fremd sein. Mit der Einstellung "fortgeschrittene Benutzeroberfläche" erinnert das UI dann ein wenig an Tweetdeck, wem das noch ein Begriff ist. Damit nun auf der neuen Startseite auch etwas passiert, muss anderen Accounts gefolgt werden. Diese finden sich auf der eigenen Instanz beispielsweise in der lokalen Timeline. In der sogenannten föderierten Zeitleiste erscheinen die „Toots“ (englisch) oder „Tröts“ (deutsch) der anderen Instanzen, sofern sie mit der eigenen Instanz verbunden sind. _Das_ muss nicht als gegeben hingenommen werden, der dezentrale Aufbau ermöglicht die Bildung von Unterföderationen, aber auch, das Instanzen sich gegenseitig komplett blocken, bspw. wenn das Regelwerk der einen Instanz dem der anderen komplett widerspricht. Ein deutlicher Unterschied zu Twitter.

Die Zeitleisten unterscheiden sich von Twitter (in der Standardeinstellung) auch dadurch, dass sie immer in chronologischer Reihenfolge geführt werden. Es gibt keinen Algorithmus, der einem veraltete, fremde oder gesponserte Nachrichten in den Feed spült. Aus diesem Grunde sind „Likes“ auch keine Ware auf Mastodon, weil sie nicht zum Verbreiten von Toots beitragen. Stattdessen muss ein Toot geboostert werden, wie das Pendant zum Retweeten heisst, um ihn in der eigenen Timeline bekannt zu machen. Was es wiederum nicht gibt, sind _quote-toots_.

> I've made a deliberate choice against a quoting feature because it inevitably adds toxicity to people's behaviours. You are tempted to quote when you should be replying, and so you speak at your audience instead of with the person you are talking to. It becomes performative. Even when doing it for "good" like ridiculing awful comments, you are giving awful comments more eyeballs that way. No quote toots. 
> — [Eugen Rochko](https://mastodon.social/@Gargron/99662106175542726)

Accounts folgen geht dabei im Fediverse viel leichter von der Hand, als auf Twitter. Es gibt keine Zurückfolgen-Ansprüche und die Followerzahlen werden in der Regel nicht als Maßstab für irgendetwas herangezogen. Gefällt der Content, wird ein Toot geboostet, noch kurz ins Profil schauen und dann erstmal gefolgt!

## Mastodon mobile
Die Website lässt sich durchaus auch vom Smartphone aus gut bedienen, vor allem, weil es eine _progressive webapp_ ist, die auch installiert werden kann. Es gibt aber auch eine native mobile Mastodon-App ([iOS](https://apps.apple.com/de/app/mastodon/id1571998974)/[Android](https://play.google.com/store/apps/details?id=org.joinmastodon.android&hl=de&gl=US)), die auch für Tablets funktioniert. Sie ist im Moment wohl am verbreitsten, obwohl es noch massenhaft weitere Apps, zumindest für iOS gibt. Ausprobiert habe ich noch [Metatext](https://apps.apple.com/de/app/metatext/id1523996615?l=en), bei der mir das UI etwas besser gefällt, als in der Original-App. Funktional kann ich aber kaum Unterschiede feststellen.

## Ganz anders als Twitter
Das sind so die ersten Erfahrungen, die ich auf Mastodon gemacht habe. Und Tipps, die ich dort in den ersten Stunden gelesen habe. Tatsächlich habe ich das Gefühl, dort ganz gut angekommen zu sein. Es ist völlig anders als Twitter, vielleicht wie in der Anfangszeit dort, aber mit ein paar _checks & balances_, damit es so bleibt, auch wenn jetzt immer mehr Menschen von Twitter hier herüber diffundieren. Dass dem so ist, ist an den Nutzungszahlen abzulesen und daran, dass hier und da Schwierigkeiten und Engpässe auftreten oder kleine Aussetzer passieren. Und das ist dann das nächste, was wir tun können, wenn wir uns eingelebt haben: bei der eigenen Instanz mal nach einem Spenden- oder Bezahlbutton suchen, denn so ein Server und die Bandbreite finanzieren sich ja meist auch nicht von selbst.

[^1]:	[Wikipedia](https://de.wikipedia.org/wiki/Fediverse)
