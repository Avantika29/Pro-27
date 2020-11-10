
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bob,bob2,bob3,bob4,bob5,bob6;
var rope,rope2,rope3,rope4,rope5,rope6;
var roof;
var bobDiameter  = 20;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob = new Bob(300,450);
	bob2 = new Bob(350,450);
	bob3 = new Bob(400,450);
	bob4 = new Bob(450,450);
	bob5 = new Bob(500,450);
	bob6 = new Bob(550,450);
	
	roof = new Roof(400, 200, width,10);

	rope = new Rope(bob.body,roof.body,-100,0);
	rope2 = new Rope(bob2.body,roof.body,-50,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,50,0);
	rope5 = new Rope(bob5.body,roof.body,100,0);
	rope6 = new Rope(bob6.body,roof.body,150,0);


	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255); 

  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();

  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();


  roof.display();
  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
Matter.Body.applyForce(bob.body,bob.body.position,{x : -50, y : -50})
    }

}


