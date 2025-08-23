document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider-container");

  sliders.forEach((sliderContainer) => {
    const slider = sliderContainer.querySelector(".slider");
    const leftBtn = sliderContainer.querySelector(".arrow.left");
    const rightBtn = sliderContainer.querySelector(".arrow.right");

    rightBtn.addEventListener("click", () => {
      const cardWidth = slider.querySelector(".card").offsetWidth + 20; // recalc
      slider.scrollBy({ left: cardWidth, behavior: "smooth" });
    });

    leftBtn.addEventListener("click", () => {
      const cardWidth = slider.querySelector(".card").offsetWidth + 20; // recalc
      slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
    });
  });
});



    
 