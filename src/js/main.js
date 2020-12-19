import '../scss/app.scss';

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
  links: Array.from(document.querySelectorAll('.a--menu')),
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
    var $body = document.getElementsByTagName('body')[0];
    var app = {
        // routes (i.e. views and their functionality) defined here
        routes: {
            splash: {
                entered: function() {
                    // app.newRouteElem.innerHTML = '<p>This JavaScript content overrides the static content for this view.</p>';
                }
             },
            about: {
                entered: function() {

                    // if the MyAbout object doesn't exist yet, create it
                    if ( !window.MyAbout ) {
                        window.onload = app.newRoute.aboutInit();
                    } 

                    // set heights of DOM elements again just in case they aren't set yet
                    // MyAbout.setHeights();

                    // enable color changes to icon elements on scroll
                    window.addEventListener('scroll', MyAbout.scrollTrigger );

                     // app.newRouteElem.innerHTML = '<p>This JavaScript content overrides the static content for this view.</p>';
                    },
                    aboutInit: function() {

                    // create the about object container
                    window.MyAbout = {};

                    // fill it with things
                    MyAbout.scrollTimer       = null;
                    MyAbout.aboutElement      = document.getElementById('about');
                    MyAbout.aboutElement.classList.add('scroll-colors-enabled','_1_lw');

                    // MyAbout.setHeights        = function () {
                    //     this.aboutHeight      = this.aboutElement.scrollHeight;
                    //     this.headHeight       = document.querySelectorAll('#about .header-spacer')[0].scrollHeight;
                    //     this.screenHeight     = window.innerHeight;
                    //     this.adjustedHeight   = this.aboutHeight - this.headHeight - ( this.screenHeight / 2 );
                    // }; 
                    MyAbout.changeClasses     = function ( element , string ) {
                        element.classList.remove('_1_lw', '_2_uw', '_3_jh', '_4_cc', '_5_me');
                        element.classList.add( string );
                    };
                    MyAbout.scrollTracker     = function ( event ) {
                        if ( MyAbout.scrollQuery( 0, 0.13 )) {
                          MyAbout.changeClasses(MyAbout.aboutElement, '_1_lw');
                        }
                        if ( MyAbout.scrollQuery( 0.131, 0.34 )) {
                          MyAbout.changeClasses(MyAbout.aboutElement, '_2_uw');
                        }
                        if ( MyAbout.scrollQuery( 0.341, 0.57 )) {
                          MyAbout.changeClasses(MyAbout.aboutElement, '_3_jh');
                        }
                        if ( MyAbout.scrollQuery( 0.571 , 0.79 )) {
                          MyAbout.changeClasses(MyAbout.aboutElement, '_4_cc');
                        }
                        if ( MyAbout.scrollQuery( 0.791, 1 )) {
                          MyAbout.changeClasses(MyAbout.aboutElement, '_5_me');
                        }
                    };
                    MyAbout.scrollQuery = function ( int1, int2 ) {
                        if (
                            ( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 ) >= ( MyAbout.adjustedHeight * int1 ) &&
                            ( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 ) < ( MyAbout.adjustedHeight * int2 )
                         ) {
                            return true;
                        } else {
                            return false;
                        }
                    };
                    MyAbout.scrollTrigger = function () {

                        // delay firing this function until a new scroll event hasn't happened for 30ms
                        if (MyAbout.scrollTimer) {

                            // clear any previous pending timer
                            clearTimeout(MyAbout.scrollTimer);   
                        }

                        // set new timer
                        MyAbout.scrollTimer = setTimeout(MyAbout.handleScroll, 30);   
                    };
                    MyAbout.handleScroll = function () {
                        console.log('scroll');
                        window.MyAbout.scrollTracker();
                    };
                },
                exited: function(){
                    console.log('exiting');
                    // remove scroll event listener
                    window.removeEventListener('scroll', MyAbout.scrollTrigger );
                }
            },
            portfolio: {
                entered: function() {
                    // app.newRouteElem.innerHTML = '<p>This JavaScript content overrides the static content for this view.</p>';
                }
            },
            contact: {
                entered: function() {
                     // app.newRouteElem.innerHTML = '<p>This JavaScript content overrides the static content for this view.</p>';
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

        },

        init: function() {

            oc.init();

            // just in case newURL and oldURL aren't supported
            if(!window.HashChangeEvent)(function(){
                var lastURL=document.URL;
                window.addEventListener("hashchange",function(event){
                    Object.defineProperty(event,"oldURL",{enumerable:true,configurable:true,value:lastURL});
                    Object.defineProperty(event,"newURL",{enumerable:true,configurable:true,value:document.URL});
                    lastURL=document.URL;
                });
            }());

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


        }
    };
    window.app = app;
})();

app.init();