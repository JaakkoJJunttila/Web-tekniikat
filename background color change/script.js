let button = document.getElementById("button")
let buttonsize = 50;
button.style.width = buttonsize + "px";

button.addEventListener("click", OnClicked);

function OnClicked(){
    document.body.style.backgroundColor = "black";
    buttonsize += 10;
    button.style.width = buttonsize + "px";
}

button.addEventListener("mouseover", mouseover);

function mouseover(){
    button.innerHTML = "väri"
}

button.addEventListener("mouseout", mouseout);

function mouseout(){
    button.innerHTML = "color"
}