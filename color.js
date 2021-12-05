const colors = [ "#000080", "#00008B","#d32144","#E3516E","#FADE8B"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",  () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
  });
  
  function getRandomNumber() {
      
    return Math.floor(Math.random() * colors.length);
  }