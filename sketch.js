var  Engine = Matter.Engine,
world = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var particles = []
var plinkos = []
var divisions = []
var divisionHight=200;
var score = 0;
function setup() {
createCanvas(700,700);
engien = Engien.World;
World = Engine.World;
ground = new Ground(wight/2,hight,width,20);


for(var k = 0; k <=width; k = k + 80) {
  divisions.push(new Divisions)
}


for(var j = 75; j <=width; j=j+50)
{

  plinkos.push(new Plinko(j,75));
}

for(var j = 50; j <=width-10; j=j+75)
{
 
  plinkos.push(new plinko(j,175));
}

for (var j = 75; j <=width; j=j+50) 
{

  plinkos.push(new plinko(j,275));
}

 for (var j = 50;j <=width-10; j=j+50)
{

  plinkos.push(new plinko(j,375));
}




}



function draw() {
  background("black")
  textSize(20)
  //text("Score : "+Score,20,30)
  Engine.update(engien);

  for (var i = 0; i < plinkos.length; i++) {


  plinkos[i].display();

  }
  if(frameCount%60===0) {
    particles.push(new particles(random(100,700),10,10))
    score++;
  }

  for (var j = 0; j < particles.length; j++) {

     particles[j].display();
  }
  for (var k = 0; k < divisio9n.length; k++) {

    particles[k].display();
 }
}