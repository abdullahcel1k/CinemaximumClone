const nextSlide = () => {
 const sliderImages = document.querySelectorAll(".img-container");
 let firstSlide = sliderImages[0];
 sliderImages[sliderImages.length - 1].after(firstSlide);
}


const prevSlide = () => {
 const sliderImages = document.querySelectorAll(".img-container");
 let lastSlide = sliderImages[sliderImages.length - 1];
 sliderImages[0].before(lastSlide);
}