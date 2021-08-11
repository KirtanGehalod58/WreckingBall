class Ball {
  constructor(x, y, width, height, angle) {
    var options = { 
      density: 1
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    //console.log(this.body.position.x);
    push();
    fill("grey");
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse(0, 0, this.width, this.height);
    pop();
  }
}
