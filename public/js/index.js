function initMap () {
  const mapContainer = document.getElementById('map');
  const myMap = new MyMap (mapContainer);

  myMap.init()
  if (document.getElementById("places-form")) {
    setFormMapListeners(myMap);

  }
  function setFormMapListeners(myMap) {
    myMap.onClick((event) => {
      const { lat, lng } = event.latLng.toJSON()
   
      myMap.clearMarkers()
      myMap.addMarker(lat, lng)
   
      document.getElementById("lat").value = lat.toFixed(3)
      document.getElementById("long").value = lng.toFixed(3)
    })
   }
}