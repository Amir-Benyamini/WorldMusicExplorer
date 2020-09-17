const Spotify = require("node-spotify-api")
const { spotifyClientId, spotifySecretId } = require("../../../config")
const axios = require("axios")

const spotify = new Spotify({
  id: spotifyClientId,
  secret: spotifySecretId,
})

const getSongData = async function (spotifyTrackId) {
  try {
    const trackData = await spotify.request(
      `https://api.spotify.com/v1/audio-features/${spotifyTrackId}`
    )
    const albumData = await spotify.request(
      `https://api.spotify.com/v1/tracks/${spotifyTrackId}`
    )

    const trackUri = trackData.uri.split("spotify:track:")[1]
    const bpm = trackData.tempo
    const album = {
      releaseDate: albumData.album.release_date,
      name: albumData.album.name,
    }
    return { trackUri, bpm, album }
  } catch (err) {
    console.log(err)
  }
}

module.exports = { getSongData }
