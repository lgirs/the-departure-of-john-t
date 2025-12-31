async function showRandomMessage() {
    try {
        const response = await fetch('messages.json');
        const messages = await response.json();
        
        // Pick a random message
        const randomIndex = Math.floor(Math.random() * messages.length);
        const selected = messages[randomIndex];

        // Display it
        document.getElementById('text-content').innerText = `"${selected.message}"`;
        document.getElementById('author-content').innerText = `- ${selected.from}`;
        document.getElementById('message-box').classList.remove('hidden');
    } catch (error) {
        console.error("Error loading messages:", error);
    }
}

function closeMessage() {
    document.getElementById('message-box').classList.add('hidden');
}
