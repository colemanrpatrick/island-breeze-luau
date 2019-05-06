var timer = function Timer(){
  slideToggle('slider',true,5);
}
var beginTimer = setInterval(timer,3000);
function endTimer(){
  clearInterval(beginTimer);
}


(function() {
  console.log("checksize");
  'use strict';
  checkSlideSize('slider','.slide',5);
}());
/*===*/
var wrapper = document.getElementsByClassName('product-detail-wrapper');
function toggleOutside(e){
  if(e.target.classList.contains('active') && e.target !== e.target.firstChild){
    idToggle(this.id,'active');
  }
}

for (var i = 0 ; i < wrapper.length; i++) {
  wrapper[i].addEventListener('click',toggleOutside,false);
}
/*=============== youtube lazyloading ===================*/
var video = document.getElementById("youtube");

video.addEventListener("click", function(){
  var iframe = document.createElement( "iframe" );
  iframe.setAttribute("frameborder","0");
  iframe.setAttribute("allowfullscreen","");
  iframe.setAttribute("src","https://www.youtube.com/embed/h8GwBI3T1AU?autoplay=1&rel=0" );  //youtube video source//
  this.innerHTML = "";
  this.appendChild( iframe );
});
