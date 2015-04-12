var rate = 1000 / 60;
var start = Date.now();

var canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.top = 0;
canvas.style.left = 0;

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

var context = canvas.getContext('2d');

var ball = {
  position: [canvas.width / 2, canvas.height / 2],
  velocity: [0, 0],
};

setTimeout(function present() {
  var gravity = [0, 1];

  ball.radius = 25;
  ball.elasticity = 0.85;

  ball.position[0] += ball.velocity[0];
  ball.position[1] += ball.velocity[1];

	ball.velocity[0] += gravity[0];
	ball.velocity[1] += gravity[1];

  if(ball.position[1] + ball.radius > canvas.height) {
    ball.position[1] = canvas.height - ball.radius;
		ball.velocity[1] *= -ball.elasticity;
  }

  context.fillStyle = '#fce94f';
  context.fillRect(0, 0, canvas.width, canvas.height);

  var seconds = (Date.now() - start) / 1000;
  context.fillStyle = '#333333';
  context.font = '60px Montserrat';
  context.textAlign = 'center';

  context.fillText(seconds.toFixed(1) + 's', canvas.width / 2, 100);

  context.beginPath();
  context.arc(ball.position[0], ball.position[1], ball.radius, 0, 2 * Math.PI, false);
  context.fillStyle = '#333333';
  context.fill();
  context.closePath();

  setTimeout(present, rate);
}, 0);
