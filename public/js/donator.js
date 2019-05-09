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
    donationInfo.Userid = //userid here
      console.log(donationInfo)
  });



  $.ajax(window.location.href+"/info", {
    type: "GET"
  }).then(function (DBuser) {
    console.log(DBuser)
  })


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
      console.log(DBusernames)
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

  $("#login-button").on("click", function (event) {
    event.preventDefault();
    var loginInfo = {}
    loginInfo.username = $("#username").val();
    loginInfo.password = $("#password").val();
    console.log(loginInfo)
    $.ajax("/api/user/login", {
      type: "PUT",
      data: loginInfo
    }).then(function (DBuser) {
      if (DBuser[0]) {
        window.location.href = "/donator/login/" + DBuser[0].id
      } else {
        $("#login-fail").show()
      }
    })
  })

});
