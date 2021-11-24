class Ball{
    constructor(x, y, r){
        var options = {
            restitution: 1
        }
        this.r = r;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("ball.png");
        World.add(world, this.body);
    }
    display(){
        var posi = this.body.position;
        push();
        translate(posi.x, posi.y);
        imageMode(CENTER);
        noStroke();
        scale(2);
        image(this.image,0,0,this.r,this.r);
        pop(); 
    }

}