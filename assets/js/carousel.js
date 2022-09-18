import { hotels } from './hotels.js';
import renderStar from './rating.js';

let currentSlide = 0;

const nextButton = document.querySelector('.next-slide');
const prevButton = document.querySelector('.prev-slide');
const imageHotel = document.getElementById('image-hotel');
const descriptionHotel = document.getElementById('description-hotel');

const hotelTitle = document.getElementById('hotel-title');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function fillHotel(index = 0) {
  const hotel = hotels[index];
  imageHotel.src = `assets/img/hotels/${hotel.image}.jpg`;
  hotelTitle.textContent = hotel.name;
  console.log(descriptionHotel);
  descriptionHotel.innerHTML = hotel.description;
  renderStar();
}

fillHotel();

nextButton.addEventListener('click', () => {
  if (currentSlide < 2) currentSlide++;
  else currentSlide = 0;
  fillHotel(currentSlide);
});

prevButton.addEventListener('click', () => {
  if (currentSlide < 0) currentSlide--;
  else currentSlide = 2;
  fillHotel(currentSlide);
});