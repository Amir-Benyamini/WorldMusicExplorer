const mongoose = require("../../../server")
const { data } = require("jquery")

class DBManager {
  constructor() {
    this.db = {
      artist: require("../../models/Artist"),
      song: require("../../models/Song"),
      album: require("../../models/Album"),
      country: require("../../models/Country"),
    }
  }

  async createAlbum(albumData, artistName) {
    const artist = await this.db.artist.findOne({ name: artistName })
    const album = new this.db.album({
      name: albumData.name,
      releaseDate: albumData.releaseDate,
      artist: artist,
    })
    album.save()
  }

  async getArtistByName(name) {
    const artist = await this.db.artist.findOne({ name: name })
    return artist
  }

  async arrangeSongObjects(songsData) {
    const songs = []
    for (let s of songsData) {
      let album = new this.db.album({
        name: s.album.name,
        releaseDate: s.album.releaseDate,
        artist: s.artist,
      })
      let song = new this.db.song({
        name: s.name,
        playCount: s.playCount,
        bpm: s.bpm,
        spotifyId: s.spotifyId,
        lastFmLink: s.lastFmLink,
        youtubeId: s.youtubeId,
        album: album,
      })
      songs.push(song)
    }
    return songs
  }

  async getAllSavedSongs() {
    const songs = await this.db.song.find({})
    return songs
  }
  async saveSong(songData) {
    try {
      const artist = await this.db.artist.findById(songData.album.artist._id)
      const album = new this.db.album({
        name: songData.album.name,
        releaseDate: songData.album.releaseDate,
        artist: artist,
      })
      album.save()
      const song = new this.db.song({
        name: songData.name,
        playCount: songData.playCount,
        bpm: songData.bpm,
        spotifyId: songData.spotifyId,
        lastFmLink: songData.lastFmLink,
        youtubeId: songData.youtubeId,
        album: album,
      })
      song.save()
      return song
    } catch (err) {
      console.log("err" + err)
    }
  }
  async deleteSong(songId) {
    // Should also remove the song's album to prevent irreleant data storing
    const album = await this.db.song.findById(songId, { album: 1, _id: 0 })
    this.db.album.findOneAndDelete({ _id: album.album }).exec((err) => {
      err ? console.log(err) : null
    })
    this.db.song.findOneAndDelete({ _id: songId }).exec((err) => {
      err ? console.log(err) : null
    })
  }
  async getArtistByCountry(country) {
    try {
      const artists = await this.db.country
        .findOne({ name: country })
        .populate("artists")
      return artists.artists
    } catch (err) {
      console.log(err)
    }
  }

  async getAllCountries() {
    const countries = this.db.country.find({}, { _id: 0, __v: 0, artists: 0 })
    return countries
  }
}

const dbManager = new DBManager()
module.exports = dbManager
