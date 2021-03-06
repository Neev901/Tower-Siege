class box{
  constructor(x, y, width, height, color) {
      var options = {
 
          'restitution':0.1,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color=color;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(0, 0);
      fill(this.color); 
      rectMode(CENTER);
      rect( pos.x, pos.y, this.width, this.height);
      pop();
    }
}