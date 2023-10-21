let menu = document.querySelector("#menu");
let navbar =  document.querySelector(".navbar");

menu.onclick = ()=>{
    // menu.classList.toggle();
    navbar.classList.toggle("active");
}

// document.getElementById("top").onclick =()=>{

//   window.scrollTo({
//     top:   document.getElementById("navbar").scrollTop,
//     left:   document.getElementById("navbar").scrollLeft},
//     {behavior: 'smooth'}, true);

// }
// document.getElementById("tosp").onclick =()=>{
 
//   document.querySelector(".sidcolor").classList.toggle("open")
// }
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}