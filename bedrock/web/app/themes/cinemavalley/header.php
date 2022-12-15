<header id="header">
  <div class="container">
    <div class="header-logo"><h1><img class="image-header-logo" src="<?php echo esc_url(get_template_directory_uri());?>/img/footer_logo.png" alt="森のスープ屋の夜"><span class="header-text">お手当てのための宿</span></h1>
    </div>
    <div class="header-toggle">
      <?php if (is_front_page() || is_home()): ?>
        <i class="js-nav-toggle"><img src="<?php echo esc_url(get_template_directory_uri());?>/img/bar_menu.png" alt=""></i>
      <?php else: ?>
        <a href="<?php echo esc_url(home_url('/')); ?>" class="nav-home js-nav-close">
        <img src="<?php echo esc_url(get_template_directory_uri());?>/img/nav_button_home.png" alt="ホーム"></a>
      <?php endif ?>
    </div>

    <?php if (is_front_page() || is_home()): ?>
    <nav id="nav">
      <i class="nav-close js-nav-close"><img src="<?php echo esc_url(get_template_directory_uri());?>/img/icon_close.png" alt="閉じる"></i>
      <ul class="list-nav">
        <li class="link-nav-intro"><a href="#intro">ようこそ</a></li>
        <li class="link-nav-map"><a href="#map">森のお散歩map</a></li>
        <li class="link-nav-year"><a href="#year">森のいちねん</a></li>
        <li class="link-nav-message"><a href="#outro">森との出会い＆建築士のメッセージ</a></li>
        <li class="link-nav-access"><a href="https://soupya.stores.jp/" target="_blank">online shop</a></li>
        <li class="link-nav-access"><a href="/access/">アクセス</a></li>
        <li class="link-nav-reservation"><a href="/reservation/">宿泊予約はこちら</a></li>
      </ul>
    </nav>
    <?php endif ?>

  </div>
</header>