// NAVIGATION
var div = document.getElementById("nav-items");
var display = 0;

function myFunction() {
    if (display == 1) {
        div.style.display = "none";
        display = 0;
    } else {
        div.style.display = "block";
        display = 1;
    }
}


// SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}