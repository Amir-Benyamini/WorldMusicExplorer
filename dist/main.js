const manager = new MusicManager
const renderer = new Renderer
//pass the filters values on user search and make a get request to the server
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

$(document).ready(function () {
	renderer.renderCountries(countries)
})

//find song name and artist, then find the song object and save it to DB
$('songs').on('click', '#like', function(){
	const songTitle = $(this).closest('.now-playing').find('.title')
	const songArtist = $(this).closest('.now-playing').find('.artist')
	
	manager.this.songs.forEach(song => {
		if(songTitle === song.song && songArtist === song.artist){
			manager.saveSongToDB(song)
		}
	});
})