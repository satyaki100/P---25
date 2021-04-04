class garbage{
    constructor(x , y , w , h){
        var options = {
            isStatic:true
        }
       
        this.w=w
        this.h=h
        this.image = loadImage("dustbingreen.png");
        this.body=Bodies.rectangle(x, y, w, h , options); -
        World.add(world, this.body);
    }
    display(){
        var garbagePos=this.body.position;
        push()
        translate(garbagePos.x,garbagePos.y)
        rectMode(CENTER);
        strokeWeight(4);
        fill(255,255,0)
        imageMode(CENTER)
        image(this.image , 0 , 0,this.w, this.h);
        pop()
    }
}
