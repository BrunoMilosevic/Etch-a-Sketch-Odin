function initializeSketch(n){
    for(let i = 0; i < n * n; i++){
      const sketchPixel = document.createElement("div");
      let cellSize = 100 / n;
      sketchPixel.className = "sketch-pixel";
      sketchPixel.style.width = `${cellSize}%`;
      sketchPixel.style.height = `${cellSize}%`;
      sketchPixel.style.backgroundColor = "rgb(128, 128, 128)";
      sketchPixel.addEventListener("mouseover", ()=>{
        changeColor(sketchPixel, hoverColor);
        
      })
      sketchboard.appendChild(sketchPixel);
      console.log(sketchPixel.style.backgroundColor);
      
    }

    
}


function changeColor(element, color){
    // To prevent from overriding colors
    if (element.style.backgroundColor == "rgb(128, 128, 128)"){
        element.style.backgroundColor = color;  
    }
    if(!(element.style.backgroundColor == "rgb(128, 128, 128)") && color == "gray"){
      element.style.backgroundColor = hoverColor;
    }
       
}


const sketchboard = document.querySelector(".sketch-board");
const blackBtn = document.querySelector(".black-btn")
const grayBtn = document.querySelector(".gray-btn");
const randomBtn = document.querySelector(".random-btn");
const resetBtn = document.querySelector(".reset-btn");
const eraseBtn = document.querySelector(".erase-btn");
let hoverColor = "black";
initializeSketch(16);
blackBtn.addEventListener("click", ()=>{
  hoverColor = "black";
});
grayBtn.addEventListener("click", () =>{
  hoverColor = "lightgray";
});
randomBtn.addEventListener("click", ()=>{
  const colorArray = ["black", "lightgrey", "yellow", "green", "blue", "purple"]
  let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
  hoverColor = randomColor;
})
eraseBtn.addEventListener("click", ()=>{
  hoverColor = "gray";
})
