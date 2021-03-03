const Splash = () => `
  <section id="splash" class="splash">
    <div class="splash__image-c">
      <picture class="splash__image">

        <!-- portrait images -->
        <source media="(orientation: portrait) and (min-width: 500px)" srcset="img/splash/david-duffy-designer-developer-product-owner-2-1334.jpg" width="1167px" height="1334px" />
        <source media="(orientation: portrait)" srcset="img/splash/david-duffy-designer-developer-product-owner-2-667.jpg" width="584px" height="667px" />

        <!-- landscape images -->
        <source srcset="img/splash/david-duffy-designer-developer-product-owner-2-2000.jpg" media="(min-width: 1440px)" width="2000px" height="1333px" />
        <source srcset="img/splash/david-duffy-designer-developer-product-owner-2-1440.jpg" media="(min-width: 1024px)" width="1440px" height="960px" />
        <source srcset="img/splash/david-duffy-designer-developer-product-owner-2-1024.jpg" media="(min-width: 768px)" width="1024px" height="683px" />
        <source srcset="img/splash/david-duffy-designer-developer-product-owner-2-768.jpg" width="768px" height="512px" />
        <img src="img/splash/david-duffy-designer-developer-product-owner-2-1024.jpg" alt="fallback img element contained within responsive picture element" />

      </picture>
    </div>
    <div class="container">
      <div class="splash__heading h5">
        <span>Howdy! I'm </span>
        <h1 class="p"><span class="h1 splash__name">David Duffy</span><br />a web developer.</h1>
      </div>
    </div>
  </section>
`;

exports.default = Splash();