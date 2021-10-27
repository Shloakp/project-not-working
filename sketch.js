
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var grnd1,grnd2,grnd3,grn4,grnd5;
var radius = 20;
var player1,player2;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
    
	
var ball_options={

isStatic:false,
restitution: 0.3,
friction :0,
density: 1.2,

}

grnd1 = new Ground(width/2,670,width,20);
grnd2 = new Ground (990,600,20,120);
grnd3 = new Ground(1190,600,20,120);
grnd4 = new Ground(10,600,20,120);
grnd5 = new Ground(210,600,20,120);


ball = Matter.Bodies.circle(600,100,20,ball_options);
World.add(world,ball);

 player1 = createSprite(250,640,40,40);
 player2 = createSprite(950,640,40,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
grnd1.show();
grnd2.show();
grnd3.show();
grnd4.show();
grnd5.show();

ellipse(ball.position.x,ball.position.y,radius,radius);

//Movement

if(keyDown(RIGHT_ARROW)){
	player1.x +=5;
  }  
  
  if(keyDown(LEFT_ARROW)){
	player1.x -=5;
  }  

  if(keyIsDown(68)){
	player2.x +=5;
  }  
  
  if(keyIsDown(65)){
	player2.x -=5;
  }  
  

	 if(collide(ball,player1)==true){

    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.2,y:0.2});
   }
  

  drawSprites();
}

function collide(body,sprite){

   var d = dist(body.position.x,sprite.position.x);
          if(d = ball.position -2){
            return true;
          }
  
}
 
   