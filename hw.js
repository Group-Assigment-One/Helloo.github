const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const carouselTrack = document.querySelector('.product-carousel-track');
const productLists = document.querySelectorAll('.product-list');

let currentListIndex = 0;
const totalLists = productLists.length;

rightBtn.addEventListener('click', () => {
    if (currentListIndex < totalLists - 1) {
        currentListIndex++;
        carouselTrack.style.transform = `translateX(-${currentListIndex * 100}%)`;
    }
});

leftBtn.addEventListener('click', () => {
    if (currentListIndex > 0) {
        currentListIndex--;
        carouselTrack.style.transform = `translateX(-${currentListIndex * 100}%)`;
    }
});
