class Stone{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:1,
            density:1,
        }
        this.body=Bodies.circle(x, y, radius/2, options)
        this.radius=radius;
        this.image=loadImage("stone.png");
        World.add(world,this.body)

    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,this.radius,this.radius);

    }
}