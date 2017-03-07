TweenMax.set('.welcome-1',{drawSVG:'0%'});
TweenMax.set('.myface-1',{drawSVG:'0%'});
TweenMax.set('.myface-2',{drawSVG:'0%'});
TweenMax.set('.myface-3',{drawSVG:'0%'});
   
$(document).ready(function () {
    MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
$('#test').click(function(){
    
    
});
   
setTimeout(function(){
    TweenMax.staggerTo('.welcome-1',0.3,{drawSVG:'100%'},0.2);
},2000);
var controller = new ScrollMagic.Controller();
var myfaceTween = new TimelineMax()
    .to('.myface-1',0.5,{drawSVG:'100%'},'myface1')
    .to('.myface-2',0.5,{drawSVG:'100%'},'myface1')
    .to('.myface-3',0.5,{drawSVG:'100%'},'myface1');
var myfaceAnimation = new ScrollMagic.Scene({
    triggerElement:'#my-face-container'
})
.setTween(myfaceTween)
.addIndicators()
.addTo(controller);









});
//jQuery is required to run this code

// Plugin: jQuery.scrollSpeed
// Source: github.com/nathco/jQuery.scrollSpeed
// Author: Nathan Rutzky
// Update: 1.0.2

(function ($) {

    jQuery.scrollSpeed = function (step, speed, easing) {

        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default',
            root = 0,
            scroll = false,
            scrollY,

            view;

        if (window.navigator.pointerEnabled)

            return false;

        $window.on('mousewheel DOMMouseScroll', function (e) {

            var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail;
            scrollY = $document.height() > $window.height();
            scrollX = $document.width() > $window.width();
            scroll = true;

            if (scrollY) {

                view = $window.height();

                if (deltaY < 0 || detail > 0)

                    root = (root + view) >= $document.height() ? root : root += step;

                if (deltaY > 0 || detail < 0)

                    root = root <= 0 ? 0 : root -= step;

                $body.stop().animate({

                    scrollTop: root

                }, speed, option, function () {

                    scroll = false;

                });
            }

            return false;

        }).on('scroll', function () {

            if (scrollY && !scroll) root = $window.scrollTop();
            if (scrollX && !scroll) root = $window.scrollLeft();

        }).on('resize', function () {

            if (scrollY && !scroll) view = $window.height();
            if (scrollX && !scroll) view = $window.width();

        });
    };

    jQuery.easing.default = function (x, t, b, c, d) {

        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };

})(jQuery);