const carouselSlide = document.querySelector('.carousel-slide');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
let scrollInterval;

function scroll(direction) {
  const amountToScroll = direction === 'prev' ? -100 : 100;
  const startPosition = carouselSlide.scrollLeft;
  let currentPosition = startPosition;
  const endPosition = startPosition + amountToScroll;
  const increment = amountToScroll / 10;
  
  clearInterval(scrollInterval);
  scrollInterval = setInterval(function() {
    currentPosition += increment;
    if (currentPosition >= endPosition && increment > 0 || currentPosition <= endPosition && increment < 0) {
      clearInterval(scrollInterval);
      currentPosition = endPosition;
    }
    carouselSlide.scrollTo(currentPosition, 0);
  }, 16);
}

function startCarousel() {
  scrollInterval = setInterval(function() {
    scroll('next');
  }, 3000); // rola automaticamente a cada 3 segundos (3000ms)
}

function stopCarousel() {
  clearInterval(scrollInterval);
}

prevBtn.addEventListener('click', function() {
  stopCarousel();
  scroll('prev');
});

nextBtn.addEventListener('click', function() {
  stopCarousel();
  scroll('next');
});

startCarousel();
