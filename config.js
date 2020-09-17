const dotenv = require("dotenv")
dotenv.config()
module.exports = {
  port: process.env.PORT,
  spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
  spotifySecretId: process.env.SPOTIFY_CLIENT_SECRET,
  lastFmApiKey: process.env.LASTFM_API_KEY,
  maxSongsPerResponse:process.env.MAX_SONGS_PER_PAGE
}