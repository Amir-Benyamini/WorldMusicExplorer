class Renderer {
	constructor() {
		this.songs = []
		this.view = []
	}

	renderCountries(countries) {
		$("#countryInp").empty()
		const source = $("#countries-template").html()
		const template = Handlebars.compile(source)
		const newHTML = template({ countries })
		$('#countryInp').append(newHTML);
	}

	renderSongs(songs) {
		$(".songs").empty()
		const source = $("#songs-template").html()
		const template = Handlebars.compile(source)
		const newHTML = template({ songs })
		$('.songs').append(newHTML);

		const nowPlayingSong = songs.filter(song=>song.isNowPlaying)[0]
		this.renderNowPlaying(nowPlayingSong)
	}


	renderMyPlaylist(myPlaylist) {
		$(".songs").empty()
		const source = $("#my-playlist-template").html()
		const template = Handlebars.compile(source)
		const newHTML = template({ myPlaylist })
		$('.songs').append(newHTML);
	}

	renderNowPlaying(song){
		$(".now-playing-container").empty()
		const source = $("#now-playing-template").html()
		const template = Handlebars.compile(source)
		const newHTML = template(song)
		$(".now-playing-container").append(newHTML)
	}
}