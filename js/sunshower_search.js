var global;
var global_city;

// ADDED FOR REQUESTING DATA: Get the data from the wunderground API
// Get the data from the wunderground API
function getData(add) {
    $.ajax({
        url: "https://api.wunderground.com/api/8aea174dc9748d34/geolookup/conditions/forecast/q/" + add + ".json",
        dataType: "jsonp",
        success: function (data) {
            console.log(data);
            var location = data.location.city + ", " + data.location.state;

            var temp_f = data.current_observation.temp_f;

            var weather_summary = data.current_observation.weather;

            var windMPH = data.current_observation.wind_mph;

            var windDir = data.current_observation.wind_dir;

            var high = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;

            var low = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;

            console.log("Your location's current temperature in " + location + " is: " + temp_f);

            var cityDisplayTitle = $('#cityDisplayTitle');

            var cityDisplay = $('#cityDisplay');

            var currentTemp = $('#currentTemp').html(Math.round(temp_f) + " &deg;" + "F");



            var summary = $('#summary');
            var wind_mph = $('#wind_mph');
            var wind_dir = $('#wind_dir');
            var HIGH = $('#high');
            var LOW = $('#low');

            HIGH.text("HIGH" + " " + high + " &deg;" + "F");
            LOW.text("LOW" + " " + low + "&deg;" + "F");

            // Above


            //below

            summary.text(weather_summary);

            cityDisplay.text(location);

            cityDisplayTitle.text(location + " - SunShower Weather");

            wind_mph.text(windMPH + "mph Wind");
            wind_dir.text(windDir + " Direction");

        }
    });

    $("#cover").fadeOut(250);
}

//key it up!
                    $('#query').keyup(function () {
                        // All code will be inside of this block

                        //    Within the function declare a variable to capture the value being typed into the query input field.
                        var value = $('#query').val();

                        //    Next, create a variable that creates a new Regular Expression based on the value of the input variable, but is case insensitive.
                        var rExp = new RegExp(value, "i");

                        //    Now, use the jQuery getJSON method to retrieve data from the autocomplete API based on the case insensitive value being typed.
//                        GET
//                        $.getJSON("//autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {

                        $.getJSON("//autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
                            console.log(data); // test for JSON received

                            // Build output
                            global = data;
                            var output = '<ol>';
                            $.each(data.RESULTS, function (key, val) {
                                if (val.name.search(rExp) != -1) {
                                    output += '<li>';
                                    output += '<a href="https://www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
                                    output += '</li>';
                                }
                            }); // End each
                            output += '</ol>';
                            $("#work").html(output); // send results to the page
//                            document.getElementById("work").style.display = "inline";
//                            $("#searchResults").html(output); // send results to the page
//                            document.getElementById("searchResults").style.display = "inline";
                        }); // end getJSON
                    }); // end onkeyup

// Get menu clicks
$("#work").on("click", "a", function (evt) {
    evt.preventDefault();
    var jsonCity = $(this).text(); // City..
    console.log(jsonCity);
    index = $(this).index("a");
    global_city = $(this).text();
    console.log(global_city + " is the real city");

    getData(global.RESULTS[index].zmw);

    document.getElementById("work").style.display = "none";

});
// Get menu clicks
//$("#searchResults").on("click", "a", function (evt) {
//    evt.preventDefault();
//    var jsonCity = $(this).text(); // City..
//    console.log(jsonCity);
//    index = $(this).index("a");
//    global_city = $(this).text();
//    console.log(global_city + " is the real city");


//    var attempt_lat = global.RESULTS[index].zmw;
//    //    var attempt_long = global.RESULTS[index].zmw;
//    //    var together = attempt_lat + "/" + attempt_long;
//    //
//    console.log(attempt_lat);
//    //    console.log(together);
//
//    getData(attempt_lat)
//
//    getData(global.RESULTS[index].zmw);
//
//
//  document.getElementById("searchResults").style.display = "none";
//
//});

        // A function for changing a string to TitleCase
        function toTitleCase(str) {
            return str.replace(/\w+/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }

                               // BenJamin Poore
