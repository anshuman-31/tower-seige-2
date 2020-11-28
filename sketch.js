const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint

var ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14;
var box15,box16,box17,box18;



function setup() {
  createCanvas(800,400);
  ground1= new Ground(600,height,500,20);
  ground2=new Ground(200,300,500,20);
  box1=new Box(330,235,30,40);
  box2=new Box(360,235,30,40);
  box3=new Box(390,235,30,40);
  box4=new Box(420,235,30,40);
  box5=new Box(450,235,30,40);
  box6=new Box(360,195,30,40);
  box7=new Box(390,195,30,40);
  box8=new Box(420,195,30,40);
  box9=new Box(390,155,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot=new Slingshot(this.polygon,{x:100,y:200});

  imageMode(CENTRE)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  
}

function draw() {
  background(255,255,255); 
  box1.display();
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display(); 
  box6.display(); 
  box7.display(); 
  box8.display(); 
  box9.display(); 

  drawSprites();
  
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}