const images = [
    {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//

const domReference = document.querySelector('.carousel-image');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

let imageIndex = 0;


images.forEach((element,index) =>{
    const domElement = domElementCreator('div');
    domElement.classList.add(`image-${index}`,'my_carousel-item');
    domReference.appendChild(domElement);
    domElement.innerHTML = `<img src="${element.image}" alt="image ${index}">
        <h2>${element.title}</h2> 
        <p>${element.text}</p>`;
    if(imageIndex==index){
        domElement.classList.add('active');
    }
});

const allImages = document.querySelectorAll('.my_carousel-item');
console.log(allImages);

previousButton.addEventListener('click', function(){
    imageIndex--;
    allImages.forEach((element,index) => {
        element.classList.remove('active');
        if (imageIndex<0){
            imageIndex = 4;
        }
        if(imageIndex==index){
            element.classList.add('active');
        }
    });
});

nextButton.addEventListener('click', function(){
    imageIndex++;
    allImages.forEach((element,index) => {
        element.classList.remove('active');
        if (imageIndex>4){
            imageIndex = 0;
        }
        if(imageIndex==index){
            element.classList.add('active');
        }
    });
});





function domElementCreator(tag){
    const element = document.createElement(`${tag}`);
    return element;
}
