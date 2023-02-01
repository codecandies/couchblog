---
title: "Pie? Kuchen?"
date: "2003-06-24"
tags:
  - "Gebloggt"
---

Ob nun RSS oder RSS, die so ähnlichen Akronyme lassen sich nur an den unterschiedlichen Versionsnummern unterscheiden (0.9\* und 1.0 gegen 2.0) und auch dann erschließt sich dem nicht in XML denkenden Blogger nicht wirklich, welche Streitigkeiten und Animositäten da von der anderen Seite des großen Teiches zu uns herüberschwappen. Von außen betrachtet fällt einem unweigerlich ein, daß wohl die einen oder die anderen eh bloß »Spalter« im Sinne des Brian sind.

> _Brian:_ »Look. You’ve got it all wrong. You don’t need to follow me. You don’t need to follow anybody! You’ve got to think for yourselves. You’re all individuals!«
> _Followers:_ »Yes, we’re all individuals!«
> _Brian:_ »You’re all different!«
> _Followers:_ »Yes, we are all different!«
> _Dennis:_ »I’m not.«
> [The Life Of Brian](http://www.imdb.com/Title?Life+of+Brian+(1979) "imdb: The Life Of Brian")

Tatsächlich ist der Streit der Formate, ob nun RDF oder nicht, ob nun Datumsformate nach Dublin Core (dc:date) oder nach RFC\-822 und so weiter, wohl auf einem neuen Höhepunkt angekommen (zu Datumsformaten sehr ausführlich: [Mark Pilgrim](http://diveintomark.org/archives/2003/06/21/history_of_rss_date_formats.html)). Statt das man zusammen arbeitet, oder zumindest den jeweiligen Vertreter der »anderen Seite« in Ruhe gewähren läßt, schlagen die Wellen hoch. Über Dave Winers Bemerkungen, diverse Feeds (z.B. auch die von Movable Type standardmäßig erzeugten) seien »funky« hatte ich ja schoneinmal kurz [berichtet](http://www.couchblog.de/couchblog/archives/2003/06/funky_rss.php), diese Diskussion jedenfalls scheint das Faß nun zum überlaufen gebracht zu haben. Und während sich in diversen Blogs und Mailinglisten noch lauthals um die »funkyness« von Feeds gestritten wird (nur zur Visualisierung: [Don Park: Funkyness Illustrated](http://www.docuverse.com/blog/donpark/2003/06/23.html#a615)), wie vor den Toren der bestreikten Betriebe im Osten Deutschlands wenn die Streikbrecher einfahren, hat sich eine Schar doch recht prominenter Blogger und Programmierer nun auf gemacht, einfach etwas ganz neues anzufangen, ein völlig neues Format zur »Blogsyndikation« zu entwickeln.

[Tim Bray](http://www.tbray.org/ongoing/When/200x/2003/06/23/SamsPie) schreibt:

> Too many versions, you say. Well, why don’t we get together and agree on how to merge them? Except for, the interested parties have a track record of inability to get along and work things out and make progress. To the extent that in some circles »RSS« has become a synonym for »Reliably Spiteful Squabbling.« Kofi Annan and the Dalai Lama might be able to achieve consensus, particularly if they could get Don Rumsfeld to credibly threaten peacemaking backup with the 3rd infantry, but life’s too short, I’m tired of it, unless we can get consensus without further argument by this time next week, it may be more cost-effective to start over.

Beginnend mit bzw. ausgehend von der Diskussion um die »Anatomie eines Weblogeintrags« ([Sam Ruby: The Conceptual Model of a Log Entry](http://www.intertwingly.net/wiki/pie/FrontPage)) geht man nun wohl dazu über ein völlig neues Format zu entwerfen und zwar ganz von vorne oder eben _»from the scratch«_. Die Liste der Leute, die sich beteiligen wollen oder die Anstrengungen unterstützen wollen ist lang und voller »wohlklingender« Namen (es ist sogar jemand aus Deutschland dabei, nämlich [Georg Bauer](http://pyds.muensterland.org/weblog/2003/06/24.html#P131)). Derzeitiger Arbeitstitel des Projektes ist »Pie« (ausnahmsweise mal kein Akronym) und es wird wohl wesentlich mehr hergeben, als ein »simples« Syndikationsformat, wie die [Roadmap](http://www.intertwingly.net/wiki/pie/RoadMap) eindeutig ausweist:

- Decide on the conceptual model of a log entry.
- Decide on a syntax for this model.
- Build a syndication format using this syntax.
- Build an archiving format using this syntax.
- Build a weblog editing protocol using this syntax

Natürlich will man aus »Fehlern« (sicherheitshalber mal in Anführungszeichen) lernen und dem neuen Format von Anfang an ein vernünftiges Fundament mitgeben, indem folgende Vorraussetzungen formuliert wurden: es soll 100% herstellerunabhängig sein, von allen implementiert werden (Blogsoftware, Readersoftware etc.), für jeden frei erweiterbar sein und sauber und gründlich spezifiziert werden. Und der lange Weg zur Standardzertifizierung wird wohl auch eingeschlagen werden.

Es kommt also etwas sehr interessantes auf die bloggende Welt zu, wahrscheinlich mehr als der Ende des Streits um RSS oder RSS. Hinreißend offensichtlich, so liest man bei [Stefan Smalla](http://www.smalla.net/infofeed/2003/06/24/watching_a_new_technology_standard_emerg.shtml):

> I certainly try not to be over-enthusiastic about the revolutionary aspect of weblogs especially not on my own weblog, but it is very clear by now that weblogs are there to stay, have a growing importance both in business and with individuals, have backing by some serious people and corporations, and bring about new related applications and technologies (RSS being the most important and promising ones) that are truly going to have a serious impact in the very near future. And, even if coming in danger of sounding just too enthusiastic here: yes, it has just started.

Wow. Dann fällt die Steinigung ja vielleicht doch aus.

> Stop! Stop, will you?! Stop that! Stop it! Now, look! No one is to stone anyone until I blow this whistle! Do you understand?! Even, and I want to make this absolutely clear, even if they do say ‘Jehovah’.
> [The Life Of Brian](http://www.imdb.com/Title?Life+of+Brian+(1979) "imdb: The Life Of Brian")

**Update:** Seems like the name is going to be [Echo](http://www.intertwingly.net/wiki/pie/NameIt)…
