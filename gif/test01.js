var sketch1 = function(p) {
  p.setup = function() {
    p.createCanvas(100, 100);
    p.background(0);
  };

  p.draw = function() {
    p.fill(200);
    p.stroke(0);
    p.rect(20, 20, 20, 20);
  };
};

var sketch2 = function(p) {
  p.setup = function() {
    p.createCanvas(200, 200);
    p.background(200);
   };

  p.draw = function() {
    p.fill(0);
    p.stroke(0);
    p.ellipse(50, 50, 50, 50);
  };
};

new p5(sketch1, "container1");
new p5(sketch2, "container2");