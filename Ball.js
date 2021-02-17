class ball
{
	constructor(x,y,h,w)
	{
		var options={
            restitution:0.8,
            density:1,
            friction:0.02		
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
            var ballPos=this.body.position;		
            var angle = this.body.angle;
			push()
            translate(ballPos.x, ballPos.y);
            rotate(angle);
            fill("red")
			ellipse(0,0,this.w, this.h);
			pop()
			
	}

}