var shipAnimation,ship,seaImage,sea,sprite

function preload(){

  seaImage=loadImage("sea.png");
  shipAnimation=loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(600,300);
 
   sea=createSprite(200,180,400,20)
   sea.addImage("sea", seaImage);
   sea.scale=0.2;
  
  ship=createSprite(50,50,20,50)
  ship.addAnimation("ship",shipAnimation);

  ship.scale = 0.2;
  //ship.x = 50;

  ship.x=ship.width/2;
  ship.velocityX=-4;

  sea.visible=true;
  ship.visible=true

  invisibleGround=createSprite(100,20,400,10)
  invisibleGround.visible=false
}

function draw() {
  background("blue");

ship.velocityY = ship.velocityY + 0.1

if (sea.x < 0) {
 sea.x = sea.width / 2;
}

ship.collide(invisibleGround);


drawSprites();

}