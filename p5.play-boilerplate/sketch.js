const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg, bg_img;

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon.body,{x:100,y:200})
    Slingshot.join(polygon)
  }
}

function preload(){
  bg_img= loadImage("download.jpg")
}

function setup() {
  var canvas=createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  polygon= new Polygon(100,200)

  Slingshot= new slingshot(polygon.body,{x:100,y:200})

  //level1
  block1= new box(290,225,20,20,"darkred");
  block2= new box(310,225,20,20,"darkred");
  block3= new box(330,225,20,20,"darkred");
  block4= new box(350,225,20,20,"darkred");
  block5= new box(370,225,20,20,"darkred");
  block6= new box(390,225,20,20,"darkred");
  block7= new box(410,225,20,20,"darkred");
  //level2
  block8= new box(300,205,20,20,"darkorange");
  block9= new box(320,205,20,20,"darkorange");
  block10= new box(340,205,20,20,"darkorange");
  block11= new box(360,205,20,20,"darkorange");
  block12= new box(380,205,20,20,"darkorange");
  block13= new box(400,205,20,20,"darkorange");
  //level3
  block14= new box(310,185,20,20,"yellow");
  block15= new box(330,185,20,20,"yellow");
  block16= new box(350,185,20,20,"yellow");
  block17= new box(370,185,20,20,"yellow");
  block18= new box(390,185,20,20,"yellow");
  //level4
  block19= new box(320,165,20,20,"lime");
  block20= new box(340,165,20,20,"lime");
  block21= new box(360,165,20,20,"lime");
  block22= new box(380,165,20,20,"lime");
  //level5
  block23= new box(330,145,20,20,"blue");
  block24= new box(350,145,20,20,"blue");
  block25= new box(370,145,20,20,"blue");
  //level6
  block26= new box(340,125,20,20,"indigo");
  block27= new box(360,125,20,20,"indigo");
  //top
  block28= new box(350,105,20,20,"darkviolet");

  ground1= new Ground(350,250,160,10)

  //level1
  block01= new box(540,325,20,20,"darkred");
  block02= new box(560,325,20,20,"darkred");
  block03= new box(580,325,20,20,"darkred");
  block04= new box(600,325,20,20,"darkred");
  block05= new box(620,325,20,20,"darkred");
  block06= new box(640,325,20,20,"darkred");
  block07= new box(660,325,20,20,"darkred");
  //level2
  block08= new box(550,305,20,20,"darkorange");
  block09= new box(570,305,20,20,"darkorange");
  block010= new box(590,305,20,20,"darkorange");
  block011= new box(610,305,20,20,"darkorange");
  block012= new box(630,305,20,20,"darkorange");
  block013= new box(650,305,20,20,"darkorange");
  //level3
  block014= new box(560,285,20,20,"yellow");
  block015= new box(580,285,20,20,"yellow");
  block016= new box(600,285,20,20,"yellow");
  block017= new box(620,285,20,20,"yellow");
  block018= new box(640,285,20,20,"yellow");
  //level4
  block019= new box(570,265,20,20,"lime");
  block020= new box(590,265,20,20,"lime");
  block021= new box(610,265,20,20,"lime");
  block022= new box(630,265,20,20,"lime");
  //level5
  block023= new box(580,245,20,20,"blue");
  block024= new box(600,245,20,20,"blue");
  block025= new box(620,245,20,20,"blue");
  //level6
  block026= new box(590,225,20,20,"indigo");
  block027= new box(610,225,20,20,"indigo");
  //top
  block028= new box(600,205,20,20,"darkviolet");

  ground2= new Ground(600,350,160,10)

  //level1
  block001= new box(540,150,20,20,"darkred");
  block002= new box(560,150,20,20,"darkred");
  block003= new box(580,150,20,20,"darkred");
  block004= new box(600,150,20,20,"darkred");
  block005= new box(620,150,20,20,"darkred");
  block006= new box(640,150,20,20,"darkred");
  block007= new box(660,150,20,20,"darkred");
  //level2
  block008= new box(550,130,20,20,"darkorange");
  block009= new box(570,130,20,20,"darkorange");
  block0010= new box(590,130,20,20,"darkorange");
  block0011= new box(610,130,20,20,"darkorange");
  block0012= new box(630,130,20,20,"darkorange");
  block0013= new box(650,130,20,20,"darkorange");
  //level3
  block0014= new box(560,110,20,20,"yellow");
  block0015= new box(580,110,20,20,"yellow");
  block0016= new box(600,110,20,20,"yellow");
  block0017= new box(620,110,20,20,"yellow");
  block0018= new box(640,110,20,20,"yellow");
  //level4
  block0019= new box(570,90,20,20,"lime");
  block0020= new box(590,90,20,20,"lime");
  block0021= new box(610,90,20,20,"lime");
  block0022= new box(630,90,20,20,"lime");
  //level5
  block0023= new box(580,70,20,20,"blue");
  block0024= new box(600,70,20,20,"blue");
  block0025= new box(620,70,20,20,"blue");
  //level6
  block0026= new box(590,50,20,20,"indigo");
  block0027= new box(610,50,20,20,"indigo");
  //top
  block0028= new box(600,30,20,20,"darkviolet");

  ground3= new Ground(600,175,160,10)
  Engine.run(engine);
}

function draw() {
  background(bg_img);  

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();

    block01.display();
    block02.display();
    block03.display();
    block04.display();
    block05.display();
    block06.display();
    block07.display();
    block08.display();
    block09.display();
    block010.display();
    block011.display();
    block012.display();
    block013.display();
    block014.display();
    block015.display();
    block016.display();
    block017.display();
    block018.display();
    block019.display();
    block020.display();
    block021.display();
    block022.display();
    block023.display();
    block024.display();
    block025.display();
    block026.display();
    block027.display();
    block028.display();

    ground2.display();

    polygon.display();
    
    ground1.display();

    block001.display();
    block002.display();
    block003.display();
    block004.display();
    block005.display();
    block006.display();
    block007.display();
    block008.display();
    block009.display();
    block0010.display();
    block0011.display();
    block0012.display();
    block0013.display();
    block0014.display();
    block0015.display();
    block0016.display();
    block0017.display();
    block0018.display();
    block0019.display();
    block0020.display();
    block0021.display();
    block0022.display();
    block0023.display();
    block0024.display();
    block0025.display();
    block0026.display();
    block0027.display();
    block0028.display();

    ground3.display();


  drawSprites();

  fill("white") 
  textSize(20);
  text("Drag and release the hexagon to hit and remove the blocks. Click space for another try",10,25) 
  text("to remove all blocks", 250,50)
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  Slingshot.fly();
}