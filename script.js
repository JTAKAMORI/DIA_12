let slideIndex = 1;
showSlides(slideIndex);

// Botões Prev/Next
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Pontinhos de navegação
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Troca automática de slides a cada 5 segundos
setInterval(() => {
  plusSlides(1);
}, 5000);
