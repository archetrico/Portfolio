class WindowP{
  constructor(_picture,_x,_y,_width,_height,_proportion,_name){
    this.x = _x;
    this.y = _y;
    this.width = _width;
    this.height = _height;
    this.orwidth = _width;
    this.orheight = _height;
    this.picture = _picture;
    this.dimx = this.width;
    this.dimy = this.height;
    this.maxscale = 1.2;
    this.opacity = 0;
    this.opacitystart = -20;
    this.maxopacity = 80;
    this.textopacity = 0;
    this.textopacitystart = -400;
    this.textsize = 30;
    this.textcontent = _name;
    this.proportion = _proportion;
    
  }
  
  setit() {
    this.canvas=createGraphics(this.width,this.height);
    if (this.proportion>=1){
      this.orwidth = this.height * this.proportion;
      this.dimx = this.height * this.proportion;
      if(this.orwidth<this.width){
        this.orwidth = this.width;
        this.dimx = this.width;
        this.orheight = this.width / this.proportion;
        this.dimy = this.width / this.proportion;
      }
    } else {
      this.orheight = this.width / this.proportion;
      this.dimy = this.width / this.proportion;
      if(this.orheight<this.height){
        this.orheight = this.height;
        this.dimy = this.height;
        this.orwidth = this.height * this.proportion;
      this.dimx = this.height * this.proportion;
      }
    }
  
  }
  
  show() {
    //Image
    this.canvas.imageMode(CENTER);  
    this.canvas.image(this.picture,this.width/2,this.height/2,this.dimx,this.dimy);
    
    //Blackoverlay
    this.canvas.noStroke();
    this.canvas.fill(0,this.opacity);
    this.canvas.rect(0,0,this.width,this.height);
    
    //Text
    this.canvas.rectMode(CENTER);
    this.canvas.fill(255,this.textopacity);
    this.canvas.textAlign(CENTER,CENTER);
    this.canvas.textSize(this.textsize);
    // this.canvas.text(str(floor(this.dimx))+"-"+str(floor(this.dimy)),this.width/2,this.height/2) 
    this.canvas.text(this.textcontent,this.width/2,this.height/2)
    // print(str(floor(this.dimx))+"-"+str(floor(this.dimy)));
    // print(str(floor(this.proportion)));
    
    //Reset stuff and draw
    this.canvas.rectMode(CORNER);
    image(this.canvas,this.x,this.y);
  }
  
  zoomin(){
    this.dimx += this.dimx/speed;
    this.dimy += this.dimy/speed;
    if (this.dimx>this.orwidth*1.2){this.dimx = this.orwidth*this.maxscale}
    if (this.dimy>this.orheight*1.2){this.dimy = this.orheight*this.maxscale}
    
    this.opacity +=1;
    if (this.opacity>this.maxopacity){this.opacity = this.maxopacity}
    
    this.textopacity +=10;
    if (this.textopacity>255){this.textopacity = 255}
  }
  
  zoomout(){
    this.dimx -=this.orwidth/speed;
    this.dimy -=this.orheight/speed;
    if (this.dimx<this.orwidth){this.dimx = this.orwidth}
    if (this.dimy<this.orheight){this.dimy = this.orheight}
    
    this.opacity -=1;
    if (this.opacity<this.opacitystart){this.opacity = this.opacitystart}
    
    this.textopacity -=10;
    if (this.textopacity<this.textopacitystart){this.textopacity = this.textopacitystart}
  }
  
  mouseontop(){
    if(
    mouseX > this.x &&
    mouseX < this.x+this.width &&
    mouseY > this.y &&
    mouseY < this.y+this.height)
    {return true;} else {return false;}
  }
  
}