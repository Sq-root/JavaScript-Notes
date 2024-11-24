let canvas = document.getElementById("mycanvas");
let canvasctx = canvas.getContext("2d");

if (canvas.getContext) {
  let canvasctx = canvas.getContext("2d");
  //Filed Rectangle
  // canvasctx.fillStyle = "#3333";
  // canvasctx.fillRect(10, 10, 50, 50);

  // //Stroke Rectangle
  // canvasctx.strokeStyle = "red";
  // canvasctx.strokeRect(20, 20, 30, 30);

  // //Clear Rectangle
  // canvasctx.clearRect(25, 25, 20, 20);

  // ----------Draw Shape------
  canvasctx.beginPath();
  canvasctx.moveTo(20, 20);
  canvasctx.lineTo(20, 50);
  canvasctx.lineTo(20, 80);
  canvasctx.lineTo(80, 100);
  canvasctx.lineTo(100, 20);
  canvasctx.strokeStyle = "blue";
  canvasctx.fill();
  canvasctx.closePath();
} else {
  console.error("Canvas Failed to get context");
}
