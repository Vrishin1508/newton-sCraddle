class Blob{
    constructor(x, y,radius) {
        var options = {
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
        }
      this.x = x
      this.y = y
      this.radius = radius
      this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
        World.add(world, this.body);
    }
    display()
        {
        var blobpos = this.body.position;
        push()
        translate(blobpos.x, blobpos.y);
        rectMode(CENTER);
        fill("green")
       ellipse(0,0, this.radius);
        pop()
}
}