(function($) {

    $.fn.sjTile = function() {
        var layer = $('<div>', {class: 'sj-tile-layer'})
            .css({
                'background-color': 'rgba(0, 0, 0, 0.6)',
                'position': 'absolute',
                'top': 0,
                'left': 0,
                'width': '100%',
                'height': '100%'
            });

        this.each(function() {
            var hoverContentElement = $(this).find('> div').last();
            
            // Prepend dark layer for hovered content.
            hoverContentElement.prepend(layer.clone());
            hoverContentElement.css({
                'bottom': '-' + (hoverContentElement.outerHeight()) + 'px'
            });

            if (hoverContentElement.outerHeight() > $(this).outerHeight()) {
                $(this).outerHeight(hoverContentElement.outerHeight());
            }
        });

        this.hover(function() {
            var hoverContentElement = $(this).find('> div').last();
            hoverContentElement.stop();
            hoverContentElement.animate({
                'bottom': '0px'
            }, 300);
        }, function() {
            var hoverContentElement = $(this).find('> div').last();
            hoverContentElement.stop();
            hoverContentElement.animate({
                'bottom': '-' + (hoverContentElement.outerHeight()) + 'px'
            }, 300);
        });

        return this;
    }

}(jQuery));

$(document).ready(function() {
    $('.sj-tile').sjTile();
});