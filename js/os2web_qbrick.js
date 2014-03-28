/**
 * @file os2web_qbrick.js
 */

(function ($) {
  var widget = Qbrick.Publisher.widget().firstOrDefault('(w, index, additionalParam) => \'player\' === w.widgetId && (console.log(additionalParam) || true)', 'additionalParamValue');
  function play(amount) {
    if (widget) {
      widget.position(amount);
      widget.play();
    }
  }
})(jQuery);
