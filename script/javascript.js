jQuery('.open-booking').magnificPopup({
	type: 'inline',
	preloader: false,
	modal: true
});

jQuery('.open-club').magnificPopup({
	type: 'inline',
	preloader: false,
	modal: true
});

jQuery(document).on('click', '.close-modal', function (e) {
	e.preventDefault();
	jQuery.magnificPopup.close();
});