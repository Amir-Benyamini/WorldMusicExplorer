const dummySongs =
	[{ song: 'toxicity', artist: 'system of a down', album: 'toxicity', released: 2001 },
	{ song: 'i am the walrus', artist: 'the beatles', album: 'magical mystery tour', released: 1967 },
	{ song: 'tell me baby', artist: 'red hot chili peppers', album: 'stadium arcadium', released: 2006 },
	{ song: 'ride', artist: 'twenty one pilots', album: 'blurryface', released: 2015 }]

class MusicManager {
	constructor() {
		this.songs = []
	}

	playSongs (songsList) {
		const firstSong = songsList.splice(0, 1)
		const restOfList = songsList.splice(0, songsList.length)

		firstSong[0].isNowPlaying = true
		restOfList.forEach(song => {
			song.isNowPlaying = false
		})

		this.songs.push(firstSong[0])
		restOfList.forEach(song => this.songs.push(song))
	}

	getSongByFilters= function (country, popular) {
		// let songsList = await $.get(`/songs/${country}/?popular=${popular}`)
		this.playSongs(country)

		return this.songs

	}

	getSongsFromDB = function (dummy) {
		// let myPlaylist = await $.get(`/songs/myPlaylist`)
		this.playSongs(dummy)

		return this.songs
	}

	saveSongToDB(songObj) {
		$.ajax({
			type: 'POST',
			url: '/song',
			data: songObj,
			success: () => alert(`The song ${songObj.name} is now saved!`),
		})
	}

	deleteSongToDB(songName){
		$.ajax({
			type: 'DELETE',
			url: `/song/${songName}`,
			success: () => alert(`The song ${songName} is now removed!`),
		})
	}
}


