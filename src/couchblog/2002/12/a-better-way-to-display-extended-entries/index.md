---
title: "A Better Way To Display Extended Entries"
date: "2002-12-09"
tags:
  - "Gecodet"
---

Rebuilding the old couchblog-functionality goes on. I’ve adopted this nice Javascript from [aarondot.com](https://web.archive.org/web/20040929103736/http://www.aarondot.com/ "aarondot.com") (spells Aaron dot-dot com ?) which makes this nice thing possible:

Yes, you can read the whole entry without leaving the main blogpage, which keeps the reading-rhythm and not redirects the user away from the main actual content. Funny about the script is the way Aaron names his variables (my Javateacher would have killed me for something like that):

```js
function (youBet, justInCase) {
  thatsFunny = ('coconutsKillMorePeopleThanSharks' + (youBet)); noMoreThankYou = ('thankYourMother' + (youBet));
  if( document.getElementById ) {
    if( document.getElementById(thatsFunny).style.display ) {
      ( justInCase != 0 ) {
        document.getElementById(thatsFunny).style.display = "block";
        document.getElementById(noMoreThankYou).style.display = "none";
      } else {
        document.getElementById(thatsFunny).style.display = "none";
        document.getElementById(noMoreThankYou).style.display = "block";
      }
    } else {
      location.href = justInCase; return true;
    }
  } else {
    location.href = justInCase; return true;
  }
}
```

The above is placed into the script-section in the head of the index-template. Instead of the usual `<MTIfExtended>...</MTIfExtended>` the following is put in:

```html
<MTEntryIfExtended>
  <span id="thankYourMother<$MTEntryID$>" class="extended">
    <a href="<$MTEntryLink$>#<$MTEntryID pad="1"$>" onclick="ChristIsImmanentInAllThings(<$MTEntryID$>,'<$MTEntryLink$>#<$MTEntryID pad="1"$>');return false;">Read more »</a
    ><br />
  </span>
  <div id="coconutsKillMorePeopleThanSharks<$MTEntryID$>" style="display: none">
    <$MTEntryMore$>
    <a href="#<$MTEntryID pad="1"$>" onclick="ChristIsImmanentInAllThings(<$MTEntryID$>,0);return true;">« Collapse</a>
  </div>
</MTEntryIfExtended>
```

I thought of changing the names of the variables (something like _KarlMarxSaidChurchIsOpiatForThePeople_ instead of _ChristIsImmanentInAllThings_ or something alike, but I kept it to be thankful for this very nice script. You’ll find the whole script and a good description [here](http://www.aarondot.com/archives/000087.php). By the way: over at [Scriptygoddess](http://www.scriptygoddess.com/archives/001140.php) they took the script and topped: you can also see the comments as a rollout.
