const axios = require("axios")
const cheerio = require("cheerio")
const spotifyApi = require("./spotify")
const { lastFmApiKey } = require("../../../config")

const getExternalAppIds = async function (tracks) {
  const spotifyBaseUrl = "https://open.spotify.com/track/"
  const youtubeBaseUrl = "https://www.youtube.com/watch?v="

  for (let track of tracks) {
    let spotify = null
    let youtube = null
    const page = await axios.get(track.lastFmLink)
    const $ = cheerio.load(page.data)

    spotify = $(`a[href*='${spotifyBaseUrl}']`).attr("href")
    youtube = $("a[data-playlink-affiliate='youtube']").first().attr("href")
    youtube = youtube ? youtube : $("#track-page-video-playlink").attr("href")

    if (!youtube && !spotify) {
      tracks.splice(tracks.indexOf(track), 1) // If couldn't find both youtube and spotify, remove ths song from the array and continue to the next
    } else {
      track.youtubeId = youtube ? youtube.split(youtubeBaseUrl)[1] : null

      if (spotify) {
        let spotifyLinkId = spotify.split(spotifyBaseUrl)[1]
        let spotifyData = await spotifyApi.getSongData(spotifyLinkId)
        track.spotifyId = spotifyData.trackUri
        track.bpm = spotifyData.bpm
        track.album = spotifyData.album
      } else {
        track.spotifyId = null
      }
    }
  }
  return tracks
}

const getLastFmTrackData = async function (artist, songsLimit = 1) {
  const tracks = []
  let queryArtistName = artist["name"].toLowerCase().replace(" ", "%20")
  const response = await axios.get(
    `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${queryArtistName}&api_key=${lastFmApiKey}&format=json&limit=${songsLimit}`
  )
  if (response.data.toptracks.track) {
    for (let track of response.data.toptracks.track) {
      let data = {
        name: track.name,
        playCount: track.playcount,
        lastFmLink: track.url,
        artist: artist
      }
      tracks.push(data)
    }
    return tracks
  }
}

const getTopTracksOfArtist = async function (artists, songslimit) {
  const tracklist = []
  for (let artist of artists) {
    let tracks = await getLastFmTrackData(artist,songslimit)
    tracks = await getExternalAppIds(tracks)
    tracklist.push(...tracks)
  }
  return tracklist
}

module.exports = { getTopTracksOfArtist }
