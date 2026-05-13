function preload() {
  img = loadImage("assets/images/image.jpeg");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0, 0, 255);
  image(img, 0, 0, width, height);
  rect(width / 2, 350, 70, 30);
  text("Hello World", 50, 200);
}
