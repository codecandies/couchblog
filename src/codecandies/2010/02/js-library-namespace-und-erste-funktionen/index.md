---
title: "JS-Library: Namespace und erste Funktionen"
date: "2010-02-15"
tags:
  - "Gecodet"
keywords:
  - "Javascript"
---

Eigentlich habe ich ja schon seit Ewigkeiten vor, mir eine eigene, kleine Javascript-Bibliothek zusammenzustellen, in der ich die immer wiederkehrenden Funktionen, die man in Javascript so benutzt, zusammengefasst sind. Allerdings: es mangelte bis dato an der nötigen Ernsthaftigkeit, so etwas tatsächlich umzusetzen. Also dann jetzt: ich werde hier in Zukunft Funktionen etc. zusammentragen und zu meiner kleinen Library zusammenfügen. Dabei kann der geneigte Leser natürlich nicht nur zu schauen, sondern es ist durchaus erwünscht, mir dabei reichlich auf die Finger zu hauen und Verbesserungen vorzuschlagen.

Zunächst mal hab ich mir Gedanken um den _Namespace_ meines Projektes gemacht. Heutzutage schreibt man natürlich keine Library, deren Funktionen fleissig in das window-Objekt geballert werden. Außerdem kann man dem Kind dann auch noch einen schlicken Namen geben.

Es gibt mehrere Methoden, einen Namespace zu kreieren, mir gefällt das [Modell von Dustin Diaz](http://www.dustindiaz.com/namespace-your-javascript/ "Namespacing your JavaScript") am besten, weil man dort die Möglichkeit hat, Methoden und Variablen sowohl _public_, oder auch _private_ zu machen. Nehmen wir an meine kleine JS-Library solle "CCL" heissen (als Abkürzung für _Code Candies Library_), dann funktioniert der Aufbau des Namespace so:

```js
var CCL = function() {
  var private_var;
  function private_method() {
    // do stuff here
  };
  return {
    method_1: function() {
      // do stuff here
    },
    method_2 : function() {
      // do stuff here
    }
  };
}();
```

OK, also haben wir jetzt einen Namespace, beginnen wir also, erste Funktionen hinzuzufügen. Ich fummle gerade viel mit Cookies herum, also nutze ich regelmäßig drei Funktionen: Cookie anlegen/schreiben, Cookie auslesen und Cookie löschen. Diese sind deutlich [PPKs Cookie-Methoden](http://www.quirksmode.org/js/cookies.html) angelehnt.

```js
var CCL = function() {
  return {
    cookieCreate: function (name,value,days, domain) {
      if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
      }
      else {
        var expires = ""; domain = domain ? " domain=" + domain + ";" : "";
      }
      document.cookie = name+"="+value+expires+"; path=/;" + domain;
    },
    cookieRead: function (name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i &lt; ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
          c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length,c.length);
        }
      }
      return null;
    },
    cookieErase: function (name) {
      CCL.cookieCreate(name,"",-1);
    }
  }
}();
```

Eine Sache ist aber noch blöd: man möchte ja nicht wirlich solche Funktionsnamen: "cookieCreate", jetzt ist das ja noch übersichtlich, aber wenn meine Library anwächst… da findet man sich schnell nicht mehr zurecht. Schöner wäre ein Namespace im Namespace. Und dann sollte man _Getter_ und _Setter_ ja auch irgendwie als solche kennzeichnen. Das würde dann so aussehen:

```js
var CCL = function() {
  return {
    Cookie: {
      get: function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
          }
          if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length,c.length);
          }
        }
        return null;
      },
      set: function (name, value, days, domain) {
        if (days) {
          var date = new Date();
          date.setTime(date.getTime()+(days*24*60*60*1000)); var expires = "; expires="+date.toGMTString();
        } else {
          var expires = ""; domain = domain ? " domain=" + domain + ";" : "";
        }
        document.cookie = name+"="+value+expires+"; path=/;" + domain;
      },
      kill: function (name) {
        this.set(name,"",-1);
      } // last item: no comma!
    }
  };
}();
```

Hmmm… das bringt ja richtig Spass. Nun kann man schön "draussen" die Funktionen nutzen. Ruft man ganz leicht auf:

```js
CCL.Cookie.set('testcookie', 'test', 5); // ommitting domain results in the page domain
```
