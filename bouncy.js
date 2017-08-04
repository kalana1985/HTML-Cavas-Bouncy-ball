const canvas = document.querySelector('canvas');
// adding canvases height and width to 100%

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
//create a new veriable call "c" and add getContext function to it
//will use this const to drow the items to the canvas

const c = canvas.getContext('2d');


//creating a circle




//create a function to make circle move
//by putting animate inside the requestAni..function 
//we create a loop with in the function 
var x = Math.random()*innerWidth;
var y = Math.random() * innerHeight;

//creata a new variable for x velocity
var dx = 5 ;
//var dy=5 ;
var radius=30;

function animate(){
	 requestAnimationFrame(animate);
     c.clearRect(0,0,innerWidth,innerHeight);

	 c.beginPath();
     c.arc(x,y,radius,0,Math.PI * 2,false);
     c.strokeStyle = "blue";
     c.stroke();

     if(x + radius > innerWidth){
       
       dx = -dx;
     };

     x++;
}
animate();