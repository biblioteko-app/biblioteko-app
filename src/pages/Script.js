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


// Array de livros
var livros = [
    {titulo: 'Livro 1', capa: 'livro1.jpg', concluido: true},
    {titulo: 'Livro 2', capa: 'livro2.jpg', concluido: false},
    {titulo: 'Livro 3', capa: 'livro3.jpg', concluido: true},
    {titulo: 'Livro 4', capa: 'livro4.jpg', concluido: false},
    {titulo: 'Livro 5', capa: 'livro5.jpg', concluido: true}
  ];
  
  // Função para criar a lista de livros
  function criarListaLivros() {
    var livrosLista = document.getElementById('livros-lista');
  
    for (var i = 0; i < livros.length; i++) {
      var livro = livros[i];
  
      var divLivro = document.createElement('div');
      divLivro.className = 'book';
      if (livro.concluido) {
        divLivro.classList.add('concluido');
      }
  
      var imgCapa = document.createElement('img');
      imgCapa.src = livro.capa;
      imgCapa.alt = livro.titulo;
  
      divLivro.appendChild(imgCapa);
      livrosLista.appendChild(divLivro);
    }
  }
  
  // Chama a função para criar a lista de livros quando a página carrega
  window.addEventListener('load', criarListaLivros);
  