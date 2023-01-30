const banner = document.querySelector(".home-hero");

const images = [
    "public/assets/images/background-home.png",
    "public/assets/images/background-home-1.jpg",
    "public/assets/images/background-home-2.jpg",
    "public/assets/images/background-home-3.jpg",
    "public/assets/images/background-home-4.jpg",
];

const generateRandomNumber = (length) => parseInt(Math.random() * length);

const changeBackground = () => {
    const lengthArray = generateRandomNumber(images.length);
    banner.style.backgroundImage = `url(${images[lengthArray]})`;
};

changeBackground();
