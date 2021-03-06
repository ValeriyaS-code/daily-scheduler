//save function
$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".input").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
});

//getting data from local storage
$("#9am .input").val(localStorage.getItem("9am"));
$("#10am .input").val(localStorage.getItem("10am"));
$("#11am .input").val(localStorage.getItem("11am"));
$("#12pm .input").val(localStorage.getItem("12pm"));
$("#13pm .input").val(localStorage.getItem("13pm"));
$("#14pm .input").val(localStorage.getItem("14pm"));
$("#15pm .input").val(localStorage.getItem("15pm"));
$("#16pm .input").val(localStorage.getItem("16pm"));
$("#17pm .input").val(localStorage.getItem("17pm"));


//current date and time
$("#currentDay").text(moment().format('MMMM Do YYYY ,h:mm:ss'));

//identifing if present/future/past and applying classes
function timeTerm() {
var hour = moment().hours();
  $(".time-block").each(function() {
var currHour = parseInt($(this).attr("id"));
    
if (currHour > hour) {
  $(this).addClass("future");
} else if (currHour === hour) {
  $(this).addClass("present");
} else{
  $(this).addClass("past");
  }
  });
}

timeTerm();
