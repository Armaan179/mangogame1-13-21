class Tree{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("tree.png");
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, this.width*2, this.height*4);
    }

}