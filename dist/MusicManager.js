// const countries = ["algeria", "afganistan", "Bahamans"]
// const getDummySongs = function () {
// 	return [
// 		{
// 			"_id": "5f62253d56c2e5a5fd6bf5cb",
// 			"name": "Az Man Begurezed",
// 			"playCount": 3556,
// 			"bpm": 86.862,
// 			"spotifyId": "1km5bnYhzfFK0qrs5hLRYa",
// 			"lastFmLink": "https://www.last.fm/music/Ahmad+Zahir/_/Az+Man+Begurezed",
// 			"youtubeId": null,
// 			"album": {
// 				"_id": "5f62253d56c2e5a5fd6bf5ca",
// 				"name": "The Kite Runner",
// 				"releaseDate": "2007-01-01T00:00:00.000Z",
// 				"artist": {
// 					"_id": "5f61c520f5acfef50dc24256",
// 					"name": "Ahmad Zahir",
// 					"country": "5f61c520f5acfef50dc24255",
// 					"wikipediaSummary": "https://en.wikipedia.org/wiki/Ahmad_Zahir",
// 					"__v": 0
// 				}
// 			}
// 		},
// 		{
// 			"_id": "5f62253d56c2e5a5fd6bf5cd",
// 			"name": "Jhaptal/dadra",
// 			"playCount": 1416,
// 			"bpm": 106.468,
// 			"spotifyId": "1Z4NxUHOoeVV8xwv20JBBy",
// 			"lastFmLink": "https://www.last.fm/music/Aziz+Herawi/_/Jhaptal%2Fdadra",
// 			"youtubeId": "GVSH6gsj-KM",
// 			"album": {
// 				"_id": "5f62253d56c2e5a5fd6bf5cc",
// 				"name": "Master Of Afghani Lutes",
// 				"releaseDate": "1992-01-01T00:00:00.000Z",
// 				"artist": {
// 					"_id": "5f61c520f5acfef50dc2425a",
// 					"name": "Aziz Herawi",
// 					"country": "5f61c520f5acfef50dc24255",
// 					"wikipediaSummary": "https://en.wikipedia.org/wiki/Aziz_Herawi",
// 					"__v": 0
// 				}
// 			}
// 		},
// 		{
// 			"_id": "5f62253d56c2e5a5fd6bf5cf",
// 			"name": "Keliwali in the melodic mode of kastori",
// 			"playCount": 756,
// 			"bpm": 100.48,
// 			"spotifyId": "09SMlD15piqWpsFju84FoO",
// 			"lastFmLink": "https://www.last.fm/music/Ustad+Mohammad+Omar/_/Keliwali+in+the+melodic+mode+of+kastori",
// 			"youtubeId": null,
// 			"album": {
// 				"_id": "5f62253d56c2e5a5fd6bf5ce",
// 				"name": "Ustad Mohammad Omar: Virtuoso from Afghanistan",
// 				"releaseDate": "2002-04-23T00:00:00.000Z",
// 				"artist": {
// 					"_id": "5f61c520f5acfef50dc2425c",
// 					"name": "Ustad Mohammad Omar",
// 					"country": "5f61c520f5acfef50dc24255",
// 					"wikipediaSummary": "https://en.wikipedia.org/wiki/Mohammad_Omar_(musician)",
// 					"__v": 0
// 				}
// 			}
// 		},
// 		{
// 			"_id": "5f62253d56c2e5a5fd6bf5d1",
// 			"name": "Khursheed-i-Mann - Live",
// 			"playCount": 88,
// 			"bpm": 114.677,
// 			"spotifyId": "64Wdec5ZqrLtPxoZ1dMW8X",
// 			"lastFmLink": "https://www.last.fm/music/Sarban/_/Khursheed-i-Mann+-+Live",
// 			"youtubeId": null,
// 			"album": {
// 				"_id": "5f62253d56c2e5a5fd6bf5d0",
// 				"name": "Live in Concert",
// 				"releaseDate": "2014-09-29T00:00:00.000Z",
// 				"artist": {
// 					"_id": "5f61c520f5acfef50dc2425e",
// 					"name": "Sarban",
// 					"country": "5f61c520f5acfef50dc24255",
// 					"wikipediaSummary": "https://en.wikipedia.org/wiki/Sarban",
// 					"__v": 0
// 				}
// 			}
// 		},
// 		{
// 			"_id": "5f62253d56c2e5a5fd6bf5d3",
// 			"name": "Sheikh Ahmad-e Jâm",
// 			"playCount": 487,
// 			"bpm": 112.467,
// 			"spotifyId": "6GL9Lj6F1pN69nWHlWCvCz",
// 			"lastFmLink": "https://www.last.fm/music/Mohammad+Rahim+Khushnawaz/_/Sheikh+Ahmad-e+J%C3%A2m",
// 			"youtubeId": null,
// 			"album": {
// 				"_id": "5f62253d56c2e5a5fd6bf5d2",
// 				"name": "Afghanistan: Le rubâb de Hérat – Afghanistan: The Rubâb of Herat",
// 				"releaseDate": "1993-01-01T00:00:00.000Z",
// 				"artist": {
// 					"_id": "5f61c520f5acfef50dc24260",
// 					"name": "Mohammad Rahim Khushnawaz",
// 					"country": "5f61c520f5acfef50dc24255",
// 					"wikipediaSummary": "https://www.last.fm/music/Mohammad+Rahim+Khushnawaz",
// 					"__v": 0
// 				}
// 			}
// 		}
// 	]
// }


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
	nextSong() {
		for (let song of this.songs) {
			if (song.isNowPlaying) {
				song.isNowPlaying = false
				const songIndex = this.songs.indexOf(song)
				const nextSongIndex = songIndex + 1
				const nextSong = this.songs[nextSongIndex]
				nextSong.isNowPlaying = true
				break
			}
		}

	}
	getCountries = async function () {
		const countriesData = await $.get('/countries')
		this.countries = countriesData
		return countriesData
	}
	getSongByFilters = async function (country, bpm) {
		// let songsList = await $.get(`/songs/${country}/?popular=${popular}`)
		let songsList = await $.get(`/songs/${country}`)

		if (bpm === "fast") {
			this.songs = []
			const fastSongs = songsList.filter(song => song.bpm >= 100)
			this.playSongs(fastSongs)
		} else if (bpm === "slow") {
			this.songs = []
			const slowSongs = songsList.filter(song => song.bpm <= 100)
			this.playSongs(slowSongs)
		} else {
			this.songs = []
			this.playSongs(songsList)
		}

		return this.songs

	}

	getSongsFromDB = async function () {
		let myPlaylist = await $.get(`/songs/myPlaylist`)
		this.songs = []
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

	deleteSongToDB(songName) {
		$.ajax({
			type: 'DELETE',
			url: `/song/${songName}`,
			success: () => alert(`The song ${songName} is now removed!`),
		})
	}
}

