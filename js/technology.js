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
	if(!el || e.target.getAttribute('href') != '#') return;
	var nel = el.querySelector("div");
	e.preventDefault();
	if(nel == activeel){
		activeel.style.display = activeel.style.display == "block" ? "" : "block"
	}else{
		activeel.style.display = "";
		activeel = nel;
		activeel.style.display = "block";
	}
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
