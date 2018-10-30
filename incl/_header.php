<!doctype html>
<html class="no-js" lang="en">
<head>
  <?php
    include '_functions.php';
    include '_data_menu.php';
    include '_vars.php';
  ?>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>David Duffy | daviduffy | Web Designer &amp; Developer<?php if ($pageTitle) echo ' | ' . $pageTitle; ?></title>
    <meta name="description" content="A portfolio site created by David Duffy, a web designer and developer from Seattle, Washington." />
    <meta itemprop="description" content="A portfolio site created by David Duffy, a web designer and developer from Seattle, Washington." />
    <link rel="stylesheet" href="css/app.css">
    <link rel='shortcut icon' href='img/fav.ico' type='image/x-icon'/ >
    <meta itemprop="name" content="David Duffy"/>
    <meta itemprop="url" content="http://daviduffy.me"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:url" content="http://daviduffy.me"/>
    <meta name="twitter:title" content="David Duffy"/>
    <meta name="twitter:description" content="A portfolio site created by David Duffy (aka daviduffy), a web designer and developer from Seattle, Washington."/>
    <meta name="twitter:image" content="http://daviduffy.me/img/splash/david-duffy-designer-developer-product-owner-2-1024.jpg"/>
    <meta name="twitter:site" content="@daviduffy_"/>
    <meta name="twitter:creator" content="@daviduffy_"/>
    <meta property="og:title" content="David Duffy" />
    <meta property="og:site_name" content="David Duffy Portfolio" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://daviduffy.me" />
    <meta property="og:image" content="http://daviduffy.me/img/splash/david-duffy-designer-developer-product-owner-2-1024.jpg" />
    <meta property="og:description" content="A portfolio site created by David Duffy (aka daviduffy), a web designer and developer from Seattle, Washington." />
    <link rel="canonical" href="http://daviduffy.me">
    <?php
      if (isset($headerScript)) {
        echo "<script>$headerScript</script>";
      }
    ?>
    <style id="style_target"></style>
</head>
<body style="margin: 0;">
  <div class="OffCanvas">
    <div class="OffCanvas__menu">
      <?php include '_offcanvas_menu.php' ?>
    </div>
    <div class="OffCanvas__x"></div>
  </div>
  <main class="Main <?php echo $pageClasses; ?>">
    <header class="Header Header--<?php echo $pageClasses; ?>" style="padding: .75rem;z-index: 5;">
      <button class="Header__trg svg-b hide-for-medium" style="margin: 0; padding: 0.25rem" title="open">

      </button>
      <nav class="Header__nav Header__nav--large Header__nav--primary">
        <ul>
          <li class='Header__link Header__link--logo'><a class='a a--menu' href='/'>
            <?php // include '_nove_logo_wordmark_inv.php'; ?>
            <?php // include '_nove_logo_wordmark.php'; ?>
          </a></li>
          <?php create_menu_links($data_menu_primary); ?>
        </ul>
      </nav>
      <nav class="Header__nav Header__nav--large Header__nav--secondary">
        <ul>
          <?php create_signup_login_links($data_menu_secondary); ?>
        </ul>
      </nav>
    </header>
