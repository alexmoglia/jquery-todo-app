"use strict";

// Complete todo item
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Remove todo item
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

// Add todo item
$("input[type='text']").keypress(function(event) {
  // check for enter key
  if (event.which === 13) {
    // grab new todo text from input
    const todoText = $(this).val();
    $(this).val("");
    // create new li and add to ul
    $("ul").append(
      `<li><span><i class="fas fa-trash-alt"></i></span> ${todoText}</li>`
    );
  }
});

$("#plus").click(function() {
  $("input[type=text").fadeToggle();
});
