class Renderer {
	constructor() {
		this.songs = []
		this.view = []
	}

	renderSongs(songs) {
		$(".songs").empty()
		const source = $("#songs-template").html()
		const template = Handlebars.compile(source)
		const newHTML = template({ songs })
		$('.songs').append(newHTML);
	}

	renderNowPlaying(song) {
		$(".now-playing").empty()
		const source = $("#now-playing-template").html()
		const template = Handlebars.compile(source)
		let song
		for (let i in this.songs) {
			if (this.songs[i].isNowPLaying) {
				song = this.songs[i]
			}
		}
		const newHTML = template(song)
		$('.now-playing').append(newHTML);
	}

	renderMyPlaylist(myPlaylist) {
		$(".songs").empty()
		const source = $("#my-playlist-template").html()
		const template = Handlebars.compile(source)
		const newHTML = template({ myPlaylist })
		$('.songs').append(newHTML);
		this.renderSongs(this.songs)
	}
}