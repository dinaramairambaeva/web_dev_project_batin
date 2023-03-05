let homeList = document.getElementById('home-list');
let homeMenu = document.getElementById('home-menu');

let homeVisible = function() {
    homeList.style.display = 'flex';
}
let homeHidden = function() {
    homeList.style.display = 'none';
}

homeMenu.onmouseover = () =>{
    homeVisible();
}
homeList.onmouseover = () =>{
    homeVisible();
}
homeList.onmouseout = () =>{
    homeHidden();
}

