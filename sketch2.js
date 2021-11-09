var myCanvas;
let stars = [];
let carta = [];
let myText;

function preload() {
  let g0 = loadImage("./assets/gatto0.png");
  let g1 = loadImage("./assets/gatto1.png");
  let g2 = loadImage("./assets/gatto2.png");
  let g3 = loadImage("./assets/gatto3.png");
  let g4 = loadImage("./assets/gatto4.png");
  let g5 = loadImage("./assets/gatto5.png");
  let g6 = loadImage("./assets/gatto6.png");
  let g7 = loadImage("./assets/gatto7.png");
  let g8 = loadImage("./assets/gatto8.png");
  let g9 = loadImage("./assets/gatto9.png");
  let g10 = loadImage("./assets/gatto10.png");
  let g11 = loadImage("./assets/gatto11.png");
  let g12 = loadImage("./assets/gatto12.png");
  let g13 = loadImage("./assets/gatto13.png");
  let g14 = loadImage("./assets/gatto14.png");
  let g15 = loadImage("./assets/gatto15.png");
  let g16 = loadImage("./assets/gatto16.png");
  let g17 = loadImage("./assets/gatto17.png");
  let g18 = loadImage("./assets/gatto18.png");
  let g19 = loadImage("./assets/gatto19.png");
  let g20 = loadImage("./assets/gatto20.png");
  let g21 = loadImage("./assets/gatto21.png");

  carta = [
    g0,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
    g11,
    g12,
    g13,
    g14,
    g15,
    g16,
    g17,
    g18,
    g19,
    g20,
    g21,
  ];
}

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.background("#000000");
  frameRate(30);
  //generazione delle stelle
  for (i = 0; i < 500; i++) {
    let star = {
      x: random(0, width),
      y: random(0, height),
    };
    stars.push(star);
  }
  //nuova domanda
  button = createButton("ask a new question");
  button.position(windowWidth / 2 - 120, windowHeight / 2 + 300);
  button.mousePressed(goBack);

  myText = createElement("h1", "The universe is answering...");
}

function draw() {
  //funzione per le stelle
  push();
  for (i = 0; i < 500; i++) {
    let x = stars[i].x;
    let y = stars[i].y;
    fill("#d9ae5f");
    ellipse(x, y, random(1, 4), random(1, 4));
  }
  loop();
  pop();

  if (frameCount > 20) {
    push();
    tarocchi();
    pop();
  }
}

// function showTesto() {
//   myText = createElement("h1", "The universe is answering...");
//   if (frameCount < 100) {
//     myText.style("font-size", "40px");
//     myText.center;
//     myText.style("color", "#d9ae5f");
//     myText.style("font", "Macondo");
//     myText.position(windowWidth / 2, windowHeight / 2);
//   } else if (frameCount > 100) {
//     myText.style("display", "none");
//   }
// }

function rimuoviCarte() {
  let indicio = floor(random(0, carta.length - 1));
  let casuale = carta[indicio];
  carta.splice(indicio, 1);
  return casuale;
}

function tarocchi() {
  imageMode(CENTER);
  let tarot1 = rimuoviCarte();
  image(tarot1, windowWidth / 2 - 400, windowHeight / 2, 240, 400);

  let tarot2 = rimuoviCarte();
  image(tarot2, windowWidth / 2, windowHeight / 2, 240, 400);

  let tarot3 = rimuoviCarte();
  image(tarot3, windowWidth / 2 + 400, windowHeight / 2, 240, 400);

  noLoop();
}

function goBack() {
  window.open("index.html", "_self");
}

// sparkle animation reference: https://editor.p5js.org/hosken/sketches/LRCedfGPY
// tutorial random image https://www.youtube.com/watch?v=hxjEl-pun7o
