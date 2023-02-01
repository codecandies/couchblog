---
title: "Textpattern pingt blogg.de"
date: "2004-04-06"
tags:
  - "Generde"
---

Ganz kleiner “Hack”, um Textpattern dazu zu bringen [blogg.de](http://blogg.de) anzupingen.

Step 1: Man erstelle sich eine Ping-URL auf [blogg.de: Ping uns an](http://blogg.de/ping.php)

Step 2: Man erstelle eine Backup-Kopie von `/textpattern/include/txp_article.php` und editiere hernach das Original in folgender Weise:

ca. Zeile 205 (function article_post):

```php
if ($ping_weblogsdotcom==1) {
  $wl_client = new IXR_Client('http://rpc.weblogs.com/RPC2');
  $wl_client->query('weblogUpdates.ping', $sitename, 'http://'.$siteurl);`
}
```

ein wenig hinzufügen:
```php
$wl_client = new IXR_Client('http://xmlrpc.blogg.de');
$wl_client->query('weblogUpdates.ping', $sitename, 'http://'.$siteurl);
```

Zusammen soll’s dann so aussehen:
```php
if ($ping_weblogsdotcom==1) {
  $wl_client = new IXR_Client('http://rpc.weblogs.com/RPC2');
  $wl_client->query('weblogUpdates.ping', $sitename, 'http://'.$siteurl);
  $wl_client = new IXR_Client('http://xmlrpc.blogg.de');
  $wl_client->query('weblogUpdates.ping', $sitename, 'http://'.$siteurl);
}
```

Dann pingt es auch bei blogg.de.

Update: Programmieren ist einfach, copy & paste ist da schon schwieriger. Bug behoben.

Update 2: Eben festgestellt, daß das mit der Ping-Url quatsch ist, sondern der XML-RPC-Server von blogg.de (http://xmlrpc.blogg.de) angepingt werden muss. Wir haben uns hier gerade die Köpfe heiß diskutiert, wer jetzt schuld daran ist, daß ich hier Quatsch veröffentliche, aber haben nur herausgefunden:

- Martin kann nichts dafür
- Jörn ist auch auf keinen Fall schuldig
- ich war’s natürlich auch nicht
- Thorsten wußte sowieso die bessere Lösung
- bleibt eigentlich nur noch Sven… ;-)
