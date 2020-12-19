exports.default = `
<!doctype html> 
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
  </head>

  <body class="splash">
    <div class="oc">
      <div class="oc__menu">
        {{ menu }}
      </div>
      <div class="oc__x"></div>
    </div>
    <header class="h">
      <button class="h__trg svg-b" style="margin: 0; padding: 0.25rem" title="open">
        <svg class="h__ic h__ic--b" style="fill: none;stroke-miterlimit: 10;stroke-width: 10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.1 63.86"><path d="M0 5h72.1M0 31.74h72.1M72.1 58.86H0"/></svg>
      </button>
    </header>
    <div class="home">
      <main>
        <section id="about">
          {{ about }}
        </section>
        <section id="portfolio">
          {{ portfolio }}
        </section>
        <section id="contact">
          {{ contact }}
        </section>
        <section id="splash">
          {{ splash }}                        
        </section>
      </main>
    </div>
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