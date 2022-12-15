<!DOCTYPE html>
<html lang="ja" <?php body_class() ?>>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="format-detection" content="telephone=no,address=no,email=no">
    <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes">
    <link rel="stylesheet" type="text/css" href="<?php echo esc_url(get_template_directory_uri());?>/css/vendor.css">
    <link rel="stylesheet" type="text/css" href="<?php echo esc_url(get_template_directory_uri());?>/css/style.css">
    <title>森のスープ屋の夜 お手当のための宿</title>
    <?php wp_head() ?>
  </head>
  <body <?php body_class() ?> id="home">
    <?php get_header() ?>
    <main id="main" role="main">
      <?php get_template_part('components/home') ?>
    </main>
    <?php get_footer() ?>
    <?php get_template_part('components/sound') ?>
  </body>
</html>