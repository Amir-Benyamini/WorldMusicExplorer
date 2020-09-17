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
    $("#countryInp").append(newHTML)
  }

  renderSongs(songs) {
    const $songsContainer = $(".songs")
    $songsContainer.empty()
    const source = $("#songs-template").html()
    const template = Handlebars.compile(source)
    const newHTML = template({ songs })
    $songsContainer.append(newHTML)
    $songsContainer.hasClass("hidden")
      ? $songsContainer.removeClass("hidden")
      : null

    console.log(songs)
    const nowPlayingSong = songs.find((song) => song.isNowPlaying)
    this.renderNowPlaying(nowPlayingSong)
  }

  renderMyPlaylist(myPlaylist) {
    $(".songs").empty()
    $(".now-playing-container").empty()
    const source = $("#my-playlist-template").html()
    const template = Handlebars.compile(source)
    const newHTML = template({ myPlaylist })
    $(".songs").append(newHTML)
  }

  renderNowPlaying(song) {
    const $nowPlayingContainer = $(".now-playing-container")
    $nowPlayingContainer.empty()

    const source = $("#now-playing-template").html()
    const template = Handlebars.compile(source)
    const newHTML = template(song)
    $nowPlayingContainer.append(newHTML)
    $nowPlayingContainer.hasClass("hidden")
      ? $nowPlayingContainer.removeClass("hidden")
      : null

    const $controlBar = $("#control-bar")
    const $likeDislikeBtn = $controlBar.find("#like-dislike")
    $likeDislikeBtn.attr("data-isSaved", song.isSaved)
    song.isSaved
      ? $likeDislikeBtn.find("i").text("thumb_down")
      : $likeDislikeBtn.find("i").text("thumb_up")

    $controlBar.hasClass("hidden") ? $controlBar.removeClass("hidden") : null
    $("#wikiBtn").attr(
      "onclick",
      `window.open('${song.album.artist.wikipediaSummary}')`
    )
    if (song.youtubeId) {
      $("#youtubeBtn").attr(
        "onclick",
        `window.open('https://www.youtube.com/watch?v=${song.youtubeId}')`
      )
      $("#wikiBtn").disabled = false
    } else {
      $("#wikiBtn").disabled = true
    }
  }
}
