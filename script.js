
  window.onload = function () {
    const modal = document.getElementById("glassModal");
    const closeBtn = document.querySelector(".close-btn");

    modal.style.display = "flex";

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  };

  const carousel = document.getElementById("carousel");
  const cardWidth = 320; // card + margin
  let autoScroll;

  function scrollCarousel(direction) {
    carousel.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth'
    });
  }

  function startAutoSlide() {
    autoScroll = setInterval(() => scrollCarousel(1), 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoScroll);
  }
  function scrollCarousel(direction) {
    const carousel = document.getElementById("carousel");
    const scrollAmount = 320; // width of one card + margin
    carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
  

  // Start auto sliding
  startAutoSlide();

  // Pause on hover
  carousel.addEventListener('mouseenter', stopAutoSlide);
  carousel.addEventListener('mouseleave', startAutoSlide);
