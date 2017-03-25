$('#query').keyup(function(){
     // All code will be inside of this block

//    Within the function declare a variable to capture the value being typed into the query input field.
    var value = $('#query').val();

//    Next, create a variable that creates a new Regular Expression based on the value of the input variable, but is case insensitive.
    var rExp = new RegExp(value, "i");

//    Now, use the jQuery getJSON method to retrieve data from the autocomplete API based on the case insensitive value being typed.
    $.getJSON("//autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {


        //  Test that the JSON is linked
console.log(data);

// Build output

        var output = '<ol>';
        $.each(data.RESULTS, function(key, val) {
            if (val.name.search(rExp) != -1) {
                output += '<li>';
                output += '<a href="//www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
                output += '</li>';
            }
        }); // end each
        output += '</ol>';
        $("#searchResults").html(output); // send results to the page

}); // end getJSON

}); // end keyup

