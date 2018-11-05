let canvas = document.querySelector("canvas");

console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

const randomColor = () => {
    let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = ['#'];
    for (let i = 0; i < 6; i++) {
        color.push(chars[Math.floor(Math.random() * chars.length)])
    }
    return color.join('');
}

// Draw some boxes
for (let i = 0; i < Math.random() * 10; i++) {
    c.fillStyle = randomColor();
    c.fillRect(Math.random() * 400, Math.random() * 600, Math.random() * 400, Math.random() * 600);
}

// Draw some lines
for (let i = 0; i < Math.random() * 100; i++) {
    c.beginPath();
    c.moveTo(Math.random() * 500, Math.random() * 500);
    c.lineTo(Math.random() * 500, Math.random() * 500);

    c.strokeStyle = randomColor();
    c.stroke();
}

// Draw some circles
for (let i = 0; i < Math.random() * 10; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = randomColor();
    c.stroke();
}

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = randomColor();

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = this.color;
        c.fillStyle = this.color;
        c.stroke();
        c.fill();
    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
            this.color = randomColor();
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
            this.color = randomColor();
        }
        this.x += this.dx;
        this.y += this.dy
        this.draw()
    }
}

let circles = [];

for (let i = 0; i < Math.random() * 300; i++) {
    let radius = Math.random() * 30;
    let x = (Math.random() * (innerWidth - radius * 2)) + radius;
    let y = (Math.random() * (innerHeight - radius * 2)) + radius;
    let dx = (Math.random() - 0.5) * 8;
    let dy = (Math.random() - 0.5) * 8;

    circles.push(new Circle(x, y, dx, dy, radius));

}

const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    circles.forEach(circle => circle.update());
}

animate();
