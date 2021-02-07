const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bgImage;
var world;
var ground,superhero,fly;

function preload() {
//preload the images here

bgImage = loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
	world = engine.world;

  superhero = new Superhero(200,200,20,20);
    ground = new Ground(1500,780,3000,40);
    fly = new Fly(superhero.body,{x:100,y:100})

}

function draw() {
  background(bgImage);
  Engine.run(engine);

  ground.display();
  superhero.display();
  fly.display();

}

function mouseDragged(){
  
 

    Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});

 }