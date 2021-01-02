
// De JS voor de menu's
var dropButton = document.querySelector("nav > ul > li:nth-of-type(6) > label > a");
var dropDown = document.querySelector("nav > ul > li:nth-of-type(6) > ul");

dropButton.addEventListener("click", dropfunction);


function dropfunction(){
    dropDown.classList.toggle("laatzien");
}

var dropButtonMobile = document.querySelector("nav > ul > li:nth-of-type(2) > label > a");
var dropDownMobile = document.querySelector("nav > ul > li:nth-of-type(2) > ul");

dropButtonMobile.addEventListener("click", dropfunctionMobile);

function dropfunctionMobile(){
    dropDownMobile.classList.toggle("laatzien2");
}

var dropButtonCategories = document.querySelector("nav > ul > li > ul > li > label");
var dropDownCategories = document.querySelector("nav > ul > li > ul > li > ul");

dropButtonCategories.addEventListener("click", dropfunctioncategories);


function dropfunctioncategories(){
    dropDownCategories.classList.toggle("laatzien3");
}



// De JS voor de sliders
var deButtons = document.querySelectorAll("section >  button");

for(i=0; i<deButtons.length; i++) {
  deButtons[i].addEventListener("click", scrollenMaar);
}

function scrollenMaar(event) {
  var deButtonWaaropGekliktIs = event.target;
  var deScrollRichting = deButtonWaaropGekliktIs.getAttribute("data-direction");
  
  var deSectionWaarinGescrolldGaatWorden = deButtonWaaropGekliktIs.parentNode;
  var deUlInDieSection = deSectionWaarinGescrolldGaatWorden.querySelector("ul");
  var eersteItem = deUlInDieSection.querySelector("li");
  var scrollAfstand = eersteItem.offsetWidth;
  
  if (deScrollRichting == "prev") {

    deUlInDieSection.scrollLeft -= scrollAfstand;
  }
  else if (deScrollRichting == "next") {
    deUlInDieSection.scrollLeft += scrollAfstand;
  }
}