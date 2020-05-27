var fixedrect
var movingrect

function setup() {
  createCanvas(2500,1200);
  fixedrect = createSprite(400,400,50,50);
  movingrect = createSprite(1250,400,50,50);
  movingrect.velocityX = -2;
  fixedrect.velocityX = 2;
  }

function draw() {
  background(0); 
  // movingrect.x = mouseX;
  // movingrect.y = mouseY;
  fixedrect.debug = true;
  movingrect.debug= true;

  if (fixedrect.x - movingrect.x < (fixedrect.width + movingrect.width)/2 
  &&  movingrect.x - fixedrect.x < (fixedrect.width + movingrect.width)/2){
      movingrect.velocityX = movingrect.velocityX*-1;
      fixedrect.velocityX = fixedrect.velocityX*-1;
  }
  
  drawSprites();
}   

//function draw() {
// background(0); 
//   movingrect.x = mouseX;
//   movingrect.y = mouseY;
//   fixedrect.debug = true;
//   movingrect.debug= true;

//   if (fixedrect.x - movingrect.x < (fixedrect.width + movingrect.width)/2 
//   &&  movingrect.x - fixedrect.x < (fixedrect.width + movingrect.width)/2
//   &&  fixedrect.y - movingrect.y < (fixedrect.height + movingrect.height)/2 
//   &&  movingrect.y - fixedrect.y < (fixedrect.height + movingrect.height)/2) {
//     movingrect.shapeColor = "yellow";
//     fixedrect.shapeColor = "yellow";
//   } else {
//     movingrect.shapeColor = "green";
//     fixedrect.shapeColor = "green";    
//   }
  
//   drawSprites();
// }   