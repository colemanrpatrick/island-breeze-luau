//======================= accessability =======================/
//default
(function() {
  'use strict';

  var p = document.getElementsByTagName('p');

  for (var i = 0; i < p.length; i++) {
    if (p[i].getAttribute("class") === null){
      p[i].setAttribute("class","small");
    }
  }

}());

var accBtn = document.getElementById("accessibilityBtn");

accBtn.addEventListener("click",function(){
  fontSizer('#accessibilityBtn');
  fontSizer('p');
},false);
//
function fontSizer(element){

  var markup = document.querySelectorAll(element);

  for (var i = 0; i < markup.length; i++) {

    if(markup[i].classList.contains("small")){

      markup[i].classList.remove("small");
      markup[i].classList += ("medium");

    }else if(markup[i].classList.contains("medium")){

      markup[i].classList.remove("medium");
      markup[i].classList += ("large");

    }else if(markup[i].classList.contains("large")){

      markup[i].classList.remove("large");
      markup[i].classList += ("small");

    }

  }
}
//==============================================/
