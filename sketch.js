let cor;
let circuloX;
let circuloY;

function setup() {
  createCanvas(600, 590);
  background("blue");
  cor = color(random(0, 255),random(0, 255),random(0, 255));
  circuloX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
  circuloY = [random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height)];
}

function draw() {    
  fill(cor);
  
  for (let contador in circuloX){
  circle(circuloX[contador], circuloY[contador], 50)
  circuloX[contador]+= random(0,10);
  circuloY[contador]+= random(-3,4);
  
  if(circuloX[contador] >= width) {
  circuloX[contador] = 0;
  circuloY[contador] = random(height);
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  }
}
  if(mouseIsPressed){ 
  cor = color(random(0, 255), random(0, 255), random(0, 255));
 
  }
}