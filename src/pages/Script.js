// Inicialização dos carrosséis
const carouselElements = document.querySelectorAll('.carousel');

carouselElements.forEach(carousel => {
  const carouselItems = carousel.querySelectorAll('.carousel-item');
  let currentIndex = 0;
  const intervalTime = 2000; // Tempo de exibição de cada item em milissegundos

  function nextSlide() {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add('active');
  }

  setInterval(nextSlide, intervalTime);
});
