
var pictures = document.getElementById("my_images");
var links = ["slide1.avif", "slide2.avif", "slide3.avif", "slide4.avif", "slide5.avif"];
var a = 0;

function startslider() {
  pictures.setAttribute("src", links[a]);
}
function nextSlide() {
  a = (a + 1) % links.length;
  pictures.setAttribute("src", links[a]);
}

function prevSlide() {
  a = (a - 1 + links.length) % links.length;
  pictures.setAttribute("src", links[a]);
}

setInterval(nextSlide, 2000);

startslider(); 