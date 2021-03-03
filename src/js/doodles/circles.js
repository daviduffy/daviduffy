/* jshint laxcomma:true */
var hoverSplits = true
  , $leaves = $('.leaf')
  , $created = $('.created>span')
  , $destroyed = $('.score')
  , $countdownGoal = $('.goal')
  , $toggleButton = $('#toggle')
  , $resetButton = $('.reset')
  , $reverseText = $('#inReverse')
  , $overlay = $('.circleGen-overlay')
  , destroyedScore = 0
  , totalCircles = $leaves.length
  , leavesTemplate = '<div class="leaf"></div><div class="leaf"></div><div class="leaf"></div><div class="leaf"></div>'
  , reverseTemplate = '<button id="reverse">Reverse</button>'
  , $startingTemplate = '<div class="outer-box leaf"></div><div class="outer-box right parent inter"><div class="leaf"></div><div class="leaf"></div><div class="leaf"></div><div class="leaf"></div></div>'
  , $container = $('.circleGen-container')
  ;

var fadeIn = function(elem) {
  elem.addClass('fade-in-down');
};

var reverse = function(){
  hoverSplits = !hoverSplits;
  $countdownGoal.text('0.0%');
  initTimer(Math.sqrt(totalCircles)*1600);
  fadeIn($('.timer'));
  fadeIn($('.destroyed'));
};

var reset = function(){
  $leaves.unbind('mouseover');
  var overlay = $overlay.detach();
  $container.html( $startingTemplate );
  $container.prepend(overlay);
  $leaves = $('.leaf');
  totalCircles = $leaves.length;
  $created.text(totalCircles);
  $leaves.on('mouseover', splitter);
  destroyedScore = 0;
  destroyedPct = 0;
  hoverSplits = true;
  $destroyed.text(destroyedScore);
  $countdownGoal.text('0.0%');
  $('.circleGen-overlay').removeClass('active');
};

var splitter = function(){
  var $this = $(this)
    , $parent = $this.parent()
    , destroyedPct = 0
    ; 
  
  if (totalCircles > 302) {
    fadeIn($toggleButton);
  }
  
  if ( hoverSplits ){
    totalCircles += 3;
    $parent.removeClass('inter');  
    $this.addClass('parent inter').removeClass( 'leaf').append(leavesTemplate);  
    $this.unbind('mouseover').find('.leaf').on('mouseover', splitter);
    $created.text(totalCircles);
  } else if ($parent.hasClass('inter')){
    destroyedScore += 3;
    $parent.removeClass('inter parent').addClass('leaf');
    $parent.html('');
    $parent.parent().addClass('inter');
    $this.unbind('mouseover').find('.inter').on('mouseover', splitter);
    destroyedPct = +((destroyedScore/totalCircles)*100).toFixed(1);
    $countdownGoal.text( destroyedPct + '%');
    $destroyed.text(destroyedScore);
  }

};

function initTimer(circles){
  var timeLeft = circles
    , $minutes = $('.minutes')
    , $seconds = $('.seconds')
    , timeinterval = setInterval( function(){
      var t = getTimeRemaining( timeLeft );
      $minutes.html('0' + t.minutes).slice(-2);
      $seconds.html(('0' + t.seconds).slice(-2));
      timeLeft -= 1000;
      if(timeLeft<=0){
          $('.leaf').unbind('mouseover');
          $('.circleGen-overlay').addClass('active');
          console.log('unbind leaves');
          clearInterval(timeinterval); // stops timer
      }
  },1000);
}

var getTimeRemaining = function(input){
  var t = input
    , seconds = Math.floor( (t/1000) % 60 )
    , minutes = Math.floor( (t/1000/60) % 60 )
  ;
  return {
      'minutes': minutes,
      'seconds': seconds
  };
};

$leaves.on( 'mouseover', splitter );
$resetButton.on( 'click', reset );
$toggleButton.on('click', reverse );