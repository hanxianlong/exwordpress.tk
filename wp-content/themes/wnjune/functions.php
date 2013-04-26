<?php
require(TEMPLATEPATH . '/init/action_remover.php');

function wnjune_add_global_style(){
    $templateUrl = get_template_directory_uri();
    wp_enqueue_script('modernizer', $templateUrl  . '/js/modernizr-min.js');
    wp_enqueue_script('global-js',$templateUrl  . '/js/global.js');
    wp_enqueue_style('global-style', $templateUrl . '/style.css');
}
add_action('wp_enqueue_scripts','wnjune_add_global_style');
?>
