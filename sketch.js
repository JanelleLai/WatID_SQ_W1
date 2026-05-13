function preload() {
  img = loadImage("assest/image.jpg");
}

function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(0, 0, 255);
  image(img, 0, 0, width, height);
  rect(50, 50, 10, 50);
  text("Hello World", 50, 200);
}
