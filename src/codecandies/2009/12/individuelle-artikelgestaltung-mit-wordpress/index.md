---
title: "Indi­vi­du­elle Arti­kel­ge­stal­tung mit Wordpress"
date: "2009-12-01"
tags:
  - "Gestaltet"
keywords:
  - "Uniques"
  - "Webdesign"
  - "Art Directed Blogging"
---

[_Indi­vi­du­elle Arti­kel­ge­stal­tung_](http://anmutunddemut.de/2009/11/25/individuelle-artikelgestaltung) bedeutet technisch ja erstmal nur, dass man einem bestimmten Artikel ein spezielles CSS mitgeben muss. Das ist natürlich eine hervorragenden Aufgabe für ein Wordpress-Plugin, erstaunlicherweise habe ich nur ein passendes gefunden und das tendierte dazu, die Stylesheet-URL regelmäßig wieder zu vergessen, war also Müll.

So habe ich mir kurzerhand selbst geholfen und ein paar Funktionen in die `functions.php` gepackt, die ein Metafeld `addCSS` auslesen und in den Head des jeweiligen Artikel pumpen.

```php
// return or print the value of metafield with key
function get_custom_field_value($key, $output = false) {
    global $post;
    if ( function_exists('get_post_meta') ) {
        $value = get_post_meta($post->ID, $key, true);
        if($output == false) {
            return $value;
        } else {
            echo $value;
        }
    }
}
// enqueue stylesheet for individual styled articles
function post_add_stylesheet() {
    global $wp_query;
    $path = WP_CONTENT_URL . '/articlestyles/';
    $this_post = $wp_query->get_queried_object();
    if (is_object($this_post)) {
        $id = $this_post->ID;
        if (function_exists('get_post_meta') && get_post_meta($id, 'extraCss', true) != '') {
            wp_enqueue_style( 'extraCss', $path . get_post_meta($id, 'extraCss', true), array(), false, 'screen' );
        }
    }
}
add_action('wp_print_styles', 'post_add_stylesheet');
```

Ich lade die jeweiligen Stylesheets in einen speziellen Ordner `articlestyles` unterhalb von `wp-content`. Dort lege ich auch die Bilder hin, die ich als Hintergrund nutze, damit sie sich aus dem CSS leichter referenzieren lassen. Im Artikelanlagedialog brauch ich dann nur ein benutzerdefiniertes Feld 'extraCss' anzulegen und den Namen des Stylesheets dort einzutragen. Fertig.

Bei [Coldheat gibt es übrigens ein interessante Liste](http://www.coldheat.de/uniques) mit gestalteten Artikeln und Blogs, die _individuelle Artikelgestaltung_ betreiben.
