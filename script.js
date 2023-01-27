/*
	WEB 303 Assignment 1 - jQuery
	Name: Rushabh Shah
*/

//Created an event handler with 'keyup' - It will show the finalAmount when user releases a key while typing in the salary or percent fields.
	
$(document).ready(function() {

	$("#yearly-salary, #percent").on("keyup", function() {		 
	
		var salary = $("#yearly-salary").val();
		var percent = $("#percent").val();
		var finalAmount = salary * percent / 100;
		$("#amount").text("$" + finalAmount).toFixed(2);
	
  	});

});

//Created an event handler with 'change' - It will show the finalAmount when user uses a button or some action.

/*
	$(document).ready(function() {

		$("#yearly-salary, #percent").on("change", function() {		 
		
			var salary = $("#yearly-salary").val();
			var percent = $("#percent").val();
			var finalAmount = salary * percent / 100;
			$("#amount").text("$" + finalAmount).toFixed(2);
		
  		});

	});
*/