let goose;
let gImg;
let backgroundImg;
let coverImg;
let albums = [];
let music;
var score = 0; 

function preload() {
  gameoverImg = loadImage('game-over.jpg');
  gImg = loadImage('snow-goose.png');
  backgroundImg = loadImage('background.jpg');
  coverImg = loadImage('album-cover.jpg');
  music = loadSound('Friendship.mp3');
}
function setup() { 
  music.play();
  createCanvas(800, 530);
  goose = new Goose();
}

function keyPressed() {
  if (key == ' ') {
    goose.jump(); 
    score = score + 1;
  }
} 

function draw() {
  if (random(1) < 0.003) {
    albums.push(new Albums());
  }
  background(backgroundImg);
  text(("Score: " + score), 20, 20); 
  for (let album of albums) {
    album.show();
    album.move();
    if (goose.hits(album)){           score = score - 1;
      if (score == -1 ){
        background(gameoverImg);
      }
    }
  

  goose.show();
  goose.move();
  }
}