---
title: "Feine Formulare II: Button"
date: "2008-05-20"
tags:
  - "Gecodet"
  - "Gestaltet"
keywords:
  - "CSS"
  - "HTML"
---

![Feiner Button](/img/codecandies/ZZ644563B1.jpg){:.inline-image} In [Feine Formulare I](/codecandies/2008/05/13/feine-formulare/) hatte ich meine Methode von `<input />`s vorgestellt, damit aus einem Formular aber ein _feines_ Formular wird, brauchen wir noch mind. ein weiteres Element: den (Absende-)Button. Darum kümmern wir uns also heute.

Vorne weg: am Anfang sollte die Frage stehen, ob man überhaupt einen _gestylten_ Button braucht. Das Problem ist so alt wie Adam und Eva und an diesem Thema werden wohl immer Designer und Entwickler aneinander geraten. Fakt ist: verschiedene Browser unter verschiedenen Betriebssystemen stellen (Submit-)Buttons unterschiedlich dar. Allerdings: sie tun dies jeweils konsistent. Nimmt man also an den Buttons kein wie auch imme geartetes Styling vor, sehen die Buttons **in einem** Browser immer gleich aus. Nur eben halt nicht über mehrere Browser. Und bevorzugt der Entwickler das, was der Browser anbietet, will der Designer meist **den immer gleichen Button auf der gesamten Site**.

Was nun _more usable_ ist, will ich gar nicht diskutieren. Man muss sich halt für eine Sache entscheiden. Sicherlich kann man Buttons gestalten und doch »Don't make me think« im Hinterkopf behalten. Von Verunstaltungen ist allerdings abzuraten.

#### Blick zurück im Zorn

Bisher gab es namentlich zwei Methoden, gestylte Buttons zu realisieren. Der Button wird als `type=image` gleich als Bild genutzt, oder man verzichtet auf den Button und nimmt stattdessen einen zum Knopf umgestylten Link. Beide Methoden haben dramatische Nachteile: bei der ersten gibt es ohne Javascript keinen `hover`\- und `active`\-state, bei der zweiten Methode lassen sich Formulare gar nur noch mit Javascript versenden, Grundvorraussetzung sollte jedoch sein, dass Formulare immer auch **ohne Javascript funktionieren** müssen.

#### Zweikomponentenkleberbutton

Der erste Schritt zum gut aussehenden Crossbrowser-Button ist der Austausch von `<input type="submit" value="Absenden" />` durch das Element `<button />`

```html
<button value="submit">Suche starten</button>
```

So könnte das zunächst mal aussehen. Über die Nützlichkeit des `<button />`\-Elements ist [hier einiges zu finden](http://particletree.com/features/rediscovering-the-button-element/ "Kevin Hale: Rediscovering the Button Element"), um es kurz zu machen: will man einen Submitbutton o.ä. gestalten, ist `<button />` erste Wahl. Einzig alte Safari-Versionen konnten damit nichts anfangen, und der Internet Explorer 6 hat einen [Bug](http://www.peterbe.com/plog/button-tag-in-IE) beim Übertragen des `value`, d.h. programmiertechnisch muss ggf. darauf Rücksicht genommen werden: IE 6 sendet nicht den Inhalt des Attrribut "value", sondern den Inhalt zwischen `<button>` und `</button>`.

Um den Button nun gestalten zu können, brauchen wir einige Hilfsmittel. Zum einen müssen wir den Code noch ein wenig erweitern. Auch dazu gibt es einige sehr ergiebige Quellen im Netz, z.B. [Styling the button element with sliding doors](http://www.filamentgroup.com/lab/styling_the_button_element_with_sliding_doors/) und [Creating and Styling Resizable Buttons](http://www.cssglobe.com/post/1367/creating-and-styling-resizable-buttons). Ich hab mal versucht beide Techniken zu kombinieren. Der Button benötigt dazu folgenden Code:

```html
<button value="submit"><span><em>Suche starten</em></span></button>
```

#### Ein wenig Background

Was wir noch brauchen, sind Hintergrundbilder, die als Sprites ausgeführt sind, d.h. die verschiedenen Buttonzustände sind in einem Bild vereinigt. Kennt man ja aus [A List Apart](http://www.alistapart.com/articles/sprites/)—das ist wirklich eine meiner Lieblingstechniken. Man kann das mit einem Bild hinbekommen, das doppelt übereinandergelegt wird, will man allerdings mit transparenten Hintergrundgrafiken arbeiten, funktioniert das nicht, dann braucht man zwei Bilder, ein schmales für den Rand und ein breites für den Rest.

Und dann brauchen wir ein wenig CSS um das Ganze zum Laufen zu kriegen. Zunächst kümmern wir uns mal um den Button selbst:

```css
button{
	border: none;
	background: none;
	padding: 0;
	margin: 0;
	width: auto;
	overflow: visible;
	text-align: center;
	white-space: nowrap;
	height: 25px;
	line-height: 23px;
}
```

Interessant: der `overflow`\- und der `width`\-Wert sind mal wieder für unseren Freund, den Internet-Explorer um das [Breitenproblem](http://jehiah.cz/archive/button-width-in-ie) von IE-Buttons zu lösen. Da es die anderen Browser nicht stört nehm' ich das gleich immer mit dazu. Das `<span>` und das `<em>`\-Element bekommen nun ihre Styles.

```css
button span, button em {
	display: block;
	height: 25px;
	line-height: 23px;
	margin: 0;
	color: #45423a;
}

button span {
	padding-left: 12px;
	background:url(bg_button_left.gif) no-repeat 0 0;
}

button em {
	font-style: normal;
	padding-right: 12px;
	background: url(bg_button.gif) no-repeat 100% 0;
}
```

Die beiden bekommen jeweils ein Hintergrundbild, auf Nullhöhe. Und jetzt werden noch das _Hovern_ und _Klicken_ hinzugefügt. Das jeweilige Hintergrundbild wird dazu einfach verschoben.

```css
button:hover span {
	color: #000;
	background:url(bg_button_left.gif) no-repeat 0 -25px;
}

button:hover em {
	color: #000;
	background: url(bg_button.gif) no-repeat 100% -25px;
}

button:active span {
	color: #660000;
	background:url(bg_button_left.gif) no-repeat 0 -50px;
}

button:active em {
	color: #660000;
	background: url(bg_button.gif) no-repeat 100% -50px;
}
```

Und da geht der Ärger los: im IE6 wird so ohne weiteres `:hover` nicht unterstützt. **Mist**, das kann man jetzt eigentlich wieder nur per Javascript lösen, bspw. mit jQuery. Hier im Blog macht das allerdings Dean Edwards' [IE7](http://dean.edwards.name/weblog/2008/01/ie7-2/)\-Script. Wer aufgepasst hat wird jetzt sagen: **ha! doch Javascript!** Ja, aber:… _funktionieren_ tuts auch ohne Javascript. :)

Ich hab mal eine mögliche jQuery-Lösung mit in den Code gepackt. Würde ich aber selbst eher in einer externen Datei ablegen.

Ich bin jetzt ein wenig aus der Puste, deswegen hier wieder das komplette Formular-Beispiel.

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

	    button{
			border: none;
			background: none;
			padding: 0;
			margin: 0;
			width: auto;
			overflow: visible;
			text-align: center;
			white-space: nowrap;
			height: 25px;
			line-height: 23px;
		}

			button span, button em {
				display: block;
				height: 25px;
				line-height: 23px;
				margin: 0;
				color: #45423a;
			}

			button span {
				padding-left: 12px;
				background:url(bg_button_left.gif) no-repeat 0 0;
			}

			button em {
				font-style: normal;
				padding-right: 12px;
				background: url(bg_button.gif) no-repeat 100% 0;
			}

			button:hover span {
				color: #000;
				background:url(bg_button_left.gif) no-repeat 0 -25px;
			}

			button:hover em {
				color: #000;
				background: url(bg_button.gif) no-repeat 100% -25px;
			}

			button:active span {
				color: #660000;
				background:url(bg_button_left.gif) no-repeat 0 -50px;
			}

			button:active em {
				color: #660000;
				background: url(bg_button.gif) no-repeat 100% -50px;
			}

	</style>

	<script type="text/javascript" charset="utf-8" src="../lib/js/jquery/jquery.min.js"></script>

	<script type="text/javascript" charset="utf-8">
	    $(document).ready(function() {
	        $('button').focus(function() {
                $(this).blur();
            });
            if($.browser.msie) {
                $('button').hover(
                    function() { /* overstate */
                        $('span', this).css("backgroundPosition", "0 -25px");
                        $('em', this).css("backgroundPosition", "100% -25px");
                    },
                    function() { /* and out */
                        $('span', this).css("backgroundPosition", "0 0");
                        $('em', this).css("backgroundPosition", "100% 0");
                    }
                ).click( function() {
                    $('span', this).css("backgroundPosition", "0 -50px");
                    $('em', this).css("backgroundPosition", "100% -50px");
                });
            }
	    });
    </script>

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
	<button value="submit"><span><em>Suche starten</em></span></button>
</form>

<div><p>Icons sind von <a href="http://www.famfamfam.com/lab/icons/silk/">Fam Fam Fam</a></p></div>

</body>
</html>
```
