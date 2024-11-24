let canvas = document.getElementById("mycanvas");
let canvasctx = canvas.getContext("2d");

if (canvas.getContext) {
  let canvasctx = canvas.getContext("2d");

  // ----------Draw Rectangle------
  //Filed Rectangle
  canvasctx.fillStyle = "#3333";
  canvasctx.fillRect(130, 30, 50, 50);  // x,y pt where rec start

  // //Stroke Rectangle
  // canvasctx.strokeStyle = "red";
  // canvasctx.strokeRect(20, 20, 30, 30);

  // //Clear Rectangle
  // canvasctx.clearRect(25, 25, 20, 20);

  // ----------Draw Shape------
  // canvasctx.beginPath();
  // canvasctx.moveTo(20, 20);
  // canvasctx.lineTo(20, 50);
  // canvasctx.lineTo(80, 20);
  // canvasctx.lineTo(80, 100);
  // canvasctx.lineTo(100, 20);
  // canvasctx.strokeStyle = "blue";
  // canvasctx.fill();
  // canvasctx.closePath();

  // ----------Draw Line------
  // canvasctx.lineWidth = 2;
  // canvasctx.strokeStyle = "green";
  // canvasctx.beginPath();
  // canvasctx.moveTo(5, 5); //Start  Pt
  // canvasctx.lineTo(100, 5); // End Pt
  // canvasctx.stroke();
  // canvasctx.closePath();

  // canvasctx.beginPath();
  // canvasctx.lineWidth = 3;
  // canvasctx.strokeStyle = "red";
  // canvasctx.moveTo(20, 50); //Start  Pt
  // canvasctx.lineTo(100, 50); // End Pt
  // canvasctx.stroke();
  // canvasctx.closePath();

  //--------------QuadraticCurveTo
  // arc(x, y, radius, startAngle, endAngle, counterclockwise)
  // canvasctx.beginPath();
  // canvasctx.lineWidth = 2;
  // canvasctx.moveTo(50, 50);
  // canvasctx.quadraticCurveTo(0, 10, 45, 0, 5.78, true);
  // canvasctx.stroke();
  // canvasctx.closePath();

  //-----------bezierCurveTo path
  // context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  // canvasctx.lineWidth = 2;
  // canvasctx.beginPath();
  // canvasctx.moveTo(20, 20);
  // canvasctx.bezierCurveTo(60, 100, 15, 0, 140, 70);
  // canvasctx.stroke();
  // canvasctx.closePath();
} else {
  console.error("Canvas Failed to get canvasctx");
}
