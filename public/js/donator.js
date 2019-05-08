$(document).ready(function () {
  // initialize materialize
  M.AutoInit();

  $(".datepicker").datepicker({
    minDate: new Date()
  });
});

$(function() {
  $(".col s12").on("submit", function(event) {
    event.preventDefault();

    var newDonator = {
      donatorName: $("#name")
        .val()
        .trim(),
      itemName: $("#item-name")
        .val()
        .trim(),
      itemSize: $("#item-size")
        .val()
        .trim(),
      expirationDate: $("#expiration")
        .val()
        .trim(),
      donated: true
    };
    $.ajax("/donator", {
      type: "POST",
      data: newDonator
    }).then(function() {
      console.log("Added new donator");
      location.reload();
    });
  });
});
