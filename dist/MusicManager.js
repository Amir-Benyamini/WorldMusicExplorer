const dummySongs =

[{name:'toxicity', artist: 'system of a down',album: 'toxicity', released: 2001},
 {name:'i am the walrus', artist: 'the beatles',album: 'magical mystery tour', released: 1967},
	{name:'tell me baby', artist: 'red hot chili peppers',album: 'stadium arcadium', released: 2006}, 
	{name:'ride', artist: 'twenty one pilots',album: 'blurryface', released: 2015}]



class MusicManager{
	constructor(){
		this.songs = []
	}

	getSongByFilters(songsArry){

		const firstSong = songsArry.splice(0, 1)
		const restOfList = songsArry.splice(0, songsArry.length)

		firstSong[0].isNowPlaying = true
		restOfList.forEach(song => {
			song.isNowPlaying = false
		})

		this.songs.push(firstSong[0])
		restOfList.forEach(song => this.songs.push(song))

		return this.songs

	}
}	

const Manager = new MusicManager()

Manager.getSongByFilters(dummySongs)