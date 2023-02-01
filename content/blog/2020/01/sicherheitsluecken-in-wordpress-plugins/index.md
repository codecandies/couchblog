---
title: "Sicherheitslücken in Wordpress Plugins"
date: "2020-01-23"
tags:
  - "Generde"
keywords:
  - "Weblog"
  - "Wordpress"
---

Dass die Gefahr besteht, sich mit dem Plugin von der Stange mal eben eine kritische Sicherheitslücke ins Wordpress zu holen, darüber sollte sich jeder Betreiber eines Wordpress-Blogs im Klaren sein. Wie [ars technica allerdings kürzlich berichtete](https://arstechnica.com/information-technology/2020/01/researchers-find-serious-flaws-in-wordpress-plugins-used-on-400k-sites/), hat es gerade drei relativ verbreitete Plugins _erwischt_.

Wobei erwischt eher bedeutet, das Sicherheitsberater logische Fehler im Code endeckt und veröffentlicht haben. Im wesentlichen handelt es sich um Möglichkeiten, sich entweder direkt ohne Credentials direkt als Administrator eines Blogs anzumelden, oder die Benutzerrolle eines vorhandenen Benutzers zum Admin zu eskalieren. In einem Fall könnten von Angreifern aber ohne weiteres Login direkt Datenbanken gelöscht werden.

Betroffen sind _InfiniteWP, WP Time Capsule_ und _WP Database._ Wer diese Plugins installiert hat, sollte also dringend aktuelle Updates einspielen, für alle drei stehen bereits Fixes bereit.
