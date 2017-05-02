/**
 * @file
 * Javascript for portifólio site in general.
 */

(function ($, Drupal, Bootstrap) {
  'use strict';

  /**
   * Bootstrap dropdown behaviors.
   */
  Drupal.behaviors.smoothAnchorScroll = {
    attach: function (context) {
      $('a.smooth-anchor').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 30
        }, 500);
      });
    }
  };

})(jQuery, Drupal, Drupal.bootstrap);
