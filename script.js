document.addEventListener("DOMContentLoaded", function() {
  // Sélectionner tous les éléments à animer
  const faders = document.querySelectorAll('.fade-in');

  // Définir les options de l'observer
  const appearOptions = {
    threshold: 0.3, // L'élément devient visible quand 30% de sa hauteur est dans la fenêtre
    rootMargin: "0px 0px -100px 0px" // Permet d'anticiper l'arrivée de l'élément dans la fenêtre
  };

  // Créer l'observer qui ajoutera la classe "appear" quand un élément sera visible
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        observer.unobserve(entry.target); // Déclenchement unique pour chaque élément
      }
    });
  }, appearOptions);

  // Observer chacun des éléments ciblés
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Animation sur le titre "À propos de moi" du header
  const headerTitle = document.querySelector("header h1");

  // Démarrage avec l'échelle normale
  headerTitle.style.transform = "scale(1)";
  
  // Augmente légèrement la taille du titre après 500ms
  setTimeout(() => {
    headerTitle.style.transform = "scale(1.2)";
  }, 500);

  // Ajout de l'effet de surlignage clignotant après 1,5 seconde
  setTimeout(() => {
    headerTitle.classList.add("highlight-blink");
  }, 1500);

  // Animation de fade-in pour les sections lorsqu'elles entrent dans le viewport
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});