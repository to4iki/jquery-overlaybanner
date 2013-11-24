/*! Overlay Banner - v0.1.0 - 2013-11-24
* https://github.com/bamboo/jquery-overlaybanner
* Copyright (c) 2013 tsk takezawa; Licensed MIT */
(function($) {

  $.fn.overlayBanner = function(options) {

    // options
    options = $.extend( {
      'togglePosition': $('footer'),
      'toggleSpeed': '400',
      'bannerStyle': {
        'height': null,
        'width': null,
        'backgroundColor': '#FFF'
      }
    }, options);

    // core
    return this.each(function() {
      var self = $(this);

      init(self);
      $(window).on('scroll', function() {
        var windowScrollTop = $(this).scrollTop(),
            fadeTogglePosition = options.togglePosition.offset().top - $(this).height();

        if (windowScrollTop > fadeTogglePosition) {
          self.fadeOut(options.toggleSpeed);
        } else {
          (windowScrollTop > 200) ? self.fadeIn(options.toggleSpeed) : null;
        }
      });

      self.on({
        click: function() {
          close($(this));
        }
      });

    });

    // methods
    function init($elem) {
      $elem.css({
        'background-color': options.bannerStyle.backgroundColor,
        'height': options.bannerStyle.height,
        'width': options.bannerStyle.width,
        'position': 'fixed',
        'left': 0,
        'bottom': 0
      });
    }
    function close($elem) {
      $elem.fadeOut(options.bannerStyle).queue(function() {
        $elem.remove();
      });
    }

  };
}(jQuery));
