// JavaScript Document
"use strict";

function enterSite() { //enter site
	window.location.assign("home.html");
}

function signUp() { //fade splashContent out and signupContent in
	var splash = document.getElementById("splashContent");
	var signup = document.getElementById("signupContent");
	splash.className = "fadeOut";
	signup.className = "fadeIn";
}