function initializeSketch(n){
    for(let i = 0; i < n * n; i++){
      let cellSize = 100 / n;
      const sketchPixel = document.createElement("div");
      sketchPixel.className = "sketch-pixel";
      sketchPixel.style.width = `${cellSize}%`;
      sketchPixel.style.height = `${cellSize}%`;
      sketchboard.appendChild(sketchPixel);
      console.log(sketchPixel)
    }
}

const sketchboard = document.querySelector(".sketch-board");
initializeSketch(50);