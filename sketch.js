var bullet, wall, speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22, 83);

  bullet = createSprite(50,200,50,10);
  bullet.shapeColor="white";

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor=80,80,80;

  bullet.velocityX=speed;

}

function draw() {
  background("lightblue");  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2){

  bullet.velocityX=0;
  var deformation = (0.5 * weight * speed * speed)/22500;
 
  if(deformation>10){
    wall.shapeColor=color("red");
  }

  if(deformation<10){
    wall.shapeColor=color("green");
  }

  }


  drawSprites();
}