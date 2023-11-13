function login() {
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;
  
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
  
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
      window.location.href = "profile.html";
    } else {
      alert("Invalid username or password.");
    }
}
  