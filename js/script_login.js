var attempt = 3;
var submit = document.getElementById("submit")
submit.addEventListener('click', function (event) {
    validate()
});

function validate() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    if (email.value === "test@gmail.com" && password.value === "test1234") {
        alert("Login successfully");
        window.location = "chat.html";
        return false;
    }
    else if (email.value === ""){
        email.classList.add("error_borders");
        alert("Enter an email!")
    }
    else if (password.value === ""){
        email.classList.add("error_borders");
        alert("Enter a password!")
    }
    else {
        attempt--;
        alert("You have left " + attempt + " attempt;");

        if (!validateEmail(email.value)) {
            email.classList.add("error_borders");
            alert("Incorrect Email Format")
        } else {
            email.classList.remove("error_borders")
        }
        if (!CheckPassword(password.value)) {
            password.classList.add("error_borders");
            alert("Incorrect password Format")
        } else {
            password.classList.remove("error_borders")
        }

        if (attempt === 0) {
            document.getElementById("email").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

function validateEmail(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}

function CheckPassword(inputtxt) {
    var passw = /^[A-Za-z]\w{7,14}$/;
    return !!inputtxt.match(passw);
}