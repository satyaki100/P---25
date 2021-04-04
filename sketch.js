
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
garbageobject1 = new garbage(600 , 600 , 10 , 97)
garbageobject2 = new garbage(673 , 640 , 150 , 10)
garbageobject3 = new garbage(748 , 600 , 10 , 97)
paperobject = new paper(200 , 450 , 40 )
groundobject = new ground(400 , 660 , 800 , 20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("LIGHTBLUE");
  garbageobject1.display()
  garbageobject2.display()
  garbageobject3.display()
  paperobject.display()
  groundobject.display()
  drawSprites();
 
}

function keyPressed(){
if (keyCode===UP_ARROW){

Matter.Body.applyForce(paperobject.body , paperobject.body.position , {x:60 , y:-60})


}


}

