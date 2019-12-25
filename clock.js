
function setup() {
	createCanvas(500, 500);

}

function draw() {
background(250);
let h = hour();
let m = minute();
let s = second();
let x=0;
let y=0;

fill(0);
translate(250,250);

stroke(25);
ellipse(0,0,450);

strokeWeight(5);
for (var i = 0; i < 60; i++) {
	stroke(200);
	line(195,0,210,0);
	rotate(QUARTER_PI/7.5);

}
strokeWeight(8);
for (var i = 0; i < 60; i++) {
	stroke(255);
	line(160,0,210,0);
	rotate(QUARTER_PI/1.5);

}


noStroke();
fill(200);
textSize(60);
textSize('Helvatica');
text(h +" : "+m,-90,5);
textSize(40);
fill(5,102,105);
text(s,-20,60);


rotate(-HALF_PI);

strokeWeight(7);
stroke(0,171,173);
noFill();
let sc = map(s, 0, 60, 0, TWO_PI);
arc(0,0,400,400,0,sc);

strokeWeight(20);
let mn = map(m, 0, 60, 0, TWO_PI);
noFill();
stroke(161,35,42);
strokeWeight(15),
arc(0,0,360,360,0,mn);

strokeWeight(15);
stroke(245,130,40);
noFill();
let hr = map(h, 0, 12, 0, TWO_PI);
arc(0,0,320,320,0,hr);

strokeCap(PROJECT);

}
