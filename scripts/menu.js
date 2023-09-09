'use strict';

console.log('test');
document.addEventListener('DOMContentLoaded', function () {
  const playerSelection = document.querySelectorAll('.player--selection > div');
  let menuPlayerSelection = 0;

  playerSelection.forEach(player => {
    player.addEventListener('click', function () {
      const p = document.createElement('p');
      p.classList.add('player-selector--menu');
      p.style.fontSize = '50px';

      if (menuPlayerSelection < 2) {
        if (!this.querySelector('p')) {
          menuPlayerSelection += 1;
          p.textContent = menuPlayerSelection === 1 ? 'P1' : 'P2';

          p.style.color = menuPlayerSelection === 1 ? 'red' : 'blue';
          this.appendChild(p);
        }
      }
    });
  });
});

let selectedPlayers = [];

function selectPlayer(playerId, name, playerImage, faceImage) {
  console.log('selectPlayer function triggered');
  let player = document.getElementById(playerId);

  if (selectedPlayers.length < 2) {
    selectedPlayers.push({
      name: name,
      playerImage: playerImage,
      faceImage: faceImage,
    });
  }
  if (selectedPlayers.length === 2) {
    localStorage.setItem('selectedPlayers', JSON.stringify(selectedPlayers));

    console.log('saving to local storage function triggered');
    setTimeout(function () {
      window.location.href = 'game.html';
    }, 2000);
  }
}
