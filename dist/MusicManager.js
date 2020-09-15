const dummySongs =
	[{ name: 'toxicity', artist: 'system of a down', album: 'toxicity', released: 2001 },
	{ name: 'i am the walrus', artist: 'the beatles', album: 'magical mystery tour', released: 1967 },
	{ name: 'tell me baby', artist: 'red hot chili peppers', album: 'stadium arcadium', released: 2006 },
	{ name: 'ride', artist: 'twenty one pilots', album: 'blurryface', released: 2015 }]

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

	getSongByFilters= async function (country, popular) {
		// let songsList = await $.get(`/songs/${country}/?popular=${popular}`)
		this.playSongs(songsList)

		return this.songs

	}

	getSongsFromDB = async function () {
		// let myPlaylist = await $.get(`/songs/myPlaylist`)
		this.playSongs(myPlaylist)

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

const Manager = new MusicManager()

