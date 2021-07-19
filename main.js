img = "";
function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
}

function draw(){
    image(img,0,0,600,450);
    fill("#30eb13");
    stroke("#30eb13");
    noFill();
    text("Dog",40,80);
    rect(30,60,400,300)
}