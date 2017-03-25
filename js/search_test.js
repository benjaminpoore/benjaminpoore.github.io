// Global variable declared for clicked location
var returned;

// Get weather data from wunderground.com
//function getData(input) {
//    // Get the data from the wunderground API
//    $.ajax({
//        url: "https://api.wunderground.com/api/05353319b369cf9a/geolookup/conditions/forecast/q/" + input + ".json",
function getData(input) {
    $.ajax({
        url: "https://api.wunderground.com/api/8aea174dc9748d34/geolookup/conditions/q/" + input + ".json"
        , dataType: "jsonp"
        , success: function (data) {
            //make sure we get something back
            console.log(data);

            //set the data to some managable vars
            var location = data.location.city + ", " + data.location.state;

            $("title").prepend(location + " ");
            $("#cityDisplay").html(location);

            //get the current temp
            var curTemp = data.current_observation.temp_f + "°";
            $("#currentTemp").html(curTemp);
            console.log(curTemp);

            var summary = data.current_observation.weather;
            $("#summary").html(summary);

            //additional data
            var feelsLike = data.current_observation.feelslike_f;
            console.log(feelsLike);
            var windSpeed = data.current_observation.wind_mph;
            var windDirection = data.current_observation.wind_dir;

            $("#add1").html("Feels like: " + feelsLike + "°");
            $("#add2").html("Wind Speed: " + windSpeed + " mph");
            $("#add3").html("Wind Direction: " + windDirection);

        }
    });
    $("#cover").fadeOut(250);
}
// Keyup function for search bar
$('#query').keyup(function () {
    var value = $('#query').val();
    var rExp = new RegExp(value, "i");
    $.getJSON("//autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
        console.log(data); // test for JSON received

        // Build output
        returned = data;
        var output = '<ol>';
        $.each(data.RESULTS, function (key, val) {
            if (val.name.search(rExp) != -1) {
                output += '<li>';
                output += '<a href="https://www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
                output += '</li>';
            }
        }); // End each
        output += '</ol>';
        $("#searchResults").html(output); // send results to the page
    }); // end getJSON
}); // end onkeyup

// Get menu clicks
$("#searchResults").on("click", "a", function (evt) {
    evt.preventDefault();
    var jsonCity = $(this).text(); // City..
    console.log(jsonCity);
    index = $(this).index("a");

    //We need to find out how to pass both lat and long in the get data function below to pass to the call back function at the top.

    var attempt_lat = returned.RESULTS[index].zmw;
//    var attempt_long = returned.RESULTS[index].zmw;
//    var together = attempt_lat + "/" + attempt_long;
//
    console.log(attempt_lat);
//    console.log(together);

    getData(attempt_lat) //HERE IS WHERE WE SHOULD BE GRABBING LAT LONG
    //Hide results upon click
    document.getElementById("searchResults").style.display = "none";

});


// A function for changing a string to TitleCase
function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                                            });
}
