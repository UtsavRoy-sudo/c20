var box1,box2





function setup() {
  createCanvas(800,400);
  box1 = createSprite(400, 290, 50, 50);
  box2 = createSprite(200,258,50,50);
  box1.shapeColor = "Blue";
  box2.shapeColor = "Red";
}

function draw() {
  background(255,200,205);
  box1.x = World.mouseX;
  box1.y = World.mouseY;

  if(box1.x-box2.x<box1.width/2+box2.width/2 &&
     box2.x-box1.x<box1.width/2+box2.width/2 &&
     box1.y-box2.y<box1.height/2+box2.height/2 &&
     box2.y-box1.y<box1.height/2+box2.height/2){
    box1.shapeColor = "Green";
    box2.shapeColor = "Green";
  }
  else{box1.shapeColor = "Blue"
      box2.shapeColor = "Red"}


  drawSprites();
}