<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="サイトの説明">
    <meta name="keywords" content="キーワード">
    <meta name="format-detection" content="telephone=no,address=no,email=no">
    <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes">
    <link rel="stylesheet" type="text/css" href="<?php echo esc_url(get_template_directory_uri());?>/css/vendor.css">
    <link rel="stylesheet" type="text/css" href="<?php echo esc_url(get_template_directory_uri());?>/css/style.css">
    <title><?php the_title() ?></title>
    <?php wp_head() ?>
  </head>
  <body class="page_reservation" id="page">
    <?php get_header() ?>
    <main id="main" role="main">
      <div class="area-pagetitle mb40">
        <div class="container">
          <div class="bg-pagetitle pr30-sp pl20-sp">
            <h1 class="title-pagetitle"><?php the_title() ?></h1>
          </div>
        </div>
      </div>
      <div class="area-main">
        <div class="container margin-sp page-content">
          <?php while( have_posts()) : the_post(); ?>
            <?php the_content() ?>
          <?php endwhile; ?>
        </div>
      </div>
    </main>
    <?php get_footer() ?>
  </body>
</html>