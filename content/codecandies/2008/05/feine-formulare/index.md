---
title: "Feine Formulare"
date: "2008-05-13"
tags:
  - "Gecodet"
  - "Gestaltet"
keywords:
  - "HTML"
  - "CSS"
---

![Feines Formular](/images/codecandies/ZZ44E2CD5C.jpg){:.inline-image} Man hat schon viel versucht, aber im Grunde sehen Formulare immer gleich aus, nämlich wie der Meldebogen beim Einwohnermeldeamt. Gewiß, das hat etwas gutes, denn duch die Konformität entsteht eine Zugänglichkeit auf Basis der Gewohnheit.

Trotzdem gibt es Gelegenheiten, da könnte ein Formular mal ein wenig anders gestalt sein, als Label – Umbruch – Formularfeld. Vielleicht mit einem Icon für das Wort _Name_ und einem für das Wort _Email_? Bei Formularen, die wir täglich hundertfach ausfüllen, bspw. ein Login o.ä. kann man das mal ausprobieren. Und vielleicht gewint man sogar etwas dazu, bspw. eine deutlichere Zuordung zwischen Label und Formularfeld. [So soll es am Ende aussehen.](http://projektkrematorium.de/codecandies/formular1/)

Beginnen wir mit einem einfachen Formular, das ohne CSS und vor allem ohne Javascript direkt funktioniert:

```html
<form action="formulare_submit" method="post">
	<p>
		<label>
			Name<br/>
			<input type="text" value="" name="author" tabindex="1" />
		</label>
	</p>
	<p>
		<label>
			E-Mail<br/>
			<input type="text" value="" name="email" tabindex="2" />
		</label>
	</p>
	<input type="submit" tabindex="3" value="Absenden" />
</form>
```

Das ist gewollt unspektakulär. Dies ist im Grunde das codemäßige Basislayout, das ich für alle meine Formulare verwende. Das ganze validiert natürlich, hier als XHTML.

Vielleicht fällt noch die Positionierung des `<label>`\-Tags auf, nämlich umschließend um den Label-Text (“Name” bspw.) **und** dem `<input>`\-Feld. Das ist ein praktische Angelegenheit, die auch nicht jeder kennt: so erspart man sich zum einen, das `<label>` mit dem Attribut `for` ausstatten zu müssen und passend dazu braucht das `<input>` auch keine ID. Das praktische am `<label>`, neben der semantischen Zuordnung und der Zugänglichkeit, ist vor allem im User-Interface, dass der Benutzer auf das Label klicken kann und dann der Focus auf das zugehörige Formularfeld gesetzt wird.

Auch nicht ganz unwichtig und dem _Starter_ vielleicht noch nicht bekannt: das Attribute `tabindex` gibt die Reihenfolge an, mit der der Benutzer mit der Tastatur durch das Formular _tabben_ kann. Das ist hier zwar noch ziemlich klar, wird aber, auch um Wechselwirkungen mit anderen Formularen auszuschliessen ausdrücklich angegeben.

Zum späteren stylen allerdings benötige ich ein paar Hilfselemente. Zunächst mal müssen wir die Label-Texte zum späteren stylen mit `<span>`s ausstatten und außerdem brauchen wir Klassennamen auf die wir mit CSS zugreifen können.

```html
<form action="" method="post">
	<p>
		<label title="Tragen Sie Ihren Namen ein">
			<span class="name">Name</span><br/>
			<input type="text" value="Ihr Name" name="author" tabindex="1"  />
		</label>
	</p>
	<p>
		<label title="Tragen Sie Ihre Email-Adresse ein.">
			<span class="mail">E-Mail</span><br/>
			<input type="text" value="Ihre Email" name="email" tabindex="2" />
		</label>
	</p>
	<input type="submit" tabindex="3" value="Absenden" />
</form>
```

Es ist gute Sitte und natürlich eine Frage der Zugänglichkeit, das `<label>` mit einem paasenden `title`\-Attribut auszustatten. Dies wird beim überfahren mit der Maus angezeigt. Später kann man das vielleicht noch per Javascript für einige Spielereien nutzen. Muss man aber nicht.

Das Styling geht dann wieder relativ unspektakulär über die Bühne. In diesem Fall gehe ich davon aus, das wir Breiten und Höhen der Formularfelder kennen, und außerdem gebe ich es hier in Pixel an. `em`\-Fetichisten (nicht bös gemeint) mögen sich das entsprechend umformen, ich hab das aufgegeben. Sollte aber möglich sein.

Der Absatz fungiert als Container, in dem das Label und das Input platziert werden (absolut positioniert). Das Label seinerseits wird ersetzt durch das eigene Hintergrundbild.

```css
form p {
	background: #fff url(bg_formitem.gif) repeat-x 0 0;
	border: 1px solid #666;
	display: block;
	height: 24px;
	position: relative;
	width: 260px;
}

form p span {
	display: block;
	height: 16px;
	left: 4px;
	position: absolute;
	text-indent: -5000em;
	top: 4px;
	width: 16px;
}

	form span.name {
		background: transparent url(name.gif) no-repeat 0 0;
	}

	form span.mail {
		background: transparent url(mail.gif) no-repeat 0 0;
	}

form p input {
	background: #fff;
	border: none;
	font-size: 14px;
	height: 16px;
	line-height: 16px;
	position: absolute;
	right: 1px;
	top: 3px;
	width: 232px;
}

	form p input:focus {
		background: #eee;
		outline: none; /* removing focus in safari */
	}
```

Zwei Anmerkungen noch: mit `input:focus` wird die Focusmarkierung entfernt, die Safari seinen Usern aufdrängt, stattdessen wird mit einem leichten Grau das fokussierte Element markiert (auch in FF etc.). Das ist Geschmackssache, der Purist mag es weglassen. Zweite Anmerkung, die

Auf dieser Basis lässt sich natürlich nich mehr machen, bspw. Erweiterungen per Javascript. Ich markiere beim Fokussieren eines Formfeldes gerne den Inhalt, vor allem, wenn ich Werte vorgebe, wie hier. Sinnvollerweise macht man das mit einem externen Javascript, hier – **nur zu Demonstrationszwecken** – steht es am Element. Und hier die komplette Demo als Code.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

	<title>Tests</title>

	<style type="text/css" media="screen">

		form, div {
			margin: 40px;
		}

		form p {
			background: #fff url(bg_formitem.gif) repeat-x 0 0;
			border: 1px solid #666;
			display: block;
			height: 24px;
			position: relative;
			width: 260px;
		}

		form p span {
			display: block;
			height: 16px;
			left: 4px;
			position: absolute;
			text-indent: -5000em;
			top: 4px;
			width: 16px;
		}

			form span.name {
				background: transparent url(name.gif) no-repeat 0 0;
			}

			form span.mail {
				background: transparent url(mail.gif) no-repeat 0 0;
			}

		form p input {
			background: #fff;
			border: none;
			font-size: 14px;
			height: 16px;
			line-height: 16px;
			position: absolute;
			right: 1px;
			top: 3px;
			width: 232px;
		}

			form p input:focus {
				background: #eee;
				outline: none; /* removing focus in safari */
			}

	</style>


</head>

<body>

<form action="" method="get">
	<p>
		<label title="Tragen Sie Ihren Namen ein">
			<span class="name">Name</span><br/>
			<input type="text" value="Ihr Name" name="author" tabindex="1" onfocus="this.value='';"  />
		</label>
	</p>
	<p>
		<label title="Tragen Sie Ihre Email-Adresse ein.">
			<span class="mail">E-Mail</span><br/>
			<input type="text" value="Ihre Email" name="email" tabindex="2" onfocus="this.value='';" />
		</label>
	</p>
	<input type="submit" tabindex="3" value="Absenden" />
</form>

<div><p>Icons sind von <a href="http://www.famfamfam.com/lab/icons/silk/">Fam Fam Fam</a></p></div>
</body>
</html>
```

[Hier ist der zweite Teil: Button](/codecandies/2008/05/20/feine-formulare-ii-der-button/).
