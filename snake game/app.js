
 const playBoard =document.querySelector(".play-board");
let foodx,  foody;
// snake
let snakex=5,snakey=10;

let velocityx=0, velocityy=0;

const changeFoodPosition= () =>{
    // passing random values 0 to 30 as food possition
    foodx=Math.floor(Math.random()*30 )+1;
    foody=Math.floor(Math.random()*30 )+1;
}
// for changing snake direction
const changeDirection =(e) => {
    // changing velocity values based on key presed
     if(e.key ==="ArrowDown"){
        velocityx=0;
         velocityy=-1;
     }else if( e.key === "ArrowUp"){
        velocityx=0;
        velocityy=1;
     }
     else if( e.key === "ArrowLeft"){
        velocityx=-1;
        velocityy=0;
     }
     else if( e.key === "ArrowRight"){
        velocityx=1;
        velocityy=0;
     }
}

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodx}/${foody}"></div>`;
    // update the snake head possition
    snakex+=velocityx;
    snakey+=velocityy;

    htmlMarkup += `<div class="head" style="grid-area: ${snakex}/${snakey}"></div>`;

    playBoard.innerHTML = htmlMarkup;
  };
  changeFoodPosition(); 
    initGame();
 document.addEventListener("keydown",changeDirection);