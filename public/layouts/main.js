$(document).ready(function() {
	$('#deleteEvent').on('click', function(e) {
		deleteId = ${'#deleteEvent'}.data('delete');
		$.ajax({
			url: '/events/delete/' + deleteId,
			type: 'delete',
			success: function(result) {
				
			}
		});
		window.location = '/events';
	});
});