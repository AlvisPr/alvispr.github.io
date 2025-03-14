function createBinaryRain() {
    const background = document.querySelector('.tunnel-background');
    const binary = Math.random() < 0.5 ? '0' : '1';
    const element = document.createElement('div');
    
    element.className = 'binary-rain';
    element.textContent = binary;
    
    // Random horizontal position
    const left = Math.random() * 100;
    element.style.left = `${left}%`;
    
    // Random animation duration between 5 and 8 seconds
    const duration = 5 + Math.random() * 3;
    element.style.animationDuration = `${duration}s`;
    
    background.appendChild(element);
    
    // Remove the element after animation
    setTimeout(() => {
        element.remove();
    }, duration * 1000);
}

// Start creating binary rain elements
setInterval(createBinaryRain, 200);

// Create initial elements
for (let i = 0; i < 20; i++) {
    createBinaryRain();
}