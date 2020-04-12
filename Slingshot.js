class Slingshot {
    constructor(bodyA, pointB){
var options = {
    bodyA: bodyA,
    pointB: pointB,
    stiffness : 0.04,
    length : 10
}
this.sling1 = loadImage("sling.png");
this.pointB = pointB;
this.sling = Constraint.create(options);
World.add(world,this.sling);
    }
    attach(){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        image(this.sling1,400,280);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
            stroke(255);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            
        }
    }
}