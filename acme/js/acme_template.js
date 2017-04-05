var jsonData;
var global_clicked;

console.log(".js is working");

// get json

$.getJSON("../js/acme.json", function (data) {
    jsonData = data;
    console.log(jsonData)
    console.log(jsonData.Anvils)

        var output = '<ul>';
        $.each( data, function (key, val) {
                output += '<li>';
            output += '<a href="http://127.0.0.1:54442/benjaminpoore4.github.io/acme/index.html" title="' + key + '">' + key + '</a>';
            output += '</li>';
});
    output += '</ul>';
    $("#page-nav").html(output);


// Get menu clicks
$("#page-nav").on("click", "a", function (evt) {
    evt.preventDefault();
    global_clicked = $(this).text(); // clicked item
    console.log(global_clicked);
    index = $(this).index("a");

//    getData(data[index]);


    if (global_clicked == "Home") {

        // set title to reflect current page


        var mainTitle = $('#main-title').text("Welcome to Acme!");
        var nameDisplay = $('#nameDisplay');
        nameDisplay.text(global_clicked);
        var nameDisplayTitle = $('#nameDisplayTitle');
        nameDisplayTitle.text(global_clicked + " - Acme");


    }

    else {


      var nameDisplay = $('#main-title');
      nameDisplay.text(global_clicked);
      var nameDisplayTitle = $('#nameDisplayTitle');
      nameDisplayTitle.text(global_clicked + " - Acme");

    }

});

});

// BenJamin Poore



