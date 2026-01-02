var images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
let slideIndex = 1;
let timer;

showSlides(slideIndex);

document.getElementsByClassName("prev")[0].onclick = function () {
  clearInterval(timer);
  timer = null;
  showSlides(slideIndex - 1);
};

document.getElementsByClassName("next")[0].onclick = function () {
  clearInterval(timer);
  timer = null;
  showSlides(slideIndex + 1);
};

document.getElementsByClassName("start")[0].onclick = function () {
  if (timer) {
    clearInterval(timer);
    timer = null;
    console.log("Slideshow Stopped");
  } else {
    timer = setInterval(function () {
      let nextSlide = slideIndex + 1;
      if (nextSlide > images.length) {
        nextSlide = 1;
      }
      showSlides(nextSlide);
    }, 2000);
  }
};

document.getElementsByClassName("stop")[0].onclick = function () {
  if (timer) {
    clearInterval(timer);
    timer = null;
    console.log("Slideshow Stopped");
  }
};

function showSlides(n) {
  let prevBtn = document.getElementsByClassName("prev")[0];
  let nextBtn = document.getElementsByClassName("next")[0];
  let imgElement = document.getElementById("myImage");

  if (n > images.length) {
    slideIndex = images.length;
  } else if (n < 1) {
    slideIndex = 1;
  } else {
    slideIndex = n;
  }

  imgElement.src = images[slideIndex - 1];

  prevBtn.disabled = false;
  nextBtn.disabled = false;
  prevBtn.style.opacity = "1";
  nextBtn.style.opacity = "1";

  if (slideIndex === 1) {
    prevBtn.disabled = true;
    prevBtn.style.opacity = "0.3";
  }

  if (slideIndex === images.length) {
    nextBtn.disabled = true;
    nextBtn.style.opacity = "0.3";
  }
}