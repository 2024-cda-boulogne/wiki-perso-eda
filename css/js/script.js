document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById('darkmode-toggle');
  const body = document.body;

  darkModeToggle.addEventListener('change', () => {
    // Vérifie l'état du toggle et ajoute ou supprime la classe en conséquence
    if (darkModeToggle.checked) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  
    // Stocke l'état du dark mode dans le local storage
    localStorage.setItem('darkMode', darkModeToggle.checked);
  });
  
  // Vérifie s'il y a une préférence stockée dans le local storage
  const savedDarkMode = localStorage.getItem('darkMode');
  
  // Applique le dark mode si une préférence est trouvée
  if (savedDarkMode === 'true') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
  }

  // Ajouter la classe "active" au lien correspondant à la page actuelle
  var path = window.location.pathname;
  var page = path.split("/").pop();
  var link = document.querySelector('.nav-list li a[href*="' + page + '"]');
  
  if (link) {
    link.parentElement.classList.add('active');
  }
});

function afficherPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function fermerPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}