const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var myWorld, myEngine, ground, ball;

function setup() {
  createCanvas(400,400);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  var option={
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,20,option);

  World.add(myWorld,ground);

  var options={
    restitution:1
  }
  ball = Bodies.circle(200,200,20,options);

  World.add(myWorld,ball);

}

function draw() {
  background(0);  

  Engine.update(myEngine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20*2,20*2);
}