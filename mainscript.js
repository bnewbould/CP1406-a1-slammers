// JavaScript Document
"use strict";

function goToHome(){
	window.location.assign("home.html");
}
function goToAbout(){
	window.location.assign("about.html");
}

function goToGuidelines(){
	window.location.assign("guidelines.html");
}

function goToCompLeague(){
	window.location.assign("league.html");
}

function goToLinks(){
	window.location.assign("links.html");
}

function signUp(){
	var call = document.getElementById("callContent");
	var signup = document.getElementById("signupContent");
	var ctaWrap = document.getElementById("callToAction");
	call.className = "fadeOut";
	signup.className = "fadeIn";
	ctaWrap.style.height = "280px";
	signup.style.display = "block";
}

function hideCTA(){
	var ctaWrap = document.getElementById("callToAction");
	ctaWrap.style.display = "block";
	if(document.body.clientWidth < 900){
		ctaWrap.style.display = "none";
	}
}

window.addEventListener("load", hideCTA);
window.addEventListener("resize", hideCTA);