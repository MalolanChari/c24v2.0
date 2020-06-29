class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }

  this.body = Bodies.circle(x,y,radius,options);
  this.radius = radius;
 // this.image = ("assets/canonBall.png");

  World.add(world,this.body);
  }

  display(){

  var pos = this.body.position;
  //ImageMode(CENTER);
  image(this.image,pos.x,pos.y,this.radius);
  };
  shoot(){
    var pos = this.body.position;
    pos.x=pos.x+1
    
    
  }
};
