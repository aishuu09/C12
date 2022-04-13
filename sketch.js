var trex;
var trexRunning;
var edges;
var  invisibleground 
function preload(){
  trexRunning=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage=loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,20,50);
  trex.addAnimation("running",trexRunning);
  trex.scale=0.5;

// x,y,width,height 
  ground=createSprite(200,180,400,20);
  ground.addImage(groundImage)

  edges=createEdgeSprites();
  invisibleground = createSprite (200, 190, 400, 20)
 invisibleground.visible= false
 
}

function draw(){
  background("white");

  ground.velocityX=-6;

  if(keyDown("space")&& trex.y>=140){
     trex.velocityY=-10;
  } 
  //add gravity- to give positive velocity
  trex.velocityY=trex.velocityY+0.8;

  //Infinite Scrolling Effect
  if(ground.x<0){
    ground.x=ground.width/2;
  }

  trex.collide(invisibleground)


  
   drawSprites();
}
