exports.default = `<!doctype html> 
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>David Duffy | daviduffy | Web Designer &amp; Developer</title>
    <meta name="description" content="A portfolio site created by David Duffy (@daviduffy), a web designer and developer from Seattle, Washington." />
    <meta itemprop="description" content="A portfolio site created by David Duffy (aka daviduffy), a web designer and developer from Seattle, Washington." />
    <link rel="stylesheet" href="css/main.css">
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
    <!-- TODO: deal with loading fonts better -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Open+Sans:400,600,300">
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
      <section id="about">

        {{ About }}

      </section>
      <section id="portfolio">

        {{ Portfolio }}

      </section>
      <section id="contact">

        {{ Contact }}

      </section>

      {{ Splash }}  

    </main>
    <!-- <footer>some footer</footer> -->
    <script async src="https://www.google-analytics.com/analytics.js"></script>
    <script src="js/main.bundle.js"></script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-82438905-1', 'auto');
      ga('send', 'pageview');
    </script>

  </body>
</html>
`