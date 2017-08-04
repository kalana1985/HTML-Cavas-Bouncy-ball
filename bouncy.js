const canvas = document.querySelector('canvas');
// adding canvases height and width to 100%

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
//create a new veriable call "c" and add getContext function to it
//will use this const to drow the items to the canvas

const c = canvas.getContext('2d');