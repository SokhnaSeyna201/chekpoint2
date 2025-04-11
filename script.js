//code JavaScript pour attendre que le contenu du DOM soit chargé
document.addEventListener("DOMContentLoaded", function() {
    console.log("Le DOM est entièrement chargé et analysé !");
    // Sélectionner les éléments
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // Implémentation d'une fonction
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Ajouter un écouteur d'événement au bouton et Changer la couleur d'arrière-plan de la boîte
  changeColorBtn.addEventListener("click", function() {
  colorBox.style.backgroundColor = getRandomColor();
  });

    
      
}) 