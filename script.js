const form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    passField = form.querySelector(".create-password"),
    passInput = passField.querySelector(".password"),
    cPassField = form.querySelector(".confirm-password"),
    cPassInput = cPassField.querySelector(".cPassword");

//Email validation
function checkEmail(){
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailPattern)){
        return emailField.classList.add("invalid"); //adding invalid class name if the email does not match with emailPattern
    }
        emailField.classList.remove("invalid"); //removing invalid class name if the email value matches with emailPattern
}

//Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach(eyeIcons => {
    eyeIcons.addEventListener("click", () => {
    const pInput = eyeIcons.parentElement.querySelector("input");
    if (pInput.type === 'password') {
        eyeIcons.classList.replace("bx-hide", "bx-show");
        return (pInput.type = "text");
    }
    });
})

//calling function on form submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); //preventing form submiting
    checkEmail();

    //calling function on key up
    emailInput.addEventListener("keyup", checkEmail);
});