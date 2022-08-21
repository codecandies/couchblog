---
title: "Namespace, baby"
date: "2008-02-12"
tags:
  - "Gecodet"
keywords:
  - "Javascript"
---

**Bitte verschmutzen Sie nicht den globalen Namesraum** mit ihren eigenen Funktionen, das führt zu Kollisionen, Ärger, Aufregung, versteckten Bugs etc.

Hier ein nettes Namespace-Objekt, das selbst Objekte zurückgibt:

```js
var myNamespace = function(){
	return {
		debug: function(var) {
			console.debug(var);
			return(var);
		},
		alert: function(var) {
			alert(var);
			return(var);
		}
	}
}();
```

Die `()` Klammern nach der Funktion sorgen übrigens für direkte Ausführung beim Laden des Codes. Diese Methode ist schon ein wenig älter und bei [Dustin Diaz](http://www.dustindiaz.com/namespace-your-javascript/) zu finden, dort dann auch mit privaten Methoden.
