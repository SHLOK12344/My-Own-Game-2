var pc
var ground
var ground2

function preload() {
  backgroundImage = loadImage("Images/Backgroung Inage.jpg");
  ForestImage = loadImage("Images/Forest Image.jpg");
  logImage = loadImage("Images/log1.png")
  pcImage = loadAnimation("Images/Pc-1.png","Images/Pc-2.png","Images/Pc-3.png","Images/Pc-4.png","Images/Pc-5.png","Images/Pc-6.png");
 
}

function setup() {
  createCanvas(1000,600);

  ground = createSprite(500,300,1600,1500);
  ground.velocityX=-5
  ground.addImage("groundImage",ForestImage);
  ground.scale=0.67

  ground2 = createSprite(1700,300,1600,1500);
  ground2.velocityX=-5
  ground2.addImage("groundImage",ForestImage);
  ground2.scale=0.67

  log = createSprite(900,520,10,10);
  log.addImage("logImage",logImage);
  log.scale=0.3

 pc = createSprite(200, 450, 50, 50);
 pc.addAnimation("pcImage",pcImage);
 pc.scale=0.6;

}

function draw() {
  background(backgroundImage); 
  console.log(ground.x)

if(ground.x<0){
     ground.x=600;
     console.log(ground.x)
}

if(ground2.x<500){
  ground2.x=1300;
  console.log(ground.x)
}
  drawSprites();
}