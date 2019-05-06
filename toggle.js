/*///////////////*/
/* toggle.js v.1.0
/*///////////////*/
console.log("toggle.js ready")
/*///////////////*/
//toggle events//
/*///////////////*/
//* ==== this toggle ===*//
function toggleThis(element, activeClass) {

  var classArray = element.className.split(" ");

  var elementIndex = classArray.indexOf(activeClass);

  if (classArray.length >= 2){

    classArray.splice(elementIndex);

    element.className = classArray.join();

  }else{

    classArray.push(activeClass);

    element.className = classArray.join(" ");

  }
}
//*==== parent toggle ===*//
function parentToggle(thisElement,activeClass){

  var parentElement = thisElement.parentNode;

  toggleThis(parentElement, activeClass);
}
/*=== next sibling toggle ====*/
function nextSiblingToggle(element,activeClass){
  var thisElement = element.nextElementSibling;
  // console.log(nextElement.nextElementSibling)
  toggleThis(thisElement, activeClass);
}
/*=== previous sibling toggle ====*/
function prevSiblingToggle(prevElement,activeClass){
  var thisElement = prevElement.previousElementSibling;
  // console.log(nextElement.nextElementSibling)
  toggleThis(thisElement, activeClass);
}

/*=== id toggle ===*/
function idToggle(elementId,activeClass){

  var parentElement = document.getElementById(elementId);

  toggleThis(parentElement, activeClass);

}
/*=== tagname toggle ===*/

function tagNameToggle(tagName,activeClass,tagNameIndex){

  var tagNameCollection = document.getElementsByTagName(tagName);

  for (var i = 0; i < tagNameCollection.length; i++) {
    var parentElement = tagNameCollection[tagNameIndex];
  }
  toggleThis(parentElement, activeClass);

}
/*== tabs toggle ==*/
function tabToggle(number,element,activeClass){

  elIndex = number;

  var el = document.getElementsByClassName(element);

  for (var i = 0; i < el.length; i++) {

    el[i].className = element;

  }

  el[elIndex-1].className += activeClass;

}
//==== toggle slider ===//
// determine demensions of slider pieces
function checkSlideSize(scrolledEl,childEl,num) {

  console.log("ready");

  var elToBeScrolled = document.getElementById(scrolledEl);

  console.log()

  var scrolledElParent = document.getElementById(elToBeScrolled.parentElement.id);

  var scrolledElchildren = scrolledElParent.querySelectorAll(childEl);

  console.log("parentWidth",scrolledElParent.offsetWidth);

  elToBeScrolled.style.width = scrolledElParent.offsetWidth * num + "px";

  console.log("content",scrolledElchildren);

  for (var i = 0; i < scrolledElchildren.length; i++) {

    scrolledElchildren[i].style.width = scrolledElParent.offsetWidth + "px";

    console.log(scrolledElchildren[i].style.width);

  }

};
//*========= slider toggle =========*/
const startPosition = 0;

function slideToggle(elementId,forward,frameCount){
  var frame; //frame or portion of the image
  elem = document.getElementById(elementId);
  // frame = elem.offsetWidth/4;
  frame = elem.offsetWidth/frameCount;

  if(!elem.position){

    elem.position = startPosition;

  }
  if (forward) {

    elem.position += frame;

    // elem.position >= frame * 4;

    if (elem.position >= frame * frameCount) {

      elem.position = startPosition;

      console.log(elem.position);

    }

  }

  else {

    elem.position -= frame;

    if (elem.position < startPosition) {

      // elem.position = frame * 4 - frame * 1;

      elem.position = frame * frameCount - frame * 1;

    }

  }
  // console.log("element position " + elem.position);
  elem.style.transform = "translate(-"+ elem.position +"px,0)";

}

//==== toggle explained for posterity ===//

// function testPoly(objectIn, elementName) {

  // takes the class name and turns it into a string
  // var classArray = objectIn.className.split(" ");
  //
  // var elementIndex = classArray.indexOf(elementName);

  // You do need howmany if you are removing an item
  // Since we have the index, we don't need to pass the name
//   if (classArray.length >= 2){
//
//     console.log("array before splice:"," ",classArray,"element index:",elementIndex,"array length:",classArray.length);
//
//     classArray.splice(elementIndex);
//
//     console.log("array after splice:", classArray,elementIndex,classArray.length);
//
//     objectIn.className = classArray.join();
//
//     console.log("array after join:"," ",classArray,"element index:",elementIndex,"array length:",classArray.length);
//   }else{
//     console.log("array before push:"," ",classArray,"element index:",elementIndex,"array length:",classArray.length);
//
//     classArray.push(elementName);
//     objectIn.className = classArray.join(" ");
//
//     console.log("array after push:"," ",classArray,"element index:",elementIndex,"array length:",classArray.length);
//   }
// }
