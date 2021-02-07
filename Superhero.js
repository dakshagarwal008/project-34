class Superhero{

    constructor(x,y,r){

        var options = {

            isStatic:true,
            

        }

        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("Superhero-01.png");
        this.r = r;
        World.add(world, this.body);

}
display(){

    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.r*10,this.r*10)

}

}