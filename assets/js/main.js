
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
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Get the modals
var modal = document.getElementById('m1');
var questionModal = document.getElementById('mQ');
var thankYouMessage = document.getElementById('mTy');

// Get the button that opens the modal
var btn = document.getElementById("main-btn");
var link1 = document.getElementById("makeOrderA1");
var link2 = document.getElementById("makeOrderA2");
var showQuestionModal = document.getElementById("questionForm");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

link1.onclick = function () {
  modal.style.display = "block";
}

link2.onclick = function () {
  modal.style.display = "block";
}

showQuestionModal.onclick = function () {
  questionModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
for (var i = 0, len = span.length; i < len; i++) {
  console.log(span[i]);
  span[i].addEventListener("click",closeModals);
}

function closeModals() {
  modal.style.display = "none";
  thankYouMessage.style.display = "none";
  questionModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal || event.target == thankYouMessage || event.target == questionModal) {
    modal.style.display = "none";
    thankYouMessage.style.display = "none";
    questionModal.style.display = "none";
  }
}

function dropMobMenu() {
  document.getElementById("dropdownContentOfMobMenu").classList.toggle("show");
}

$(document).ready(function () {

  //------------------------------------//
  //Animaion on scroll//
  //------------------------------------//
  AOS.init({
    easing: 'ease-out-back',
    duration: 1000
  });

  //------------------------------------//
  //Scroll To//
  //------------------------------------//
  $(".scroll").click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 800);

  });
}); 