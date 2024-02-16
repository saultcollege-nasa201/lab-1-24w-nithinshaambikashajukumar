document.forms.contactForm.addEventListener("submit", (event) => {
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let messageInput = document.getElementById("message");

  if (!/^[A-Za-z]{1,16}$/.test(nameInput.value)) {
    document.getElementById("characterError").textContent =
      "NO SPECIAL CHARACTERS ALLOWED!!!";
    event.preventDefault();
    console.log("prevent submit");
  }
});
