
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball,ground1;
var log1,log2,log3;
var paperI,dustI;
function preload()
{
	paperI=loadImage("paper.png");
	dustI=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground=createSprite(400,670,800,20);
	 var ops={
		isStatic:false,
		friction:0.5,
		restitution:0.3,
		density:1.2
	 }
	//Create the Bodies Here.
	ball=Bodies.circle(200,600,2,ops);
	World.add(world,ball);
	log1=Bodies.rectangle(600,650,200,20,{isStatic:true});  
	log3=Bodies.rectangle(500,610,20,100,{isStatic:true});
	log2=Bodies.rectangle(700,610,20,100,{isStatic:true});
	ground1=Bodies.rectangle(400,670,800,20,{isStatic:true});
	World.add(world,ground1);
	World.add(world,log1);
	World.add(world,log3);
	World.add(world,log2);
	//ball=Bodies.circle()
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  
	// sprites displayed
	//log1.display();
	//log2.display();
	//log3.display();
	var pos = log1.position;
	var pos1 = log2.position;
	var pos2 = log3.position;
	ellipseMode(RADIUS);
    //ellipse(ball.position.x,ball.position.y-18,20,20)
	rectMode(CENTER);
	fill("red");
	rect(pos.x,pos.y,200,20);
	rect(pos1.x,pos1.y,20,100);
	rect(pos2.x,pos2.y,20,100);
	imageMode(CENTER);
	image(paperI,ball.position.x,ball.position.y-15,50,50);
	image(dustI,600,530,350,300);
  drawSprites();
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
	//var ops=ball.body.position;
	Matter.Body.applyForce(ball,ball.position,{x:0.3,y:-1});
	}
}

