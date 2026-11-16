function drawRacer(x, y) {
  rect(x, y, 32, 12);
  circle(x + 8, y + 12, 10);
}

function setup() {
  createCanvas(300, 300);
  drawRacer(40, 150);
  drawRacer(100, 100);
}