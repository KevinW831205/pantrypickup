$(document).ready(function() {
  M.AutoInit();
  $(".datepicker").datepicker({
    //js counts date from 0 to 11
    minDate: new Date(2019, 4, 03)
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
