(function($) {

	$.fn.sjScale = function() {
		if (arguments[0] === undefined || !$.isNumeric(arguments[0])) {
			throw new Error('Cannot scale without value. Excepting argument[0] as numeric value');
		}

		var x, y,
			options = {};

		if (typeof arguments[1] == 'object') {
			x = y = arguments[0];
			options = arguments[1];
		}
		else {
			x = arguments[0];
			y = arguments[1] || x;
		}

		if ($.isEmptyObject(options) && typeof arguments[2] == 'object') {
			options = arguments[2];
		}

		var settings = $.extend({
			duration: 200
		}, options);

		// By default animation will stop(). It's useful if 
		// sjScale is called multiple times before the animation is
		// finished.
		// If options.preventStop is true-like value,
		// The animation will not stop().
		if (!settings.preventStop) {
			this.stop();
		}

		this.animate({
			'transform': 'scale(' + x + ', ' + y + ')'
		}, settings);

		return this;
	}

}(jQuery));