let h2_list = [
    'Home Stylish',
    'Interior Design',
    'Design Architect'
]


let btnLeft = document.getElementById('slider-button-left');
let btnRight = document.getElementById('slider-button-right');
let slider = document.getElementById('main-slider');
let h2 = document.getElementById('slider-h2');
let current = 1;
slider.style.backgroundImage =  `linear-gradient(rgb(13 9 46 / 60%), rgb(0 0 0)),url(img/background${current}.jpg)`;
h2.innerHTML = h2_list[current-1];

btnRight.onclick = function() {
    console.log(current);
    if (current == 3){
        current = 1;
    }else{
        current++;
    }
    slider.style.backgroundImage =  `linear-gradient(rgb(13 9 46 / 60%), rgb(0 0 0)),url(img/background${current}.jpg)`;
    h2.innerHTML = h2_list[current-1];
    // slider.style.opacity = '0.9';
    // slider.style.transition = '0.5s';
}

btnLeft.onclick = function() {
    if (current == 1){
        current = 3;
    }else{
        current--;
    }
    slider.style.backgroundImage =  `linear-gradient(rgb(13 9 46 / 60%), rgb(0 0 0)),url(img/background${current}.jpg)`;
    h2.innerHTML = h2_list[current];
}