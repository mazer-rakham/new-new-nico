    TweenMax.set('.st0', {
        drawSVG: '0%'
    });
    TweenMax.set('.st1', {
        drawSVG: '0%'
    });
    TweenMax.set('.st2', {
        drawSVG: '0%'
    });
    TweenMax.set('.st3', {
        drawSVG: '0%'
    });
$(document).ready(function () {
    MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

    var enacAtomDraw = new TimelineMax();
    setTimeout(function(){
      enacAtomDraw.to('.st0', 1, {
                drawSVG: '100%'
            }, 'p1')
            .to('.st1', 1, {
                drawSVG: '100%'
            }, 'p1')
            .to('.st2', 1, {
                drawSVG: '100%'
            }, 'p1')
            .to('.st3', 1, {
                drawSVG: '100%'
            }, 'p1')
            .to('.st0', 1, {
                fill: '#CCCCCC'
            }, 'p2')
            .to('.st1', 1, {
                fill: '#000000'
            }, 'p2')
            .to('.st2', 1, {
                fill: '#808080'
            }, 'p2')
            .to('.st3', 1, {
                fill: '#FF0000'
            }, 'p2');
},1500);

$('#test').click(function(){
  
});
    var controller = new ScrollMagic.Controller();
     
  
 

    // scene for the first motto starts here 
    // var mottoAnimation = new TimelineMax();
    // mottoAnimation.staggerFrom('#main_about_section svg', 0.5, {
    //         y: 70,
    //         opacity: 0,
    //         delay: 0.3
    //     }, 0.2)
    //     .to('#mci2', 0.3, {
    //         morphSVG: '#mci1'
    //     })
    //     .to('#cableWireless2', 0.3, {
    //         morphSVG: '#cableWireless1'
    //     })
    //     .to('#worldcom2', 0.3, {
    //         morphSVG: '#worldcom1'
    //     });
    // var mottoScene = new ScrollMagic.Scene({
    //         triggerElement: '#main_about_section'
    //     })
    //     .setTween(mottoAnimation)
    //     .addTo(controller);


    var videoHide = new ScrollMagic.Scene({
            triggerElement: '#networking_slideshow_wrapper',
            triggerHook: 1,
            duration: 200
        })
        .setTween('#bgvid', 1, {
            autoAlpha: 0
        })

        .addTo(controller);
    var imgScroll = new ScrollMagic.Scene({
            triggerElement: '#networking_slideshow_wrapper',
            triggerHook: 0.8,
            duration: '110%'
        })
        .setTween('#networking-background-image', 1, {
            y: -400
        })
        .addTo(controller);
    var webDevAnimation = TweenMax.staggerTo('#web_dev_image_wrapper img', 1, {
        right: 0
    }, 0.2);
    var webDevScene = new ScrollMagic.Scene({
            triggerElement: '#web-dev-wrapper h1',
            triggerHook: 0.4,
            duration: 300
        })
        .setTween(webDevAnimation)

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