// P5 STUFF ONLY


var sensor1;
var sensor2;
var slider;
var brightness; //we will map brightness to mousex

function setup() {
	var p5=createCanvas(100,300);
		p5.parent('p5');

	slider=createSlider(0, 255, 0);
	slider.position(180,250);

}

function draw() {
	background(100);
		// currentBrightness();
		init();



	// noStroke();
	// fill(100,sensor1-200,sensor1-500);
	// // fill("red");
	// ellipse(width/2,600,(sensor2+5)/3,(sensor2+5)/3);

	// //brightness should be a value btwn 0-255, but connected to mouseX
	// brightness = Math.floor(map(mouseX, 0, width, 0, 255));

	// ellipse(sensor2+20,height/2,100,100);


}

function mouseReleased(){

	brightness = slider.value();

	socket.emit("led",brightness);
	console.log(brightness);
	// text(brightness,100,100);





}

// function currentBrightness() {
// 				brightness = slider.value();
// 			text(brightness, 50,100);


// }


////////////////////////////////////////////////

// all non-p5 javascript needs to go inside init() 
// so that this code executes only AFTER the page has loaded

function init(){
	brightness=slider.value();

	document.getElementById("currentb").innerHTML = ("current brightness: "+brightness);
	document.body.style.backgroundColor = 'rgb(' + brightness + ',' + brightness + ',' + brightness + ')';;



}

window.addEventListener('load', init);




