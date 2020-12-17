var dropButton = document.querySelector(".dropdownselect");
var dropDown = document.querySelector(".dropdown");

dropButton.addEventListener("click", dropfunction);


function dropfunction(){
    dropDown.classList.toggle("laatzien");
}

var dropButtonMobile = document.querySelector(".dropdownmobileselect");
var dropDownMobile = document.querySelector(".dropdownmobile");

dropButtonMobile.addEventListener("click", dropfunctionMobile);


function dropfunctionMobile(){
    dropDownMobile.classList.toggle("laatzien2");
}

var dropButtonCategories = document.querySelector(".dropdownselectcategories");
var dropDownCategories = document.querySelector(".dropdowncategories");

dropButtonCategories.addEventListener("click", dropfunctioncategories);


function dropfunctioncategories(){
    dropDownCategories.classList.toggle("laatzien3");
}

var deButtons = document.querySelectorAll(".scrollknoppen");

for(i=0; i<deButtons.length; i++) {
  deButtons[i].addEventListener("click", scrollenMaar);
}

function scrollenMaar(event) {
  let deButtonWaaropGekliktIs = event.target;
  let deScrollRichting = deButtonWaaropGekliktIs.getAttribute("data-direction");
  
  let deSectionWaarinGescrolldGaatWorden = deButtonWaaropGekliktIs.parentNode;
  let deUlInDieSection = deSectionWaarinGescrolldGaatWorden.querySelector("ul");
  let eersteItem = deUlInDieSection.querySelector("li");
  let scrollAfstand = eersteItem.offsetWidth;
  
  if (deScrollRichting == "prev") {

    deUlInDieSection.scrollLeft -= scrollAfstand;
  }
  else if (deScrollRichting == "next") {
    deUlInDieSection.scrollLeft += scrollAfstand;
  }
}