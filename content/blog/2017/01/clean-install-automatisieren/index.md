---
title: "Clean install für den Mac automatisieren"
date: "2017-01-20"
tags:
  - "Generde"
keywords:
  - "Apple"
  - "homebrew"
  - "Webentwicklung"
coverImage: "xii7efh1g6o.jpg"
---

Beim Thema _clean install_, angeregt durch [macOS development environment from scratch](https://assortment.io/posts/macos-development-environment), habe ich nochmal ein paar lose Enden eines Git zusammengerafft, die hier auf meinem Schreibtisch noch rumlagen. Denn vor dem Konfigurieren eines neuen Mac steht das ewige Programme suchen und installieren, buh! Das geht natürlich auch einfacher…

Bei der Neuinstallation eines Rechners, in meinem Fall natürlich eines Apple Rechners, vor allem aber auch bei Neuanschaffung steht man immer vor dem zeitraubenden Problem, die Softwareumgebung, die man gewohnt ist, wieder-/herzustellen. Was hier das Einspielen aus Backups oder Migrationsassistenten an _convienience_ bringt, geht oft dadurch verloren, dass man Leichen miterbt, die man auf dem neuen Rechner eigentlich nicht im Keller haben will. Was muss man also für ein wirkliches _clean install_ tun?

- Zunächst mal muss man wissen, welche Software man eigentlich nutzt. Das ist bei den großen täglich verwendeten Programmen natürlich kein Problem, aber wie hieß gleich noch dieses Colorpicker-Tool, dass man nur zweimal im Halbjahr aufruft? Vielleicht will man außerdem auch einen standardisierten Rechner für neue Kollegen bereitstellen, dann gibt es in diesem Sinne gar keine History…
- Dann muss man die ausgewählten Programme installieren. Das kann man _peu à peu_ machen, immer wenn man ein Tool braucht: installieren, einrichten und dann erst nutzen. Oder man macht es in einem Arbeitsgang, beide Versionen benötigen viel Zeit.
- Schließlich müssen alle Programme konfiguriert werden, Seriennummer herausgesucht und eingegeben werden, die Arbeitsumgebung eingerichtet werden usw.

Zumindest die ersten beiden Arbeitsgänge kann man am Mac heutzutage glücklicherweise automatisieren. Die Recherche, _was_ man denn überhaupt installieren will ist dabei natürlich ein wichtiger Punkt. Hier verlasse ich mich auf den Paketmanager [Hoembrew](http://brew.sh/), dessen Erweiterung [Brew Bundler](https://github.com/Homebrew/homebrew-bundle) und die Möglichkeit den Mac Appstore via API [von der Kommandozeile aus](https://github.com/mas-cli/mas) zu bedienen. Alle drei Programme gehören heutzutage auf jeden Mac. Eine Liste von mit `brew` installierten Systemprogrammen und Desktop-Apps, sowie der aus dem Appstore heruntergeladenen Programmen, lässt sich mit dem Bundler per `brew bundler dump` erstellen. Das entstandene `Brewfile` ist schonmal ein guter Ausgangspunkt. Sowas sieht dann so aus:

```
cask_args appdir: '/Applications'

tap 'caskroom/cask'
tap 'homebrew/binary'
tap 'homebrew/boneyard'
tap 'homebrew/bundle'
tap 'homebrew/core'
tap 'homebrew/versions'

brew 'mas'
brew 'wget'
brew 'youtube-dl'
brew 'zsh'
brew 'zsh-completions'
brew 'zsh-syntax-highlighting'

cask 'tower'
cask 'transmit'
cask 'vagrant'
cask 'virtualbox'

mas 'iA Writer', id: 775737590
mas 'Airmail 3', id: 918858936
```

_Lisitng 1: Beispiel für ein Brewfile_

Mithilfe von `brew search` und `brew cask search` findet man weitere Programme, die man auch händisch dieser Liste hinzufügen kann. Irgendwann hat man die Liste der ultimativen Standardprogramme und derer Abhängigkeiten zusammen. Mit einem beherzten `brew bundle` kann man diese dann entweder installieren oder auch allesamt installieren (oder bereits installierte updaten).

Die Installation auf einem leeren Rechner selbst kann man getrost einem Shellscript überlassen, das auch gleich die Xcode-Tools holt und am Ende [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) installiert etc.…

```
#!/bin/sh
echo Install xcodeutils…
xcode-select --install
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew tap Homebrew/bundle
brew bundle
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

_Listing 2: Verkürzte Version eines Installationsscripts_

All das oben genannte und ein klein wenig mehr, habe ich mal [in diesem Git-Repository zusammengesteckt](https://github.com/codecandies/webdevs_mac_install), mit dessen Hilfe ich meinen Rechner installiert habe. Danach muss man seine Programme natürlich noch konfigurieren. Viel Spaß…

Foto: [alejandroescamilla auf Unsplash](https://unsplash.com/@alejandroescamilla). {:.copyright}
