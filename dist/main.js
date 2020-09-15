
$('#countryInpBtn').on('click', function () {
	const countryInput = $('#countryInp').val()
	const PopularInput = $('#popularInp').is(':checked')
	const radioValue = $("input[name='bpm']:checked").val();
	
	Manager.getSongByFilters(countryInput, PopularInput, radioValue)
})


// $('#like').on('click', function(){

// 	const likedSong = $('dsfsd').val
// 	Manager.saveSongToDB(likedSong)
// })

