document.addEventListener('DOMContentLoaded', function () {
  const backToTopBtn = document.getElementById('backToTop');

  // Show button after scrolling down 300px
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  // Smooth scroll to top using documentElement for better browser support
  backToTopBtn.addEventListener('click', () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
console.log("hi");
