var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(200, 200,50 , 80);
  movingRect = createSprite(200,200,80,30);
  fixedRect.shapeColor = "Green";
  movingRect.shapeColor = "Green";
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(fixedRect.x - movingRect.x);
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 ){
  
    fixedRect.shapeColor = "Red";
    movingRect.shapeColor = "Red";  
  }
  else{
    fixedRect.shapeColor = "Green";
  movingRect.shapeColor = "Green";
  }
  drawSprites();
}