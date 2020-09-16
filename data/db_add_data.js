const artistsByCountry = require("./artistsByCountryFull.json")
const mongoose = require("../server")
const Artist = require("../server/models/Artist")
const Country = require("../server/models/Country")

// run the code below once only!
/* const countries = Object.keys(artistsByCountry)

 for (let country of countries) {
  let c = new Country({ name: country, artists: [] })
  for (let artist of artistsByCountry[country]) {
    let a = new Artist({
      name: artist.name,
      country: c,
      wikipediaSummary: artist.wikiLink,
    })
    a.save()
    c.artists.push(a)
  }
  c.save()
  /* =======WIKPEDIA=======
   * getting wikipediaSummary
   * example https://en.wikipedia.org/api/rest_v1/page/summary/The_Beatles
   * getting the "extract" key only, to get a summary
   * the artists in the json each have a "wikiLink", that can be used for that
   *
   * ========Genres=========
   * We can add a genres key to the Artist model, taking the genres array of strings for  each artist in the json file
   * ;
} */