const manager = new MusicManager
const renderer = new Renderer
//pass the filters values on user search and make a get request to the server
$('#countryInpBtn').on('click', function () {
	const countryInput = $('#countryInp').val()
	const PopularInput = $('#popularInp').is(':checked')
	const bpm = $("input[name='bpm']:checked").val();
	// const songsList = manager.getSongByFilters(countryInput, PopularInput, bpm)
	const songsList = manager.getSongByFilters(getDummySongs(), bpm)
	renderer.renderSongs(songsList)

})

$('#playlist').on('click', function () {
	const songsList = manager.getSongsFromDB(getDummySongs())
	renderer.renderMyPlaylist(songsList)
})

// on page load add countries to select dropdown

$(document).ready(function () {
	renderer.renderCountries(countries)
})

//find song name and artist, then find the song object and save it to DB
$('.songs').on('click', '#like', function () {
	const songId = $(this).closest('.song').data().id

	manager.songs.forEach(song => {
		if (songId === song._id) {
			manager.saveSongToDB(song)
			alert(`${song.name} was added to your playlist!`)
		} else {
			console.log('error')
		}
	})
})

$('.songs').on('click', '#dislike', function () {

	const songId = $(this).closest('.song').data().id
	manager.songs.forEach(song => {
		if (songId === song._id) {
			manager.deleteSongToDB(song._id)

			const songsList = manager.getSongsFromDB(getDummySongs())
			renderer.renderMyPlaylist(songsList)
			alert(`${song.name} was deleted from your playlist!`)
		} else {
			console.log('error')
		}
	})

})

