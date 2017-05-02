/**
 * @file
 * Javascript for portifólio site in general.
 */

(function ($, Drupal, Bootstrap) {
  'use strict';

  /**
   * Colorbox for content type project on full display behaviors.
   */
  Drupal.behaviors.colorboxProjectFull = {
    attach: function (context) {
      console.log('colorboxProjectFull');
      $('a.colorbox-project-full').on('click', function (e) {
        e.preventDefault();
        $.colorbox({rel: 'gallery-project-slider'});
      });
    }
  };

})(jQuery, Drupal, Drupal.bootstrap);
