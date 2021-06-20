var ken, kenLeftImage, kenRightImage, bg, ground, snake, gem;
var score = 0;

function preload(){
kenImage = loadImage("ken.png");
kenRightImage = loadAnimation("right1.png", "walkingRight2.png", "right3.png", "walkingRight4.png");
kenLeftImage = loadAnimation("left1.png", "walkingLeft2.png", "left3.png", "walkingLeft4.png");
bg = loadImage("Faraway-tree.jpg");
snakeImage = loadImage("snake.png");
gemImage = loadImage("gem.png");
}

function setup() {
  createCanvas(400,600);

  gemsGroup = new Group();

  ken = createSprite(200, 500, 5, 45);
  ken.addImage("walking", kenImage);
  ken.scale = 0.45;

  snake = createSprite(0, 500, 50, 50);
  snake.addImage("snake", snakeImage);
  snake.scale = 0.15;

  ground = createSprite(200, 545, 400, 5);
  ground.visible = false;

  gem = createSprite(300, 400, 5, 5);
  gem.x = Math.round(random(100, 300))
  gem.addImage("gem", gemImage);
  gem.scale = 0.15;
  // gemsGroup.add(gem);

  gem1 = createSprite(400, 300, 5, 5);
  gem1.x = Math.round(random(100, 300))
  gem1.addImage("gem", gemImage);
  gem1.scale = 0.15;
  // gemsGroup.add(gem1);

  gem2 = createSprite(400, 200, 5, 5);
  gem2.x = Math.round(random(100, 300))
  gem2.addImage("gem", gemImage);
  gem2.scale = 0.15;
  // gemsGroup.add(gem2);

  gem3 = createSprite(300, 500, 5, 5);
  gem3.x = Math.round(random(100, 300))
  gem3.addImage("gem", gemImage);
  gem3.scale = 0.15;
  // gemsGroup.add(gem3);

}

function draw() {
  background(bg);  

  if(keyDown(RIGHT_ARROW)){
    ken.x += 2;
    ken.addAnimation("walking", kenRightImage);
    ken.scale = 0.9;
  }

  if(keyDown(LEFT_ARROW)){
    ken.x -= 2;
    ken.addAnimation("walking", kenLeftImage);
    ken.scale = 0.9;
  }

  if(keyDown("space")){
    ken.velocityY -= 5;
  }

  if(ken.isTouching(gem)){
    score += 1;
    gem.destroy();
  }

  if(ken.isTouching(gem1)){
    score += 1;
    gem1.destroy();
  }

  if(ken.isTouching(gem2)){
    score += 1;
    gem2.destroy();
  }

  if(ken.isTouching(gem2)){
    score += 1;
    gem2.destroy();
  }

  if(ken.isTouching(gem3)){
    score += 1;
    gem3.destroy();
  }


  ken.velocityY += 0.8;     

  ken.collide(ground);

  if(snake.x < 140){
    snake.velocityX = 5;
  } else{
  snake.velocityX = 0;
  }

  console.log(snake.x)

  drawSprites();
  stroke("white");
  fill("blue");
  textSize(20);
  text("Score : " + score, 300, 150);
}

  // if (frameRate % 100 === 0){

