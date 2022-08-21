---
title: "Die kritische Masse"
date: "2008-02-04"
tags:
  - "Generde"
keywords:
  - "Social Media"
  - "Web Zwo Null"
---

Der nächste Paukenschlag für das _Web 2.0_ kommt mal wieder von Google: das [Social Graph API](http://code.google.com/apis/socialgraph/) ([Docs](http://code.google.com/apis/socialgraph/docs/) | [API Docs](http://code.google.com/apis/socialgraph/docs/api.html)). Während anderenorts am Problem der Interoperablität noch herumgedacht wird, stellt Google schoneinmal sein Wissen über die Verknüpfungen von Webadressen zur Verfügung. So können auf einfachem Wege in Zukunft Daten aus sozialen Netzen miteinander verknüpft werden. [Hier die Beispielanwendungen](http://code.google.com/apis/socialgraph/docs/examples.html).

Wie muss man sich das vorstellen? Nun, nehmen wir an, man melde sich in der [Kommentar-Community der Zeit](http://kommentare.zeit.de) an: dort muss man, wie bei so vielen Netzangeboten sein Profil anlegen, pflegen, etc. Über das Social-Graph-API könnten wir nun, in Zukunft, eine Anwendung programmieren, die viele der Daten, die dort eingegeben werden sollen, versucht selbst herauszufinden, an Hand des _Social Graphs_, also derjenigen Informationen, die bereits im Netz öffentlich zugänglich sind. Man könnte bspw. relativ schnell nach Eingabe einer URL, die verknüpften Seiten finden (bspw. die Profile bei Social Networking Sites) und zur Auswahl anbieten. Wir schicken die Informationen des Registrierwilligen einfach ans API und das liefert uns die nötigen Informationen zurück. Hier ein [Beispiel](http://socialgraph-resources.googlecode.com/svn/trunk/samples/findyours.html?q=http%3A%2F%2Fcodecandies.de).

Spätestens jetzt sollte den ersten Leuten mulmig werden: denn damit ist der Schritt zur weltweiten Web 2.0-Profildatenbank irgendwie schon getan, was früher aufwendig in Google zusammengetragen werden musste, ist praktisch nur noch einen Klick entfernt (ein echter Journalistensatz, oder? Ihr dürft ihn abschreiben liebe Kollegen). Natürlich benutzt Google zur Informationsbschaffung nur die öffentlich zugänglichen Daten, die es sowieso schon gesammelt hat, aber wie man weiss: ein Dossier ist weit explosiver, als verstreute Daten. Und außerdem, viele Menschen sind sich nicht bewusst, dass ihre Daten gefunden werden können – immer noch nicht!

Zurück zum Anwendungsbeispiel: das Social-Graph-API kennt nicht nur Verknüpfungen zu eigenen Seiten (zweiseitige Verlinkung), sondern auch einseitige Verlinkungen. Das sind Seiten, die per FOAF\- und XFN\-Daten angeben, mit mir in Beziehung zu stehen. [Beispiel](http://socialgraph-resources.googlecode.com/svn/trunk/samples/findcontacts.html?q=http%3A%2F%2Fcodecandies.de). Da steckt Nutzen drin: Wir könnten dem neuen User der Kommentarcommunity also gleich sagen: »Folgende Deiner Freunde sind schon Mitglied in der Community… Hinzufügen?«, wenn er uns seine Profilseiten bekanntgegeben hat, oder das API sie für uns gefunden hat.

Und damit ist die Killer-Applikation perfekt (Moment, da klingelt schon das Telefon…) und einige andere Projekte stehen im Hemd da. Denn überall wo man zentrale Profile anlegen wollte, sieht man sich nun der scheinbar dezentralen und einfachen Version der _Krake_ Google gegenüber. Und wer dafür sorgen wollte, dass die User im Web 2.0 selbst Herr über ihre Daten sein können, hat einen schweren Rückschlag erlitten: denn ein Google-API zu schlagen ist nicht einfach. Und da das API auf FOAF und XFN basiert, kann der User dann doch noch selbst in den Prozeß eingreifen: er kann per Verlinkung sagen: ja, **das ist mein** Technorati-Profil, einfach per Link mit `rel="me"` oder im [FOAF-File](http://www.ldodds.com/foaf/foaf-a-matic.html).

Googles Lösung steht jetzt zur Verfügung, die Social Networking Sites müssen praktisch nichts tun, damit sie funktioniert. Und [Tim O'Reilly gerät endgültig aus dem Häuschen](http://radar.oreilly.com/archives/2008/02/google_social_graph_api.html): »I can't wait to see what comes next!«
