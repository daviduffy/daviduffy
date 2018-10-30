/* jshint laxcomma: true */

$(document).ready(function(){
    var $container = $('.flower')
      , $leaves = $('.flower > *')
      , $leaf = $('.flower > *:first-child')
      , $trigger = $('#trigger')
      ;
    
    function animateFlower(){
        $leaves.toggleClass('animate');
    }

    $container.hover(animateFlower);
    $trigger.click(animateFlower);
        
    $leaf.on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
        $leaves.removeClass('animate');
        if ($leaves.hasClass('end')) {
            $leaves.removeClass('end');
        } else {
            $leaves.addClass('end');
        }
    });
});