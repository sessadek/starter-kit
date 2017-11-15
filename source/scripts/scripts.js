(function($){

    var app;
    app = {
        init: function() {
            this._offCanvas();
            this._fitVids();
            this._table();
            this._tabs();
            this._accordion();
            this._popup();
            this._scrollTop();

        },
        _offCanvas: function() {
            // menu offcanvas

            jQuery(".c-nav__icon").on('click', function() {
                jQuery(this).toggleClass('is-active');
                jQuery('.menu').toggleClass('is-inViewport');
                jQuery('.menu__dropdown .menu__item__link').next('.menu__dropdown__sub-menu').removeClass('is-inViewport');
                jQuery('.c-nav__close').addClass('is-active');

            });

            jQuery('.menu__dropdown .menu__item__link').on('click', function() {
                jQuery(this).next('.menu__dropdown__sub-menu').toggleClass('is-inViewport');
            });

            jQuery('.menu__item__back').on('click', function() {
                jQuery(this).parent('.menu__dropdown__sub-menu').removeClass('is-inViewport');
            });

            jQuery('.c-nav__close').on('click', function() {
                jQuery(this).removeClass('is-active');
                jQuery('.menu').removeClass('is-inViewport');
                jQuery(".c-nav__icon").removeClass('is-active');
                jQuery('.menu__dropdown .menu__item__link').next('.menu__dropdown__sub-menu').removeClass('is-inViewport');
            });
        },
        _fitVids: function() {
            // video frame fitvids

            jQuery('iframe').wrap('<div class="js-fitvids"></div>');

            jQuery(".js-fitvids").fitVids();
        },
        _table: function()  {
            jQuery('table').wrap('<div class="c-table__wrapper"/>');
        },
        _tabs: function() {
            jQuery('.tabs .tab-links a').on('click', function(e)  {
                var currentAttrValue = jQuery(this).attr('href');
         
                // Show/Hide Tabs
                jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
         
                // Change/remove current tab to active
                jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
         
                e.preventDefault();
            });
        },

        _accordion: function() {
        	var $itemAccordion = '.accordion';
            function close_accordion_section() {
                $($itemAccordion + ' .accordion__title').removeClass('active');
                $($itemAccordion + ' .accordion__content').slideUp(300).removeClass('open');
            }
         
            $('.accordion__title').click(function(e) {
                // Grab current anchor value
                var currentAttrValue = $(this).attr('href');
         
                if($(e.target).is('.active')) {
                    close_accordion_section();
                } else {
                    close_accordion_section();
         
                    // Add active class to section title
                    $(this).addClass('active');
                    // Open up the hidden content panel
                    $($itemAccordion + ' ' + currentAttrValue).slideDown(300).addClass('open'); 
                }
                e.preventDefault();
            });
        },
        _popup: function() {
            //----- OPEN
            jQuery('[data-popup-open]').on('click', function(e)  {
                var targeted_popup_class = jQuery(this).attr('data-popup-open');
                jQuery('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
         
                e.preventDefault();
            });
         
            //----- CLOSE
            jQuery('[data-popup-close]').on('click', function(e)  {
                var targeted_popup_class = jQuery(this).attr('data-popup-close');
                jQuery('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
         
                e.preventDefault();
            });
        },
        _scrollTop: function() {
            var $scrollTop = jQuery('.c-action__gototop');
            jQuery(window).scroll(function() {
                if (jQuery(this).scrollTop() > 150) {
                    $scrollTop.fadeIn();
                } else {
                    $scrollTop.fadeOut();
                }
            });
            $scrollTop.click(function() {
                jQuery('html, body').animate({
                    scrollTop: 0
                }, 500);
            });
        },

    };

    app.init();


}(jQuery));

