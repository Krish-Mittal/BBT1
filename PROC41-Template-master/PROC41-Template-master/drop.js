class drops{
    constructor(x, y) {
        var options = {
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.ellipse(x, y,1,1, options);
        this.width = 1;
        this.height = 1;
        this.image = loadImage("wd.png");
        World.add(world, this.body);
      }
      display()
      {
        push();
        
       
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y);
        pop(); 
        
      }
}