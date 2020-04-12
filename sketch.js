const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImage;
var ball, slingshot;

function preload(){
backgroundImage = loadImage("background.png");
}

function setup() {
  createCanvas(1200,800);

engine = Engine.create();
world = engine.world;

 ball = new Ball(570,400);
 slingshot = new Slingshot(ball.body,{x:570,y:400}); 

}

function draw() {
  background(0);
  
  Engine.update(engine);
  image(backgroundImage,-390,-10,1600,700);

  ball.display();
  slingshot.display();

  }