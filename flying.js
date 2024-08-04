let circle = document.querySelector(".circle");
let u = 0, d = 0, flyInterval, flying = false;

let test = 0;

function circleController(key) {
    if (key.code == "ArrowUp" || key.code == "KeyW") {
        clearInterval(garvityInterval);

        u -= 5;
    }
}
function gravityfun() {
    if (2 * u + 100 <= window.innerHeight) {
        circle.style.transform = "translateY(" + u + "px)";
        u++;
    }
    else{
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
function flyfun() {
    if (2 * (-u) <= window.innerHeight) {
        circle.style.transform = "translateY(" + u + "px)";
        u--;
    }
}

let garvityInterval = setInterval(gravityfun, 1);
test++;

document.addEventListener("keydown", flyController =  (key) => {
    if (flying == false) {

        if (key.code == "ArrowUp" || key.code == "KeyW") {
            clearInterval(garvityInterval);
            flyInterval = setInterval(flyfun, 1);
            flying = true
        }
    }
});
document.addEventListener("keyup", gravityController = (key) => {

    if (flying == true) {
        if (key.code == "ArrowUp" || key.code == "KeyW") {
            clearInterval(flyInterval);
            garvityInterval = setInterval(gravityfun, 1);
            flying = false
        }
    }
})