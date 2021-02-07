
    class Fly{
        constructor(bodyA, pointB){
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.04,
                length: 10
            }
            this.pointB = pointB
            this.fly = Constraint.create(options);
            World.add(world, this.fly);
        }
    
    
        display(){
           if(this.fly.bodyA){
                var pointA = this.fly.bodyA.position;
                var pointB = this.pointB;
                push();
                strokeWeight(0);
                stroke(48,22,8);
                line(pointA.x-30, pointA.y, pointB.x-10, pointB.y);
                pop();
            }
        }
    }