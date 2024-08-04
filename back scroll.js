let container = document.querySelector(".container");
// let circle = document.querySelector(".circle");
let i = 0;


function addNewPipe() {
    let lastUpPipe = container.lastElementChild.children[0];
    let lastUpHeight = lastUpPipe.offsetHeight;
    let newH = Math.floor(Math.random() * 100);

    if (Math.random() > 0.5) {
        newH = -newH;
    }
    if (lastUpHeight + newH >= window.innerHeight - 250) {
        newH = -newH;
    }
    if (window.innerHeight - (lastUpHeight + newH) - 200 >= window.innerHeight - 250) {
        newH = -newH;
    }
    let newPipe = document.createElement('div');
    newPipe.classList = "pipe";

    let upPipe = document.createElement("div");
    upPipe.classList = "up_pipes";
    upPipe.style.height = (lastUpHeight + newH) + "px";

    let downPipe = document.createElement("div");
    downPipe.classList = "down_pipes";
    downPipe.style.height = (window.innerHeight - (lastUpHeight + newH) - 200) + "px";

    newPipe.appendChild(upPipe);
    newPipe.appendChild(downPipe);

    container.appendChild(newPipe)

}

function scrollContainer() {
    i = i + 1;
    container.style.transform = "translateX(-" + i + "px)";
    // document.elementFromPoint(0,0).remove();
}

// function circleController(key) {
//     console.log(key.code)
//     if (key.code == "ArrowUp" || key.code == "KeyW") {
//         clearInterval(gravity);

//         u -= 5;
//     }
// }
// function gravityfun() {
//     if(2*u + 100 <= window.innerHeight){
//         circle.style.transform = "translateY(" + u + "px)";
//         u++;
//     }
// }
// function flyfun() {
//     if(2*(-u) <= window.innerHeight){
//         circle.style.transform = "translateY(" + u + "px)";
//         u--;
//     }
// }


setInterval(scrollContainer, 1)

setInterval(addNewPipe, 500);


// let gravity = setInterval(gravityfun, 1)

// document.addEventListener("keydown", ()=>{
//     console.log("kj")
//     if(flying == false){
//         console.log("jj")
        
//     clearInterval(gravity);
//         fly = setInterval(flyfun, 1);
//         flying = true
//     }
// });
// document.addEventListener("keyup", () => {
//     console.log("kki");
    
//     clearInterval(fly);
//     gravity = setInterval(gravityfun, 1)
//     flying = false
// })