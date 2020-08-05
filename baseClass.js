class BaseClass {

    constructor(x,y,width,height,angle) {
        
        var options = {
            restitution: 0.4, friction: 1.2, density: 1
        }

        this.body = Bodies.rectangle(this.x, this.y, width, height, options);

        this.height = height;
        this.width = width;

        World.add(world, this.body);
    }

    display() {

      push();

      var p = this.body.position;  

      translate(p.x,p.y);
      rotate(this.body.angle);

      fill("blue");
      rectMode(CENTER)
      rect(p.x,p.y,this.width,this.height);

      pop();


    }
}