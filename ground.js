class Ground{
    constructor(x, y, width, height){
        var options={
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    display(){
        noStroke();
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, 1450, 30);
    }
}