var playerCar,computerCar,road,roadImg

function preload(){
  roadImg=loadImage("car game.jpg")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
    road=createSprite(width/2,displayHeight/2)
  road.addImage(roadImg)
  road.scale=2
  playerCar=createSprite(50,displayHeight-10,100,100);
  playerCar.shapeColor="yellow"
  computerCar=createSprite(100,displayHeight-10,100,100);
  computerCar.shapeColor="red"

}

function draw() {
  background(255,255,255);  
  drawSprites();
  road.velocitY=-3
}
    
  
