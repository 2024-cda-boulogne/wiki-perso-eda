document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById('darkmode-toggle');
  const body = document.body;

  darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  });

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