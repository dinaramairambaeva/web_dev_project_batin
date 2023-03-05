const data = [
    {
        name: 'Abdul Khalid',
        src: 'img/project1.jpg',
        category: ['event', 'jquery'],
        position: 'Web Designer'
    },
    {
        name: 'Abdul Khalid',
        src: 'img/project2.jpg',
        category: ['design','php'],
        position: 'Web Designer'
    },
    {
        name: 'Abdul Khalid',
        src: 'img/project3.jpg',
        category: ['event', 'jquery'],
        position: 'Web Designer'
    },
    {
        name: 'Abdul Khalid',
        src: 'img/project4.jpg',
        category: ['design','php'],
        position: 'Web Designer'
    },
    {
        name: 'Abdul Khalid',
        src: 'img/project5.jpg',
        category: ['event'],
        position: 'Web Designer'
    },
    {
        name: 'Abdul Khalid',
        src: 'img/project6.jpg',
        category: ['event', 'jquery'],
        position: 'Web Designer'
    }
];



let projectButtons = document.getElementById('project-buttons');
let projectContainer = document.getElementById('project-container');

let categories = []
for (let item of data){
    categories.push(...item.category)
}
categories = [...new Set(categories)];

let output = `<button onclick="filterItems('ALL')">ALL</button>`
for (let category of categories){
    output += `<button onclick="filterItems('${category}')">${category}</button>`
}
projectButtons.innerHTML = output;

let projectItems = ``
for (let item of data){
    projectItems += `
    <div class="project-list">
        <img src="${item.src}" alt="">
        <div class="project-list-hover">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-sharp fa-solid fa-link"></i>
        </div>  
        <div class="project-member">
            <h3>${item.name}</h3>
            <span>${item.position}</span>
        </div>   
    </div>
    `
}
projectContainer.innerHTML = projectItems;

function filterItems(categ){
    let outputFilter = ``
    for (let item of data){
        if (item.category.includes(categ)){
            outputFilter += `
            <div class="project-list">
                <img src="${item.src}" alt="">
                <div class="project-list-hover">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-sharp fa-solid fa-link"></i>
                </div>  
                <div class="project-member">
                    <h3>${item.name}</h3>
                    <span>${item.position}</span>
                </div>   
            </div>
            `
        } else if (categ == 'ALL'){
            outputFilter += `
            <div class="project-list">
                <img src="${item.src}" alt="">
                <div class="project-list-hover">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-sharp fa-solid fa-link"></i>
                </div>  
                <div class="project-member">
                    <h3>${item.name}</h3>
                    <span>${item.position}</span>
                </div>   
            </div>
            `
        }
    }
    projectContainer.innerHTML = outputFilter;
}