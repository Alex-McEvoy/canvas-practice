let canvas = document.querySelector("canvas");

console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

c.fillRect(100, 100, 100, 100);
c.fillRect(0, 0, 15, 15);
c.fillRect(500, 200, 50, 50);