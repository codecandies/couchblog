---
title: "CSS Coding Guidelines I"
date: "2008-05-21"
tags:
  - "Gecodet"
keywords:
  - "CSS"
  - "Webentwicklung"
---

![The Doctor. © BBC](/images/codecandies/ZZ58D4E4B0.jpg)

#### Begriffsklärung

**Codebespiel:** Begrifflichkeiten

```css
h2 { color: #000; }
```

- Diese Codezeile ist eine CSS-Regel (rule)
- **h2** ist (hier) ein Selektor (selector)
- **color: #000;** ist die Deklaration (declaration)
- **color** ist eine Eigenschaft (property)
- **#000** ist ein Wert (value)

Nachzulesen beim [W3C](http://www.w3.org/TR/CSS1#basic-concepts).

#### Schreibweisen

- Alle IDs und Klassennamen **klein** schreiben
- Alle Selektoren **klein** schreiben
- Alle Deklarationen **klein** schreiben
- Alle Werte **klein** schreiben

**Codebespiel:** Schreibweisen

```css
h2, #container, .formbox { color: #efe; }
```

#### Leerzeichen (Space)

- Zwischen Deklaration und Wert (nach dem Doppelpunkt)
- nach Kommata
- bei einzeligen Selektoren nach `{` und vor `}`
- nach `/*` und vor `*/`

#### Einrückung

- Selektor auf eigener Zeile, dahinter `{`\-Klammer
- Deklarationen (1 pro Zeile) eingerückt um vier Leerzeichen
- `}`\-Klammer am Ende wieder ausgerückt

**Codebespiel:** Einrückung 1

```css
.note {
    border: 1px solid #000;
    color: #ff0000;
    margin-bottom: 10px;
}
```

**Ausnahme:** Selektor mit nur **1** Deklaration wird einzeilig geschrieben

**Codebespiel:** Einrückung 2

```css
.note { border: 1px solid #000; }
```

Regeln, die sich auf Kindelemente beziehen, werden an der Mutter-Regel ausgerichtet.

**Codebespiel:** Einrückung 3

```css
.note {
    border: 1px solid #000;
}
    .note p {
        padding: 4px 2px;
    }
```

To be continued. **Update:** [Teil 2 ist fertig](/codecandies/2008/05/22/css-coding-guidelines-ii/).
