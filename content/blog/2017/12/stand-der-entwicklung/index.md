---
title: "Stand der Entwicklung"
date: "2017-12-22"
tags:
  - "Gerante"
coverImage: "schleppie.jpg"
---

Mit viel Freude und etwas Verwunderung habe ich [diesen Rückblick auf die Webentwicklung 2017](https://levelup.gitconnected.com/a-recap-of-front-end-development-in-2017-7072ce99e727 "A recap of frontend development in 2017") gelesen. Eine gute Gelegenheit sich über die jüngeren Entwicklungen und die Zukunft ein wenig Gedanken zu machen. Ich kann schon mal sagen: Leute, das wird ja richtig scheiße.

2017 wird wohl als das Jahr in die Geschichte eingehen, in der Facebook auch die Webentwicklung übernommen hat. React und sein Ökosystem hat quasi alles assimiliert, was nicht bei drei auf dem Baum war. Das fasziniert mich ebenso wie jeden anderen interessierten Frontendler, schockiert mich aber auch im selben Maße. Denn obwohl React an vielen Stellen das richtige Tool am richtigen Ort sein kann, hat seine Popularität doch dafür gesorgt, dass es inzwischen für praktisch alles eingesetzt wird. Projektmanager und Produktentwickler beauftragen die Entwicklung von React-Apps ohne auch nur eine Ahnung vom _use case_ zu haben. Alles wird umgebogen und zu Recht gelogen, damit aus einer simplem Website eine React-App wird und auf dem Weg gehen _information architecture_, _findability_, Webstandards und Zugänglichkeit sterben. Das muss natürlich nicht so sein, wird es aber all zu oft werden, dieser Art _hype_ habe ich nun schon oft genug erlebt und leider auch mitgemacht.

Ich verstehe das gut. Wir Frontender wir wollen schließlich auch mal den Ton angeben. Wir sind ja auch irgendwo eingezwängt zwischen Managern, Stakeholdern und Backendern, die sich alle vorbehalten, dass man ihnen nicht ins Geschäft quatscht, während sie _natürlich_ eine sehr fundierte Meinung zum Thema Frontend haben. Da ist React **die Lösung**, das unentdeckte Land, wo Milch und Honig fliessen, und der Neffe vom Scheffe keinen Zutritt hat (HTML kann er aber immer noch besser als ihr, also der Neffe). Wie Kollege Ron eben sagt: „das Nerdfeeling der frühen Tage kehrt zurück“.

Ich beschwere mich kaum, dass die ganze Hemdsärmeligkeit der Gründerjahre einer gewissen Professionalität gewichen ist, im Gegenteil! Ich hoffe ich habe genau dazu etwas beigetragen. Nur habe ich zeitweise das Gefühl, alle würden mit einem irren Tempo am Ziel vorbei in den Zuschauerraum laufen. Hey, `ES6/7/next`, _call me names_, `Babel`, `webpack`, `parcel`, `node`, `npm`, nein `yarn`, nein `npm`… das Ecosystem ist nicht gewachsen, es ist explodiert. Und statt Wachstumsschmerzen haben wir Phantomschmerzen von den abgesprengten Gliedmaßen, wie beispielsweise `grunt`, das ja eigentlich noch ganz gut funktioniert, wie ich hier am Adventskalender erprobt habe. Selten habe Leute so schnell auf frische unerprobte Software wechseln sehen, wie im letzten Jahr. Und wie oft habe ich dabei uncool gewirkt, mit meiner Forderung nach einer abgehangenen Buildchain. Alter, let’s break it! So sitze ich nun hin und wieder stundenweise daran, meinen Zoo aus npm-Skripten und node\_modules zu debuggen, weil es ein Update in npm gab. Zugegeben, die Liveseite geht in dieser Zeit nicht kaputt… aber falls dort schon etwas kaputt ist, kann es gerade niemand reparieren.

> The CSS battle rages as we figure out the best way to handle styles in component-based applications.

2018 steht die Klärung der Frage an, ob CSS denn nun wirklich in Javascript gehört, oder vielleicht umgekehrt?! Und das diese Frage überhaupt aufgeworfen wird, macht mir irgendwie Sorgen. Ich weiß, wenn man erstmal drin ist im Komponentenschmieden, dann hat man schnell die guten Vorsätze der letzten Jahre über Bord geworfen. Die alten Regeln von _seperation of concerns_ will ich da gar nicht heraus holen. Ich hab halt eine Scheißangst, dass wir in fünf Jahren nur noch durchgedrehte React_programmierer_ gibt, die mit minimaler Aufmerksamkeitsspanne daherkommen und nicht der leisesten Ahnung von Dingen wie _a11y_ oder der _Kaskade_ haben. Ihr Irren ihr!!!