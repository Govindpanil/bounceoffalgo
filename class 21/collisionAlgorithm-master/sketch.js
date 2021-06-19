var fixedrect2, movingrect2;
var fixedRect, movingRect;
var fixedrect3,movingrect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedrect2 = createSprite(200,100,50,80);
  fixedrect2.shapeColor = "green";
  fixedrect2.debug = true;
  movingrect2 = createSprite(800,100,50,80);
  movingrect2.shapeColor = "green";
  movingrect2.debug = true;
  fixedrect3 = createSprite(500,600,50,80);
  fixedrect3.shapeColor = "green";
  fixedrect3.debug = true;
  movingrect3 = createSprite(500,500,50,80);
  movingrect3.shapeColor = "green";
  movingrect3.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,fixedrect3)){
    movingRect.shapeColor = "yellow";
    fixedrect3.shapeColor = "yellow";
  
  }
   else{
    movingRect.shapeColor = "green";
  fixedrect3.shapeColor = "green";


   }
  drawSprites();
}

function isTouching(Object1,Object2){
  if (Object1.x - Object2.x < Object2.width/2 + Object1.width/2
    && Object2.x - Object1.x < Object2.width/2 + Object1.width/2
    && Object1.y - Object2.y < Object2.height/2 + Object1.height/2
    && Object2.y - Object1.y < Object2.height/2 + Object1.height/2) {
     return true;
}
else {
  return false;
}

}