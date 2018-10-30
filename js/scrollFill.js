/* jshint laxcomma: true */



function clearClasses (element, str ) {
    element.classList.remove('_1_lw', '_2_uw', '_3_jh', '_4_cc', '_5_me');
    element.classList.add( str );
}




var   $about            = document.querySelectorAll('#about .content')[0]
    , aboutHeight       = $about.scrollHeight
    , headHeight        = document.querySelectorAll('#about .header-spacer')[0].scrollHeight
    , screenHeight      = window.innerHeight
    , adjustedHeight    = aboutHeight - headHeight - ( screenHeight / 2 )
    ;



  function scrollTracker(e) {
      if ( document.body.scrollTop > 20 && document.body.scrollTop < adjustedHeight * 0.19 ) {
          clearClasses($about, '_1_lw');
      }
      if ( document.body.scrollTop > adjustedHeight * 0.20 && document.body.scrollTop < adjustedHeight * 0.39 ) {
          clearClasses($about, '_2_uw');
      }
      if ( document.body.scrollTop > adjustedHeight * 0.40 && document.body.scrollTop < adjustedHeight * 0.59 ) {
          clearClasses($about, '_3_jh');
      }
      if ( document.body.scrollTop > adjustedHeight * 0.60 && document.body.scrollTop < adjustedHeight * 0.79) {
          clearClasses($about, '_4_cc');
      }
      if ( document.body.scrollTop > adjustedHeight * 0.80) {
          clearClasses($about, '_5_me');
      }
  }


// do things
$(document).ready(function(){
    window.addEventListener('scroll', function(){ 
        //console.log('scroll');
        scrollTracker();
    });
});

