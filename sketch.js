
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var ball
var stick1,stick2,stick3



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground = new Ground(400,1020,10,20)
var ball_options={
  resituition:1.0,
}
	 ball=Bodies.circle(400,350,25,ball_options)
World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,25);
  drawSprites();
 
 
}



