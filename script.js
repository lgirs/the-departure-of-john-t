let greetings = [];
let currentIndex = -1;

// 1. Password Verification Logic
function checkPassword() {
    const passwordInput = document.getElementById('password-input').value;
    const correctPassword = "k1nde5teveR";

    if (passwordInput === correctPassword) {
        // Hide the login screen
        document.getElementById('login-overlay').classList.add('hidden');
        // Show the main content of The Departure of John T
        document.getElementById('main-content').classList.remove('hidden');
    } else {
        alert("ACCESS DENIED: INVALID CLEARANCE CODE");
    }
}

// Allow pressing "Enter" key to submit password
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const loginOverlay = document.getElementById('login-overlay');
        if (!loginOverlay.classList.contains('hidden')) {
            checkPassword();
        }
    }
});

// 2. Load messages for The Departure of John T
window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('messages.json');
        if (!response.ok) throw new Error('Network response was not ok');
        greetings = await response.json();
        console.log("Success: Messages loaded.");
    } catch (error) {
        console.error("Error loading messages:", error);
    }
});

// 3. Message Display Logic
function showRandomMessage() {
    if (greetings.length === 0) return;

    currentIndex++;
    if (currentIndex >= greetings.length) {
        currentIndex = 0;
    }

    const selected = greetings[currentIndex];

    document.getElementById('text-content').innerText = `"${selected.message}"`;
    document.getElementById('author-content').innerText = `- ${selected.from}`;
    
    document.getElementById('message-box').classList.remove('hidden');
}

function closeMessage() {
    document.getElementById('message-box').classList.add('hidden');
}
