const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const date = new Date();

let hourDeg = (date.getHours() - (date.getHours() > 12 ? 12 : 0)) * 30;
let minuteDeg = date.getMinutes() * 6;
let secondDeg = date.getSeconds() * 6;

run();
setInterval(() => {
  run();
}, 1000);

function run() {
  secondDeg += 6;
  if (secondDeg === 360) {
    secondDeg = 0;
    minuteDeg += 6;
    if (minuteDeg === 360) {
      minuteDeg = 0;
      hourDeg += 30;
    }
  }
  ctx.clearRect(0, 0, 304, 304);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.arc(152, 152, 150, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.arc(150, 150, 5, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.font = "24px serif";
  ctx.fillText(1, 210, 45);
  ctx.fillText(2, 260, 90);
  ctx.fillText(3, 280, 158);
  ctx.fillText(4, 265, 230);
  ctx.fillText(5, 212, 278);
  ctx.fillText(6, 145, 295);
  ctx.fillText(7, 80, 270);
  ctx.fillText(8, 30, 225);
  ctx.fillText(9, 10, 160);
  ctx.fillText(10, 25, 95);
  ctx.fillText(11, 70, 45);
  ctx.fillText(12, 140, 30);

  // second
  ctx.save();
  ctx.beginPath();
  ctx.translate(150, 150);
  ctx.lineWidth = 1;
  ctx.rotate((Math.PI / 180) * secondDeg);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -130);
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.restore();

  // minutes
  ctx.save();
  ctx.beginPath();
  ctx.translate(150, 150);
  ctx.lineWidth = 3;
  ctx.rotate((Math.PI / 180) * minuteDeg);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -110);
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.restore();

  // hours
  ctx.save();
  ctx.beginPath();
  ctx.translate(150, 150);
  ctx.lineWidth = 8;
  ctx.rotate((Math.PI / 180) * hourDeg);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -80);
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.restore();
}
