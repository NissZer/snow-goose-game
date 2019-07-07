class Goose {
  constructor(){
    this.r = 90;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 1;
    
  }
  
  jump(){
    if (this.y == height - this.r){   
      this.vy = -30;
    }
  } 
  
  hits(albums){
    return collideRectRect(this.x,this.y, this.r,this.r, albums.x, albums.y, albums.r, albums.r);
  }
  
  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r); 
  }
  
  show(){
    image(gImg, this.x, this.y, this.r, this.r);
  }
  
  
}