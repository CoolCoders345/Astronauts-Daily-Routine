var bath,bathImg
var brush, brushImg
var drink, drinkImg
var eat, eatImg
var gym, gymImg
var weights, weightsImg
var move, moveImg
var sleep,sleepImg
var bgImg, bg

function preload(){
bgImg = loadImage("iss.png")
brushImg = loadImage("brush.png")
drinkImg = loadAnimation("drink1.png","drink2.png")
eatImg = loadAnimation("eat1.png","eat2.png")
gymImg= loadAnimation("gym1.png","gym2.png")
weightsImg= loadAnimation("gym11.png","gym12.png")
moveImg= loadAnimation("move.png","move1.png")
sleepImg= loadImage("sleep.png")
bathImg = loadAnimation("bath1.png","bath2.png")

}




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  bg = createSprite(400,200,800,400)
  bg.addImage(bgImg)
  bg.scale = 0.2

  brush = createSprite(400, 200, 50, 50);
  brush.addImage(brushImg)
  brush.scale = 0.125
  brush.visible = false

  bath = createSprite(400, 200, 50, 50);
  bath.addAnimation("bathing",bathImg)
  bath.scale = 0.125
  bath.visible = false

  drink = createSprite(400, 200, 50, 50);
  drink.addAnimation("drinking",drinkImg)
  drink.scale = 0.125
  drink.visible = false
  
  eat = createSprite(400, 200, 50, 50);
  eat.addAnimation("eating",eatImg)
  eat.scale = 0.125
  eat.visible = false

  gym = createSprite(400, 200, 50, 50);
  gym.addAnimation("gyming",gymImg)
  gym.scale = 0.125
  gym.visible = false

  weights = createSprite(400, 200, 50, 50);
  weights.addAnimation("weighting",weightsImg)
  weights.scale = 0.125
  weights.visible= false

  move = createSprite(400, 200, 50, 50);
  move.addAnimation("moving",moveImg)
  move.scale = 0.125
  move.visible = false

  sleep = createSprite(400, 200, 50, 50);
  sleep.addImage(sleepImg)
  sleep.scale = 0.125
  sleep.visible = false
}

function draw() {
  background(0);  
  drawSprites();
  if(keyDown("left_arrow")){
    brush.visible = true
    brush.lifetime = 100
  }
  if(keyDown("right_arrow")){
  sleep.visible = true
  sleep.lifetime = 100  
}
if(keyDown("up_arrow")){
  weights.visible = true
 weights.lifetime = 100
}
if(keyDown("down_arrow")){
  bath.visible = true
 bath.lifetime = 100
}
if(keyDown("space")){
 gym.visible = true
  gym.lifetime = 100
}
if(keyDown("D")){
  drink.visible = true
  drink.lifetime = 100
}
if(keyDown("E")){
  eat.visible = true
 eat.lifetime = 100
}

  drawSprites();
}