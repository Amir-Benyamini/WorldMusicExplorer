const countries = ["algeria", "afganistan", "Bahamans"]
const dummySongs =
	[{
		name: "Billie Jean",
		playCount: 1223242432,
		bpm: 0,
		spotifyId: "0dQSOy6CUlC4cS9AjfC904",
		lastFmLink: "https://www.last.fm/music/Michael+Jackson/_/Billie+Jean",
		youtubeId:"Zi_XLOBDo_Y",
		album: {
			name: "Thriller",
			releaseDate:"30-11-1982",
			artist:{
				name:"Michael Jackson",
				country:"United States",
				wikipediaSummary:"https://en.wikipedia.org/wiki/Michael_Jackson"
			}
		}
	},
	{
		name: "Billie Jean",
		playCount: 1223242432,
		bpm: 0,
		spotifyId: "0dQSOy6CUlC4cS9AjfC904",
		lastFmLink: "https://www.last.fm/music/Michael+Jackson/_/Billie+Jean",
		youtubeId:"Zi_XLOBDo_Y",
		album: {
			name: "Thriller",
			releaseDate:"30-11-1982",
			artist:{
				name:"Michael Jackson",
				country:"United States",
				wikipediaSummary:"https://en.wikipedia.org/wiki/Michael_Jackson"
			}
		}
	},
	{
		name: "Billie Jean",
		playCount: 1223242432,
		bpm: 0,
		spotifyId: "0dQSOy6CUlC4cS9AjfC904",
		lastFmLink: "https://www.last.fm/music/Michael+Jackson/_/Billie+Jean",
		youtubeId:"Zi_XLOBDo_Y",
		album: {
			name: "Thriller",
			releaseDate:"30-11-1982",
			artist:{
				name:"Michael Jackson",
				country:"United States",
				wikipediaSummary:"https://en.wikipedia.org/wiki/Michael_Jackson"
			}
		}
	},
	{
		name: "Billie Jean",
		playCount: 1223242432,
		bpm: 0,
		spotifyId: "0dQSOy6CUlC4cS9AjfC904",
		lastFmLink: "https://www.last.fm/music/Michael+Jackson/_/Billie+Jean",
		youtubeId:"Zi_XLOBDo_Y",
		album: {
			name: "Thriller",
			releaseDate:"30-11-1982",
			artist:{
				name:"Michael Jackson",
				country:"United States",
				wikipediaSummary:"https://en.wikipedia.org/wiki/Michael_Jackson"
			}
		}
	}
]


	
class MusicManager {
	constructor() {
		this.songs = []
		this.countries = []
	}

	playSongs(songsList) {
		const firstSong = songsList.splice(0, 1)
		const restOfList = songsList.splice(0, songsList.length)

		firstSong[0].isNowPlaying = true
		restOfList.forEach(song => {
			song.isNowPlaying = false
		})

		this.songs.push(firstSong[0])
		restOfList.forEach(song => this.songs.push(song))
	}

	getSongByFilters = function (country, popular) {
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

	deleteSongToDB(songName) {
		$.ajax({
			type: 'DELETE',
			url: `/song/${songName}`,
			success: () => alert(`The song ${songName} is now removed!`),
		})
	}
}


