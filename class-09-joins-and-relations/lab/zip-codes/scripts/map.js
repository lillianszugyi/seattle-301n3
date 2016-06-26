function initMap(data) {
  // Create a map object and specify the DOM element for display.
  if (!data) {
    data = [{
      latitude: 47.611435,
      longitude: -122.330456
    }];
  }

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: data[0].latitude, lng: data[0].longitude},
    scrollwheel: true,
    zoom: 8
  });

  data.forEach(function (ele) {
    var marker = new google.maps.Marker ( {
      position: {lat: ele.latitude, lng: ele.longitude},
      map: map,
    });
  })
}



  // TODO: Follow the Google Maps API docs to create markers on the map based on the search options on the home page.
