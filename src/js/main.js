
window.addEventListener("load", load, false);

$ = function(sel){return document.querySelector(sel)}
var slides;
var sn;

function enslide(w, sel){
	sel = sel || "#slides div"
	
	var l = Array.prototype.slice.call(document.querySelectorAll(sel))
	for(i in l){
		if(w){
			l[i].classList.add("smooth")
		}else{
			l[i].classList.remove("smooth")
		}
	}
}
function load(){
 slides = $("#slides");
 sn = slides.children.length;
 $("#down div").addEventListener("click", d_slide, false)
 $("#up div").addEventListener("click", u_slide, false)
 setInterval(d_slide, 6000)
}

function d_slide(){
 enslide(true)
 slides.children[0].style.top = slides.children[0].style.marginBottom = "-404px";
 setTimeout(function(){
  slides.insertBefore(slides.children[0])
  slides.children[sn-1].style.top = slides.children[sn-1].style.marginBottom = ""
  enslide(false)
 }, 1400)
}
function u_slide(){
 var n = slides.children[sn-1];
 slides.insertBefore(n, slides.children[0]);
 n.style.top = n.style.marginBottom = "-404px";
 enslide(true)
 setTimeout(function(){
  n.style.top = n.style.marginBottom = "0px"
 }, 10)
 setTimeout(function(){
  enslide(false)
 }, 1400)
}
// setTimeout(function(){
//  slides.children[0].style.top = slides.children[0].style.marginBottom = ""
// }, 1700)
