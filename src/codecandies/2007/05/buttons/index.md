---
title: "Buttons!"
date: "2007-05-23"
tags:
  - "Gestaltet"
keywords:
  - "HTML"
  - "Usability"
---

Beim Roger in Schweden geht es gerade um den [perfekten Linkbutton mit CSS](http://www.456bereastreet.com/archive/200705/creating_bulletproof_graphic_link_buttons_with_css/ "Creating bulletproof graphic link buttons with CSS"), ein Thema, das einen wahrlich stundenlang aufhalten kann und bei dem man nie wirklich zum Ende kommt. Rogers Linkbuttons sollen: »automatische horizontal wachsen um beliebige Textmengen aufzunehmen; vertikal und horizontal wachsen, wenn der Text in der Schriftgröße wächst oder mehrere Zeilen hat; sein “Design” innerhalb sinnvoller Grenzen beibehalten; runde oder andere Ecken darstellen können; komplett klickbar sein und lesbar sein, wenn Bilder deaktiviert sind«. Das klingt nach einer unlösbaren Aufgabe eigentlich, denn das »sind ja gleich sechs Wünsche auf einmal«.

Tatsächlich ist das, was Roger dann dort [gebaut hat](http://www.456bereastreet.com/lab/bulletproof-shrinkwrapping-buttons/ "Demo-Seite") ziemlich viel HTML- und CSS-Code: aber es funktioniert. Aber: es ist einfach unglaublch, was man anstellen muss, um in HTML/CSS vernünftige, ansprechende Buttons zu gestalten. Das zeigte bspw. auch gestern [Particletree mit »Rediscovering the button element«](http://www.particletree.com/features/rediscovering-the-button-element/ "Rediscovering the button element"). Linkbuttons, Inputs vom Typ "submit", `<button></button>`\-Konstrukte, es ist schier unmöglich auf allen Browsern identisch aussehende Buttons hinzubekommen, _ohne ganze Buchkapitel in CSS zu schreiben, komplizierten und völlig unlesbaren HTML-Code zu produzieren – der noch dazu aussieht, als wenn man nur `<tr>` und `<td>` durch `<div>` oder `<span>` ersetzt hätte, und/oder und überhaupt Javascript zum Verschicken von Formularen einzusetzen._ Regt mich das auf. Ach ja und sobald man dann beim Datei-Upload angekommen ist, geht sowieso alles Styling den Bach runter.

Herr Nielsen wird schreien: »das ist genau richtig so!«, denn die Bedienelemente des Browsers sollen so aussehen, wie die Bedienelemente des Betriebssystems bzw. des Webbrowsers selbst und hat eigentlich recht, nur dann besteht unsere Welt fürdahin nur aus Buttons mit den den Aufschriften »OK« und »Cancel«, vielmehr ist da nicht drin. Und was den Usability-Gurus gefallen mag, hassen die Designer und ihre Chefs. Selbst wenn man dem Webdesigner beibigen kann, das ein Button nunmal aussieht wie ein Button, spätestens drei Stunden nach dem Launch ruft der aufgeregt Chef an: »Sagen Sie mal, bei meinem Internet Explorer 5 auf Windows 98 sehen unsere Formulare aber ganz seltsam aus: DA MÜSSEN SIE ABER NOCHMAL RAN!«.

Ich fordere deshalb: …ja, was fordere ich eigentlich? Und von wem? Ach ja: liebe HTML Working Group, liebe Browserhersteller, wir brauchen _zusätzlich_ zu den schon bekannten Inputs ein weitgehend gestaltbares und von allen Browsern unterstütztes (Link-)Button-Element. Also `<button />`, nur in allen Browsern funktional und mit zusätzlich der Möglichkeit, mit einem `<href>` einen Linkbutton daraus zu machen.
