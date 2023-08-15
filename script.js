if (username === "sinh@123" && password === "sinh@123") {
    console.log("Login successful. Redirecting...");
    window.location.href = "welcome.html";
} else {
    console.log("Invalid credentials. Please try again.");
    alert("Invalid credentials. Please try again.");
}
