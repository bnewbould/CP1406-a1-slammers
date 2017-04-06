// JavaScript Document
function validateForm(form) { //check fields have stuff and checkbox is ticked
	"use strict";
	var valueArray = [form.signupName.value.length,form.signupPhone.value.length,form.signupEmail.value.length];
	var checkBox = form.signupBox.checked;
	var errorMessage = "";
	for (var i = 0; i < valueArray.length; i++){
		if(valueArray[i] < 1){
			if(i==0){errorMessage+="Please enter your name.\n";}
			if(i==1){errorMessage+="Please enter your phone.\n";}
			if(i==2){errorMessage+="Please enter your email.\n";}
		}
	}
	if (!checkBox){
		errorMessage+="Please read our guidelines.";
	}
	if (errorMessage.length>0){
		errorMessage = "Validation failed.\n" + errorMessage;
		alert(errorMessage);
		return false;
	}
	alert("Thank you for signing up with Slammers!");
	return true;
}