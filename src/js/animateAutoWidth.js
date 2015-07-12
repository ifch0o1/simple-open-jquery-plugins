(function($) {

	$.fn.sjAnimateAutoWidth = function(options) {
		var currentWidth,
		    newWidth;

		var settings = $.extend({
			duration: 200,
			easing: 'swing'
		}, options);

		this.each(function(index, el) {
			currentWidth = el.width();
			el.css('width', 'auto');
			newWidth = el.width();
			el.width(currentWidth);
			el.animate({'width': newWidth}, settings);
		});

		return this;
	}

}(jQuery));