let greetings = [];
let currentIndex = -1;

// Load messages for The Departure of John T
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

// Cycles through messages in order, then reshuffles when reaching the end
function showRandomMessage() {
    if (greetings.length === 0) return;

    // Move to the next message in the list
    currentIndex++;

    // If we reach the end of the list, go back to the start
    if (currentIndex >= greetings.length) {
        currentIndex = 0;
    }

    const selected = greetings[currentIndex];

    // Display the content
    document.getElementById('text-content').innerText = `"${selected.message}"`;
    document.getElementById('author-content').innerText = `- ${selected.from}`;
    
    // Reveal the message box
    document.getElementById('message-box').classList.remove('hidden');
}

function closeMessage() {
    document.getElementById('message-box').classList.add('hidden');
}
