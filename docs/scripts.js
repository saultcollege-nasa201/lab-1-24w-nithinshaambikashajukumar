document.forms.contactForm.addEventListner('submit', (event) => {

let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let messageInput = document.getElementById('message');

if ( ! /^[A-Za-z]{1,16}$/.test(nameInput)  )
{
    document.getElementById("character error").textContent = "NO SPECIAL CHARACTERS ALLOWED!!!"
event.preventDefault();
console.log("prevent submit")
}
}



)