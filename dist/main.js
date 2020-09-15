
$('#countryInpBtn').on('click', function () {
	const countryInput = $('#countryInp').val()
	const PopularInput = $('#popularInp').is(':checked')
	const radioValue = $("input[name='bpm']:checked").val();
	
	Manager.getSongByFilters(countryInput, PopularInput, radioValue)
})
