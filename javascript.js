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