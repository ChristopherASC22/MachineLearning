let video;
let noseX;
let noseY;
let eyeR_X;
let eyeR_Y;
let eyeL_X;
let eyeL_Y;

function setup(){ // only happens once at the begining
    createCanvas(windowWidth,windowHeight);
    video = createCapture(VIDEO);
    video.hide();

    // the library I'm working with is posenet
    const posenet = ml5.poseNet(video, modelLoaded);
    // event listener
    posenet.on("pose",gotPoses);

}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotPoses(poses){
    //console.log(poses);
    if (poses.length >0) {
    noseX = poses[0].pose.keypoints[0].position.x;
    noseY = poses[0].pose.keypoints[0].position.y;
    eyeL_X = poses[0].pose.keypoints[1].position.x;
    eyeL_Y = poses[0].pose.keypoints[1].position.y;
    eyeR_X = poses[0].pose.keypoints[2].position.x;
    eyeR_Y = poses[0].pose.keypoints[2].position.y;
    }

}

function draw(){ // infinite loop
    background(255, 0, 255);
    image(video,0,0);
    //filter(THRESHOLD);

    fill(255,0,0);
    rect(noseX, noseY, 30); // drawing a square on our nose

    fill("pink");
    ellipse(eyeL_X, eyeL_Y, 20);
    ellipse(eyeR_X, eyeR_Y, 20);
}