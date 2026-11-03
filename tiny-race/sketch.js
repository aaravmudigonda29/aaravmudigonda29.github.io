let racerXs = [30, 30, 30];
let startY = 50;
let yStep = 60;
let finishX = 560;



function setup() {
  createCanvas(600, startY + yStep * racerXs.length);
}

function draw() {
  background(240);
  line(finishX, 0, finishX, height);
  fill("green");
  rect(finishX - 300, 0, 100, height);


  for (let i = 0; i < racerXs.length; i++) {
    let speed = 1;
    if (racerXs[i] > finishX - 300 && racerXs[i] < finishX - 200) {
      speed = speed * 0.5;
    }
    let y = startY + yStep * i;
    if (racerXs[i] < finishX) {
      racerXs[i] += speed * random(1, 3);
    }
    fill("white");
    circle(racerXs[i], y, 24);
  }

}





