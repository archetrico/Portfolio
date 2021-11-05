let hor1, hor2, vert1;
let canvashor1;
let dimx = 363;
let dimy = 235;
let opax = 0;
let opaxmax = 60;
let speed = 400;

let windowP;

function preload() {
  hor1 = loadImage("hor1.jpg");
  hor2 = loadImage("hor2.jpg");
  vert1 = loadImage("vert1.jpg");
}

function setup() {
  createCanvas(800, 800);
  windowP = new WindowP(hor1,25,25,363,235,1.65,"GGM");
  windowP2 = new WindowP(hor2,25,50+235,363,235,1.33,"GGM");
  windowP3 = new WindowP(vert1,50+363,25,363,235*2+25,1,"Tashkent Bank");
  
  windowP.setit();
  windowP2.setit();
  windowP3.setit();
}

function draw() {
    background(255);
  
    windowP.show();
    windowP2.show();
    windowP3.show();
  
  if (
    mouseX > windowP.x &&
    mouseX < windowP.x+windowP.width &&
    mouseY > windowP.y &&
    mouseY < windowP.y+windowP.height
  ){
    windowP.zoomin();
    
  }else{
    windowP.zoomout();
  }
  
  if (
    mouseX > windowP2.x &&
    mouseX < windowP2.x+windowP2.width &&
    mouseY > windowP2.y &&
    mouseY < windowP2.y+windowP2.height
  ){
    windowP2.zoomin();
    
  }else{
    windowP2.zoomout();
  }
  
  if (
    mouseX > windowP3.x &&
    mouseX < windowP3.x+windowP3.width &&
    mouseY > windowP3.y &&
    mouseY < windowP3.y+windowP3.height
  ){
    windowP3.zoomin();
    
  }else{
    windowP3.zoomout();
  }
    
}