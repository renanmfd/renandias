/**
 * @file
 * Javascript for portifólio site in general.
 */

(function ($, Drupal, Bootstrap) {
  'use strict';

  /**
   * Colorbox for content type project on full display behaviors.
   */
  Drupal.behaviors.lightboxProjectFull = {
    attach: function (context) {
      console.log('lightboxProjectFull');
    }
  };

})(jQuery, Drupal, Drupal.bootstrap);
