let burgerList = document.getElementById('burger-menu-list');
let burgerMenu = document.getElementById('burger-menu');


let burgerMenuVisible = function() {
    burgerList.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
}
let bugerMenuHidden = function() {
    burgerList.style.display = 'none';
    document.body.style.overflowY = 'scroll';
}

let hidden = true;
burgerMenu.onclick = () =>{
    if (hidden){
        burgerMenuVisible();
        hidden = false;
    } else {
        bugerMenuHidden();
        hidden = true;
    } 
}
