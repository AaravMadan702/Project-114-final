noseX=0;
noseY=0;
function preload()
{
 a=loadImage('https://i.postimg.cc/RF6wQSHR/download-removebg-preview-1.png')
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center()
    video =createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)


}
function draw()
{
  image(video,0,0,300,300)
  image(a,noseX,noseY,100,35)
  

}
function take_photo()
{
    save('myFilterimageinAproject.png')
}
function modelLoaded()
{
    console.log("my project is loaded")
}
function gotPoses(results)
{
    if(results.length>0){
        console.log(results)
        console.log("results of x ="+results[0].pose.nose.x)
        console.log("results of y ="+results[0].pose.nose.y)
        noseX=results[0].pose.nose.x - 50      
        noseY=results[0].pose.nose.y + 10
    }
}