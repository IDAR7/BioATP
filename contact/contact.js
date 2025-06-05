// Initialiser EmailJS avec le Public Key
emailjs.init("zM2LIUSzmQXBwiKIu");

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_uuthcpz", "template_xcq26t3", this)
    .then(function () {
      document.getElementById("confirmationMessage").style.display = "block";
      document.getElementById("contactForm").reset();
    }, function (error) {
      alert("❌ Une erreur est survenue : " + error.text);
    });
});
