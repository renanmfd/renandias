/**
 * @file
 * Javascript for portifólio page.
 */

(function ($, Drupal, Bootstrap) {
  'use strict';

  /**
   * Colorbox for content type project on full display behaviors.
   */
  Drupal.behaviors.portifolioBackToTopButton = {
    attach: function (context) {
      var $body = $('body'),
        scrollTrigger = $('.view-page-portifolio .view-content').offset().top,
        $template = $('<div></div')
          .hide()
          .addClass('back-to-top')
          .append('<span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>')
          .on('click', function () {
            $('html, body').animate({
              scrollTop: 0
            }, 500);
          })
          .appendTo($('#page'));

      $(document).on('scroll', function () {
        var scroll = window.scrollY;
        if (scroll > scrollTrigger && !$body.hasClass('scroll-to-top')) {
          $body.addClass('scroll-to-top');
          $template.fadeIn();
        } else if (scroll <= scrollTrigger && $body.hasClass('scroll-to-top')) {
          $body.removeClass('scroll-to-top');
          $template.fadeOut();
        }
      });
    }
  };

})(jQuery, Drupal, Drupal.bootstrap);
