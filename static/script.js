

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  if (username === "user" && password === "password") {
    alert("Login successful!");
  } else {
    document.getElementById("error-message").innerText = "Invalid username or password.";
    document.getElementById("error-message").style.display = "block";
    document.getElementById("login-form").classList.add("slide-in");
  }
});

// script for mysoftware 

// Initial setup: show both popups without blinking
document.addEventListener("onload", function(event) {
  let successPopup = document.getElementById('successPopup');
  let faultPopup = document.getElementById('faultPopup');

  successPopup.style.display = 'block';
  faultPopup.style.display = 'block';
});

let currentPopup = 'success'; // Track the currently displayed popup

// Function to toggle the popup between "Success" and "Fault Detected"
function togglePopup() {
  let successPopup = document.getElementById('successPopup');
  let faultPopup = document.getElementById('faultPopup');

  // Stop blinking for the current popup
  if (currentPopup === 'success') {
    successPopup.classList.remove('blink');
  } else {
    faultPopup.classList.remove('blink');
  }

  // Show the selected popup and start blinking
  if (currentPopup === 'success') {
    faultPopup.style.display = 'block';
    faultPopup.classList.add('blink');
    currentPopup = 'fault';
  } else {
    successPopup.style.display = 'block';
    successPopup.classList.add('blink');
    currentPopup = 'success';
  }
}

// Event listener for the 'A' key to toggle between popups
document.addEventListener('keydown', function(event) {
  if (event.key === 'a' || event.key === 'A') {
    togglePopup();
  }
});
