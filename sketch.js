const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 


var divisions =[];
var divisionHeight=300;
var particles = [];
var plinkos = [];
var score =0;



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  

  //create division objects
  for (var i = 0; i <=80; i = i + 80) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var i = 0; i <=150; i = i + 150) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var i = 0; i <=220; i = i + 220) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var i = 0; i <=290; i = i + 290) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var i = 0; i <=360; i = i + 360) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for (var i = 0; i <=430; i = i + 430) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var i = 0; i <=500; i = i + 500) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var i = 0; i <=570; i = i + 570) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var i = 0; i <=640; i = i + 640) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var i = 0; i <=710; i = i + 710) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var i = 0; i <=770; i = i + 770) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }



  



  

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  
    
}
 


function draw() {
  rectMode(CENTER);
  background("black");

  
  for (var n = 0; n<divisions.length; n++){

    divisions [n].display();
    }

if(frameCount %60 === 0){
  particles.push(new particle(random(width/2 - 30, width/2+30), 10, 10))
}

for(var  h = 0; h<particles.length; h++){
  particles[h].display();
}

for (var j = 0; j<plinkos.length; j++){

  plinkos[j].display();
}
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 

}