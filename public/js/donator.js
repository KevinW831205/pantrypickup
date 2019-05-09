$(document).ready(function () {
  // initialize materialize
  M.AutoInit();

  $(".datepicker").datepicker({
    minDate: new Date()
  });

  $("#submit-donation").on("click", function (event) {
    event.preventDefault();
    var donationInfo = {};

    donationInfo.food = $("#item-name").val().trim();
    donationInfo.size = $("#item-size").val().trim();
    donationInfo.expiration = $("#expiration").val().trim();
    donationInfo.UserId = $(this).data("userid");
    console.log(donationInfo); //userid here

    $.ajax("/api/donation", {
      type: "POST",
      data: donationInfo
    }).then(function () {
      $("#successful-donate").show();
      $("#item-name").val("");
      $("#item-size").val("");
      $("#expiration").val("");
    });
  });


  //register
  $("#create-user").on("click", function (event) {
    var registerInfo = {};
    registerInfo.user_name = $("#reg-username").val().trim();
    registerInfo.name = $("#reg-name").val().trim();
    registerInfo.password = $("#reg-password").val();
    registerInfo.email = $("#reg-email").val().trim();

    var address = $("#reg-address").val().trim();
    address += ", " + $("#reg-city").val().trim();
    address += ", " + $("#reg-state").val();
    address += ", " + $("#reg-zip").val().trim();
    registerInfo.address = address;

    $.ajax("/api/user", {
      type: "GET"
    }).then(function (DBusernames) {
      // checking if username exist
      for (var i = 0; i < DBusernames.length; i++) {
        if (DBusernames[i].user_name === registerInfo.user_name) {
          $("#reg-username").val("")
          $("#repeated-user").show()
        }
      }
      $.ajax("/api/user", {
        type: "POST",
        data: registerInfo
      }).then(function () {
        console.log("info submitted");
        $("#register-content").empty();
        $("#register-content").append("Successfully Registered please login");
      });
    });
  });

  //login
  $("#login-button").on("click", function (event) {
    event.preventDefault();
    var loginInfo = {}
    loginInfo.username = $("#username").val();
    loginInfo.password = $("#password").val();
    $.ajax("/api/user/login", {
      type: "PUT",
      data: loginInfo
    }).then(function (DBuser) {
      if (DBuser[0]) {
        window.location.href = "/donator/login/" + DBuser[0].id
      } else {
        $("#login-fail").show()
      }
    });
  });

  $("#submit-address-edit").on("click", function (event) {
    if ($("#edit-address").val().trim() && $("#edit-city").val().trim() && $("#edit-state").val() && $("#edit-zip").val().trim()
    ) {
      var address = $("#edit-address").val().trim();
      address += ", " + $("#edit-city").val().trim();
      address += ", " + $("#edit-state").val();
      address += ", " + $("#edit-zip").val().trim();
      $.ajax("/api/user/" + $(this).data("userid"), {
        type: "PUT",
        data: { address: address }
      }).then(function (result) {
        location.reload();
      });
    }

  });
});
