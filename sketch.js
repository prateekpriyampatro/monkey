var m,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;
var j,j1 ,b,b1,s,s1,g;
function preload(){
  m1 = loadImage("Monkey_01.png");
  m2 = loadImage("Monkey_02.png");
  m3 = loadImage("Monkey_03.png");
  m4 = loadImage("Monkey_04.png");
  m5 = loadImage("Monkey_05.png");
  m6 = loadImage("Monkey_06.png");
  m7 = loadImage("Monkey_07.png");
  m8 = loadImage("Monkey_08.png");
  m9 = loadImage("Monkey_09.png");
  m10= loadImage("Monkey_10.png");
  j1 = loadImage("jungle.png");
  b1 = loadImage("banana.png");
  s1 = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
var  j = createSprite(200,200,400,400);
  j.addImage(j1);
 var m = createSprite(200,360,20,30);
  m.scale = 0.5;
  m.addAnimation(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10);
 var g = createSprite(200,380,400,10);
  g.velocityX = -6;
  g.visible = false;
  var bg = new Group();
  var sg = new Group();
  var sc = 0;
}

function draw() {
  background(220);
  m.velocityY = m.velocityY+0.8;
  m.velocityY = -10;
  m.collide(g);
  if(g.x<0){
    g.x=g.width/2
  }
  if(m.isTouching(bg)){
    bg.destroyEach();
    sc = sc+2;
  }
  if(sc==sc+10){
    m.scale = 0.51;
  }
   if(sc==sc+20){
     m.scale = 0.52;
   }
  if(sc==sc+30){
    m.scale = 0.53;
  }
  if(sc==sc+40){
    m.scale = 0.54;
  }
  if(m.isTouching(sg)){
    sg.destroyEach ();
    bg.destroyEach();
    m.velocityY = 0;
    sg.setVelocityEach(0);
   bg.setVelocityEach(0);
  }
  
  drawSprites();
  jf();
  bf();
  text("score:",score,50,50);
}
function jf(){
  if(World.frameCount%60===0){
  var r = random(250,360);
   s = createSprite(r,360,20,35);
  s.addImage(s1);
  s.scale = 0.5;
  s.velocityX =-6;
    sg.add(s);
}
}
function bf (){
  if(World.frameCount%60===0){
  var r = random(250,360);
  b = createSprite(400,r,20,35);
    b.addImage(b1);
    b.scale = 0.5;
    b.velocityY = -5;
    bg.add(b);
  }
}