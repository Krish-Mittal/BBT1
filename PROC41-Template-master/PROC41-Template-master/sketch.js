const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var wb,w1,w2,w3,w4,w5,w6,w7,w8,boy,bi,b,r,road,maxDrops,dro;

function preload(){
    w1=loadImage("w1.png")
    w2=loadImage("w2.png")
    w3=loadImage("w3.png")
    w4=loadImage("w4.png")
    w5=loadImage("w5.png")
    w6=loadImage("w6.png")
    w7=loadImage("w7.png")
    w8=loadImage("w8.png")
    wb=loadAnimation(w1,w2,w3,w4,w5,w6,w7,w8)
    bi=loadImage("b.png")
    r=loadImage("r.png")
}

function setup()
{
   createCanvas(1500,950);

   engine = Engine.create();
   world = engine.world;

    b=createSprite(50,500,10,10);
    road=createSprite(600,900);
    boy=createSprite(300,700,10,10);
    boy.addAnimation("1",wb);
    boy.scale=0.6;
    b.addImage(bi);
    
    road.addImage(r);
    road.scale=2;
    b.scale=2;
    b.velocityX=-2;
    road.velocityX=-2;
    maxDrops=100;
    for (var i=0; i<maxDrops; i++) {
        dro.push ( new drops(200,0) )
       }
}

function draw()
{
    background(0)
    
    Engine.update(engine);

    if(b.x<-200)
    {
     b.x=50;
     b.velocityX=-2
     road.x=600;
     road.velocityX=-2
     
    

    drawSprites(); 
    dro.dispaly()
    
}   

}