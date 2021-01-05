var  score = 0;
var PLAY;
var END;
var GameState;
function preload()
{
roadimg = loadImage("images/road.png");
car1    = loadImage("images/car1.png");
coin1 = loadImage("images/coin.gif");
enemy1 = loadImage("images/enemy.gif");
coinsound = loadSound("images/coinsound.wav")
}

function setup() {
  createCanvas(800, 600);
  //road = createSprite(400,550);
  //road.addImage(roadimg);
   car = createSprite(400,550);
   car.addImage(car1);
   car.scale = 0.2
   //coin = createSprite()
   coinGroup = new Group();
   enemyGroup = new Group();
   
  
}

function draw() {  
background(roadimg);
  background.velocityY =  5
Coins();
Enemy();
camera.position.x = 400;
camera.position.y = car.y;
if(keyDown(RIGHT_ARROW)){
  car.x +=6;
}
if(keyDown(LEFT_ARROW)){
  car.x -=6;
}
if(car.isTouching(coinGroup)){
  coinGroup.destroyEach();
  score++
  coinsound.play();
}
drawSprites();
textSize(35);
stroke("yellow"); 
fill("black"); 
text("SCORE : "+score,336,280);

if(car.isTouching(enemyGroup)){
  coinGroup.destroyEach();
  enemyGroup.destroyEach();
  coinGroup.velocityY=0;
  enemyGroup.velocityY=0;
  textSize(35);
  stroke("red");
  fill("black");
  text("GAME OVER",300,500);
  car.destroy();
}
}
function Coins(){
  if(frameCount % 90 === 0){
    coin = createSprite(390,150,20,20);
    coin.y = Math.round(random(50,100));
    coin.x = Math.round(random(250,600));
    coin.addImage(coin1);
    coin.scale = 0.1;
    coin.velocityY = 3;
    coinGroup.add(coin);
  }
}
function Enemy(){
  if(frameCount % 85 === 0){
    enemy = createSprite(390,150,20,20);
    enemy.y = Math.round(random(50,100));
    enemy.x = Math.round(random(250,600));
    enemy.addImage(enemy1);
    enemy.scale = 0.1;
    enemy.velocityY = 3;
    enemyGroup.add(enemy);
}
}
