let collapsable = document.getElementsByClassName('collapsable');

for (let i = 0; i < collapsable.length; i++){
    collapsable[i].addEventListener('click', function() {
        this.classList.toggle('activeCollapse');
        let content = this.nextElementSibling;

        if (content.style.display === 'block'){
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    })
}