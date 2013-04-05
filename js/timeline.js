function $(sel){
	return document.querySelector(sel);
}

function $$(sel){
	return document.querySelectorAll(sel);
}
var activeel;

function load(){
	$("#nav").addEventListener("click", eventClick, false);
	$("#up").addEventListener("click", arrowClick, false);
	activeel = $('a[href="' + location.hash + '"]') || $$("#nav > a")[0]
	$("#down").addEventListener("click", arrowClick, false);
//	activeel.style.display = "block";
}
window.addEventListener("load", load, false);

function eventClick(e){
	activeel = e.target;
	var el = $(e.target.getAttribute("href"));
	el.style.backgroundColor = "rgba(0, 0, 255, 0.5)";
	setTimeout(function(){
		el.classList.add("fade");
	}, 1);
	setTimeout(function(){
		el.style.backgroundColor = "";
	}, 2);
	setTimeout(function(){
		el.classList.remove("fade");
	}, 1000);
}

function arrowClick(e){
	activeel = (e.id == "up") ? activeel.previousElementSibling : activeel.nextElementSibling;
	activeel.click()
//	eventClick({target: activeel})
}