function $(sel){
	return document.querySelector(sel);
}

function load(){
console.log('loaded')
	$("#content").addEventListener("click", eventClick, false)
}

function eventClick(e){
	var el = e.target;
	window.l = el;
	console.log(el);
	if(!(classIter(el, 'pop'))) return;
	e.preventDefault();
	el = el.children.length > 0 ? el.querySelector('div') : el.parentElement.querySelector('div');
	el.style.display = (el.style.display == "") ? "block" : "";
}

function classIter(e, c){
	var el = e;
	console.log(el);
	while(el){
		if(Array.prototype.slice.call(el.classList).indexOf(c) != -1) return true;
		el = el.parentElement;
	}
	return false;
}

window.addEventListener("load", load, false)