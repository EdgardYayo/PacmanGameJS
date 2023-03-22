// var canvas = document.getElementById("canvasSpace");
// var ctx = canvas.getContext("2d");

// ctx.fillText("helloworld", 10, 150);


var score = 0;
var gscore = 0;
var player = {
  x: 50,
  y: 100,
  pacmouth: 320,
  pacdir: 0,
  psize: 32,
};

var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;
mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "pac.png";

function checkReady() {
  this.ready = true;
  playgame();
}

function playgame() {
  render();
}

function render() {
  context.fillStyle = "#000222";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(
    mainImage,
    player.pacmouth,
    player.pacdir,
    32,
    32,
    player.x,
    player.y,
    player.psize,
    player.psize
  );
  context.font = "20px monospace";
  context.fillStyle = "white";
  context.fillText(`Pacman: ${score} vs Ghost: ${gscore}`, 10,20)
}

document.body.appendChild(canvas);

// ctx.fillText("helloworld", 10, 150);
