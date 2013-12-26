/*! Overlay Banner - v0.1.0 - 2013-12-26
* https://github.com/to4iki/jquery-overlaybanner
* Copyright (c) 2013 tsk takezawa; Licensed MIT */
(function($) {

  $.fn.overlayBanner = function(options) {

    // options
    options = $.extend( {
      'togglePosition': $('footer'),
      'toggleSpeed': '400',
      'seesionValid': true,
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
          if (options.sessionValid === true) {
            setHideSession();
          }
        }
      });

    });

    // methods
    function init($elem) {
      if (getHideSeesion() !== 'true') {
        $elem.css({
          'background-color': options.bannerStyle.backgroundColor,
          'height': options.bannerStyle.height,
          'width': options.bannerStyle.width,
          'position': 'fixed',
          'left': 0,
          'bottom': 0
        });
      } else {
        $elem.css('display', 'none');
      }
    }

    function close($elem) {
      $elem.fadeOut(options.bannerStyle).queue(function() {
        $elem.remove();
      });
    }

    function setHideSession() {
      var path = location.pathname;
      var sessionName = 'hide_seesion=true; path=' + path + '; ';
      document.cookie = sessionName;
    }

    function getHideSeesion() {
      var start = '',
          end = '';
      if (document.cookie.length > 0) {
        start = document.cookie.indexOf('hide_seesion=');
        if (start !== -1) {
          start = start + 'hide_seesion'.length + 1;
          end = document.cookie.indexOf(';', start);
          if (end === -1) {
            end = document.cookie.length;
          }
          return unescape(document.cookie.substring(start, end));
        }
      }
      return '';
    }

  };
}(jQuery));
