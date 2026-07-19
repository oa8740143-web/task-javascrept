let form = document.getElementById("myForm");
let password = document.getElementById("password");
let message = document.getElementById("message");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let pass = password.value;


    if (pass.length < 10) {
        message.style.color = "red";
        message.innerHTML = "Password must be at least 10 characters.";
        return;
    }

    let symbols = /[%*+=_]/;

    if (!symbols.test(pass)) {
        message.style.color = "red";
        message.innerHTML = "Password must contain one symbol (% * + = _)";
        return;
    }

    message.style.color = "green";
    message.innerHTML = "Login Successful";

});