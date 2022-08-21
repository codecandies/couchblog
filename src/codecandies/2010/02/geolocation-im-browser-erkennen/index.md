---
title: "Geolocation im Browser erkennen"
date: "2010-02-12"
tags:
  - "Gecodet"
keywords:
  - "iPhone"
  - "jQuery"
  - "Mobile"
---

Heute wollte mir jemand weissmachen, zum Nutzen der Geolocation-Informationen des iPhones bräuchte man eine App. Quatsch.

Seit iPhone 3.0 [geht im Safari](http://mapscripting.com/how-to-use-geolocation-in-mobile-safari):

```js
navigator.geolocation.getCurrentPosition(foundLocation(position){
	var lat = position.coords.latitude;
	var long = position.coords.longitude;
	alert('Found location: ' + lat + ', ' + long);
}, noLocation(){
	alert('Could not find location');
});
```

Weil ich die veraltete Information aber auch gerade nochmal in einem Buch gelesen habe und dort beinahe ausschließlich auf jQuery gesetzt wird: es gibt natürlich auch ein entsprechendes jQuery-Plugin: [jquery-geolocation](http://code.google.com/p/jquery-geolocation/). Die ist kompatibel zum Safari/iPhone ab Version 3.0 und Firefox ab 3.5.:

```js
$.geolocation.find(function(location){
   alert(location.latitude+", "+location.longitude);
}, function(){
   alert("Your device doesn't support jquery.geolocation.js");
});
```
