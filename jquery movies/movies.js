//What to do on submission
$("#submit").on("click", function(event) {
    event.preventDefault();

    let movieTitle = $("#title").val();
    let movieRating = $("#rating").val();
    let movieEntry = movieTitle + ": " + movieRating + "/10";

    //Make a new div
    let newDiv = $("<div></div>");
    let entry = $("<p></p>").text(movieEntry);
    let remove = $("<button></button>").text("Remove").addClass("remove");

    //Append the text input to the div
    newDiv.append(entry);
    newDiv.append(remove);
    //Make a remove button and append it to the div
    //Append the div to the body
    $("body").append(newDiv);
  });

  $("body").on("click", function(event) {
    if ($(event.target).hasClass("remove")) {
        $(event.target).closest('div').remove();
    }
  });