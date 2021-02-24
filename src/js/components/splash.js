const Splash = () => `
  <section id="splash" class="splash">
    <div class="splash__image-c">
      <picture class="splash__image">

        <!-- portrait images -->
        <source media="(orientation: portrait) and (min-width: 500px)" srcset="img/splash/david-duffy-designer-developer-product-owner-2-1334.jpg" >
        <source media="(orientation: portrait)" srcset="img/splash/david-duffy-designer-developer-product-owner-2-667.jpg" >

        <!-- landscape images -->
        <source srcset="img/splash/david-duffy-designer-developer-product-owner-2-2000.jpg" media="(min-width: 1440px)" />
        <source srcset="img/splash/david-duffy-designer-developer-product-owner-2-1440.jpg" media="(min-width: 1024px)" />
        <source srcset="img/splash/david-duffy-designer-developer-product-owner-2-1024.jpg" media="(min-width: 768px)" />
        <source srcset="img/splash/david-duffy-designer-developer-product-owner-2-768.jpg"/>
        <img src="img/splash/david-duffy-designer-developer-product-owner-2-1024.jpg" alt="fallback img element contained within responsive picture element"/>

      </picture>
    </div>
    <div class="container">
      <div class="splash__heading">
        <span>Howdy! I'm </span>
        <h1 class="p"><span class="h1 splash__name">David Duffy</span><br />a web developer.</h1>
      </div>
    </div>
  </section>
`;

exports.default = Splash();