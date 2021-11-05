let hor1, hor2, vert1;
let speed = 400;
let windowP;

//Organization variables
let border;
let separation;
let framex;
let frame2x;
let framey;
let frame2y;

function preload() {
  c1a = loadImage("pictures/c1a.jpg");
  c1b = loadImage("pictures/c1b.jpg");
  c1c = loadImage("pictures/c1c.jpg");
  //c1d = loadImage("pictures/c1d.jpg");
  c1e = loadImage("pictures/c1e.jpg");
  c1f = loadImage("pictures/c1f.jpg");
  c1g = loadImage("pictures/c1g.jpg");
  c1h = loadImage("pictures/c1h.jpg");
  
  c2a = loadImage("pictures/c2a.jpg");
  c2b = loadImage("pictures/c2b.jpg");
  c2c = loadImage("pictures/c2c.jpg");
  c2d = loadImage("pictures/c2d.jpg");
  c2e = loadImage("pictures/c2e.jpg");
  
  c3a = loadImage("pictures/c3a.jpg");
  c3b = loadImage("pictures/c3b.jpg");
  c3c = loadImage("pictures/c3c.jpg");
  c3d = loadImage("pictures/c3d.jpg");
  c3e = loadImage("pictures/c3e.jpg");
  c3f = loadImage("pictures/c3f.jpg");
}

function setup() {
  createCanvas(windowWidth, windowWidth*2.5);
  
  //Adquire organization values
  border = windowWidth*0.035;
  separation = windowWidth*0.03;
  framex = windowWidth*0.29;
  frame2x = (framex*2)+separation;
  framey = windowWidth*0.182;
  frame2y = (framey*2)+separation;
  
  //Start Setting the stuff
  //FIRST COLUMN
  // h
  // h
  // h
  // t
  // v
  // 2h
  // h
  // h
  
  let yc1 = border;
  windowC1a = new WindowP(c1a,border,yc1,framex,framey,1.89,"Nova Stroy");
  yc1 = yc1 + framey + separation;
  windowC1b = new WindowP(c1b,border,yc1,framex,framey,1.53,"Ghana Housing");
  yc1 = yc1 + framey + separation;
  windowC1c = new WindowP(c1c,border,yc1,framex,framey,1.66,"GGM");
  yc1 = yc1 + framey + separation;
  
  //windowC1d = new WindowP(c1d,border,yc1,framex,framey,1.65,"Horizontal");
  //In here some text
  yc1 = yc1 + framey + separation;
  
  windowC1e = new WindowP(c1e,border,yc1,framex,frame2y,1.01,"Folkart");
  yc1 = yc1 + 2*framey + 2*separation;
  
  windowC1f = new WindowP(c1f,border,yc1,frame2x,frame2y,1.01,"GGM");
  yc1 = yc1 + 2*framey + 2*separation;
  
  windowC1g = new WindowP(c1g,border,yc1,framex,framey,1.66,"NCOC");
  yc1 = yc1 + framey + separation;
  windowC1h = new WindowP(c1h,border,yc1,framex,framey,0.80,"Folkart");
  
  //SECOND COLUMN
  // v
  // 2h
  // h
  // h
  // 2h empty
  // h
  let yc2 = border;
  let xc2 = border+framex+separation;
  
  windowC2a = new WindowP(c2a,xc2,yc2,framex,frame2y,1,"Tashkent Bank");
  yc2 = yc2 + 2*framey + 2*separation;
  
  windowC2b = new WindowP(c2b,xc2,yc2,frame2x,frame2y,1.33,"GGM");
  yc2 = yc2 + 2*framey + 2*separation;
  
  windowC2c = new WindowP(c2c,xc2,yc2,framex,framey,1.81,"Orient Office");
  yc2 = yc2 + framey + separation;
  windowC2d = new WindowP(c2d,xc2,yc2,framex,framey,1.41,"Bursa Housing");
  yc2 = yc2 + framey + separation;
  
  //2h Empty
  yc2 = yc2 + 2*framey + 2*separation;
  
  windowC2e = new WindowP(c2e,xc2,yc2,framex,framey,1.41,"Bursa Housing");
  
  //THIRD COLUMN
  // h
  // h
  // 2h empty
  // h
  // h
  // v
  // h
  let yc3 = border;
  let xc3 = border+2*framex+2*separation;
  
  windowC3a = new WindowP(c3a,xc3,yc3,framex,framey,2,"Bogaçay");
  yc3 = yc3 + framey + separation;
  windowC3b = new WindowP(c3b,xc3,yc3,framex,framey,1.56,"Nova Stroy");
  yc3 = yc3 + framey + separation;
  
  //2h Empty
  yc3 = yc3 + 2*framey + 2*separation;
  
  windowC3c = new WindowP(c3c,xc3,yc3,framex,framey,1.78,"Narxoz");
  yc3 = yc3 + framey + separation;
  windowC3d = new WindowP(c3d,xc3,yc3,framex,framey,1.43,"NCOC");
  yc3 = yc3 + framey + separation;
  
  windowC3e = new WindowP(c3e,xc3,yc3,framex,frame2y,1.46,"Folkart");
  yc3 = yc3 + 2*framey + 2*separation;
  
  windowC3f = new WindowP(c3f,xc3,yc3,framex,framey,1.77,"Horizontal");
  
  
  windowC1a.setit();
  windowC1b.setit();
  windowC1c.setit();
  //windowC1d.setit();
  windowC1e.setit();
  windowC1f.setit();
  windowC1g.setit();
  windowC1h.setit();
  
  windowC2a.setit();
  windowC2b.setit();
  windowC2c.setit();
  windowC2d.setit();
  windowC2e.setit();
  
  windowC3a.setit();
  windowC3b.setit();
  windowC3c.setit();
  windowC3d.setit();
  windowC3e.setit();
  windowC3f.setit();

}

function draw() {
    background(255);
    
    windowC1a.show();
    windowC1b.show();
    windowC1c.show();
    windowC1e.show();
    windowC1f.show();
    windowC1g.show();
    windowC1h.show();
  
    windowC2a.show();
    windowC2b.show();
    windowC2c.show();
    windowC2d.show();
    windowC2e.show();
  
    windowC3a.show();
    windowC3b.show();
    windowC3c.show();
    windowC3d.show();
    windowC3e.show();
    windowC3f.show();
  
  
  
  if (
    windowC1a.mouseontop()
  ){
    windowC1a.zoomin();
  }else{
    windowC1a.zoomout();
  }
  
  if (
    windowC1b.mouseontop()
  ){
    windowC1b.zoomin();
  }else{
    windowC1b.zoomout();
  }
  
  if (
    windowC1c.mouseontop()
  ){
    windowC1c.zoomin();
  }else{
    windowC1c.zoomout();
  }
  
  // if (
  //   windowC1d.mouseontop()
  // ){
  //   windowC1d.zoomin();
  // }else{
  //   windowC1d.zoomout();
  // }
  
  if (
    windowC1e.mouseontop()
  ){
    windowC1e.zoomin();
  }else{
    windowC1e.zoomout();
  }
  
  if (
    windowC1f.mouseontop()
  ){
    windowC1f.zoomin();
  }else{
    windowC1f.zoomout();
  }
  
  if (
    windowC1g.mouseontop()
  ){
    windowC1g.zoomin();
  }else{
    windowC1g.zoomout();
  }
  
  if (
    windowC1h.mouseontop()
  ){
    windowC1h.zoomin();
  }else{
    windowC1h.zoomout();
  }
  
  //Column 2
  
  
  if (
    windowC2a.mouseontop()
  ){
    windowC2a.zoomin();
  }else{
    windowC2a.zoomout();
  }
  
  if (
    windowC2b.mouseontop()
  ){
    windowC2b.zoomin();
  }else{
    windowC2b.zoomout();
  }
  
  if (
    windowC2c.mouseontop()
  ){
    windowC2c.zoomin();
  }else{
    windowC2c.zoomout();
  }
  
  if (
    windowC2d.mouseontop()
  ){
    windowC2d.zoomin();
  }else{
    windowC2d.zoomout();
  }
  
  if (
    windowC2e.mouseontop()
  ){
    windowC2e.zoomin();
  }else{
    windowC2e.zoomout();
  }
  
  
  //Column 3
  
  
  if (
    windowC3a.mouseontop()
  ){
    windowC3a.zoomin();
  }else{
    windowC3a.zoomout();
  }
  
  if (
    windowC3b.mouseontop()
  ){
    windowC3b.zoomin();
  }else{
    windowC3b.zoomout();
  }
  
  if (
    windowC3c.mouseontop()
  ){
    windowC3c.zoomin();
  }else{
    windowC3c.zoomout();
  }
  
  if (
    windowC3d.mouseontop()
  ){
    windowC3d.zoomin();
  }else{
    windowC3d.zoomout();
  }
  
  if (
    windowC3e.mouseontop()
  ){
    windowC3e.zoomin();
  }else{
    windowC3e.zoomout();
  }
  
  if (
    windowC3f.mouseontop()
  ){
    windowC3f.zoomin();
  }else{
    windowC3f.zoomout();
  }
  
    
}