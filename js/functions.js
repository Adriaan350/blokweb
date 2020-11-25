var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// function dropdown(){
//     .classList.toggle("laatzien");
// }

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







// De buttons opzoeken in de HTML en opslaan in een variabele
var deButtons = document.querySelectorAll(".scrollknoppen");


// De buttons laten luisteren naar clicks
// Dan wordt de functie scrollenMaar uitgevoerd
for(i=0; i<deButtons.length; i++) {
  deButtons[i].addEventListener("click", scrollenMaar);
}

function scrollenMaar(event) {
  // event.target is de button waarop is geklikt
  let deButtonWaaropGekliktIs = event.target;
  // bepalen in welke richting gescrolld moet worden
  // het data-direction attribute is prev of next (zie de HTML)
  let deScrollRichting = deButtonWaaropGekliktIs.getAttribute("data-direction");
  
  let deSectionWaarinGescrolldGaatWorden = deButtonWaaropGekliktIs.parentNode;
  let deUlInDieSection = deSectionWaarinGescrolldGaatWorden.querySelector("ul");
  // breedte van eerste item/li bepalen
  // dat is de afstand die gescrolled gaat worden
  // eerst het eerste item zoeken en opslaan in een variabele
  let eersteItem = deUlInDieSection.querySelector("li");
  // dan de breedte van dit item bepalen en opslaan in een variabele
  let scrollAfstand = eersteItem.offsetWidth;
  
  /* naar links scrollen bij de "prev" button */
  if (deScrollRichting == "prev") {
    // scrollLeft is de heoeveelheid pixels dat er vanaf de linkerrand van het element is gescrolld
    // bij "prev" wordt daar de scrollMaat vanaf getrokken
    deUlInDieSection.scrollLeft -= scrollAfstand;
  }
  /* naar rechts scrollen bij de "prev" button */
  else if (deScrollRichting == "next") {
    // bij "next" wordt daar de scrollMaat bij opgeteld
    deUlInDieSection.scrollLeft += scrollAfstand;
  }
}