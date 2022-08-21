---
title: "Dojo 1.0 Ausblicke"
date: "2007-02-16"
keywords:
  - "Development"
  - "Javascript"
  - "Programmierung"
tags:
  - "Gecodet"
---

Im [dojo.foo](http://blog.dojotoolkit.org/) ist aktuell der neueste _Release Candidate_ für Dojo 0.4.2 [angekündigt](http://blog.dojotoolkit.org/2007/02/15/dojo-042-and-beyond). Viel wichtiger dort ist aber der Ausblick auf die kommenden Releases, inklusive Dojo 1.0, das noch dieses Jahr erscheinen soll.

Die 0.4.2-Version von Dojo soll vor allem Fehler der 0.4.1 beheben und enthält in diesem Sinne keine neuen Features, sie wird in zwei Wochen verfügbar sein. Allerdings wurde kräftig am _Dojo Build System_ geschraubt – ein Feature, das leider viel zu wenig genutzt wird und nun vielleicht zu seiner verdienten Ehre kommt:

> While 0.4.2 doesn’t include new features, the build system has changed significantly thanks to the hard work of James Burke from AOL. It now supports cross-domain builds even better and a new sub-domain, build.dojotoolkit.org, has been setup to support a [brand-new web-based build tool.](http://build.dojotoolkit.org/0.4.2rc1/web/buildscripts/webbuild/)

Viel neues wird es dann aber bis zur Version 1.0 geben, die für den Spätsommer/Herbst 2007 angekündigt ist und der wohl nur noch ein 0.9-Ast vorhergehen wird.

> we will be splitting the project up into 3 separate but coordinated efforts: dojo core, dijit, and dojox. Lastly, it was decided that a major backwards incompatible jump will be made for the next major release of Dojo. To date, we have always attempted to provide at least one full point revision’s warning regarding APIs that were changing or being removed. This policy has allowed attentive users to easily stay abreast of porting their applications between Dojo versions but it has also contributed significant cruft to the core of the toolkit. This cruft will be removed wholesale in the next major revision, Dojo 0.9. No in-code deprecation warnings will be provided. Instead, a full and complete porting guide for 0.4.x users will be created. The extent of the planned changes make back-compat shims unrealistic.

Kenner der Dojo-Dokumentationsbemühungen (sic!) werden spätestens an dieser Stelle die Augen verdrehen: es soll komplette verschriftlichte Richtlinien für das Portieren von Dojo 0.4.x nach 0.9 geben… na hoffentlich. Die (nicht nur hier immer wieder aufgebrachte) ewige Kritik an der Dojo-Dokumentation scheint bei den _Dojos_ zumindest angekommen sein. Denn die oben erwähnte Aufteilung in drei Projekte – dojo.core, dijit (die Widget-Engine) und dojox – zielt u.a. deutlich daruaf ab, bereits gut dokumentierte und gleichzeitig stabile Bereiche von den Spielwiesen der Dojo-Contributoren zu trennen:

> All code in the core (and its widget-focused sister project, dijit) will be required to meet stringent quality, testing, and documentation standards. Most of the code currently in Dojo’s utility namespaces is being pored over and most will be either discarded outright or moved to dojox.\[...\]
>
> dojox will carry on Dojo’s strong tradition of invention. Many of the most important Dojo modules push the edges of what’s possible and have helped to bring the theoretical into the plausible over the last 2 years they will be allowed to thrive in dojox without the restrictions placed on core and Dijit code.

Das scheint mir der wirkliche Fortschritt zu sein, denn die Probleme, die man als Dojo-Benutzer haben kann rühren eben vor allem aus den genannte Punkten: mangelhafte Dokumentation und starkes Qualitätsgefälle zwischen einzelnen Komponenten von Dojo. Viele Dinge in Dojo funktionieren tatsächlich hervorragend, viele aber eben auch nicht. Man muss bis dato immer überprüfen, ob die Komponente, die man einsetzen will, dem Qualitätsversprechen des gesamten Dojo überhaupt entspricht. Dazu ist viel Testen von Einzelkomponenten von Nöten (oder so gute Javascriptkenntnisse, dass man Denkfehler anderer Programmierer schon beim schnellen Codelesen entdeckt – öhm… dann könnte man aber sicherlich auch selbst eine eigene Engine schreiben), was den Entwicklungsprozess stark verlangsamt. Der neue Ansatz scheint dem entgegen zu kommen, also besteht für Dojo wenigstens Hoffnung.
