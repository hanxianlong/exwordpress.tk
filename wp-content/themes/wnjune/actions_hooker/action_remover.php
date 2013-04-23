<?php
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
remove_action('wp_head','wp_generator');


function wnjune_show_admin_bar_in_front(){
    return false;
}

//在前台不显示工具条一栏
add_action('show_admin_bar','wnjune_show_admin_bar_in_front');
remove_action('wp_head', 'noindex', 1 );
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');

?>
