var man, manImg;
var road, roadImg;
var obstacle1;
var obstacle2;

function preload(){
  manImg = loadImage("boy.png");
  roadImg = loadImage("road.jpeg");
  obstacle1 = loadImage("car.png");
  obstacle2 = loadImage("thief.png");

}

function setup() {
  createCanvas(600,600);
  
  road = createSprite(0,500,600,10);
  road.addImage("road",roadImg);
  road.velocityX = -6

  man = createSprite(100,400,30,20)
  man.addImage("man",manImg);
  man.scale = 0.1;


  
}

function draw() {
  background(0,0,0);  
  
 if(road.x<0){
   road.x=300;

 }

  drawSprites();
}

function spawnObstacles(){
  if(frameCount%40===0){
  var obstacle = createSprite(200,400,10,10);
  obstacle.velocityX = -6;
  obstacle.scale=0.5;
  var rand = Math.round(random(1,2));
  switch(rand){
    
    case 1:
     obstacle.addImage(obstacle1);
    break;
    case 2:
      obstacle.addImage(obstacle2);
    break;
    default: break; 
  }
  }
}

