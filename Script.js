let totalWeed = 0;
let wps = 0; // Weed Per Second
let growerCount = 0;
let greenhouseCount = 0;
let growerCost = 50;
let greenhouseCost = 200;

// DOM Elements
const weedCountDisplay = document.getElementById('weed-count');
const wpsDisplay = document.getElementById('wps-count');
const weedItem = document.getElementById('weed-item');
const growerButton = document.getElementById('grower');
const greenhouseButton = document.getElementById('greenhouse');

// Function to update the UI display
function updateDisplay() {
    weedCountDisplay.textContent = totalWeed;
    wpsDisplay.textContent = wps;
    growerButton.innerHTML = `Hire Grower (${growerCount}) - Cost: ${growerCost} Weed`;
    greenhouseButton.innerHTML = `Buy Greenhouse (${greenhouseCount}) - Cost: ${greenhouseCost} Weed`;
}

// Clicking the weed plant
weedItem.addEventListener('click', () => {
    totalWeed++;
    updateDisplay();
});

// Passive weed generation (WPS)
function generateWeed() {
    totalWeed += wps;
    updateDisplay();
}
setInterval(generateWeed, 1000); // Run every second

// Buy Grower
growerButton.addEventListener('click', () => {
    if (totalWeed >= growerCost) {
        totalWeed -= growerCost;
        wps += 1; // Each grower adds 1 WPS
        growerCount++;
        growerCost = Math.floor(growerCost * 1.5); // Increase cost
        updateDisplay();
    } else {
        alert('Not enough weed!');
    }
});

// Buy Greenhouse
greenhouseButton.addEventListener('click', () => {
    if (totalWeed >= greenhouseCost) {
        totalWeed -= greenhouseCost;
        wps += 2; // Each greenhouse adds 2 WPS
        greenhouseCount++;
        greenhouseCost = Math.floor(greenhouseCost * 1.5); // Increase cost
        updateDisplay();
    } else {
        alert('Not enough weed!');
    }
});

// Initial UI update
updateDisplay();
