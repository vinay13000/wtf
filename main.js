canvas=document.getElementById("canto");
ctx= canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=2;
ctx.rect(150,143,430,200);
ctx.stroke();



ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=2;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=2;
ctx.arc(350,210,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(450,210,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="orange";
ctx.lineWidth=2;
ctx.arc(300,250,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=2;
ctx.arc(400,250,40,0,2*Math.PI);
ctx.stroke();
