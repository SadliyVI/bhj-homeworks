const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');

let clickCount = 0;
let lastClickTime = null;

cookie.addEventListener('mousedown', (event) => {
  const currentTime = Date.now();
  clickCount++;
  counter.textContent = clickCount;
  cookie.style.width = '220px';
  
  if (lastClickTime !== null) {
    const delta = (currentTime - lastClickTime) / 1000;
    const clickSpeed = (1 / delta).toFixed(2);
    speed.textContent = clickSpeed;
  }
  lastClickTime = currentTime;
}) 

cookie.addEventListener('mouseup', (event) => {
  cookie.style.width = null;
});  
  
