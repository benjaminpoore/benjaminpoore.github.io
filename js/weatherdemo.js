jQuery(document).ready(function ($) {
    $.ajax({
        url: "http://api.wunderground.com/api/8aea174dc9748d34/forecast/geolookup/conditions/q/SC/Greenville.json",
        dataType: "jsonp",
        success: function (data) {
            console.log(data);
            var location = data.location.city;
            var temp_f = data.current_observation.temp_f;
            console.log("Current temperature in " + location + " is: " + temp_f);


            var locName = $('#locName');
            var highTemp = $('#highTemp');
            var tempMessage = $('#tempMessage');

            locName.text(location);
            highTemp.text(temp_f);
            tempMessage.text("Current temperature in " + location + " is: " + temp_f);

        }
    });
});
