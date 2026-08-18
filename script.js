const defEmail = "admin@gmail.com";
const defPassword = "admin123";

function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === defEmail && password === defPassword) {
        alert("Sign in successful!");
    } else {
        alert("Invalid email or password.");
    }
}