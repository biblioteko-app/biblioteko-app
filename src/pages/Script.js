// Inicialização do carrossel
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
const intervalTime = 2000; // Tempo de exibição de cada livro em milissegundos

function nextSlide() {
  carouselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.add('active');
}

setInterval(nextSlide, intervalTime);
