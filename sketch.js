var car;
var brick;
var speed;
var weight;


function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
 car=createSprite(5,5, 50, 50);
 car.velocityX=speed;
 car.velocityY=10;
 brick=createSprite(600,200,60,height/2)
}

function draw() {
  console.log(car.position);
  background(0);
  if(brick.x-car.x<(car.width+brick.width)/2){
   var deformation=0.5*speed*speed*weight/22905
   if(deformation>180){
     car.shapeColor=color(255,0,0);
   }
   if(deformation<180 && deformation>80){
     car.shapeColor=color(230,230,0);
   }
   if(deformation<80){
     car.shapeColor=color(0,250,0);
   }
  }
  
  drawSprites();
}