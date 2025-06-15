const bust = document.getElementById("bust");
const hands = document.querySelectorAll(".hand")
let bustChecker = 'Myself';
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const loadingBackdrop = document.getElementById('loader-backdrop');


window.addEventListener('DOMContentLoaded', function() {
  this.setTimeout(function() {
    loadingBackdrop.style.display = 'none';
  }, 2000)

});

bust.addEventListener('click', bustClickHandler);

function bustClickHandler() {
  
  if(bustChecker === 'Myself') {
    bust.src = './assets/pics/cool-guy.jpg';
    bustChecker = 'cool-guy';
    h1.innerText = "Welcome To This Cool Guy's Portfolio";
    h2.innerText = "Innovative. Bold. Slightly Ridiculous.";
    hands[0].classList.remove('hidden');
    hands[1].classList.remove('hidden');

    
  } else {
    bust.src = './assets/pics/Myself.jpg';
    bustChecker = 'Myself';
    h1.innerText = "Welcome to My Portfolio";
    h2.innerText = "Building the future through creativity, technology, and a little fun!";
    hands[0].classList.add('hidden');
    hands[1].classList.add('hidden');
  }
}
