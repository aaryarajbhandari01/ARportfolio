
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

function validateForm() {
	var fname = document.forms["messageForm"]["firstname"].value;
	var lname = document.forms["messageForm"]["lastname"].value;
	var email = document.forms["messageForm"]["email"].value;
	var contact = document.forms["messageForm"]["phone"].value;
	var gender = document.forms["messageForm"]["gender"].value;
	var message = document.forms["messageForm"]["message"].value;

	

    if (fname == "" || lname == "" || email == "" || contact == "" || gender == "" || message == "" )
	{
      
        alert("Empty field found.Please fill the form.");
    }
    else {
		alert("Thank you for the feedback.");
	}

}

