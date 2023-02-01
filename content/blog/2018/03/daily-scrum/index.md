---
title: "Probleme mit dem Daily Scrum"
date: "2018-03-02"
tags:
  - "Generde"
keywords:
  - "Development"
  - "Murmeltier"
  - "Scrum"
  - "Webentwicklung"
coverImage: "groundhog.jpg"
---

Die Murmeltiere der Webentwicklung grüßen sich bekanntermaßen täglich, jedenfalls dort, wo _Projektverschleierungsreligiositäten_ wie Scrum betrieben werden, also quasi all over the world. Für den Scrum-Anfänger, den Stakeholder und den Vorgesetzten IRL ist das die Scrum-Komponente, die am einfachsten zu verstehen ist. Leider ist das meist ein Missverständnis auf breiter Front und gerade durch die tägliche Wiederholung, verfestigen sich Fehler, die sich einschleichen praktisch immer wieder neu.

## By the book

Im engere Sinne ist das sogenannte _Daily_ ein kurzes (auf hart 15 Minuten beschränktes) tägliches Meeting, währenddessen sich die Entwickler erzählen, wie ihr Stand gerade ist. Außer den Entwicklern nimmt ein Scrum-Master an dem Meeting teil, ebenfalls der Product Owner (PO) nach Möglichkeit. Protagonisten sind aber die Entwickler, die sich gegenseitig die Fragen beantworten, was sie gestern getan haben, was sie gedenken heute zu tun und was ihnen im Weg steht. An diese drei Fragen soll sich akribisch gehalten werden. Der PO besucht dieses Meeting, um selbst auf neuestem Stand zu bleiben, ggf. um Fragen zu beantworten, das aber allenfalls, wenn sie mit „ja“ oder „nein“ zu beantworten sind, längere Diskussion finden zwangsweise nach dem Meeting statt.

## What can possibly go wrong

Bei einem so einfachen und hart reglementierten Termin fragt man sich, was kann denn da noch schief gehen? Leider alles. Wie vieles in der Welt des Scrum funktioniert es möglicherweise nur, wenn man sich wirklich daran hält, in der richtigen, reinen, wahren Scrum-Umgebung. Also niemals. Abweichungen, die landläufig dauernd vorkommen („wir machen unser eigenes Scrum“), wie fehlender Scrum-Master, mehrere PO, nicht durchbrochene Command-and-Control-Muster führen sofort zu einer Schieflage und das Meeting erfüllt einerseits nicht seinen Zweck und wird andererseits schnell zur täglichen Qual.

### Organisationsprobleme

Oft wird ja schon der Sinn des Meetings von vorneherein falsch verstanden. Die Entwickler informieren sich gegenseitig, was sie gerade machen und zu machen planen, **nicht wie weit sie mit einer Story oder Aufgabe gerade sind**. Die Fragen wie lange etwas noch dauert oder wann etwas fertig ist gehören nicht ins Daily! Dass solche Fragen natürlich doch aufkommen, liegt mal an Command-and-Control-Strukturen, die die Einführung von Scrum überdauert haben, mal an fehlenden Rahmenbedingungen, die durch das Scrum eigentlich gesetzt sein sollten. Eine nicht besetzte Scrum-Master-Stelle bspw. deutet schon an, dass die Sache in die falsche Richtung zu laufen droht. Er wäre es, der ein Daily moderiert und aufkeimende Konflikte schlichtet. Fehlt er, muss entweder ein Teammitglied oder gar der PO die Moderation des Treffens übernehmen, ersteres mag noch irgendwie gehen, ein moderierender PO allerdings ist ein deutliches Zeichen für _scrumfuck_. Der PO hat in einem Daily qua Definition nur eine sehr passive Rolle, er soll sich lediglich selbst informieren. Und er tritt keinesfalls im Namen der Stakeholder auf und fragt, wie lange es noch dauert. _Never_.

### Inhaltliche Schwächen

Aber auch das Team kann ein Daily in die falsche Richtung führen. Nochmal, es geht ausschließlich um die drei Fragen:

\-  Was habe ich seit dem letzten Daily Scrum getan? -  Was plane ich, bis zum nächsten Daily Scrum zu tun? -  Was hat mich bei der Arbeit behindert?

Also darum, dass sich die Teammitglieder gegenseitig informieren, was gerade gemacht wird. Eben um es zu wissen, schon mal gehört zu haben, mitzubekommen, wenn Dinge möglicherweise drohen doppelt gemacht zu werden. Falsch wäre es, diese Gefahr dann aber zu diskutieren. Dafür muss man sich danach Zeit nehmen, mit den Leuten, die es betrifft, um nicht _alle_ weiter abzulenken. Es geht eben nicht darum festzustellen, an welchem Punkt der Story sich die Entwicklung gerade befindet. Nicht weil die Frage grundsätzlich nicht erlaubt wäre im Scrum, nur eben nicht in diesem Meeting. Abweichungen vom Ritual, bspw. statt die genannten Fragen zu klären, zu besprechen, wie der Stand einzelner Stories ist, ist schlicht ein Fehler. All diese Dinge lenken zu sehr vom Fokus, der thematischen Arbeit der Entwickler ab.

### Technische Probleme

Immer wieder hört man, dass Scrum über mehrere Standorte hinweg ein Problem ist, wird immer wieder betont. Genauso oft gibt es allerdings auch Teams, die behaupten, bei ihnen würde genau das funktionieren. Die Wahrheit mag hier in der Mitte liegen, sicher aber ist, dass örtliche Hürden zu technischen Hürden werden, die für Rituale wie das Daily ein Problem darstellen können. Wie schon betont, schauen sich die Entwickler während des Dailies an und berichten einander. Steht dem mangelhafte Video- und Tontechnik im Wege, nervt das nicht nur wie irre, sondern es geht auch sämtlicher Verve, den so ein Meeting möglicherweise haben könnte verloren und die Empathie der _teammates_ untereinander bleibt auf der Strecke. Kurz: die gewünschte Kommunikation lässt sich per Videoschalte sowieso schon schlecht transportieren, technische Probleme bringen das Fass regelmäßig zum Überlaufen.

Ebenso problematisch ist auch, wenn vom Ritual zeitlich abgewichen wird. Das Daily sollte immer zur selben Zeit sein und es sollten pünktlich alle da sein. Es soll Teams geben, die Strafen aussprechen (oder einkassieren) für Zu-Spät-Kommer. Nun gut… aber auch schon ein mehrminütiges „Könnt ihr uns verstehen“ am Meeting-Beginn setzt das falsche Setting und kann auf die Dauer ein Daily zerstören. Man darf halt nie vergessen: man macht das jeden verdammten Tag.

## Und nun?

Ich persönlich würde sagen: entweder man macht es richtig oder lässt es gleich ganz bleiben. Ohne das ich eine Alternative zur Hand hätte.

Der reinen Informationspflicht kann ein geübtes Team wahrscheinlich auch per Slack-Channel nachkommen, es gibt auch Slack-Bots, die die drei Fragen täglich bei den Entwicklern abfragen und dann das Gesamtergebnis allen präsentieren. Aber auch in diesem Setting kann man noch nicht den Scrum-Master durch den Bot ersetzen, da jemand darauf achten muss, dass nicht alle immer dasselbe schreiben. Ob eine Art „Slack-Daily“ einen zeitlichen Vorteil bietet, wage ich anzuzweifeln, die Konzentration auf die drei Fragen wäre allerdings gegeben. In Teams an verteilten Standorten könnte hier wirklich ein Gewinn lauern, vor allem, wenn es technische Probleme gibt, wie oben beschrieben. Empathie bringt das Ganze natürlich nicht.

Ganz darauf zu verzichten wäre sicherlich auch ein Weg, nur dann macht man eben kein Scrum. Davon mutiert man auch nicht gleich zum microgemangeten Wasserfall, schon klar, aber hiervon ausgehend kann man mal kontrollieren gehen, wie es im restlichen Scrum-Prozess so aussieht.
