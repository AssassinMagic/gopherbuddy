document.getElementById('fetchData').addEventListener('click', function () {
  fetchCanvasData();
});

function fetchCanvasData() {
  fetch('https://your-api-endpoint/api/v1/canvas-data', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token'
    }
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('apiResponse').innerText = JSON.stringify(data);
    drawOnCanvas(data);
  })
  .catch(error => {
    document.getElementById('apiResponse').innerText = 'Error: ' + error;
  });
}

function drawOnCanvas(data) {
  // Use canvas.js for rendering
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  // Example: Drawing a rectangle based on data
  ctx.fillStyle = 'green';
  ctx.fillRect(50, 50, 100, 100);
}
