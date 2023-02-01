---
title: "Von der App zur Webversion direkt in die Grütze"
date: "2015-02-16"
tags:
  - "Generde"
coverImage: "mixer.jpg"
---

Die Webversion von Flipboard hat es nicht nur geschafft, mit einer [beworbenen](http://engineering.flipboard.com/2015/02/mobile-web/) Animationsgeschwindigkeit von durchgängig mindestens 60 fps Aufsehen zu erregen, sie sorgt auch sonst [für Diskussionsstoff, wegen ihrer kompletten Unzugänglichkeit](http://farukat.es/journal/2015/02/708-how-flipboard-chose-form-over-function-their-web-version). Die Macher von Flipboard haben den DOM in `<canvas>` nachgebaut, weil er zu langsam ist. Klingt für mich nicht nach einer Idee, die man feiern sollte.

Ich kenne das selbst nur zu gut, Accessibility einzubauen, kann je nach Struktur des eigenen Codes sehr schwierig sein. Die gewählte Struktur ist, naja, sehr schwierig. Und vielleicht liefert Flipboard eines Tages ein Update, bei dem dann der Accessibility mehr Wert beigemessen wird, gänzlich unmöglich ist es ja nicht. Allerdings:

> 60 frames per second is not “would be nice”. It’s “must have”. And the DOM doesn’t have it. It’s not surprising that Flipboard’s workaround — the `<canvas>` element — was invented by Apple, as the basis for Dashboard widgets and potentially as the backdrop for the iPhone. But it’s damning that something Apple decided was too slow to serve as the basis for native iPhone apps is the best-performing backdrop for the mobile web.

[John Gruber meint also](http://daringfireball.net/2015/02/60_frames_per_second_and_the_web), jetzt 60fps-Animationen an den Start zu bringen, sei wichtiger als Accessibility umzusetzen. Die kann man ja beizeiten nachliefern. Ja, ja, der DOM ist lang und weilig, kennen wir alle. Bisher gabss aber immer wichtigere Dinge, die entwickelt werden mussten. Aber nun kommt es darauf an, _dass wir endlich endlich endlich flüssig scrollen können_? Und bis das umgesetzt ist, lassen wir mal jene, die auf Zugänglichkeit angewiesen sind, im Regen stehen. Und Schuld ist auch noch das W3C!

> Blinded by ideology, oblivious to the practical concerns of 60-FPS-or-bust-minded developers and designers, the W3C has allowed standard DOM development to fall into seemingly permanent second-class status.

Ich weiß gar nicht genau, welche dahinter steckende Denke mir mehr auf den Sack geht: ist das schon Technologiedarwinismus? Natürlich kann man wollen, dass der DOM ähnliche Leistungen vollbringt, wie auf Einzelplattform optimierte Grafikengines, aber der Kern des Web ist das nicht. Und wird es nie sein. Deswegen ist es aber **keinesfalls zweitklassig**. Vielmehr ist ja seine Stärke die Plattformunabhängigkeit und seine Breite. Und wer glaubt, nur weil jetzt ein paar Appentwickler im Apple Store nicht mehr genug Kohle machen, müsse man das _web_ in eine andere Richtung entwickeln, also weniger offen, weniger zugänglich, aber mit 60fps, der beleidigt einen großen Teil seiner Nutzer und viele ernsthafte Webentwickler gleich mit. Es ist ein Fehler, Apps in HTML eins zu eins nachbauen zu wollen (weiss ich aus Erfahrung) diesen Fehler jetzt zur Ideologie zu erheben, halte ich bestenfalls für gefährlich.

Es muss einen (hust… finanziellen… hust) Grund geben, warum Apps wie Flipboard aus ihrer ach so primärtechnologischen Welt der Apps in das so lahme mobile Web wollen. Mit Menschenfreundlichkeit hat es offenbar nichts zu tun. Ich kann nur hoffen, dass, falls sich das als Trend erweisen sollte, wir stark genug sind, ein offenes und gleichberechtigtes Netz zu bewahren und nicht anfangen, langwierig Erkämpftes (was sich selbst noch deutlich ausbauen lässt) auf dem Altar der Animationsgeschwindigkeit zu opfern.
