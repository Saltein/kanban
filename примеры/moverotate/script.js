let holdTimer;
let angle = 0;
let angleRadians = (angle * Math.PI) / 180;
let speed = 3;

let posX = 200;
let posY = 200;

const message = document.getElementById("sayMessage");
const buttonRight = document.getElementById('right');
const buttonLeft = document.getElementById('left');
const buttonForward = document.getElementById('forward');
const buttonBackward = document.getElementById('backward');
const character = document.getElementById("character");


// button RIGHT button RIGHT button RIGHT button RIGHT button RIGHT
function goRight(){
  angle += 3;
  character.style.transform = `rotate(${angle}deg)`;
}
buttonRight.addEventListener('mousedown', function() {
  holdTimer = setInterval(goRight, 10);
});
buttonRight.addEventListener('mouseup', () => {
  clearInterval(holdTimer);
  angleRadians = (angle * Math.PI) / 180;
});
buttonRight.addEventListener('mouseout', () => {
  clearInterval(holdTimer);
  angleRadians = (angle * Math.PI) / 180;
});
// button RIGHT button RIGHT button RIGHT button RIGHT button RIGHT



// button LEFT button LEFT button LEFT button LEFT button LEFT
function goLeft(){
  angle -= 3;
  character.style.transform = `rotate(${angle}deg)`;
}
buttonLeft.addEventListener('mousedown', () => {
  holdTimer = setInterval(goLeft, 10);
});
buttonLeft.addEventListener('mouseup', () => {
  clearInterval(holdTimer);
  angleRadians = (angle * Math.PI) / 180;
});
buttonLeft.addEventListener('mouseout', () => {
  clearInterval(holdTimer);
  angleRadians = (angle * Math.PI) / 180;
});
// button LEFT button LEFT button LEFT button LEFT button LEFT




// button FORWARD button FORWARD button FORWARD button FORWARD
function goForward(){
  posX += speed * Math.sin(angleRadians);
  posY -= speed * Math.cos(angleRadians);
  character.style.top = posY + "px";
  character.style.left = posX + "px";
}
buttonForward.addEventListener('mousedown', () => {
  holdTimer = setInterval(goForward, 10);
});
buttonForward.addEventListener('mouseup', () => {
  clearInterval(holdTimer);
  angleRadians = (angle * Math.PI) / 180;
});
buttonForward.addEventListener('mouseout', () => {
  clearInterval(holdTimer);
  angleRadians = (angle * Math.PI) / 180;
});
// button FORWARD button FORWARD button FORWARD button FORWARD




// button BACKWARD button BACKWARD button BACKWARD button BACKWARD
function goBackward(){
  posX -= speed * Math.sin(angleRadians);
  posY += speed * Math.cos(angleRadians);
  character.style.top = posY + "px";
  character.style.left = posX + "px";
  console.log(keyState);
}
buttonBackward.addEventListener('mousedown', () => {
  holdTimer = setInterval(goBackward, 10);
});
buttonBackward.addEventListener('mouseup', () => {
  clearInterval(holdTimer);
  angleRadians = (angle * Math.PI) / 180;
});
buttonBackward.addEventListener('mouseout', () => {
  clearInterval(holdTimer);
  angleRadians = (angle * Math.PI) / 180;
});
// button BACKWARD button BACKWARD button BACKWARD button BACKWARD



// button SAY button SAY button SAY button SAY button SAY
function goSay(){
  message.style.top = posY - 40 + "px";
  message.style.left = posX + 55 + "px";
  message.style.display = "flex";
  setTimeout(() => {
    message.style.display = "none";
  }, 1500)
}


// управление с помощью wasd херово работает

let keyState = {};

window.addEventListener("keydown", function(e) {
  keyState[e.key] = true;
  handleKeys();
});

window.addEventListener("keyup", function(e) {
  keyState[e.key] = false;
  handleKeys();
  clearInterval(holdTimer);
  angleRadians = (angle * Math.PI) / 180;
});

function handleKeys() {
  clearInterval(holdTimer);
  if (keyState["w"] && !keyState["s"] && !keyState["a"] && !keyState["d"]) {
    holdTimer = setInterval(goForward, 10);
  }
  if (keyState["s"] && !keyState["w"] && !keyState["a"] && !keyState["d"]) {
    holdTimer = setInterval(goBackward, 10);
  }
  if (keyState["a"] && !keyState["s"] && !keyState["w"] && !keyState["d"]) {
    holdTimer = setInterval(goLeft, 10);
  }
  if (keyState["d"] && !keyState["s"] && !keyState["a"] && !keyState["w"]) {
    holdTimer = setInterval(goRight, 10);
  }
}



