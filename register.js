function register() {
    var regUsername = document.getElementById("regUsername").value;
    var regPassword = document.getElementById("regPassword").value;
  
    if (regUsername === "" || regPassword === "") {
      alert("Please enter both username and password.");
      return;
    }
  
    localStorage.setItem("username", regUsername);
    localStorage.setItem("password", regPassword);
  
    window.location.href = "login.html";
}
  