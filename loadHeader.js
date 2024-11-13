// loadHeader.js
document.addEventListener("DOMContentLoaded", function() {
    fetch("/header/header.html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
      })
      .catch(error => {
        console.error("Error loading header:", error);
      });
  });
  