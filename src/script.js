const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    // Pokaż przycisk powrotu gdy użytkownik przewinie stronę w dół
    scrollToTopBtn.style.display = "block";
  } else {
    // Ukryj przycisk powrotu gdy użytkownik jest na górze strony
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  // Wykonaj płynne przewinięcie do góry strony
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});