
eyel = 0;
eyer = 0;
function preload() {
   cucumber = loadImage('cucumber-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("model is loaded.");
    
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        eyel = results[0].pose.leftEye.x;
        eyel = results[0].pose.leftEye.y;
        eyer = results[0].pose.rightEye.x;
        eyer = results[0].pose.rightEye.y;
        console.log("eyel = " + eyel + "eyer = " + eyer);
    }
}

function draw() {
    image(video,0,0,300,300);
    image(cucumber,eyel,eyer,30,30);
}

function take_snapshot() {
    save('myFilterImage.png');
}