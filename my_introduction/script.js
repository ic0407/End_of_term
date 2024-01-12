document.addEventListener("DOMContentLoaded", function() {
    const parallaxItems = document.querySelectorAll(".parallax-item");
  
    window.addEventListener("scroll", function() {
      parallaxItems.forEach(function(item) {
        const speed = parseFloat(item.getAttribute("data-speed"));
        const yPos = -window.scrollY * speed;
        item.style.transform = `translateY(${yPos}px)`;
      });
    });
  });
  