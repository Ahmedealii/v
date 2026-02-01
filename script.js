const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const askSection = document.getElementById('ask-section');
const celebrationSection = document.getElementById('celebration-section');

// Move the No button when hovered (Desktop) or touched (Mobile)
function moveButton() {
    // We stay 100px away from edges so it doesn't "disappear"
    const padding = 100;
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding);
    
    noBtn.style.position = 'fixed'; // Ensures it moves relative to your screen
    noBtn.style.left = `${x + (padding/2)}px`;
    noBtn.style.top = `${y + (padding/2)}px`;
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents the phone from clicking it
    moveButton();
});

// Show the celebration when Yes is clicked
yesBtn.addEventListener('click', () => {
    askSection.style.display = 'none';
    celebrationSection.classList.remove('hidden');
    celebrationSection.style.display = 'block';
});
