<?php

add_filter('init',function(){
    if (!is_admin()){
        wp_deregister_script('jquery');
    }
});

// 固定ページのみ自動整形機能を無効化。
// function disable_page_wpautop() {
//   if ( is_page() ) remove_filter( 'the_content', 'wpautop' );
// }
// add_action( 'wp', 'disable_page_wpautop' );