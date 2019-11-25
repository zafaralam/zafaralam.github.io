let slideIndex = 1;

showSlides(slideIndex);
setInterval(function() {
  plusSlides(1);
}, 2500);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i,
    activeSlide = n;
  const slides = document.getElementsByClassName("project-slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
    activeSlide = slides.length;
  }

  if (n < 1) {
    slideIndex = slides.length;
    activeSlide = 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  //   slides[activeSlide - 1].classList.remove(["active", "right-in", "left-in"]);
  //   slides[activeSlide - 1].classList.add("left-out");
  //   slides[activeSlide - 1].style.display = "none";

  //   slides[slideIndex - 1].classList.remove(["right-out", "left-out"]);
  //   slides[slideIndex - 1].style.display = "block";
  //   slides[slideIndex - 1].classList.add("active");
  //   slides[slideIndex - 1].classList.add("right-in");

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
