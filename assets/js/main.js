//save function
$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".input").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
});

//getting data from local storage
$("#9am.input").val(localStorage.getItem("9am"));
$("#10am.input").val(localStorage.getItem("10am"));
$("#11am.input").val(localStorage.getItem("11am"));
$("#12pm.input").val(localStorage.getItem("12pm"));
$("#1pm.input").val(localStorage.getItem("1pm"));
$("#2pm.input").val(localStorage.getItem("2pm"));
$("#3pm.input").val(localStorage.getItem("3pm"));
$("#4pm.input").val(localStorage.getItem("4pm"));
$("#5pm.input").val(localStorage.getItem("5pm"));
