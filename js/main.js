jQuery(document).on('ready', function ($) {
    "use strict";

    /*--------------------------
        SCROLLSPY ACTIVE
    ---------------------------*/
    $('body').scrollspy({
        target: '.bs-example-js-navbar-scrollspy',
        offset: 65
    });


    /*--------------------------
        STICKY MAINMENU
    ---------------------------*/
    $("#mainmenu-area").sticky({
        topSpacing: 0
    });


    /*--------------------------
        SMOOTH SCROLL
    ----------------------------*/
    $(".push-menu-and-content").niceScroll({
        cursorwidth: "10px"
    });


    /*--------------------------
       HOME BACKGROUND
    ----------------------------*/
    $(window).stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });


    /*--------------------------
        PUSH MENU OPEN COLOSE
    ---------------------------*/
    var $content = $('.push-menu-and-content');
    $('.push-menu-open-button').on('click', function () {
        $content.addClass('menu-open');
    });
    $('.push-menu-close').on('click', function () {
        $content.removeClass('menu-open');
    });


    /*---------------------------
        SMOOTH SCROLL
    -----------------------------*/
    $('ul#nav li a[href^="#"], .push-menu ul li a, a.navbar-brand,a.scrolltotop,.call-to-action a,.home-button a').on('click', function (event) {
        var id = $(this).attr("href");
        var offset = 40;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });


    /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).on("scroll", function () {
        var $totalHeight = $(window).scrollTop();
        var $scrollToTop = $(".scrolltotop");
        if ($totalHeight > 300) {
            $scrollToTop.fadeIn();
        } else {
            $scrollToTop.fadeOut();
        }
        if ($totalHeight + $(window).height() === $(document).height()) {
            $scrollToTop.css("bottom", "90px");
        } else {
            $scrollToTop.css("bottom", "20px");
        }


        // scroll and fade header text
        var scrollPosition = jQuery(this).scrollTop();
        jQuery('.welcome-text').css({
            'margin-top': -(scrollPosition / 4) + "px",
            'opacity': 1 - (scrollPosition / 400)
        });
    });

    /*-------------------------------
        FEATURES TAB ACTIVE ON HOVER
    ---------------------------------*/
    $('.single-features a').on('mouseenter', function () {
        $(this).tab('show');
    });


    /*-------------------------------
        FEATURES IMAGE POINT EFFECT
    ---------------------------------*/
    $('.cd-single-point').children('a').on('click', function () {
        var selectedPoint = $(this).parent('li');
        if (selectedPoint.hasClass('is-open')) {
            selectedPoint.removeClass('is-open').addClass('visited');
        } else {
            selectedPoint.addClass('is-open').siblings('.cd-single-point.is-open').removeClass('is-open').addClass('visited');
        }
    });
    //close interest point description
    $('.cd-close-info').on('click', function (event) {
        event.preventDefault();
        $(this).parents('.cd-single-point').eq(0).removeClass('is-open').addClass('visited');
    });


    /*------------------------------
        VIDEO STREMING
    -------------------------------*/
    $('.video-popup a').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 320,
        preloader: false
    });


    /*---------------------------
        HOME SLIDER
    -----------------------------*/
    var $homeSlider = $('.home-slider');
    $homeSlider.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        navText: ['<i class="icofont icofont-thin-left"></i>', '<i class="icofont icofont-thin-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 10,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    /*---------------------------
        PRODUCT SLIDER
    -----------------------------*/
    var $productCarousel = $('.product-list');
    $productCarousel.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: true,
        navText: ['<i class="icofont icofont-thin-left"></i>', '<i class="icofont icofont-thin-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


    /*---------------------------
        CLIENT SLIDER
    -----------------------------*/
    var $clientCarousel = $('.client-list');
    $clientCarousel.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        navText: ['<i class="icofont icofont-bubble-left"></i>', '<i class="icofont icofont-bubble-right"></i>'],
        autoplay: false,
        autoplayTimeout: 2000,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


    /*---------------------------
        MICHIMP INTEGRATION
    -----------------------------*/
    $('#mc-form').ajaxChimp({
        url: 'http://intimissibd.us14.list-manage.com/subscribe/post?u=a77a312486b6e42518623c58a&amp;id=4af1f9af4c', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.subscriber-form input, .subscriber-form button').hide();
            }
        }
    });


    /*------------------------------
        FOOTER FLICKR FEED POPUP
    -------------------------------*/
    $('.flicker-popup').magnificPopup({
        type: 'image',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function () {
                // just a hack that adds mfp-anim class to markup 
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        gallery: {
            enabled: true
        },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });


    /*--------------------------
        ACTIVE WOW JS
    ----------------------------*/
    new WOW().init();

}(jQuery));



jQuery(window).on('load', function () {
    "use strict";
    /*--------------------------
        PRE LOADER
    ----------------------------*/
    $(".preeloader").fadeOut(1000);
});


    /*--------------------------
        social Media
    ----------------------------*/
$(function () {
    $( document ).tooltip();
    $(".draggable").draggable();
    if ($(".draggable").draggable()) {
        $(".right").css("cursor", "all-scroll");
    } else {
        $(".right").css("cursor", "normal");
    }
    
    $(".draggable").on('dragstart', function () {
        $(this).on("mousemove", function () {
          var percentage_left_border = parseInt((($(this).position().left / $(this).parent().width()) * 100), 10);
        $("#border_left_position_percentage").html(percentage_left_border + "%");
          
          if ( (percentage_left_border < 42) ) {
                $(".right").css({
                    "border-right": "none",
                    "border-left": "8px solid rgba(159,68,13,0.8)",
                    "border-radius": "10px"
                });
                $("#border_left_position_percentage").css({
                    "float": "right",
                    "display": "inline-block"
                });
            } else {
                $(".right").css({
                    "border-right": "8px solid rgba(159,68,13,0.8)",
                    "border-left": "none",
                    "border-radius": "10px"
                });
                $("#border_left_position_percentage").css({
                    "float": "left",
                    "display": "inline-block"
                });
            }
        });
    }).on("dragstop", function () {
        var percentage_left_border = parseInt((($(this).position().left / $(this).parent().width()) * 100), 10);
    
        $(this).off('mousemove');
    
        if ( (percentage_left_border < 42) ) {
            $(this).animate({
                "position": "absolute",
                "float": "left",
                "left": "0"
            }, 1000, function () {
                // Animation complete.
                $("#border_left_position_percentage").css("display", "none");
                $(this).css("border-radius", "0 10px 10px 0");
            });
        } else {
            $(this).animate({
                "position": "absolute",
                "float": "right",
                "left": $('body').width() - $(this).outerWidth(true)
            }, 1000, function () {
                // Animation complete.
                $("#border_left_position_percentage").css("display", "none");
                $(this).css("border-radius", "10px 0 0 10px");
            });
        }
    });
    });

// Cursor
$("body").mousemove(function(e){
	var mouse = $(".mouse");
	// Add the mouse position to new cursor and followers
	mouse.css({
		left: e.pageX,
		top: e.pageY,
		opacity: 1, // show the cursor only when move mouse
	});
});

// Hover
$("a").hover(function(){
	// Add class to cursor and followers on hover
	// $(".mouse").toggleClass("hover");
});


$("#imgdarko").click(function () {

    $("#neontubes").removeClass("webdev");
    $("#neontubes").addClass("webdevdarko");

});

$("#imggod").click(function () {

    $("#neontubes").removeClass("webdevdarko");
    $("#neontubes").addClass("webdev");

});

