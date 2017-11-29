var acc, vel, xpos, ypos;

var balls= []; 

function setup() {
 createCanvas(400, 400);
//for(i=0;i<10;i++){
// balls[i] = new Balls;
 }


function mousePressed(){
 balls.push(new Balls());
 angleMode(DEGREES);
}
 
    


function draw() {
 background(0);
 for(i=0;i<balls.length;i++){
    balls[i].displ();
 balls[i].ymotion();
   balls[i].dir();
 }
}

 
 //function Balls(x,y) {
  function Balls() {
  this.xpos = random(0,400)
  this.ypos = 0;
 this.dir = 1;
 this.waveCount = 0;
    this.p = 0;
    this.xspeed = 0.5;
    this.yspeed = 0.5;
    this.acc = 0.005;
   
   
 this.displ= function(){
 fill(255);
 push();
    translate(this.xpos,this.ypos);
 ellipse(0,0,10,10);
 for(this.p=0;this.p<=360;this.p+=45){
   
   fill(255,0,0);
   rotate(this.p);
   ellipse(0,-10,8,15);
   }
 pop();
   
                  };
 this.ymotion = function() {
   //if(this.waveCount<20){
               this.ypos += this.yspeed;
   this.yspeed +=this.acc;
   //this.xpos += 0.5;
     //this.waveCount ++;
   }
   this.dir = function(){
     if(this.waveCount <100){
       this.xpos += this.xspeed;
       this.waveCount++;
     }
     else{
       this.xspeed *=-1;
       this.waveCount = 0;
     }
   }
               //this.vel += this.acc;
               //if(this.ypos>400){
             //this.vel*= -0.9;
                   //}
  // this.fill = function
                 
 }