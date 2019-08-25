
var animals = ["Koala", "Falcon", "Monkey"];

$("#submit").on("click", function(){
    var newButton = $("#buttons").prepend("<button>");
    $(this).text(animals[i]);
    console.log("new button");

});



var animals = ["Cheetah", "Girrafe", "Panther"];

var koala = $("#koala").on("click", function(){
    
    var person = $(this).attr("data-name");
    
    var queryURL ="https://api.giphy.com/v1/gifs/search?q=" + person + 
    "&api_key=yV94fHMPuqKi6PMkpLJQ5d5TxRmxg5of";
    
    
    console.log("Clicked!");

    $.ajax({
       url: queryURL,
       method: "GET"
    })
    .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            
            var rating = results[i].rating;
    
             var p =$("<p>").text("Rating: " + rating)

             var personImage = $("<img>");

             personImage.attr("src", results[i].images.fixed_height.url);

             gifDiv.prepend(p);
             gifDiv.prepend(personImage);

             $("#images").append(gifDiv);
                }   
            });
        });