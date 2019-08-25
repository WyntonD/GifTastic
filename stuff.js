var animals = ["Koala", "Jaguar", "Toucan", "Kangaroo", "Gazelle", "Cheetah", "Gorilla", "Giraffe", "Elephant"];

function renderButtons() {

  $("#buttons-view").empty();


  for (var i = 0; i < animals.length; i++) {

    

    var a = $("<button>");

    a.addClass("animal");
   
    a.attr("data-name", animals[i]);
  
    a.text(animals[i]);
  
    $("#buttons-view").append(a);
  }
}

$("#add-animal").on("click", function(event) {

    event.preventDefault();
    console.log("animal added");
  
    var animal = $("#animal-input").val().trim();
  
    animals.push(animal);

 
    renderButtons();
  });



 
  renderButtons();


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

           $("#gifs").append(gifDiv);
              }   
          });