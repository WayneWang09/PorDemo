function setup() {
  createCanvas(1920,1080 );
}

function draw() {
 
  fill(random(0,255),random(0,255),random(0,255));
  rect(mouseX,mouseY,random(0,100),100);
}


