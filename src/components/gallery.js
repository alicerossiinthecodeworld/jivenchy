import { images } from "./constants";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const galleryItems = Array.from(document.querySelectorAll('.looks__gallery-item'));
let availableIndexes = [...Array(images.length).keys()];

function changeImage() {
  const activeItems = Array.from(document.querySelectorAll('.looks__gallery-item.active'));
  activeItems.forEach(item => {
    item.classList.remove('active');
  });

  const numImagesToShow = Math.min(galleryItems.length, images.length);
  const selectedIndexes = [];

  for (let i = 0; i < numImagesToShow; i++) {
    if (availableIndexes.length === 0) {
      // If all indexes have been used, reset the available indexes
      availableIndexes = [...Array(images.length).keys()];
    }

    const randomIndex = getRandomInt(0, availableIndexes.length - 1);
    const itemIndex = availableIndexes[randomIndex];
    const item = galleryItems[i];
    const imgElement = item.querySelector('img');

    // Error processing
    imgElement.onerror = () => {
      const anotherIndex = getRandomInt(0, images.length - 1);
      imgElement.src= images[anotherIndex];
    };

    imgElement.src=images[itemIndex];

    // Remove selected index from available indexes
    availableIndexes.splice(randomIndex, 1);
    selectedIndexes.push(itemIndex);
  }

  // Hide remaining gallery items
  for (let i = numImagesToShow; i < galleryItems.length; i++) {
    galleryItems[i].style.display = 'none';
  }
}

setTimeout(() => {
  changeImage();
  setInterval(changeImage, 1300);
}, 1300);