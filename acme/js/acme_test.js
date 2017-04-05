var jsonData;
var global_clicked;

console.log(".js is working");

// get json

$.getJSON("/benjaminpoore4.github.io/acme/js/acme.json", function (data) {
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


// display toggle of home-content and product-content
        document.getElementById('home-content').style.display='inline';document.getElementById('product-content').style.display='none';
    }

    else {
// set title to reflect current page


      var nameDisplay = $('#main-title');
      nameDisplay.text(global_clicked);
      var nameDisplayTitle = $('#nameDisplayTitle');
      nameDisplayTitle.text(global_clicked + " - Acme");
// display toggle of home-content and product-content
        document.getElementById('home-content').style.display='none';document.getElementById('product-content').style.display='inline';


        var name_of = jsonData[global_clicked].name;
        console.log(name_of);
        var path_of = jsonData[global_clicked].path;
        console.log(path_of);
        var description_of = jsonData[global_clicked].description;
        console.log(description_of);
        var manufacturer_of = jsonData[global_clicked].manufacturer;
        console.log(manufacturer_of);
        var price_of = jsonData[global_clicked].price;
        console.log(price_of);
        var reviews_of = jsonData[global_clicked].reviews;
        console.log(reviews_of);


var name = $('#product-name').text(name_of);


document.getElementById('product-path-section').innerHTML = '<img id="product-picture" src="' + path_of + '" />';
var description = $('#product-description').text(description_of);

var manufacturer = $('#product-manufacturer').text("MADE BY: " + manufacturer_of);

var price = $('#product-price').text("PRICE: $" + price_of);
var reviews = $('#product-reviews').text("REVIEWS: " + reviews_of + "/5 stars");
    }

});

});

// BenJamin Poore



