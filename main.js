function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoadded);
    poseNet.on("pose",gotPoses);
}
function draw(){
    background("#969A97");
}
function modelLoadded(){
    console.log("posenet is intialized");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
    }
}
