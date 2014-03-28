/**
 * @file os2web_qbrick.js
 */

(function ($) {
  var qbrick_widget;
  Drupal.behaviors.os2web_qbrick = {
    attach: function(context, settings) {
      var $player = $('#qbrick');
      Qbrick.Publisher.create(document.body, {
        mcid : $player.data('qbrick-mcid'),
        widgetId : 'qbrick',
        widgetType : 'professional',
        height: 180,
        width: 320,
      });
      $('.qbrick-seek').click(function(e) {
        Drupal.behaviors.os2web_qbrick.play($(this).data('qbrick-seek'));
      });
    },
    play: function(amount) {
      if (!qbrick_widget) {
        qbrick_widget = Qbrick.Publisher.widgets().qbrick;
      }
      if (qbrick_widget) {
        qbrick_widget.position(amount);
        qbrick_widget.play();
      }
    }
  };

})(jQuery);
