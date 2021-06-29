const canvas= document.getElementById("canvas");
const  ctx= canvas.getContext("2d");
const clear=document.getElementById("clear");
const increaseBtn= document.getElementById("increase");
const decreaseBtn=document.getElementById("decrease");
const colorElm=document.getElementById("color");
const sizeElm= document.getElementsByTagName("span");

let size=25;
let x=undefined;
let y=undefined;
let press=false;

canvas.addEventListener("mousedown",(e)=>{
	press=true;
	x=e.offsetX;
	y=e.offsetY;
	drawCircle(x,y);
});

canvas.addEventListener("mouseup", (e)=>{
	press=false;
	x=undefined;
	y=undefined;

});

canvas.addEventListener("mousemove", (e)=>{
	if (press){
		const x2=e.offsetX;
		const y2=e.offsetY;
		drawLine(x,y,x2,y2);
		drawCircle(x2,y2);
		x=x2;
		y=y2;
	}

});

function drawCircle(x,y){
	ctx.fillStyle=color;
	ctx.beginPath();
	ctx.arc(x, y, size, 0, 2 * Math.PI);
	ctx.fill();
}

function drawLine(x,y,x1,y1){
	ctx.strokeStyle=color;
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x1,y1);
	ctx.lineWidth=size;
	ctx.stroke();
}

increaseBtn.addEventListener("click",()=>{
	size+=5;
	if (size>50){
		size=50;
	}
	updateSize();
});

decreaseBtn.addEventListener("click",()=>{
	size-=5;
	if (size<5){
		size=5;
	}
	updateSize();
});

colorElm.addEventListener("change", (e)=>{
	// console.log(e);
	color=e.target.value;
});

clear.addEventListener("click",()=>{
	ctx.clearRect(0,0, canvas.width, canvas.height);
});

function updateSize(){
	sizeElm[0].innerText=size;
}