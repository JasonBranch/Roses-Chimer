var acc, vel, xpos, ypos;

var roses= []; 
var petals= []
var looper;
var degrees = 0;

function setup() {
 createCanvas(600, 600);
//for(i=0;i<10;i++){
// roses[i] = new Roses;
 }


function mousePressed(){
 roses.push(new Roses());
 angleMode(DEGREES);
 rotateAnimation(roses[i],30)
}

function keyPressed(){
  petals.push(new Petals());
 angleMode(DEGREES);

}
 
    


function draw() {
 background(0);
 for(i=0;i<roses.length;i++){
    roses[i].displ();
 roses[i].ymotion();
   roses[i].dir();
 }

  for(i=0;i<petals.length;i++){
    petals[i].displess();
 petals[i].ymotion();
   petals[i].dir();
 }



}


 function Petals() {
  this.xpos = random(0,400)
  this.ypos = 0;
 this.dir = 1;
 this.waveCount = 0;
    this.p = 0;
    this.xspeed = 0.9;
    this.yspeed = 0.9;
    this.acc = 0.009;
   
   


 this.displess= function(){
 fill(255);
 push();
    translate(this.xpos,this.ypos);
 ellipse(0,0,10,10);
 for(this.p=0;this.p<=45;this.p+=60){
   
   fill(260,30,20);
   rotate(this.p);
   ellipse(0,-10,8,15);
   }
 pop();
   
                  }



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
 
                 
 }
 
 //function Roses(x,y) {
  function Roses() {
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
   
   fill(260,30,20);
   rotate(this.p);
   ellipse(0,-10,8,15);
   }
 pop();
                  }




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



   this.rotateAnimation = function(el,speed){
  var elem = document.getElementById(el);
  if(navigator.userAgent.match("Chrome")){
    elem.style.WebkitTransform = "rotate("+degrees+"deg)";
  } else if(navigator.userAgent.match("Firefox")){
    elem.style.MozTransform = "rotate("+degrees+"deg)";
  } else if(navigator.userAgent.match("MSIE")){
    elem.style.msTransform = "rotate("+degrees+"deg)";
  } else if(navigator.userAgent.match("Opera")){
    elem.style.OTransform = "rotate("+degrees+"deg)";
  } else {
    elem.style.transform = "rotate("+degrees+"deg)";
  }
  looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
  degrees++;
  if(degrees > 359){
    degrees = 1;
  }
} 
               
 }

