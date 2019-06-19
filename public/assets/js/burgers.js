$(document).ready(function() {

    $("#devour-form").on("submit", function(event) {
      event.preventDefault();
   
      var newBurger = {
          burger_name: $("#newBurger").val(),
          devoured: 0
      };
      console.log(newBurger)
   
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(function() {
          console.log("created new burger!");
         //reload the page to get the updated list of burgers
          //location.reload();
    });
   
     // var burger_id = $(this).children(".burger_id").val();
      //console.log(burger_id);
      //$.ajax({
        //method: "PUT",
        //url: "/burgers/" + burger_id
      //}).then(function(data) {
        // reload page to display devoured burger in proper column
        //location.reload();
      //}); 
   
    });
   });