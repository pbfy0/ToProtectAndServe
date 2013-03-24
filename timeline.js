function $(sel){
	return document.querySelector(sel);
}

function $$(sel){
	return document.querySelectorAll(sel);
}

function load(){
	$("#nav").addEventListener("click", eventClick, false);
	activeel = $$("#event > div")[0]
	activeel.style.display = "block";
}
window.addEventListener("load", load, false);
var activeel;

function eventClick(e){
	console.log(e, activeel)
	var c = e.toElement.getAttribute("data-content");
	activeel.style.display = "";
	activeel = $("#" + c);
	activeel.style.display = "block";
}