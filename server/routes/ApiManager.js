const dbManager = require("./resources/dbManager")
const lastFm = require("./resources/lastFm")
const { maxSongsPerResponse } = require("../../config")

class ApiManager {
  constructor() {
    this.songs = []
  }
  getSongsLimitPerArtist(artistCount) {
    let songsLimitPerArtist = Math.trunc(maxSongsPerResponse / artistCount)
    return songsLimitPerArtist
  }
  async getSongs(country, res) {
    this.songs = []
    const artists = await dbManager.getArtistByCountry(country)
    let songsLimit = this.getSongsLimitPerArtist(artists.length)

    /*==========
     * If there are more artists than MAX songs, use only x artists
     * (equals to max)
     * and allow only 1 song for each
     * max is deifned in the .env
     * =========*/
    if (songsLimit < 1) {
      artists.splice(maxSongsPerResponse)
      songsLimit = 1
    }

    const artistsTopTracks = await lastFm.getTopTracksOfArtist(
      artists,
      songsLimit
    ) // also pass songs limit
    const songs = await dbManager.arrangeSongObjects(artistsTopTracks)
    res.send(songs)
  }

  async getCountriesFromDB() {
    let countries = await dbManager.getAllCountries()
    countries = countries.map((c) => c.name)
    return countries
  }

  async getPopularSongsInCountry(country, res) {
    // using lastFm route
    res.send({ message: "this route is not ready yet" })
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
