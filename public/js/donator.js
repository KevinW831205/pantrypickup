$(document).ready(function() {
  M.AutoInit();
  $(".datepicker").datepicker({
    //js counts date from 0 to 11
    minDate: new Date(2019, 4, 03)
  });
});
