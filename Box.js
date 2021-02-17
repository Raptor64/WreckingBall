class box
{
	constructor(x,y,w,h)
	{
		var options={
            restitution:0.8,
            density:0.3,
            friction:1			
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
            var boxPos=this.body.position;		
            var angle = this.body.angle;
			push()
            translate(boxPos.x, boxPos.y);
            rotate(angle);
            rectMode(CENTER)
            stroke("lime")
            fill("white")
			rect(0,0,this.w, this.h);
			pop()
			
	}

}