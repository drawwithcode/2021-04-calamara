var input;
var button;
var myCanvas;
let stars = [];

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.background("#000000");

  input = createInput();
  input.position(windowWidth / 2 - 400, windowHeight / 2);
  button = createButton("ASK");
  button.position(windowWidth / 2 + 300, windowHeight / 2);
  button.mousePressed(estrazioneCarte);

  for (i = 0; i < 500; i++) {
    let star = {
      x: random(0, width),
      y: random(0, height),
    };
    stars.push(star);
  }
}

function draw() {
  for (i = 0; i < 500; i++) {
    let x = stars[i].x;
    let y = stars[i].y;
    fill("#d9ae5f");
    ellipse(x, y, random(1, 4), random(1, 4));
  }
}

function estrazioneCarte() {
  window.open("tarot.html", "_self");
}
