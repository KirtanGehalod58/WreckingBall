const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope ; 

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  box1 = new Box(650, 100, 100, 50);
  box2 = new Box(650, 100, 100, 50);
  box3 = new Box(650, 100, 100, 50);
  box4 = new Box(650, 100, 100, 50);
  box5 = new Box(650, 100, 100, 50);
  box6 = new Box(650, 100, 100, 50);
  box7 = new Box(550, 100, 100, 50);
  box8 = new Box(550, 100, 100, 50);
  box9 = new Box(550, 100, 100, 50);
  box10 = new Box(550, 100, 100, 50);
  box11 = new Box(550, 100, 100, 50);
  box12 = new Box(550, 100, 100, 50);
  box13 = new Box(450, 100, 100, 50);
  box14 = new Box(450, 100, 100, 50);
  box15 = new Box(450, 100, 100, 50);
  box16 = new Box(450, 100, 100, 50);
  box17 = new Box(450, 100, 100, 50);
  box18 = new Box(450, 100, 100, 50);
  box19 = new Box(450, 100, 100, 50);
  box20 = new Box(450, 100, 100, 50);
  box21 = new Box(450, 100, 100, 50);
  box22 = new Box(550, 100, 100, 50);
  box23 = new Box(550, 100, 100, 50);
  box24 = new Box(550, 100, 100, 50);
  box25 = new Box(650, 100, 100, 50);
  box26 = new Box(650, 100, 100, 50);
  box27 = new Box(650, 100, 100, 50);
  holder1 = new Ground(30,600,30,1130);
  holder2 = new Ground(195,50,300,30);
  /*box19 = new Box(500, 100, 70, 70);
  box20 = new Box(500, 100, 70, 70);*/

  ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 300, y: 50 });

}

function draw() {
  background("lightblue");
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  holder1.display();
  holder2.display();
  /*box19.display()
  box20.display()*/
  

  ball.display();
  rope.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


