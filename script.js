// Add floating hearts
function createHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 5 + 's';
        document.querySelector('#proposalPage').appendChild(heart);
    }
}

// Add confetti
function createConfetti() {
    const colors = ['#FFD700', '#FFA500', '#FF69B4', '#87CEEB'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.querySelector('#celebrationPage').appendChild(confetti);
    }
}

// Add rain effect
function createRain() {
    for (let i = 0; i < 30; i++) {
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        raindrop.style.left = Math.random() * 100 + 'vw';
        raindrop.style.animationDelay = Math.random() * 2 + 's';
        document.querySelector('#sorrowPage').appendChild(raindrop);
    }
}

// Show/hide pages
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Initialize
window.onload = function() {
    createHearts();
    createConfetti();
    createRain();
};