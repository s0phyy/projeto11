var ship,sea;
var shipImg, seaImg;
function preload(){
shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200, 200, 400, 400)
  sea.addImage("mar", seaImg);
  ship = createSprite(130, 270, 10, 10);
  ship.addAnimation("navio", shipImg)
  ship.scale = 0.3;
}

function draw() {
  background("blue");
    drawSprites();

 
}
