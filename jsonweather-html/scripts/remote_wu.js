jQuery(document).ready(function ($) {
// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
        url: "http://api.wunderground.com/api/8aea174dc9748d34/conditions/geolookup/q/autoip.json",

        dataType: "jsonp",
        success: function (data) {
            console.log(data);
            var location = data.location.city + ", " + data.location.state;

            var temp_f = data.current_observation.temp_f;

            var weather_summary =  data.current_observation.weather;

            var windMPH = data.current_observation.wind_mph;

            var windDir = data.current_observation.wind_dir;

            console.log("Your location's current temperature in " + location + " is: " + temp_f);

            var cityDisplayTitle = $('#cityDisplayTitle');

            var cityDisplay = $('#cityDisplay');

            var currentTemp = $('#currentTemp').html(Math.round(temp_f) + " &deg;" +"F");


            var summary = $('#summary');
            var wind_mph = $('#wind_mph');
            var wind_dir = $('#wind_dir');


            // Above


            //below

          summary.text(weather_summary);


            cityDisplay.text(location);

            cityDisplayTitle.text(location + " - Weather Home");

            wind_mph.text(windMPH + "mph Wind");
            wind_dir.text(windDir + " Direction");


      $("#cover").fadeOut(250);
    }
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
});
