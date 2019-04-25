
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevouredtate = {
      devoured: ($(this).data("newsleep") === 1) ? false : true
    };

    
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredtate
    }).then(
      function() {
        
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    
    event.preventDefault();

    var newburger = {
      name: $("#ca").val().trim(),
      devoured: false
    };

    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        
        location.reload();
      }
    );
  });
});
