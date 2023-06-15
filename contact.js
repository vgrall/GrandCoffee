// function showAlert() {
//   alert("Le message a été envoyé avec succès !");
// }

// fenêtre pop-up pour avertir l'utilisateur que le formulaire a été envoyé avec succès ou qu'il manque des informations
function validateForm() {
  var firstName = document.querySelector('input[name="first-name"]').value;
  var lastName = document.querySelector('input[name="last-name"]').value;
  var email = document.querySelector('input[name="email"]').value;
  var message = document.querySelector('textarea[name="message"]').value;

  if (firstName === "" || lastName === "" || email === "" || message === "") {
    alert("Veuillez remplir tous les champs avant d'envoyer le formulaire.");
  } else {
    alert("Le formulaire a été envoyé avec succès !");
  }
}
