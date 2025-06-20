const container = document.getElementById('cursor-container');
const cursor = document.querySelector('.cursor');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Update cursor position
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';

  // Create yarn element
  const yarn = document.createElement('div');
  yarn.classList.add('yarn-element');
  yarn.style.left = mouseX + 'px';
  yarn.style.top = mouseY + 'px';
  container.appendChild(yarn);

  // Remove element after animation
  setTimeout(() => {
    yarn.style.opacity = 0;
    setTimeout(() => {
      container.removeChild(yarn);
    }, 1000);
  }, 0);
});