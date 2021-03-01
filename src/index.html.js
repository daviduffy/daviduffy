exports.default = `<!doctype html> 
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>David Duffy | daviduffy | Web Designer &amp; Developer</title>
    <meta name="description" content="A portfolio site created by David Duffy (@daviduffy), a web designer and developer from Seattle, Washington." />
    <meta itemprop="description" content="A portfolio site created by David Duffy (aka daviduffy), a web designer and developer from Seattle, Washington." />
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
    <link rel="preconnect" href="https://fonts.gstatic.com">
  </head>

  <body>
    <div class="oc">
      <div class="oc__menu">

        {{ Offcanvas }}

      </div>
      <div class="oc__x"></div>
    </div>

      {{ Header }}

    <main class="content">
      <div class="app">

        {{ Portfolio }}
        {{ Contact }}
        {{ Splash }}

      </div>

    </main>
    <script src="js/main.bundle.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Work+Sans:wght@400;500&display=swap" rel="stylesheet">
  </body>
</html>
`;
