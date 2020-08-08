var canvas = Array.from(document.querySelectorAll('.triangle'));

canvas.map(el => {
  var context = el.getContext('2d');
  context.beginPath();
  context.moveTo(10, 25);
  context.lineTo(40, 10);
  context.lineTo(40, 40);
  context.lineTo(10, 25);

  context.closePath();
  context.shadowColor = 'rgba(0, 0, 0, 0.4)';
  context.shadowBlur = 7;
  context.shadowOffsetX = 2;
  context.shadowOffsetY = 5;
  context.fillStyle = '#fff';
  context.fill();
});
