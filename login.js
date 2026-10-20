function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let savedName = localStorage.getItem("name");
    let savedPassword = localStorage.getItem("password");

    if (username === "" || password === "") {
        alert("Please enter Username and Password");
        return;
    }

    if (username === savedName && password === savedPassword) {

        alert("Login Successful!");

        window.location.href = "index.html";

    } else {

        alert("Invalid Username or Password");

    }
    window.location.assign("index.html");
}