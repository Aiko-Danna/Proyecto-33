const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var grounds;
var balon, sling;
var redImg, red1, red2, red3;
var score = 0;
var count = 0;

var gameState = "play";

function preload() {
  redImg = loadImage("Canasta.png");
}

function setup() {
  createCanvas(1450,700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  grounds = new Ground(725, 685, 1450, 30);

  balon = new Ball(150, 550, 40);

  sling = new slingShot(balon.body,{x:150, y:550});

  line1 = new Barra(500, 280, 10, 30);
  line2 = new Barra(670, 280, 30, 150);

  line3 = new Barra(900, 280, 10, 30);
  line4 = new Barra(1070, 280, 30, 150);

  line5 = new Barra(1250, 180, 10, 30);
  line6 = new Barra(1420, 180, 30, 150);

  red1 = createSprite(590,300,30,30);
  red2 = createSprite(990,300,30,30);
  red3 = createSprite(1340,200,30,30);

}

function draw() {

  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
  line6.display();

  background("skyblue");

  textSize(40)
  text("Marcador : "+score, 20, 40);
  fill(0);

  fill("yellow");
  text("50", 540, 250);
  text("100", 925, 250);
  text("200", 1280, 150);

  grounds.display();
  balon.display();
  sling.display();

  if(balon.body.position.y > 275 && balon.body.position.y < 295){
    if(balon.body.position.x > 490 && balon.body.position.x < 683){
      score = score +50;
    }
    if(balon.body.position.x > 890 && balon.body.position.x < 1083){
      score = score +100;
    }
  }

  if(balon.body.position.y > 175 && balon.body.position.y < 195){
    if(balon.body.position.x > 1240 && balon.body.position.x < 1433){
      score = score +200;
    }
  }

  if(count >= 10) gameState = "end";

  if(gameState === "end"){
    textSize(100);
    fill("green");
    text("Fin del juego soldado", 250, 520);
  }


  red1.addImage("red1", redImg);
  red1.scale = 0.38;
  red2.addImage("red2", redImg);
  red2.scale = 0.38;
  red3.addImage("red3", redImg);
  red3.scale = 0.38;

  drawSprites();
}

function mouseDragged(){
  if(gameState!=="end"){
    Matter.Body.setPosition(balon.body, {x:mouseX, y:mouseY});
  }
}

function mouseReleased(){
  if(gameState!=="end"){
    sling.fly();
  }
}

function keyPressed(){
  if(gameState!=="end"){
    if(keyCode === 32){
      Matter.Body.setPosition(balon.body, {x: 150, y: 550});
      sling.attach(balon.body);
      count++;
    }
  }
}