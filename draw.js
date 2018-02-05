var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var square = false;
var px = -1;
var py = -1;
canvas.addEventListener("click", function(e){
	if(e.pageX < 100 && e.pageY < 100){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.fillStyle = "red";
		ctx.fillRect(0,0,100,100);
		ctx.fillStyle = "blue";
		ctx.fillRect(0,100,100,100);
		return;
	}
	else if(e.pageX < 100 && e.pageY < 200){
		square = !square;
		return;
	}
	else{
		ctx.beginPath()
		ctx.fillStyle = "green";
		if(square){
			if(px != -1 && py != -1){
				ctx.moveTo(px,py);
				ctx.lineTo(e.pageX,e.pageY);
				ctx.stroke();
				ctx.fill();
				ctx.beginPath();
			}
			px = e.pageX;
			py = e.pageY;
			ctx.rect(e.pageX - 50, e.pageY - 50, 100, 100);
			ctx.fill();
			ctx.stroke();
		}
		else{
			if(px != -1 && py != -1){
				ctx.moveTo(px,py);
				ctx.lineTo(e.pageX,e.pageY);
				ctx.stroke();
				ctx.fill();
				ctx.beginPath();
			}
			px = e.pageX;
			py = e.pageY;
			ctx.arc(e.pageX,e.pageY,50,0,Math.PI * 2);
			ctx.stroke();
			ctx.fill();
		}
		return;
	}
});

ctx.fillStyle = "red";
ctx.fillRect(0,0,100,100);
ctx.fillStyle = "blue";
ctx.fillRect(0,100,100,100);
