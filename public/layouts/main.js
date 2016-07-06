$(document).ready(function() {
	$('a[id^=deleteEvent]').on('click', function(e) {
		var deleteId = $(this).data('delete');
		$.ajax({
			url: '/events/delete/' + deleteId,
			type: 'DELETE',
			success: function(result) {
				console.log(result);
			}
		});
		window.location = '/events';
	});
});