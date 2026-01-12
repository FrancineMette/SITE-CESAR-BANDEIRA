<script>
  const track = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.carousel-btn.prev');
  const nextButton = document.querySelector('.carousel-btn.next');

  let scrollAmount = 0;
  const scrollStep = 300;

  prevButton.addEventListener('click', () => {
    track.style.animation = 'none';
    scrollAmount += scrollStep;
    track.style.transform = `translateX(${scrollAmount}px)`;
  });

  nextButton.addEventListener('click', () => {
    track.style.animation = 'none';
    scrollAmount -= scrollStep;
    track.style.transform = `translateX(${scrollAmount}px)`;
  });

  // Retoma o autoplay depois de mexer
  function resumeAutoScroll() {
    setTimeout(() => {
      track.style.animation = 'scroll 40s linear infinite';
      scrollAmount = 0;
      track.style.transform = 'translateX(0)';
    }, 3000);
  }

  prevButton.addEventListener('click', resumeAutoScroll);
  nextButton.addEventListener('click', resumeAutoScroll);
</script>
