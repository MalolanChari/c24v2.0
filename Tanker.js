class TankerHead {
  constructor(x, y, width, height) {
      var options = {
        isStatic:true,
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;

     World.add(world,this.body);
    }
    display(){

      var angle = this.body.angle;
      
      var pos = this.body.position;

      angleMode(DEGREES);
      console.log(this.body.angle);

      if(keyIsDown(LEFT_ARROW) && angle > -28 && angle  <= 1){
        angle -= 1
        Matter.Body.setAngle(this.body,angle);
      }
      

      if(keyIsDown(RIGHT_ARROW) && angle >= -28 && angle  < 1){
        angle += 1
        Matter.Body.setAngle(this.body,angle);
      }
      shootAngle=angle

      var pos = this.body.position;

      push()
      translate(pos.x,pos.y)
      rotate(angle);
      rectMode(CENTER);
      fill("darkGreen");
      rect(0,0,this.width,this.height);
      pop()
    };
    
}

