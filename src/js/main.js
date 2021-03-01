import styles from '../scss/app.scss';
// import styles from '../scss/app.inline.scss';

const oc = {
  toggleClassMenu: function() {
    oc.menu.classList.add('oc--anim');
    if (!oc.menu.classList.contains('oc--vis')) {
      oc.menu.classList.add('oc--vis');
    } else {
      oc.menu.classList.remove('oc--vis');
    }
  },
  OnTransitionEnd: function() {
    oc.menu.classList.remove('oc--anim');
  },
  menu: document.querySelector('.oc'),
  bars: document.querySelector('.h__trg'),
  times: document.querySelector('.oc__trg'),
  bg: document.querySelector('.oc__x'),
  links: Array.from(document.querySelectorAll('.oc .menu a')),
  init: function(){
    oc.menu.addEventListener("transitionend", oc.OnTransitionEnd, false);
    oc.bars.addEventListener("click", oc.toggleClassMenu, false);
    oc.bg.addEventListener("click", oc.toggleClassMenu, false);
    oc.times.addEventListener("click", oc.toggleClassMenu, false);
    oc.links.forEach(function(link) {
        link.addEventListener("click", oc.toggleClassMenu, false);
    })
  }
};

(function() {
    var app = {
        // routes (i.e. views and their functionality) defined here
        routes: {
            splash: {
                entered: function() {
                    // app.newRouteElem.innerHTML = '<p>This JavaScript content overrides the static content for this view.</p>';
                }
             },
            portfolio: {
                initialized: false,
                entered: function() {
                    // context of 'this' is 'portfolio'
                    if (!this.initialized) {
                        const images = Array.from(document.querySelectorAll(['[data-bg]']));
                        images.forEach((el) => {
                                const { bg } = el.dataset;
                                el.style.backgroundImage = `url('${bg}')`;
                            });

                        this.initialized = true;
                    }
                    // app.newRouteElem.innerHTML = '<p>This JavaScript content overrides the static content for this view.</p>';
                }
            },
            contact: {
                initialized: false,
                entered: function() {
                    if (!this.initialized) {

                        const formScript = document.createElement('script');
                        const js = `var Instance = Lumin.default.widgets.signUp.new();
                            Instance.render({
                                userID: 'j4AQDctxaOhTkf1T70k5J8LHiNp2',
                                formID: '723dd95e-3332-4403-8c57-e6627065fd92'
                            });`;
                        formScript.innerHTML = js;
                        const handleLoad = () => {
                            document.body.appendChild(formScript);
                        }

                        const mainScript = document.createElement('script');
                        mainScript.src = 'https://nove.io/v4/nove.js';
                        mainScript.onload = handleLoad;
                        document.body.appendChild(mainScript);
                        this.initialized = true;
                    }
                }
            }
        },
        // The default view is recorded here. A more advanced implementation
        // might query the DOM to define it on the fly.
        default: 'splash',
        routeChange: function(e) {

            // if this function was triggered by a hashchange set previous route info
            if (e) {

                // set previous route info
                app.prevRouteID = e.oldURL.split("#")[1];
                app.prevRoute = app.routes[app.prevRouteID];

                // console.log({ prevRoute: app.prevRoute, prevRouteID: app.prevRouteID });

                // and run exited function
                if (app.prevRoute && app.prevRoute.exited) {
                    app.prevRoute.exited();
                }
            }

            // set new route info
            app.newRouteID = location.hash.slice(1); // 'splash', 'about', etc
            app.newRoute = app.routes[app.newRouteID];

            // classes housekeeping
            // $body.classList = '';
            // $body.classList.add( app.newRouteID );

            // run entered function
            app.newRoute.entered();

            // target new route
            app.newRouteElem = document.getElementById(app.newRouteID);

            window && window.scrollTo({ top: 0 });

        },

        init: function() {

            oc.init();

            // just in case newURL and oldURL aren't supported
            if (!window.HashChangeEvent) {
                (function(){
                    var lastURL = document.URL;
                    window.addEventListener("hashchange", function(event){
                        Object.defineProperty(event, "oldURL", { enumerable: true, configurable: true, value: lastURL });
                        Object.defineProperty(event, "newURL", { enumerable: true, configurable: true, value: document.URL });
                        lastURL = document.URL;
                    });
                }());
            }

            // If there is no hash in the URL, change the URL to
            // include the default view's hash.
            if (!window.location.hash) {
                window.location.hash = app.default;
            } else {
                // Execute routeChange() for the first time
                app.routeChange();
            }

            // Fire all of the ins and outs of route changes
            window.addEventListener('hashchange', function(e) {
                app.routeChange(e);
            });

            document.body.classList.add('initialized');

        }
    };
    window.app = app;
})();

app.init();