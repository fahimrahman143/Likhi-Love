#🧠 script.js:*
```js
const emojis = ['🎂', '🎉', '🥳', '🍰'];

function dropEmoji() {
  const emoji = document.createElement('div');
  emoji.className = 'emoji';
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  // Random left position 0vw - 100vw
  emoji.style.left = Math.random() * 100 + 'vw';

  // Random size 20px - 40px
  const size = Math.random() * 20 + 20;
  emoji.style.fontSize = size + 'px';

  // Random animation duration 3s - 6s
  const duration = Math.random() * 3 + 3;
  emoji.style.animationDuration = duration + 's';

  document.body.appendChild(emoji);

  // Remove emoji after animation ends
  setTimeout(() => {
    emoji.remove();
  }, duration * 1000);
}

// Every 150ms new emoji drop
setInterval(dropEmoji, 150);
```
```javascript
document.querySelectorAll('.question').forEach(button => {
    button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
```
