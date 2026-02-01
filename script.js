const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const askSection = document.getElementById('ask-section');
const celebrationSection = document.getElementById('celebration-section');

noBtn.addEventListener('mouseover', () => {
    // Calculate random positions
    // We subtract 150px to ensure it doesn't go off the right or bottom edge
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    
    // Apply the new positions
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    askSection.classList.add('hidden');
    celebrationSection.classList.remove('hidden');
});