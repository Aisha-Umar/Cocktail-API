
const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
let drinks = [];

async function fetchGinImages() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    drinks= data.drinks;
    console.log(drinks)
    showImage(currentIndex);
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

function showImage(index) {
    if (drinks[index]) {
    const imageUrl = drinks[index].strDrinkThumb;
    carousel.innerHTML = `<img src="${imageUrl}" alt="Gin Image">`;
}
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + drinks.length) % drinks.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % drinks.length;
  showImage(currentIndex);
});

fetchGinImages();

