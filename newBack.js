let container = document.querySelector(".container");
let i = 0;


function addNewPipe() {
    let newH = Math.floor(10+(window.innerHeight-200-10)*Math.random());

    // console.log(newH)
    // console.log((window.innerHeight - newH - 200))
    // console.log(window.innerHeight)
    
    let newPipe = document.createElement('div');
    newPipe.classList = "pipe";

    let upPipe = document.createElement("div");
    upPipe.classList = "up_pipes";
    upPipe.style.height = `${newH}px`;
    upPipe.style.backgroundColor = "red";

    let downPipe = document.createElement("div");
    downPipe.classList = "down_pipes";
    downPipe.style.height = `${(window.innerHeight - newH - 200)}px`;
    downPipe.style.backgroundColor = "red";

    newPipe.appendChild(upPipe);
    newPipe.appendChild(downPipe);

    container.appendChild(newPipe)

}

function scrollContainer() {
    i = i + 2;
    container.style.transform = "translateX(-" + (i) + "px)";
}

function delOutsidePipe() {
    let pipes = container.getElementsByClassName("pipe");
    if(pipes[0].getBoundingClientRect().x < 0){
        pipes[0].classList = "not";
    }
}

function score() {
    let score = document.querySelector(".score");
    score.innerHTML = Number(score.innerHTML)+1;
    // score.addEventListener("click",()=>{
    //     console.log("clicked");
    //     clearInterval(scrollContainerInterval)
    // })
}

// addNewPipe()
// addNewPipe()
// addNewPipe()
let addNewPipeInterval = setInterval(addNewPipe, 1000);
let scrollContainerInterval = setInterval(scrollContainer, 1);
let delOutsidePipeInterval = setInterval(delOutsidePipe,1000);
let scoreInterval = setInterval(score,100);

