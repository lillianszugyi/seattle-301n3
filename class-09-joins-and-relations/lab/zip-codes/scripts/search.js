(function(module) {

  var populateState = function () {
    webDB.execute(
      'SELECT DISTINCT state from zips ORDER BY state ASC;',
      function(results) {
        results.forEach(function(ele) {
          var optionTag = '<option value="' + ele.state + '">' + ele.state + '</option>';
          $('#state-select').append(optionTag);
        });
      }
    );
  };

  var populateCity = function (state) {
    webDB.execute(
      'SELECT DISTINCT city from zips WHERE state=' + '"' + state + '"' + ' ORDER BY city ASC;',
        function (results) {
          $('#city-select').empty();
          $('#city-select').append('<option value="city">Select a City</option>');
          results.forEach(function(ele) {
            var optionTag = '<option value="' + ele.city + '">' + ele.city + '</option>';
            $('#city-select').append(optionTag);
          });
        });
  };

  var zipSearch = function (zip){
    webDB.execute(
      'SELECT * from zips WHERE zip=' + zip + ';',
      function (results) {
        initMap(results)
      }
    );
  };
  var stateListen = function () {
    $('#state-select').on('change', function (){
      populateCity($(this).val());
      console.log($(this).val());
    });
  };

  var cityListen = function() {
    $('#city-select').on('change', function (){
      var city = $(this).val();
      var state = $('#state-select').val();
      webDB.execute(
        'SELECT * from zips WHERE city=' + '"' + city + '"' + ' AND state=' + '"' + state + '"' + ';',
        function (results) {
          initMap(results);
        }
      );
    });
  }

  var zipListen = function () {
    $('#zipButton').on('click', function (event) {
      event.preventDefault();
      var zippy = $("input[name*='zip']").val();
      if(zippy.length !== 5) {
        console.log('not a proper zip code');
      }else{
        zipSearch(zippy);
      }
      $("input[name*='zip']").val('');
    });
  };


  // TODO: Write the code to populate your filters, and enable the search queries here in search.js
  // TODO: You will also interact with the map.js file here
  populateState();
  stateListen();
  zipListen();
  cityListen();

})(window)
