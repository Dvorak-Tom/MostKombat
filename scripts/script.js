'use strict';

let selectedPlayers = JSON.parse(localStorage.getItem('selectedPlayers'));

const name0 = selectedPlayers[0].name;
const name1 = selectedPlayers[1].name;

let shownName0 = document.querySelector('#name--0');
let shownName1 = document.querySelector('#name--1');

shownName0.textContent = name0;
shownName1.textContent = name1;

const face0 = selectedPlayers[0].faceImage;
const face1 = selectedPlayers[1].faceImage;

let shownFace0 = document.querySelector('#p1-face');
let shownFace1 = document.querySelector('#p2-face');

shownFace0.src = face0;
shownFace1.src = face1;

const avatar0 = selectedPlayers[0].playerImage;
const avatar1 = selectedPlayers[1].playerImage;

let shownAvatar0 = document.querySelector('.move-element');
let shownAvatar1 = document.querySelector('.move-element1');

shownAvatar0.src = avatar0;
shownAvatar1.src = avatar1;

let p0Body = document.querySelector('.p0-body');
let p1Body = document.querySelector('.p1-body');

// selecting elements
const player0El = document.querySelector('.selector--0');
const player1El = document.querySelector('.selector--1');
let lifeBar0 = document.querySelector('.life-bar0');
let lifeBar1 = document.querySelector('.life-bar1');

const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnCharge = document.querySelector('.btn--charge');
const btnAttack = document.querySelector('.btn--attack');
let current0El = document.getElementById('current--0');

const missedText = document.querySelector('#missed');

lifeBar0.style.width = '100%';
lifeBar1.style.width = '100%';
let hit = 0;
let life0 = 100;
let life1 = 100;

let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('not-visible');
  player1El.classList.toggle('not-visible');
};

btnAttack.addEventListener('click', function () {
  updateLifeBar(hit);
  switchPlayer();
  hideAtck();
  hit = 0;
});

const hideAtck = function () {
  const atckContainer = document.querySelector('.atck-container');
  atckContainer.innerHTML = '';
  atckContainer.classList.add('hidden');
};
hideAtck();
const showAtck = function () {
  const atckContainer = document.querySelector('.atck-container');
  atckContainer.classList.remove('hidden');
};

const displayAttacks = function (imgNum) {
  let imgEl = document.createElement('img');
  imgEl.src = `images/hit${imgNum}.png`;
  imgEl.classList.add('attacks-images');

  // Create a new div to hold the image
  let attackDiv = document.createElement('div');
  attackDiv.classList.add('attack-image'); // Add a class for styling if needed

  // Append the image to the new div
  attackDiv.appendChild(imgEl);

  // Find the atck-container element
  let atckContainer = document.querySelector('.atck-container');

  // Append the new div to the atck-container
  atckContainer.appendChild(attackDiv);
};

btnCharge.addEventListener('click', function () {
  const power = Math.trunc(Math.random() * 6 + 1);
  if (power !== 1) {
    hit += power;
    displayAttacks(power);
    showAtck();
    return hit;
  } else {
    hit = 0;
    missedText.style.display = 'block';
    setTimeout(() => {
      missedText.style.display = 'none';
    }, 1000);

    switchPlayer();
    hideAtck();
  }
  return power;
});

btnNew.addEventListener('click', function () {
  location.reload();
});

function updateLifeBar(damage) {
  if (activePlayer === 0) {
    life1 -= damage;
    p0Body.classList.add('hit-animation');

    if (life1 <= 0) {
      life1 = 0;
      btnCharge.classList.add('hidden');
      btnAttack.classList.add('hidden');
      p1Body.classList.add('loose-animation');
    }
    lifeBar1.style.width = life1 + '%';
  } else {
    life0 -= damage;
    shownAvatar1.classList.add('flipper');
    p1Body.classList.add('hit-animation2');

    if (life0 <= 0) {
      life0 = 0;
      btnCharge.classList.add('hidden');
      btnAttack.classList.add('hidden');
      p0Body.classList.add('loose-animation');
    }
    lifeBar0.style.width = life0 + '%';
  }
}

p0Body.addEventListener('animationend', () => {
  p0Body.classList.remove('hit-animation');
});

p1Body.addEventListener('animationend', () => {
  p1Body.classList.remove('hit-animation2');
});

function restartGame() {
  location.reload();
}

const mainBackground = document.querySelector('#main-background');
const totalBackgrounds = 3;
const randomNum = Math.floor(Math.random() * totalBackgrounds + 1);
console.log(randomNum);

const imagePath = `url(images/bg${randomNum}.jpg)`;
console.log(imagePath);

mainBackground.style.backgroundImage = imagePath;

const returnToMenu = document.querySelector('.btn--menu');
returnToMenu.addEventListener('click', function () {
  window.location.href = 'index.html';
});
