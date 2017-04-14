/**
 * @file
 * Javascript for portifólio home page.
 */
Drupal.bootstrap.layoutEvent = 
  Array.isArray(Drupal.bootstrap.layoutEvent) ? Drupal.bootstrap.layoutEvent : [];

(function ($, Drupal, Bootstrap) {
  'use strict';

  var breakpoints = {
      xs: {min: 0    , max: 767  },
      sm: {min: 768  , max: 991  },
      md: {min: 992  , max: 1199 },
      lg: {min: 1200 , max: 9999 }
    };
  
  /**
   * Bootstrap breakpoint events.
   */
  Drupal.behaviors.bootstrapBreakpointEvents = {
    attach: function (context) {
      var currentBreakpoint;

      resizeHandler();
      $(window).on('resize', resizeHandler);

      function resizeHandler() {
        var windowWidth = window.innerWidth;
        
        $.each(breakpoints, function (index, breakpoint) {
          if (windowWidth <= breakpoint.max) {
            if (currentBreakpoint != index) {
              $.each(Drupal.bootstrap.layoutEvent, function (key, func) {
                if (typeof func === 'function') {
                  func(index, currentBreakpoint);
                }
              });
              Drupal.bootstrap.breakpoint = index;
              currentBreakpoint = index;
            }
            return false;
          }
        });
      }
    }
  };

  /**
   * Bootstrap dropdown behaviors.
   */
  Drupal.behaviors.bannerMaskLoad = {
    attach: function (context) {
      var $imageMaskContainer = $('.image-mask');

      Drupal.bootstrap.layoutEvent.push(imageMaskEvent);
      imageMaskEvent(Drupal.bootstrap.breakpoint);
      $('body').addClass('js-banner-mask-loaded');

      function imageMaskEvent(currentMedia, prevMedia) {
        var $imageMask = 
            $imageMaskContainer.find('[data-media="' + currentMedia + '"]');

        $imageMaskContainer.children('.active').removeClass('active').hide();
        $imageMask
          .addClass('active')
          .hide()
          .attr('src', $imageMask.data('src'))
          .fadeIn(10000);
      }
    }
  };

})(jQuery, Drupal, Drupal.bootstrap);
