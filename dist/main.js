const manager = new MusicManager
const renderer = new Renderer
//pass the filters values on user search and make a get request to the server
$('#countryInpBtn').on('click', async function () {
	const countryInput = $('#countryInp').val()
	// const PopularInput = $('#popularInp').is(':checked')
	const bpm = $("input[name='bpm']:checked").val();
	// const songsList = manager.getSongByFilters(getDummySongs(), bpm)

	const songsList = await manager.getSongByFilters(countryInput, bpm)
	renderer.renderSongs(songsList)

})

$('#playlist').on('click', async function () {
	const songsList = await manager.getSongsFromDB()
	renderer.renderMyPlaylist(songsList)
})

// on page load add countries to select dropdown

$(document).ready(async function () {
	const countries = await manager.getCountries()
	renderer.renderCountries(countries)
})

//find song name and artist, then find the song object and save it to DB
$('.now-playing-container').on('click', '#like', function () {
	const songId = $(this).closest('.song').data().id

	manager.songs.forEach(song => {
		if (songId === song._id) {
			manager.saveSongToDB(song)

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

			const songsList = manager.getSongsFromDB
			renderer.renderMyPlaylist(songsList)
			alert(`${song.name} was deleted from your playlist!`)
		} else {
			console.log('error')
		}
	})

})

$('#next').on('click', async function () {
	manager.nextSong()
	renderer.renderSongs(manager.songs)
})
$('#previous').on('click', async function () {
	manager.prevSong()
	renderer.renderSongs(manager.songs)
})