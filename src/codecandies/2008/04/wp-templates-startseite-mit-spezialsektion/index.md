---
title: "WP Templates:  Startseite mit Spezialsektion"
date: "2008-04-22"
tags:
  - "Gebloggt"
  - "Gecodet"
keywords:
  - "PHP"
  - "Wordpress"
---

Zur Zeit baue ich gerade an einem Wordpress-Template, dass eine besondere Anforderung stellt: auf der Startseite sollen nicht nur die laufenden Blogartikel dargestellt werden, sondern zusätzlich, darüber, ein frei bestimmbarer Artikel. Und trotzd dieser Konstruktion soll man am Ende noch durch die Blogpostings blättern können ("ältere Artikel") – auf den Folgeseiten soll der zusätzliche Artikel fehlen und eben nur die Blogpostings zu sehen sein.

Zunächst habe ich versucht, das über eins der Sticky-Post-Plugins zu regeln, aber die stellen ja meist nur ein Post innerhalb des normalen _Loops_ nach oben. Zu wenig für die Anforderung, sollen ja mehrere Loops sein, sozusagen. Gelöst hab ich das nun folgendermaßen:

```php
<?php
// holt den letzten Artikel mit dem Custom Field "thema"
// hier wären auch mehrere Artikel vorstellbar
?>
<?php $top = get_posts('meta_key=thema&meta_value=1&numberposts=1'); ?>
<?php if( $top && !$paged) : ?>
<?php
// nur wenn es einen Artikel gibt (sonst nichts zeigen) und
// wir nicht auf paginierten Seiten sind
?>
    <div id="top">
    <?php foreach($top as $post) : setup_postdata($post); ?>
        <?php
        // warum nicht mal foreach statt while ??? ;)
        ?>
        <?php $top_post_id = $post->ID; ?>
        <?php
        //$top_post_id zur Verwendung weiter unten
        ?>
        <div class="toparticle">
            <?php
            // ganz normaler Loop-Kram hier...
            ?>
            <?php the_content(); ?>
        </div>
    <?php endforeach;?>
    </div> <!-- /#top -->
<?php endif; ?>
<?php
// erster "Loop" durch, auf zum nächsten
?>
<?php query_posts(array('showposts'=>10, 'paged'=>$paged)); ?>
<?php
// holt 10 Posts, ggf. auch paginiert
?>
<?php if (have_posts()) : ?>
<div id="articles">

    <?php while (have_posts()) : the_post(); ?>
    <?php if( $post->ID == $top_post_id ) continue; ?>
    <?php
    // $top_post_id von oben, überspringt
    // das Posting das schon oben drüber steht
    ?>
    <div class="post" id="post-<?php the_ID(); ?>">
        <!-- [alles normal von hier ab usw. usf. ...] -->
    </div>
    <?php endwhile; ?>

    <div class="navigation clearfix">
        <div class="alignleft"><?php next_posts_link('&laquo; &Auml;ltere Eintr&auml;ge') ?></div>
        <div class="alignright"><?php previous_posts_link('Neuere Eintr&auml;ge &raquo;') ?></div>
    </div>

</div> <!-- /#articles -->
<?php endif; ?>
```

Kriege ich bitte sofort mein [Smarty](http://smarty.php.net) wieder zurück? Schlimme Tagsuppe, das.
