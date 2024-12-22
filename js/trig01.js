window.onload = (event) => {
  const canvas = document.getElementById("canvas-container");
  const context = canvas.getContext("2d");
  const height = (canvas.height = window.innerHeight);
  const width = (canvas.width = window.innerWidth);

  context.translate(0, height / 2);

  // ->  Math.PI * 2 is the full rotation of a circle
  // ->  Sin value throughout the circle is 0,1,0,-1,0
  // ->  Cos value throughout the circle is 1,0,-1,0,1

  for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
    const x = angle * 200;
    const y = Math.tan(angle) * 200;

    /*
     * fillRect 1st params is for x coordinate
     * fillRect 2nd params is for y coordinate
     * fillRect 3rd params is for the width of the rectangle we want to draw
     * fillRect 4th params is for the height of the rectangle we want to draw
     */
    context.fillRect(x, y, 5, 5);
  }
};
