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
  if (!/^[A-Za-z0-9.,!""]*$/.test(messageInput.value)) {
    document.getElementById("messageError").textContent =
      "NO SPECIAL CHARACTERS ALLOWED IN THE NAME FIELD!!!";
    event.preventDefault();
    console.log("prevent submit");
  }
});
