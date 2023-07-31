const form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    passField = form.querySelector(".create-password"),
    passInput = passField.querySelector(".password"),
    cPassField = form.querySelector(".confirm-password"),
    cPassInput = cPassField.querySelector(".cpassword");

//Email validation
function checkEmail(){
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(pattern)){
        return emailField.classList.add("invalid");
    }
        emailField.classList.remove("invalid");
}

//calling function on form submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); //preventing form submiting
    checkEmail();
});