class slingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            lenght: 15
        }

        this.pointB = pointB;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(0);
            stroke("pink");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
}