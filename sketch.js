function preload(){
  // put preload code here
}

//DISEGNO originale
//function setup() {
//createCanvas(windowWidth, windowHeight);
//angleMode(DEGREES);
//background(40);}

//function draw(){
//translate(width/2, height/2);
//stroke(0);
//strokeWeight(0.7);
//line(200,0,cos(frameCount*3)*200,sin(frameCount*3)*200);
//if (frameCount==120) {noLoop();}}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  angleMode(CENTER);
  frameRate(50);
}

function draw() {

  //central cirle
  push();
  strokeWeight(0.07);
  translate(width/2, height/2);
  stroke(lerpColor(color('#F0F8FF'), color('#40E0D0'), frameCount/1500));
  if (frameCount>=750) {
    stroke(lerpColor(color('#F0F8FF'),color('#40E0D0'), frameCount/1500));
    }
  var a=cos(frameCount/200*20)*250;
  var b=sin(frameCount/600*20)*250;
  rotate(frameCount/50);
  line(250,250,a,b);

  if(frameCount == 1500){
    noloop();
    }
  pop();

  //random lines
  push();
  var c=0
  if(mouseIsPressed){c=100;};
  stroke(255,c);
  strokeWeight(0.05);
  randomChord();
  randomChord();
  pop();

}

//random lines function
function randomChord() {

  let angle1 = random(frameCount*50);
  let x1=height/2 + windowWidth*cos(angle1);
  let y1=width/2 + windowHeight*sin(angle1);

  let angle2 = random(frameCount*50);
  let x2=width/2 + windowWidth*cos(angle2);
  let y2=height/2 + windowHeight*sin(angle2);

  line(x1,y1,x2,y2);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
