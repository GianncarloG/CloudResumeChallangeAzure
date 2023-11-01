// Create a variable to store the visitor count.
var visitorCount = 0;

// Define a function to increment the visitor count.
function incrementVisitorCount() {
  visitorCount++;
}

// Add an event listener to the window load event to increment the visitor count when the page loads.
window.addEventListener("load", incrementVisitorCount);

// Display the visitor count on the page.
document.getElementById("visitor-count").innerHTML = visitorCount;
