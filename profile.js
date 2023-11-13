function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  
    window.location.href = "login.html";
  }
  
  var usernameDisplay = document.getElementById("usernameDisplay");
  if (localStorage.getItem("username")) {
    usernameDisplay.textContent = localStorage.getItem("username");
  } else {
    window.location.href = "login.html"; 
}
  