function initMap(){
  const mapa = new MyMap(document.getElementById('map'));
  mapa.init()
  if(document.getElementById())
}
function addUserToMap(map){
  axios.get('/places/coordinates')
  .then(response => {
    response.data.forEach(coordenate => {
      map.addMarker(
        coordinate.coordinates[1],
        coordinate.coordinates[0]
      )
    })
  })
  .catch(console.log)
}


