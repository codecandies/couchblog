---
title: "Javascript on-demand, please"
date: "2007-02-01"
keywords:
  - "Javascript"
tags:
  - "Gecodet"
---

Eine der Königsdisziplinen beim »Ajaxifizieren« (grin!) einer Webseite ist es sicherlich, [Javascript-Code nach dem Laden der Seite vom Server zu holen und auszuführen](http://ajaxpatterns.org/On-Demand_Javascript). Möglich ist dies beispielsweise via XHR: so macht es das _Package Load System_ des Dojo Toolkits.

Auf [Ajaxian](http://ajaxian.com/archives/evaling-with-ies-windowexecscript) kann man sich gerade ansehen, wie das funktioniert. Der auszuführende Code wird per XHR am Server abgeholt und per `eval()` zur Ausführung gebracht. Dabei lauern allerdings ein paar Fallstricke. Zunächst einmal sei darauf hingewiesen, dass `eval()` eine nicht ganz ungefährliche Funktion ist, denn was dort hineingepackt wird, **wird auf dem Client ausgeführt**, ist also so, als wenn man es selbst direkt in den Code geschrieben hätte. Um dabei kein Sicherheitsrisiko entstehen zu lassen, muss man sicher stellen, dass alles was an der `eval`\-Methode ankommt, vertrauenswürdig ist.

Die restlichen Probleme die auftreten, liegen in der unterschiedlichen Art, wie verschiedene Browser `eval()` umsetzen. Firefox seht `eval()` als Methode von `Object`, IE sieht das natürlich anders. Ausserdem muss man den evaluierten Code schon `global` zur Verfügung stellen, denn sonst kann man ja später da nur noch schlecht drauf zugreifen. In Dojo wird dies mit eine globalen Variable `dj_global` relalisiert, IE kennt eine eigene Funktion `execScript`, die Code direkt in das `window`\-Objekt evaluiert.

All das zusammen sieht dann so aus (übersetztes Beispiel von Ajaxian):

[Beispiel entfernt.]

Das ist natürlich stark vereinfacht (der XHR selbst und seine Absicherung fehlen bspw.), aber so ungefähr kann das gehen. Anstatt wie Dojo eine eigene global Variable zu nutzen, kann man auch direkt das `window`-Objekt benutzen, also `return window.eval ? window.eval(code) : eval(code)`.
