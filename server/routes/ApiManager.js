const dbManager = require("./resources/dbManager")
const lastFm = require("./resources/lastFm")
const { maxSongsPerPage } = require("../../config")

class ApiManager {
  constructor() {
    this.songs = []
  }
  getSongsLimitPerArtist(artistCount) {
    let songsLimitPerArtist = Math.trunc(maxSongsPerPage / artistCount)
    return songsLimitPerArtist
  }
  async getSongs(country, res) {
    this.songs = []
    dbManager.getArtistByCountry(country).then(async (artists) => {
      let songsLimit = this.getSongsLimitPerArtist(artists.length)

      // If there are more artists than MAX songs, get x artists and a song for each, according to MAX
      if (songsLimit) {
        artists.splice(maxSongsPerPage + 1)
        songsLimit = 1
      }

      const artistsTopTracks = await lastFm.getTopTracksOfArtist(artists) // also pass songs limit
      const songs = await dbManager.arrangeSongObjects(artistsTopTracks)
      res.send(songs)
    })
  }

  async getCountriesFromDB() {
    return await dbManager.getAllCountries()
  }

  async getPopularSongsInCountry(country, res){
    // using lastFm route
    res.send("this route is not ready yet")
  }

  saveSongToDB(songId) {
    dbManager.saveSong(songId)
  }
  deleteSongFromDB(songId) {
    dbManager.deleteSong(songId)
  }
  async getMyPlaylist(res) {
    const data = await dbManager.getAllSavedSongs()
    res.send(data)
  }
}

const apiManager = new ApiManager()
module.exports = apiManager
