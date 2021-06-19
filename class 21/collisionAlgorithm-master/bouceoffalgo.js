var fixedrect;
var movingrect;

function setup() {
  createCanvas(1000,1000);
  fixedrect=createSprite(400,100,50,80)
  fixedrect.shapeColor="red"
  fixedrect.debug=true;
  movingrect=createSprite(400,800,80,30);
  movingrect.shapeColor="red"
  movingrect.debug=true;
  movingrect.velocityY=-5;
  fixedrect.velocityY=5;
}

function draw() {
  background(255,255,255); 
 
  if(movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
        movingrect.velocityY=movingrect.velocityY*(-5)
        fixedrect.velocityY=fixedrect.velocityY*(-5)
    }
  
  

  drawSprites();}