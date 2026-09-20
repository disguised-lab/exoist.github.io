// 1. Read saved data from phone storage when page loads (default to 0 if empty)
let clickCount = parseInt(localStorage.getItem('appClickCount')) || 0;

const button = document.getElementById('myBtn');
const displayMessage = document.getElementById('message');

// Function to update screen text
function updateDisplay() {
  if (clickCount === 0) {
    displayMessage.textContent = "Tap the button to start counting.";
  } else {
    displayMessage.textContent = `Saved Count: ${clickCount}`;
  }
}

// Show saved count immediately when page opens
updateDisplay();

// 2. Save data whenever the button is clicked
button.addEventListener('click', function() {
  clickCount++;
  
  // Save key-value pair into phone browser storage
  localStorage.setItem('appClickCount', clickCount);
  
  updateDisplay();
});
