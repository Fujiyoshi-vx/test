"use strict";
 
var x = 0.1, y = 0.1;
var a = -1.0, b = 0.05, c = 2.275,  d = -0.5;
var _x, _y;
var A;

function setup(){
	let canvas = createCanvas(windowWidth, windowHeight).canvas;
	frameRate(16);
	//初期値
	createCanvas(1280, 720); //720p
  background('black');
  blendMode(ADD);
  stroke(124, 155, 255, 50);
  fill(255,255,255)
	// Initialize
	// ライブラリを初期化します
	// canvas, isRecording, firstFrame, lastFrame, frameRate
	initGIF(canvas, true, 32, 48, 16);
}
 
function draw(){
	// background(random(33, 99));
	// この部分にアニメーション処理を実装します

  for (var i = 0; i < 100; i++) {
 
    A = a * (x * x + y * y) + b * x * (x * x - 3 * y * y) + c;
    _x = A * x + d * (x * x - y * y);
    _y = A * y - 2 * d * x * y;
 
    point(_x * 200 + width/2, - _y * 200 + height/2);
 
    x = _x;
		y = _y;
	//	recordGIF();
  }
recordGIF();
}
