var garden,rabbit,apple, redleaves,orangeleaves;
var appleImg,gardenImg,rabbitImg,orangeImg,redImg;
var aleatorio;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 

}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  aleatorio =  Math.round(random(20, 370));
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX;

   maçã();
   folhas_laranjas();
   folhas_vermelhas();
  drawSprites();
  
}


function maçã(){
  if(frameCount%89===0){
    apple = createSprite(aleatorio,-470,10,10);
    apple.velocityY = 5;
    apple.addImage("maçã", appleImg);
    apple.scale = 0.07;
  }
}

function folhas_laranjas(){
  if(frameCount%67===0){
    orangeleaves = createSprite(aleatorio,-430,10,10);
    orangeleaves.velocityY = 5;
    orangeleaves.addImage("folha laranja", orangeImg);
    orangeleaves.scale = 0.07;
  }
}

function folhas_vermelhas(){
  if(frameCount%103===0){
    redleaves = createSprite(aleatorio,-410,10,10);
    redleaves.velocityY = 5;
    redleaves.addImage("folha vermelha", redImg);
    redleaves.scale = 0.07;
  }
}
