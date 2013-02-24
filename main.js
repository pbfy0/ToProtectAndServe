window.addEventListener("load", load, false);

$ = function(sel){return document.querySelector(sel)}
var slides;
function load(){
 slides = $("#slides");
}

function s_slide(){
 slides.children[0].style.top = slides.children[0].style.marginBottom = "-404px";
 setTimeout(function(){
  slides.insertBefore(slides.children[0])
  slides.children[2].style.top = slides.children[2].style.marginBottom = ""
 }, 1700)
}
