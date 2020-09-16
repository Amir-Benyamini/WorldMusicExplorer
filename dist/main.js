const manager = new MusicManager
const renderer = new Renderer
$('#countryInpBtn').on('click', function () {
	const countryInput = $('#countryInp').val()
	const PopularInput = $('#popularInp').is(':checked')
	const radioValue = $("input[name='bpm']:checked").val();
	
	// const songsList = manager.getSongByFilters(countryInput, PopularInput, radioValue)
	const songsList = manager.getSongByFilters(dummySongs)
	renderer.renderSongs(songsList)

})

$('#playlist').on('click', function(){
  const songsList = manager.getSongsFromDB(dummySongs)
  renderer.renderMyPlaylist(songsList)
})

// on page load add countries to select dropdown

$(document).ready(async function () {

})