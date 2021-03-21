var canvas;
var music;
var box;
var box1;
var box2;
var box3;
var box4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
    box = createSprite(Math.round(random(100,500)),300,50,50);
    box.shapeColor = "violet";
    box.velocityY = 10;
    box.velocityX = 10;

    box1 = createSprite(50,580,180,25);
    box1.shapeColor = "red";


    box2 = createSprite(200,580,180,25);
    box2.shapeColor = "yellow";

    box3 = createSprite(350,580,180,25);
    box3.shapeColor = "purple";

    box4 = createSprite(520,580,180,25);
    box4.shapeColor = "blue";

    edges = createEdgeSprites();
        
    

}

function draw() {
    background("cyan");
    box.bounceOff(edges);
    
    // box.y = mouseY;
     //box.x = mouseX;
     
     
     //add condition to check if box touching surface and make it box
       if (box1.isTouching(box)&&box.bounceOff(box1)) {
           box.shapeColor = "red";
           music.play();
     }
     

        else if (box2.isTouching(box)&&box.bounceOff(box2)) {
            box.shapeColor = "yellow";
            box.velocityY = 0;
             box.velocityX = 0;
             music.stop();
    } 

        else if( box3.isTouching(box)&&box.bounceOff(box3)) {
             box.shapeColor = "purple";
             music.play();
    }

        else if (box4.isTouching(box)&&box.bounceOff(box4)) {
             box.shapeColor = "blue";
              music.play();
    }
      

 


    drawSprites();
}
