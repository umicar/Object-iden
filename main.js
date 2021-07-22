img = "";
status = "";
function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function draw() {
    image(img, 0, 0, 600, 450);
    fill("#f70000");
    stroke("#f70000");
    noFill();
    text("Dog", 40, 80);
    textSize(20);
    rect(30, 60, 450, 300)

    fill("#f70000");
    stroke("#f70000");
    noFill();
    text("Cat", 300, 105);
    textSize(20);
    rect(280, 80, 250, 250)
}