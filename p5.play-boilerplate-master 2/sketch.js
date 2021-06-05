var thief, thiefImage, thiefcaught;;
var bg, bgImg
var obstacle, obstaclesGroup;
var obstacle1Img, obstacle2Img;
var gameState = "play";
var police, policeImage;


function preload(){
  thiefImage = loadAnimation("images/thief1.png", "images/thief2.png", "images/thief3.png", "images/thief4.png")
  bgImg = loadImage("images/bg2.jpg");
  obstacle1Img = loadImage("images/obstacle1.png");
  obstacle2Img = loadImage("images/obstacle2.png");
  policeImage = loadImage("images/police.png");
  thiefcaught = loadImage("images/thief2.png");

  obstaclesGroup = new Group();
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(width/2, height/2);
  bg.addImage(bgImg);
  bg.scale = 0.3;
  // bg.velocityX = -5
  

  thief = createSprite(width/2, height/1.3, 50, 50);
  thief.addAnimation("running", thiefImage);
  thief.scale = 0.7;

  police = createSprite(width/8, height/1.3, 50, 50);
  police.addImage(policeImage);


  
}

function draw() {
  console.log(gameState);
  // if (bg.x<0){
  //  bg.x = 600;
  // }

  if(gameState === "play"){
    if(obstaclesGroup.isTouching (thief)){
      gameState = "end";
    }
  

  if(gameState === "end"){
  };
  spawnObstacles();
  drawSprites();
}
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(width, height-100)
    obstacle.velocityX = -3;
    var rand = Math.round(random(1, 2));
    if (rand === 1){
      obstacle.addImage(obstacle1Img);
    }
    if (rand === 2){
      obstacle.addImage(obstacle2Img);
      obstacle.scale = 0.3;
    }
    obstaclesGroup.add(obstacle);
    console.log(rand);
  }
}