(function($) {

	$.fn.sjAnimateAutoWidth = function(options) {
		var cw,
		    nw;

		var settings = $.extend({
			duration: 200,
			easing: 'swing'
		}, options);

		this.each(function(index, el) {
			cw = el.width();
			el.css('width', 'auto');
			nw = el.width();
			el.width(cw);
			el.animate({'width': nw}, settings);
		});

		return this;
	}

}(jQuery));