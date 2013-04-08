function $(sel){
	return document.querySelector(sel);
}
var activeel;

function load(){
console.log('loaded')
	$("#content").addEventListener("click", eventClick, false)
	activeel = $("#content > div > div");
/*	activeel.style.display = "block";*/
}

function eventClick(e){
	var el = classIter(e.target, 'box');
	if(!el) return;
	e.preventDefault();
	activeel.style.display = "";
	activeel = el.querySelector("div");
	activeel.style.display = "block";
}

function classIter(e, c){
	var el = e;
	console.log(el);
	while(el){
		if(Array.prototype.slice.call(el.classList).indexOf(c) != -1) return el;
		el = el.parentElement;
	}
	return false;
}

window.addEventListener("load", load, false)
