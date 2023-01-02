let button = document.querySelector("button")

button.addEventListener("click", OkClicked);
button.addEventListener("wheel", Wheel);

function OkClicked(){
    document.style.backgroundcolor = "black";
    alert("moikkamoi")
    button.style.width = "500px"
}

function Wheel(event){
    console.log(event.deltaY)
    console.log("wheelie")
    }