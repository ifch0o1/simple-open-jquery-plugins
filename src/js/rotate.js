(function($) {

	$.fn.sjRotate = function(deg, options) {
		if (deg === undefined || !$.isNumeric(deg)) {
			throw new Error('Expecting first argument as numeric value.');
		}

		var options = options || {};
		var settings = $.extend({
			duration: 200
		}, options);

		if (!settings.preventStop) {
			this.stop();
		}

		this.animate({
			'transform': 'rotate(' + deg + 'deg)'
		}, settings)
		
		return this;
	}

}(jQuery));