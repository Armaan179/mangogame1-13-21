
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var stone, mango,tree,slingshot;
var score = 0;
var boyimg;
var gameState="inHand";
function preload()
{
	boyimg=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(200,600,30);
	tree = new Tree(600,540,100,100);
	mango1 = new Mango(620,420,15);
	mango2 = new Mango(580,410,15);
	mango3 = new Mango(560,480,15);
	mango4 = new Mango(640,500,15);
	mango5 = new Mango(600,460,15);
	slingshot = new SlingShot(stone.body,{x:50 , y:620});
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(255,255);
  
  drawSprites();
 
  stone.display()
tree.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  image(boyimg,100,670,150,200);
  slingshot.display()

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)

}


function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)


	if (distance<=lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body,false)
	}
}
