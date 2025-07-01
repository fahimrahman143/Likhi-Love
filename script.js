#🧠 script.js:*

```javascript
document.querySelectorAll('.question').forEach(button => {
    button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
```