var bullet,wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bulletSpeed=speed;
  bulletWeight=weight;

  bullet=createSprite(50, 200, 20,80);
  
 wall=createSprite(1200,200,thickness,height/2)
 wall.shapecolor=color(80,80,80);

  bullet.velocityX=speed;
  bullet.collide(wall);
}

function draw() {
  background(255,255,255); 
  if(wall.x-bulet.x < (bullet.width+wall.width)/2)
{
bullet.velocityX=0;
var damage=0.5*bulletSpeed*bulletWeight/thickness*thickness*thickness;}
if(damage<10){
  
bullet.shapecolor=color(255,0,0);       }
 
if(damage>10){
  
bullet.shapecolor=color(0,255,0);


bullet.display();
wall.display();
} 
  
}