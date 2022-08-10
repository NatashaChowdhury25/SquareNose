function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,500);
canvas.position(560,90);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log('PoseNet Is Initialzed!');
}

function draw(){
background('#969A97');
fill('#f90093');
stroke('#f90093');
square(nosex,nosey,difference);
}

nosex=0;
nosey=0;
difference=0;
rightWristx=0;
leftWristx=0;

function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log("nosex="+nosex+"nosey"+nosey);

leftWristx=results[0].pose.leftWrist.x;
rightWristx=results[0].pose.rightWrist.x;
difference=floor(leftWristx-rightWristx);
console.log("leftWristx="+leftWristx+"rightWristx="+rightWristx+"difference="+difference);
}
}