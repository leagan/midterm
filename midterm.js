var Slider;
var minutesRadius;
var hoursRadius;
var clockDiameter;
var button
var bgcolor
var r
var b 
var g
var Flag = 0
var Flag2 = 0

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100,100,50);

angleMode(DEGREES)
	
button = createButton("New Colors");
  button.mousePressed(changeColor);
	button.position(20,20); 
	button.size(100,50);
 	bgcolor = color(100,100,50);

button = createButton("Add Texture");
	button.mousePressed(textureFlag);
	button.position(20,110);
	button.size(100,50);
		
button = createButton("Bye Clock")
	button.mousePressed(GrowCircleFlag);
	button.position(20,180)
	button.size(100,50)
	
	//ADAPTED FROM P5JS EXAMPLES: CLOCK
	var radius = min(width, height) / 2;
  minutesRadius = radius * .60;
  hoursRadius = radius * 0.50;
  clockDiameter = radius * 1.7;
	
	Slider = createSlider(0,360,200);
  Slider.position(20, 80);
  Slider.size(200,10);
	
	cx = width /2;
  cy = height / 2;
	
	
	

}

function draw() {
	background(0)
	background(bgcolor);
	
	if (Flag){drawdots();}
	fill(r,b,g)
	ellipse(windowWidth/2, windowHeight/2, 600, 600);
	noStroke()
	fill(10)
	ellipse(windowWidth/2, windowHeight/2, 20,20);
	

	
	  var m =  line(cx, cy, cx + cos(x) * minutesRadius, cy + sin(x) * minutesRadius); 
  
	
	stroke(255);
  strokeWeight(2);
	var x = Slider.value();
  line(cx, cy,cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy,cx + cos(x) * minutesRadius, cy + sin(x) * minutesRadius);
	if (Flag2) {GrowCircle();}
	
}
function changeColor() {
  bgcolor = color(r, b, g);

}
function mousePressed() {
    r = random(255);
    g = random(255);
    b = random(255);
}
		
function GrowCircle(){
	ellipse(windowWidth/2, windowHeight/2,frameCount, frameCount)
}
		
	function drawdots(){ 
	for (var p=0; p<windowWidth; p+=50){
	for (var q=0; q<windowHeight;q+=50){
	ellipse(p,q,10,10); }}}

function textureFlag () {
	if (Flag == 1){
		Flag = 0}
 else {Flag = 1}
}
	
function GrowCircleFlag  () {
	if (Flag2 == 1){
		Flag2 = 0}
	else {Flag2 = 1}
}
