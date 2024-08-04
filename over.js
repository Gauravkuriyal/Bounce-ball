function checkOut() {
    let pipeCheck = container.querySelector(".pipe");
    pipeCheck.style.background = "white";
    let positionPipeCheck = pipeCheck.getBoundingClientRect();
    let positionCircle = circle.getBoundingClientRect();
    // return;
    // console.log("y = ",positionCircle.y)
    // console.log("height = ",window.innerHeight)

    if (positionPipeCheck.x <= 180 && positionPipeCheck.x >= 0) {

        if ((positionCircle.y <= pipeCheck.children[0].offsetHeight) || (positionCircle.y + 80 >= (pipeCheck.children[0].offsetHeight + 200))) {
            console.log("out");

            clearInterval(garvityInterval);
            clearInterval(flyInterval);
            clearInterval(scrollContainerInterval);
            clearInterval(addNewPipeInterval);
            clearInterval(delOutsidePipeInterval);
            clearInterval(checkOutInterval);
            clearInterval(scoreInterval);

            document.removeEventListener("keydown", flyController)
            document.removeEventListener("keyup", gravityController)

            document.querySelector(".gameOver").style.display = "flex";
            document.querySelector(".final").innerHTML = document.querySelector(".score").innerHTML;

        }
    }
    // else if (positionCircle.y > window.innerHeight) {
    //     console.log("out 2");
        // clearInterval(garvityInterval);
        // clearInterval(flyInterval);
        // clearInterval(scrollContainerInterval);
        // clearInterval(addNewPipeInterval);
        // clearInterval(delOutsidePipeInterval);
        // clearInterval(checkOutInterval);
        // clearInterval(scoreInterval);

        // document.removeEventListener("keydown", flyController)
        // document.removeEventListener("keyup", gravityController)

        // document.querySelector(".gameOver").style.display = "flex";
        // document.querySelector(".final").innerHTML = document.querySelector(".score").innerHTML;
    // }
}

function replay() {
    document.querySelector(".gameOver").style.display = "none";
    start = `
    <div class="space">
        START
    </div>
    <div class="pipe test">
        <div class="up_pipes">

        </div>
        <div class="down_pipes">

        </div>
    </div>`
    container.innerHTML = start;
    i = 0;
    u = 0;
    d = 0;
    flying = false;
    container.style.transform = "";
    document.querySelector(".score").innerHTML = "0";

    circle.style = "";
    garvityInterval = setInterval(gravityfun, 1);

    document.addEventListener("keydown", flyController)
    document.addEventListener("keyup", gravityController)

    scrollContainerInterval = setInterval(scrollContainer, 1);
    addNewPipeInterval = setInterval(addNewPipe, 1000);
    delOutsidePipeInterval = setInterval(delOutsidePipe, 100);
    checkOutInterval = setInterval(checkOut, 1);
    scoreInterval = setInterval(score, 100);
}

let checkOutInterval = setInterval(checkOut, 1);