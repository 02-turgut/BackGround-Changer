const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black", "red", "purple", "green", "yellow", "pink", "orange"]

button.addEventListener("click", changeBackGround);

let order = 0;

function changeBackGround() {
    // rastgele bir renk
    //const randomNumber = Math.floor(Math.random() * colors.length);
    //const selectedColor = colors[randomNumber];  
    //body.style.backgroundColor = selectedColor;
    
    // Sirayla arkaplan rengi sec
    console.log(order,colors[order])
    if(order == 6) order = 0;
    const selectedColor = colors[order];
    order++;
    body.style.backgroundColor = selectedColor;
}