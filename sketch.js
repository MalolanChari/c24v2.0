const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1,tankerhead,tankerbody,tankerbase1,tankerbase2,ball,shootAngle;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground (0,380,2400,20);


    tankerhead = new TankerHead(150,290,150,30);
    tankerbody = new TankerBody(100,300,100);
    tankerbase1 = new TankerBase(100,350,100,40);
    tankerbase2 = new TankerBase(100,310,100,40);
    ball =new Ball(160,290,10) 

   
}

    function draw(){

      background(225);
      Engine.update(engine)

      ground1.display();

      tankerhead.display();
      tankerbody.display();
      tankerbase1.display();
      tankerbase2.display();
      
      ball.display();

    }


