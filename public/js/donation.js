M.AutoInit();

$(function() {
  $(".highlight").on("submit", function(event) {
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
    $.ajax("/donation", {
      type: "GET",
      data: newDonator
    }).then(function() {
      console.log("Donation List");
      location.reload();
    });
  });
});
