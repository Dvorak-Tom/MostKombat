# Streets Of Most: Kombat 
Variation on a 'Pig' game with visuals of fighting games from 90s (like Mortal Kombat). Pixelated graphics crafted from real photos of my hometown and my friends.
Also available for android devices.

![1](https://github.com/Dvorak-Tom/MostKombat/assets/116516503/9ce018f2-d3fe-4b42-9a98-6a1b95b73845)

# Features
- **Turn-based Local Multiplayer Combat:** Charge and attack the second fighter
- **Custom Avatars:** Choose from 4 avatars crafted from photos of my friends
- **Dynamic Backgrounds:** Random background is set for the battle arenas each new start (streets of my ugly hometown)
- **Available version for Android devices:** APK file for better experience of playing on mobile devices
<br>

Play the game 👉 **[HERE](https://main--rococo-cupcake-b3eada.netlify.app/)** 👈

<br>

Download .APK 👉 **[HERE](https://www.upload-apk.com/en/OdJxbS6Eii0spfn)** 👈

<br>

APK file was created on **WebIntoApp.com**

<br>

![2](https://github.com/Dvorak-Tom/MostKombat/assets/116516503/a18060b0-4b80-46b8-9ce0-03671b8f2796)


<br>

# Gameplay Overview
Players select their avatars and get into the fighting arena. During each turn, they can decide to either Charge their attack or go straight for the Attack. Charging might end up in a miss, causing the turn to be wasted.

Life-bars represent each player's health. Reduce your opponent's health to 0 to emerge victorious.

<br>

# Development Insight
## code Snippets

**Selecting and Displaying Players:**
```ruby
let selectedPlayers = JSON.parse(localStorage.getItem('selectedPlayers'));
...
const name0 = selectedPlayers[0].name;
...
let shownName0 = document.querySelector('#name--0');
shownName0.textContent = name0;
...
```
<br>

**Switch Turns:**
```
const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  ...
};
```
<br>

**Attack and Charging:**
```
btnCharge.addEventListener('click', function () {
  ...
  const power = Math.trunc(Math.random() * 6 + 1);
  ...
});
```

![3](https://github.com/Dvorak-Tom/MostKombat/assets/116516503/1a3df948-067c-4a42-8152-2d9955f46920)

