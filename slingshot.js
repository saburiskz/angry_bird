class  Slingshot{
    constructor(bodyA,pointB){
        var options=
        { bodyA:bodyA, pointB:pointB,
            stiffness:0.02,
            length:10
        }
        this.pointB=pointB
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
        this.sling1=loadImage("sprites/sling.1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
    }

fly(){

this.sling.bodyA=null;


}


    display(){
image(this.sling1,200,20);
image(this.sling2,170,20)

if(this.sling.bodyA)
{

var pA=this.sling.bodyA.position;
var pB=this.pointB;
stroke(48, 22, 8);

if(pA.x<220){
    strokeWeight(5);
        line (pA.x-20,pA.y,pB.x-10,pB.y)
        line (pA.x-20,pA.y,pB.x+20,pB.y)

        image(this.sling3,pA.x-30,pA.y-10,15,30);}
        else {
            strokeWeight(3);
            line (pA.x+25,pA.y,pB.x-10,pB.y)
            line (pA.x+25,pA.y,pB.x+20,pB.y)
    
            image(this.sling3,pA.x+25,pA.y-10,15,30);
        }
}

    }
    }
