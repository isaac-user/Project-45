var person,player
var obstaclesGroup,o1,o2
var PLAY = 1
var END = 0
var gameState = PLAY;

var gameOverImg,restartImg





function preload(){
 bgimg = loadImage("bg2.jpg");
 person = loadAnimation("player 1.png","player3.png","player2.png");
 o1 = loadImage("o1.png")
 o2 = loadImage("o2.png")
 
 restartImg = loadImage("restartbutton.png");
 gameOverImg = loadImage("gameOver.png");
 collided = loadImage("player2.png");
  
}

function setup() {
    createCanvas(1200,560)
    bg = createSprite(600,200,1200,400);
    bg.addImage(bgimg)
    bg.x = bg.width/2
   
    bg.scale = 1.6;

      player = createSprite(50,350,20,20);
  player.addAnimation("player",person);
  player.addAnimation("collided",collided);
  player.scale = 0.7;
 
 invisibleGround = createSprite(600,530,1200,10);
 player.debug = true
 player.setCollider("rectangle",0,0,100,150);

  obstaclesGroup = new Group();
  
gameOver = createSprite(width/2,height/2- 100);
   gameOver.addImage(gameOverImg);
     restart = createSprite(width/2,height/2);
   restart.addImage(restartImg);
  
   gameOver.scale = 0.5;
   restart.scale = 0.3;

  
  
}

function draw() {
  //set background color
  
  background(0);

  if(gameState === PLAY){
    gameOver.visible = false;
    restart.visible = false;

    bg.velocityX = -3;
    if(bg.x<0){
      bg.x = bg.width/2
    }

        if(keyDown("space")&& player.y >=400){
      player.velocityY = -10
     }

     player.velocityY = player.velocityY+0.5;

     spawnObstacles();
     if(obstaclesGroup.isTouching(player)){

      gameState = END
      

     }
     
  }


  else if(gameState === END){
    gameOver.visible = true;
    restart.visible = true;

  bg.velocityX = 0;
  obstaclesGroup.setVelocityXEach(0);
  player.changeAnimation("collided",collided);


 



  }
  
   player.collide(invisibleGround);

    
   drawSprites();

  }  
  
  
function spawnObstacles(){
   if(frameCount % 100 === 0){
    var obstacle = createSprite(1050,490,10,40);
         obstacle.velocityX = -6;
         obstacle.scale = 0.25
 
    
    // generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstacle.addImage(o1);
               break;
       case 2: obstacle.addImage(o2);
               break;

   }
   obstaclesGroup.add(obstacle);
     }
    
  
    }
  








  
