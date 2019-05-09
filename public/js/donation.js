
$(function () {
  M.AutoInit();

  $(".claim-btn").on("click", function () {
    $.ajax("/api/food/" + $(this).data("itemid"), {
      type: "PUT"
    }).then(function (DBuser) {
      location.reload();
    });
  });

});




$(".donation-address").on("click", function () {
  console.log($(this).data("address"))
  var queryAddress = $(this).data("address")
  $.ajax("http://www.mapquestapi.com/geocoding/v1/address?key=0VGGljyGVppz87Gov6NbLiCOc9J712eY&location=" + queryAddress,
    {
      type: "GET"
    }
  ).then(function (geocode) {
    console.log(geocode.results[0].locations[0].displayLatLng)

    var cords = geocode.results[0].locations[0].displayLatLng

    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: cords
      });
    }
  });
});
