$.ajax({
    url: "../js/acme.json",
    dataType: "json",
    success: function (data) {

$("#nav").text("this is the example nav bar");
$("#logo").text();


    }
});


$("#nav").on("click", "a", function (evt) {
    evt.preventDefault();
    // With the text value get the needed value from the acme.json file
    var jsonCity = $(this).text(); //
    console.log(jsonCity);
    $.ajax({
        url: "/acme/js/acme.json"
        , dataType: "json"
        , success: function (data) {
            console.log(data);
            console.log(data[jsonCity]);
            var zip = data[jsonCity].zip;
            console.log(zip);
            getData(zip);
        }
    });
});
