noseX=0
noseY=0
function setup(){
canvas=createCanvas(400,400)
canvas.center()
video=createCapture(VIDEO)
video.size(400,400)
video.hide()
poseNet=ml5.poseNet(video,modelloaded)
poseNet.on('pose',gotPoses)
}
function take_snapshot(){
    save("myselfie.png") 
}
function draw(){
    image(video,0,0,400,400)
    image(nose_image,noseX,noseY,30,30)
}
function modelloaded(){
    console.log("model has been loaded")
}
function gotPoses(results){
if(results.length>0)
{
    console.log(results)
    noseX=results[0].pose.nose.x-15
    noseY=results[0].pose.nose.y-10
    console.log("nose x="+noseX)
    console.log("nose y="+noseY)
}
}
function preload(){
    nose_image=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}