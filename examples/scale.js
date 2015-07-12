$(document).ready(function() {
	$('.d1').on('click', function() {
		$(this).sjScale(1.2, 1.1, {
			duration: 100,
			done: function() {
				$(this).sjScale(1);
			}
		});
	});

	$('.d2').on('click', function() {
		$(this).sjScale(0.2, {
			duration: 600,
			easing: 'linear',
			done: function() {
				$(this).sjScale(1);
			}
		});
	})
});