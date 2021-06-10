const slides=document.querySelector(".slider-container").children;
const prev=document.querySelector("#btn-prev");
const next=document.querySelector("#btn-next");
let index=0;

prev.addEventListener("click", function() {
  prevSlide();
  resetTimer();
})

next.addEventListener("click", function() {
  nextSlide();
  resetTimer();
})

function prevSlide() {
  if(index==0) {
    index=slides.length-1;
  } else {
    index--;
  }
  changeSlide();
}

function nextSlide() {
  if(index==slides.length-1) {
    index=0;
  } else {
    index++;
  }
  changeSlide();
}

function changeSlide() {
  for(let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

function autoPlay() {
  nextSlide();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoPlay, 15000);
}

let timer = setInterval(autoPlay, 15000);