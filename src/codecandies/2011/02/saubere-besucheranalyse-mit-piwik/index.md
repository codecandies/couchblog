---
title: "Saubere Besucheranalyse mit Piwik"
date: "2011-02-09"
tags:
  - "Gecodet"
  - "Gebloggt"
keywords:
  - "Datenschutz"
  - "Wordpress"
  - "Piwik"
---

Seit einigen Wochen hört man verstärkt, dass das Wordpress-Statistik-Plugin zu fremden Webservern, also noch zu anderen als Wordpress.com _telefoniert_ ([Perun](http://www.perun.net/2011/02/02/wordpress-com-stats-telefoniert-mit-dritten/), [Wordpress.org Thread](http://wordpress.org/support/topic/plugin-wordpresscom-stats-quantserve-code-in-stats-javascript)). Da mir das nicht passte, habe ich die Statistiken am 20. Januar abgeschaltet.

Vor längerer Zeit schon, am 25.11.2009 (hab's gerade nachgeschaut), habe ich aufgehört mit Google Analytics Daten sammeln zu lassen. Damals kochte eine Diskussion über die Rechtmäßigkeit der Analyticsnutzung und ich bin der Ansicht: dies ist eine private Seite, da brauche ich solche juristischen Probleme (und sind sie noch so unwirklich) nicht hereinzulassen.

Keine Zahlen sind aber auch keine Lösung, jedenfalls nicht, wenn man wissen will, was auf dem eigenen Blog so abgeht, oder eben auch nicht. In letzter Zeit eher nicht. Trotzdem. Deswegen habe ich nun [Piwik](http://piwik.org/) auf meinem Webspace installiert. Diese sehr ansehnliche Open-Source-Software macht im Grunde alles, was Google Analytics auch macht, nur mit einem sehr großen Unterschied: es ist nicht Google, sondern es ist (in diesem Fall) Codecandies. Und – nach Aktivierung des entsprechenden Piwik-Plugins – anonymisiert es außerdem die gesammelten IP-Adressen, diese landen also nicht in der Datenbank. Damit sehe ich zwei Hauptforderungen der Datenschützer erfüllt: keine Verbringung der Daten nach USA (dafür sind weiter eure Banken zuständig) bzw. anderes Ausland und Speicherung nur in anonymisierter Form.

Die Installation von Piwik geht leicht von der Hand, die Einbindung des Trackingcodes in das footer-Template war natürlich auch unproblematisch. Der Pagespeed leidet natürlich ein wenig, vor allem im Vergleich zur trackerfreien Zeit. Dafür sind die Statistiken von Piwik nicht nur tres chic, sondern die Software lässt sich mit diversen Plugins noch erweitern (im Prinzip genau wie bei Wordpress). Apropos Wordpress: es gibt auch ein [Wordpress-Plugin](http://wordpress.org/extend/plugins/wp-piwik/), dass die Daten im WP-Dashboard anzeigt. Habe ich aber noch nicht getestet. Wie performant Piwik ist, kann ich jetzt noch nicht sagen, ich glaube aber kaum, dass Codecandies soviel Traffic verursacht, dass Piwik oder der Server von _Domainfactory_ an seine Leistungsgrenze gerät. Da aber Webseitenstatistik definitiv eine rechenintensive Angelegenheit ist, kann das für größere Webseiten durchaus ein Problem werden.

Damit bin ich dem Ziel, meine Website in einer Welt der Ads, Like-Buttons und Umfrage-Popups, gegen den Trend datensicher zu machen, ein wenig näher gekommen. Da sind aber noch dunkle Flecken auf der immer weißeren Weste: die drei _Bettelbuttons_ unter jedem Artikel sind natürlich auch kleine Datenkraken. Die werden bei nächster Gelegenheit ausgetauscht. Dann werde ich nochmal eine up-to-date _privacy policy_ erstellen und dort auch das Opt-out des Piwik-Statistiktools einbauen.
