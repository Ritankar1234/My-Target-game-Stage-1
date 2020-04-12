class Ball {
    constructor(x,y){
var options = {
    'restitution':0.8,
    'friction':1,
    'density':1
}
this.body = Bodies.rectangle(x,y,200,200,options);
this.width = 200;
this.height = 200;
this.image = loadImage("ball.png");
World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push ();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}