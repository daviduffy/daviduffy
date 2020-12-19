const Splash = () => `
  <div>
      <div>
          <div>
              <h1>David Duffy</h1>
              <div class="subheading">
                  <h2>Howdy!</h2>
                  <p>I'm David Duffy, a web designer and developer.</p>
                  <a href="#about" class="fancy-link">see more</a>
              </div>
          </div>
      </div>
      <div class="splash-overlay"></div>
      <div class="splash-image">
          
          <picture>

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
  </div>
`;

exports.default = Splash();