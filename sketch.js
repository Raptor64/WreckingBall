const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine, world
var ground1
var box1,box2,box3,box4,box5
var ball1
var rope1

function preload(){

}
function setup(){
createCanvas(1000,700);

engine = Engine.create();
world = engine.world;

ground1 = new ground(500, 690, 1000, 20)
box1 = new box(550, 650, 80, 80);
box2 = new box(550, 570, 80, 80);
box3 = new box(550, 490, 80, 80);
box4 = new box(550, 410, 80, 80);
box5 = new box(550, 330, 80, 80);
ball1 = new ball(300, 300, 100, 100)
rope1 = new rope(ball1.body,{x:300,y:50})
}
function draw(){
background("grey");

Engine.update(engine);

ground1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
ball1.display();
rope1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}