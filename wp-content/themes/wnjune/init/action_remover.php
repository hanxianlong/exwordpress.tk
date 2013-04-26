<?php
//在前端不显示工具栏
function wnjune_show_admin_bar_in_front(){
    return false;
}
function wnjune_change_login_logo($data){
   echo '<style>.login h1 a{display:none}</style>';
}
remove_action('wp_head','wp_generator');//不显示
add_action('show_admin_bar','wnjune_show_admin_bar_in_front');
remove_action('wp_head', 'noindex', 1 );
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
add_action('login_head','wnjune_change_login_logo');
?>
