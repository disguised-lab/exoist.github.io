// Load saved count from phone storage (or default to 0)
let clickCount = parseInt(localStorage.getItem('appClickCount')) || 0;

const button = document.getElementById('myBtn');
const displayMessage = document.getElementById('message');

// Function to update the text on screen
function updateDisplay() {
  if (displayMessage) {
    if (clickCount === 0) {
      displayMessage.textContent = "Tap the button to start counting.";
    } else {
      displayMessage.textContent = `Saved Count: ${clickCount}`;
    }
  }
}

// Show saved count when page opens
updateDisplay();

// Handle button click
if (button) {
  button.addEventListener('click', function() {
    clickCount++;
    localStorage.setItem('appClickCount', clickCount);
    updateDisplay();
  });
}

