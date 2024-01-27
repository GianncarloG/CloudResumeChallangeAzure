// // Create a variable to store the visitor count.
// var visitorCount = 0;

// // Define a function to increment the visitor count.
// function incrementVisitorCount() {
//   visitorCount++;
// }

// // Add an event listener to the window load event to increment the visitor count when the page loads.
// window.addEventListener("load", incrementVisitorCount);

// // Display the visitor count on the page.
// document.getElementById("visitor-count").innerHTML = visitorCount;

// var counterContainer = document.getElementById("visitor-count");
// // var counterContainer = document.getElementById("visitor-count");
// var visitCount = localStorage.getItem("page_view");
// console.log(visitCount)


// // Check if page_view entry is present
// if (visitCount) {
//   visitCount = Number(visitCount) + 1;
//   localStorage.setItem("page_view", visitCount);
// } else {
//   visitCount = 1;
//   localStorage.setItem("page_view", 1);
// }
// counterContainer.innerHTML = visitCount

// Get the element where the counter will be displayed
// var counterContainer = document.getElementById("visitor-count");
// var counterContainer = document.getElementById("visitor");
var counterContainer = document.getElementsByClassName("visitor");

// Retrieve the current visit count from localStorage or set it to 1
var visitCount = localStorage.getItem("page_view") || 1;
visitCount = Number(visitCount); // Ensure it's a number

// Increment the visit count and store it back in localStorage
visitCount++;
localStorage.setItem("page_view", visitCount);

// Update the content of the counter container with the new count
console.log(visitCount)
console.log(counterContainer)
counterContainer.textContent = visitCount; // Use textContent for text-only content
