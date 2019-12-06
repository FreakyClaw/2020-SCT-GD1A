// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen

//context.beginPath();
//context.strokeStyle = "bleu"
//context.arc(300,200,60,2*Math.PI);
//context.closePath();
//context.stroke();
//context.fill();


let cirkelObject = {};

cirkelObject.x = 300;
cirkelObject.y = 200;
cirkelObject.radius = 60;

cirkelObject.draw = function(){
  context.beginpath();
  context.arc(cirkelObject.x,cirkelObject.y,cirkelObject.radius,0,2*Math.PI);
  context.closepath();
  context.stroke();
}

function animate(){
cirkelObject.draw();
cirkelObject.x = cirkelObject + 10;
}
