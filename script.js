// Get the canvas element
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

// Set the canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Define the game variables
var player = {
  x: 100,
  y: 100,
  width: 20,
  height: 20,
  speed: 5
};

var platforms = [
  { x: 0, y: 500, width: 800, height: 20 },
  { x: 200, y: 400, width: 200, height: 20 },
  { x: 400, y: 300, width: 200, height: 20 },
  { x: 600, y: 200, width: 200, height: 20 }
];

var enemies = [
  { x: 300, y: 450, width: 20, height: 20 },
  { x: 500, y: 350, width: 20, height: 20 }
];

var spikes = [
  { x: 100, y: 550, width: 20, height: 20 },
  { x: 700, y: 250, width: 20, height: 20 }
];

var finish = { x: 700, y: 50, width: 100, height: 20 };

// Define the game functions
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw the platforms
  for (var i = 0; i < platforms.length; i++) {
    ctx.fillStyle = "#ccc";
    ctx.fillRect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
  }
  
  // Draw the enemies
  for (var i = 0; i < enemies.length; i++) {
    ctx.fillStyle = "#red";
    ctx.fillRect(enemies[i].x, enemies[i].y, enemies[i].width, enemies[i].height);
  }
  
  // Draw the spikes
  for (var i = 0; i < spikes.length; i++) {
    ctx.fillStyle = "#black";
    ctx.fillRect(spikes[i].x, spikes[i].y, spikes[i].width, spikes[i].height);
  }
  
  // Draw the finish line
  ctx.fillStyle = "#green";
  ctx.fillRect(finish.x, finish.y, finish.width, finish.height);
  
  // Draw the player
  ctx.fillStyle = "#blue";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function update() {
  // Update the player position
  if (leftArrowPressed) {
    player.x -= player.speed;
  }
  if (rightArrowPressed) {
    player.x += player.speed;
  }
  if (upArrowPressed) {
    player.y -= player.speed;
  }
  if (downArrowPressed) {
    player.y += player.speed;
  }
}

// Define the game loop
function gameLoop() {
  draw();
  update();
  requestAnimationFrame(gameLoop);
}

// Define the arrow key press event listeners
document.addEventListener("keydown", function(event) {
  if (event.keyCode == 37) {
    leftArrowPressed = true;
  }
  if (event.keyCode == 39) {
    rightArrowPressed = true;
  }
  if (event.keyCode == 38) {
    upArrowPressed = true;
  }
  if (event.keyCode == 40) {
    downArrowPressed = true;
  }
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode == 37) {
    leftArrowPressed = false;
  }
  if (event.keyCode == 39) {
    rightArrowPressed = false;
  }
  if (event.keyCode == 38) {
    upArrowPressed = false;
  }
  if (event.keyCode == 40) {
    downArrowPressed = false;
  }
});

// Initialize the game loop
var leftArrowPressed = false;
var rightArrowPressed = false;
var upArrowPressed = false;
var downArrowPressed = false;
gameLoop();