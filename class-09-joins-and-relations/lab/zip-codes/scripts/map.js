function initMap(latty, longy) {
  // Create a map object and specify the DOM element for display.
  if (!latty || !longy) {
    latty = 47.611435;
    longy = -122.330456;
  }
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latty, lng: longy},
    scrollwheel: true,
    zoom: 8
  });

  var marker = new google.maps.Marker ( {
    position: {lat: latty, lng: longy},
    map: map,
  });
}




  // TODO: Follow the Google Maps API docs to create markers on the map based on the search options on the home page.
