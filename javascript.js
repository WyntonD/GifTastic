// Array of animals
var animals = ["Koala", "Jaguar", "Toucan", "Kangaroo", "Gazelle", "Cheetah", "Gorilla", "Giraffe", "Elephant"];

// Storing function to append animal buttons
function renderButtons() {

  $("#buttons-view").empty();

// Adding a for loop for animals array for appended buttons
  for (var i = 0; i < animals.length; i++) {

     var a = $("<button>");

    a.addClass("animal");
   
    a.attr("data-person", animals[i]);
  
    a.text(animals[i]);
  
    $("#buttons-view").append(a);


  }
  
// Setting up click buttons for each animal
  $("button").on("click", function(){
  
    console.log("clicked");

    var person = $(this).attr("data-person");
    

    var queryURL ="https://api.giphy.com/v1/gifs/search?q=" + person + 
    "&api_key=yV94fHMPuqKi6PMkpLJQ5d5TxRmxg5of";
  
  // Calling ajax via jQuery to aquire response data from API
    $.ajax({
       url: queryURL,
       method: "GET"
    })
   
    .then(function(response) {
        
      var results = response.data;
  // Creating for loop for multiple gifs to appear through then function
        for (var i = 0; i < results.length; i++) {
            
            var gifDiv = $("<div>");

            
            var rating = results[i].rating;
    
             var p =$("<p>").text("Rating: " + rating)
  
             var personImage = $("<img>");
  
             personImage.attr("src", results[i].images.fixed_height.url);
             personImage.addClass("animal");
  
             gifDiv.prepend(p);
             gifDiv.prepend(personImage);
  
             $("#gifs").prepend(gifDiv);
            
          }
            });
          // Setting animation conditonal for image clicking 
            $(".animal").on("click", function(){

              console.log("clicked picture");
            var state = $(this).attr("data-state");
            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
            });

          });

}
// Adding click function to add animals 
$("#add-animal").on("click", function(event) {

    event.preventDefault();
    console.log("animal added");
  
    var animal = $("#animal-input").val().trim();
  
    animals.push(animal);

 
    renderButtons();
  });

// Calling intial renderButton function.
  renderButtons();