var playerRunning,player;
var goldCoin,goldimage,silverCoin,silverimage,bronzeCoin,bronzeimage;
var obstacle,obstacle1,obstacle2,obstacle3;
var treasure,treasureimage,burger,burgerimage;
var backgroundimage,trackimage;
var PLAY = 1;
var END = 0;
var GameState=PLAY;
var score=0;


function preload(){
  //playerRunning=loadAnimation("images/boy running1 .jpg ", "boy running2 .jpg");
  playerRunning=loadImage("images/boy running2 .jpg");
  goldimage=loadImage("images/coin_gold.png");
  silverimage=loadImage("images/coin_silver.png");
  bronzeimage=loadImage("images/coin_bronze.png");
  backgroundimage=loadImage("images/imported piskel.gif");
  obstacle1=loadImage("images/rock 1.png");
  obstacle2=loadImage("images/rock 2.png");
  obstacle3=loadImage("images/obs.png");
}

function setup(){
   createCanvas(400,600); 
  player = createSprite(150,500,20,40);
  player.addImage(playerRunning);
  player.scale=0.6;
  


}
function draw(){
  background("yellow");

  gold();
  silver();
  bronze();
  drawSprites();
}

function gold(){
  if(World.frameCount%180===0 ){
    goldCoin=createSprite(150,50,20,20);
    goldCoin.addImage(goldimage);
    goldCoin.velocityY=3;
    goldCoin.lifetime=260;
    goldCoin.x=Math.round(random(30,370));
    goldCoin.scale=0.7;

  }
}

function silver(){
  if(World.frameCount%110===0 ){
    silverCoin=createSprite(150,50,20,20);
    silverCoin.addImage(silverimage);
    silverCoin.velocityY=3;
    silverCoin.lifetime=260;
    silverCoin.x=Math.round(random(30,370));
    silverCoin.scale=0.7;

  }
}

function bronze(){
  if(World.frameCount%50===0 ){
    bronzeCoin=createSprite(150,50,20,20);
    bronzeCoin.addImage(bronzeimage);
    bronzeCoin.velocityY=3;
    bronzeCoin.lifetime=260;
    bronzeCoin.x=Math.round(random(30,370));
    bronzeCoin.scale=0.7;

  }
}