var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

var ranscore;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }

    ranscore = Math.round(random(1,10)*50);
  
    
}
 
function draw() {
  background("black");
  textSize(35);
  fill("blue");
  text("Score : "+score,20,40);
    
    console.log("shourya raj");

  if(gameState === "start"){
  fill("white");
  textSize(20);
  text(" 500 ", 17.5, 500);
  text(" 500 ", 97.5, 500);
  text(" 500 ", 177.5, 500);
  text(" 500 ", 257.5, 500);
  text(" 100 ", 337.5, 500);
  text(" 100 ", 417.5, 500);
  text(" 100 ", 497.5, 500);
  text(" 200 ", 577.5, 500);
  text(" 200 ", 657.5, 500);
  text(" 200 ", 737.5, 500);

  }

  fill("yellow");
  textSize(25);
  text("Plinko Game",650,20);

  Engine.update(engine);

  ground.display();

 
  
console.log(ranscore);

  if ( gameState =="end") {
    textSize(100);
    fill("red");
    text("GameOver", 150, 280);
    fill("Gold");
    textSize(50);
    text("Congratulations! You Scored "+ score,20,400);

    fill("white");
    textSize(20);
    text("*Refresh page to play again",300,500);
  }

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null){
       particle.display();
        
        if (particle.body.position.y>760){
              if (particle.body.position.x < 300) {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5){
                    gameState ="end"; 
                    plinkos = null;
                   }                        
                  }else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) {
                      gameState ="end";
                      plinkos = null;
                    }
                  }else if (particle.body.position.x < 900 && particle.body.position.x > 601 ) {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5) { 
                      gameState ="end";
                      plinkos = null;
                    }

              }      
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }

}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}
