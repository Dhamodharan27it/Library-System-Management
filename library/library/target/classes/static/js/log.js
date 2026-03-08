function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

fetch("http://localhost:8080/users/login", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
username: username,
password: password
})
})

.then(response => response.text())

.then(data => {

if(data === "success"){

alert("Login Successful");

window.location.href = "index.html";

}else{

document.getElementById("message").innerText = "Invalid Login";

}

function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let emailElem = document.getElementById("email");
    let email = emailElem ? emailElem.value : "";

    fetch("http://localhost:8081/auth/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username: username, password: password, email: email})
    })
    .then(res => res.json())
    .then(user => {
        alert("User registered: " + user.username);
    })
    .catch(err => console.log("Register error", err));
}

})

.catch(error => {
console.log("Error:", error);
});

}