/**
 * @file os2web_qbrick.js
 */

(function ($) {
  var qbrick_widget;
  Drupal.behaviors.os2web_qbrick = {
    attach: function(context, settings) {
      var $player = $('#qbrick-container');
      Qbrick.Publisher.create(document.getElementById('qbrick-container'), {
        mcid : $player.data('qbrick-mcid'),
        widgetId : 'my_qbrick',
        widgetType : 'professional',
        height: 180,
        width: 320,
        init: true
      });
      $('.qbrick-seek').click(function(e) {
        e.preventDefault();
   	var position = $(this).data('qbrick-seek');
	if (Qbrick.Publisher.flashVersion()) {
	  Qbrick.Publisher.widgets('my_qbrick').position(position);
	}
	else {
	  // When HTML5, qbrick has an odd error where it should be 
          // seconds instead of miliseconds.
	  Qbrick.Publisher.widgets('my_qbrick').position(position/1000);
	}
      });
    }
  };

})(jQuery);
