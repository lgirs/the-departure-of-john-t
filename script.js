let greetings = [];

// Load messages for The Departure of John T
window.addEventListener('DOMContentLoaded', async () => {
    try {
        // We use just the filename here
        const response = await fetch('messages.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        greetings = await response.json();
        console.log("Messages loaded successfully.");
    } catch (error) {
        console.error("Failed to load messages:", error);
        alert("The Departure of John T: The message delivery system is currently offline. Please check that messages.json is correctly formatted.");
    }
});

function showRandomMessage() {
    if (greetings.length === 0) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * greetings.length);
    const selected = greetings[randomIndex];

    document.getElementById('text-content').innerText = `"${selected.message}"`;
    document.getElementById('author-content').innerText = `- ${selected.from}`;
    
    document.getElementById('message-box').classList.remove('hidden');
}

function closeMessage() {
    document.getElementById('message-box').classList.add('hidden');
}
