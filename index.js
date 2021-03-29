import reviews from './seeder.js';

// DOM Elements
const image = document.querySelector('.review-image-container');
const text = document.querySelector('.reviews-text');
const person = document.querySelector('.reviews-author');
const role = document.querySelector('.reviews-role');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;

function handleNewReview() {
    image.style.backgroundImage = `url(${reviews[index].image})`;
    image.setAttribute("alt", `${reviews[index].alt}`);
    person.textContent = `${reviews[index].name}`;
    role.textContent = `${reviews[index].role}`;
    text.textContent = `${reviews[index].text}`;
};

nextBtn.addEventListener('click', () => {
    index++;
    if (index === reviews.length) {
        index = 0;
    }
    handleNewReview();
});

prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = reviews.length -1;
    }
    handleNewReview();
});
