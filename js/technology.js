function $(sel){
	return document.querySelector(sel);
}
var activeel;

function load(){
console.log('loaded')
	$("#content").addEventListener("click", eventClick, false)
	var e = document.getElementById(location.hash)
	if(e){
		activeel = e;
		e.style.display = "block";
	}else{
		activeel = $(".item");
	}
}

function eventClick(e){
	var el = classIter(e.target, 'item');
	if(!el) return;
	var nel = el.querySelector("div");
	var oel = activeel;
	e.preventDefault();
	activeel.style.display = "";
	activeel = nel;
	if(nel != oel) activeel.style.display = "block";
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
