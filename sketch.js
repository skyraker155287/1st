let x=5
function setup() {
  createCanvas(400, 400);
}
function draw() {
circle(mouseX, mouseY, 50);
fill(mouseX, mouseY, 50);
line(mouseX, mouseY, 85, 75);
stroke(mouseX, mouseY, 0);
x=x++ 
 //background(mouseX, mouseY, 85);
}