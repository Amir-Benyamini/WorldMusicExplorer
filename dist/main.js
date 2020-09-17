const manager = new MusicManager()
const renderer = new Renderer()
//pass the filters values on user search and make a get request to the server
$("#countryInpBtn").on("click", async function () {
  const countryInput = $("#countryInp").val()
  // const PopularInput = $('#popularInp').is(':checked')
  const bpm = $("input[name='bpm']:checked").val()
  // const songsList = manager.getSongByFilters(getDummySongs(), bpm)

  const songsList = await manager.getSongByFilters(countryInput, bpm)
  renderer.renderSongs(songsList)
})

$("#playlist").on("click", async function () {
  const songsList = await manager.getSongsFromDB(manager.songs)
  renderer.renderSongs(songsList)
})

// on page load add countries to select dropdown

$(document).ready(async function () {
  const countries = await manager.getCountries()
  renderer.renderCountries(countries)
})

//find song name and artist, then find the song object and save it to DB
$("#like-dislike").on("click", async function () {
  const songId = $(".now-playing").attr("data-id")
  const isSaved = $(this).attr("data-isSaved")
  if (!isSaved) {
    await manager.deleteSongToDB(songId)
  } else {
    await manager.saveSongToDB(songId)
  }
  renderer.renderSongs(manager.songs)
})

$("#next").on("click", async function () {
  manager.nextSong()
  renderer.renderSongs(manager.songs)
})
$("#previous").on("click", async function () {
  manager.prevSong()
  renderer.renderSongs(manager.songs)
})
