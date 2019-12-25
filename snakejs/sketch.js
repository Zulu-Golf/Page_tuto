var s;
var scl=20;
var food;


function setup() {
	createCanvas(500, 500);
	s= new Snake();
	food= createVector(random(width),random(height));
	frameRate(10);
	pickLocation();
}

function draw() {
	background(0,150,50);
	s.update();
	s.death();
	s.show();
	if(s.eat(food)){
			pickLocation();

	};

	fill(250,0,0);
	rect(food.x,food.y,scl,scl);

}

function keyPressed(){
		if (keyCode === UP_ARROW){
			s.move(0,-1);

		}else if (keyCode === DOWN_ARROW){
			s.move(0,1);
		}else if (keyCode === LEFT_ARROW){
			s.move(-1,0);
		}else if(keyCode === RIGHT_ARROW){
			s.move(1,0);
		}
}

function pickLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food= createVector(floor(random(cols)),floor(random(rows)));
	food.mult(scl);
}


function Snake(){
	this.x =0;
	this.y =0;
	this.xspeed =1;
	this.yspeed =0;
	this.tail =[];
	this.total=0;


	this.update =function(){
		for (var i = 0; i < this.tail.length-1; i++) {
			this.tail[i] = this.tail[i+1];
		}
		this.tail[this.total-1]=createVector(this.x,this.y);
		this.x =this.x+this.xspeed*scl;
		this.y =this.y+this.yspeed*scl;
		this.x= constrain(this.x,0,width-scl);
		this.y= constrain(this.y,0,height-scl);
	}

	this.show =function(){
	fill(255);
		for (var i = 0; i <this.total; i++) {
				rect(this.tail[i].x, this.tail[i].y, scl, scl);
			}
	rect(this.x,this.y,scl,scl);
}
this.death =function(){
for (var i = 0; i < this.tail.length; i++) {
	var pos=this.tail[i];
	var p =dist(this.x,this.y,pos.x,pos.y);
	if (p<1) {
		this.total=0;
		this.tail=[];
		text("GAME OVER",200,200)
	}

}

}

	this.move= function(x,y){
		this.xspeed=x;
		this.yspeed=y;
	}
	this.eat =function(pos){
		var d= dist(this.x,this.y,pos.x,pos.y);
		if(d<1){
			this.total++;
		return true;
	}else{
		return false;
	}
	}
}


function mousePressed(){
background(0,150,50)


}
