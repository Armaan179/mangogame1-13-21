class Mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,

        }
        this.body=Bodies.circle(x, y, radius/2, options)
        this.radius=radius;
        this.image=loadImage("mango.png");
        World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
        imageMode(CENTER)
        image(this.image,this.body.position.x, this.body.position.y,this.radius,this.radius);

    }
}