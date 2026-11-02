let cx;
let cy;
let n = 20;
let startX = 10;
let xStep = 10;
let startY = 10;
let yStep = 10;

class Planet {
  constructor(orbit, size, speed, color) {
    this.orbit = orbit;
    this.size = size;
    this.angle = 0;
    this.speed = speed;
    this.x = 0;
    this.y = 0;
    this.color=0;
  }

  update() {
    this.angle += this.speed;
    this.angle %= TAU;
    this.x = cx + this.orbit * sin(this.angle);
    this.y = cy + this.orbit * cos(this.angle);
  }

  draw() {
    circle(this.x, this.y, this.size);
  }
}

let planets;
function setup() {
  createCanvas(windowWidth, windowHeight);
  cx = width / 2;
  cy = height / 2;
  planets = [
    new Planet(0, 300, 0,),
    new Planet(175, 20, 0.001),
    new Planet(225, 30, -0.002),
    new Planet(280, 65, 0.003),
    new Planet(370, 50, 0.004),
    new Planet(470, 100, 0.005),
    new Planet(580, 100, 0.003),
    new Planet(690, 80, 0.004),
    new Planet(810, 80, 0.002),
  ];

}

function draw() {
  background(0);

  for (let planet of planets) {
    planet.update();
    planet.draw();
  }
  
 // for (let i = 0; i < n; i++) {
   // let x = startX + xStep * i;
   // let y = startY + yStep * i;
    
    
  //}

  // fill(255, 255, 0,);
  // circle(0, 0, 300);

  // fill(158, 152, 141);
  // circle(0, 225, 20);

  // fill(218, 192, 147);
  // circle(0, 300, 30);

  // fill(98, 150, 218);
  // circle(0, 400, 65);

  // fill(138, 50, 28);
  // circle(0, 525, 50);

  // fill(182, 155, 109);
  // circle(0, 650, 100);

  // fill(222, 154, 36);
  // circle(0, 775, 100);

  // fill(140, 193, 233);
  // circle(0, 900, 80);

  // fill(25, 104, 164);
  // circle(0, 1100, 80);
}
