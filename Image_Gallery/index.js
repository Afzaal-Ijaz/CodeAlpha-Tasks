
let black_box = document.getElementById("black_scr")
let box_img = document.getElementById("box_img")
let cross = document.getElementById("cross")

function openFullscr(pic){
    black_box.style.display = "flex"
    box_img.src = pic
    
}

function closeFullscr(){
    black_box.style.display = "none"    
}