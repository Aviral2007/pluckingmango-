class Thrower{
    construtor(bodyA, bodyB){

 var options = {
     bodyA: bodyA,
     pointB: pointB,
     stiffness: 0.04,
     length: 10
 }
 
 this.pointB = this.pointB
 this.thrower = Constraint.create(options);
 World.add(world, this.thrower);

 }
 
 attach(body){
    this.thrower.boayA = body
 }
   
 fly(){
 this.thrower.bodyA = null


 }

    }


display(){

if(this.thrower.bodyA){

    var pointA = this.elastic.bodyA.position;
    var pointB = this.pointB;
strokeWeight(4);
Line(pointA.x, pointA.y, pointB.x, pointB.y )

   }
}
}


