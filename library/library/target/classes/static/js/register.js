function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;

    fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("Registration Successful for: " + data.username);
        window.location.href = "login.html";  // Redirect to login after registration
    })
    .catch(error => {
        console.log("Error:", error);
        document.getElementById("message").innerText = "Registration Failed";
    });
}