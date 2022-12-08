
var trex ,trex_running;
var ground
function preload()
{
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup()
{
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,20,50);
// to create ground
 ground = createSprite(200,180,400,20);
// to make the trex run
 trex.addAnimation("running",trex_running)
//to make the trex small
 trex.scale = 0.5;
 trex.x = 50;
}

function draw()
{
  background("white")
//to make the trex jump
if(keyDown("space")){
  trex.velocityY = -10;
}

//to add the gravity
trex.velocityY = trex.velocityY + 0.5;

//to stop the trex from falling down
trex.collide(ground);

  drawSprites();

}
