let greetings = [];

// 1. Load messages automatically when the page finishes loading
window.addEventListener('DOMContentLoaded', async () => {
    try {
        // We look for the file relative to the current page
        const response = await fetch('./messages.json');
        // We save the JSON data into our greetings variable
        greetings = await response.json();
        console.log("Success! Messages loaded ready for action.");
    } catch (error) {
        console.error("Error loading messages:", error);
        alert("Sorry, the greeting delivery system is down momentarily.");
    }
});

// 2. The function runs when the mailbox is clicked
function showRandomMessage() {
    // If messages haven't loaded yet, do nothing
    if (greetings.length === 0) {
        return;
    }

    // Pick a random message index
    const randomIndex = Math.floor(Math.random() * greetings.length);
    const selected = greetings[randomIndex];

    // Inject the text into the HTML elements
    document.getElementById('text-content').innerText = `"${selected.message}"`;
    document.getElementById('author-content').innerText = `- ${selected.from}`;
    
    // Reveal the message box
    document.getElementById('message-box').classList.remove('hidden');
}

// 3. The function runs when the CLOSE button is clicked
function closeMessage() {
    document.getElementById('message-box').classList.add('hidden');
}
