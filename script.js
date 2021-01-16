mapboxgl.accessToken =
  'pk.eyJ1IjoiYXl1c2hqYWluMjIwNSIsImEiOiJja2p6dWhoMmQwYjdoMnN0Zzk3Zzl5Zmo1In0.86CGjV7BC89eO5DB3FHoSg'

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
})

function successLocation(position) {
  console.log(position)
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15,
  })

  var nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken:
      'pk.eyJ1IjoiYXl1c2hqYWluMjIwNSIsImEiOiJja2p6dWhoMmQwYjdoMnN0Zzk3Zzl5Zmo1In0.86CGjV7BC89eO5DB3FHoSg',
    unit: 'metric',
    profile: 'mapbox/cycling',
  })

  map.addControl(directions, 'top-left')
}
