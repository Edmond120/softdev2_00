var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var square = false;
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
			ctx.rect(e.pageX - 50, e.pageY - 50, 100, 100);
			ctx.fill()
			ctx.stroke();
		}
		else{
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
