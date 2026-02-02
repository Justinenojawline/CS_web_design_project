document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const speechBubble = document.getElementById('speech-bubble');
    const noteTitle = document.getElementById('note-title');
    const noteMessage = document.getElementById('note-message');
    const keys = document.querySelectorAll('.key');
    
    // Hide speech bubble initially
    speechBubble.classList.add('hidden');
    
    // Add click event to each key
    keys.forEach(key => {
        key.addEventListener('click', function() {
            // Get note and message
            const note = this.getAttribute('data-note');
            const message = this.getAttribute('data-message');
            
            // Update speech bubble content
            noteTitle.textContent = note;
            noteMessage.textContent = message;
            
            // Show speech bubble
            speechBubble.classList.remove('hidden');
            speechBubble.classList.add('visible');
            
            // Remove pressed class from all keys
            keys.forEach(k => k.classList.remove('pressed'));
            
            // Add pressed class to clicked key
            this.classList.add('pressed');
            
            // Hide speech bubble after 5 seconds
            setTimeout(() => {
                speechBubble.classList.remove('visible');
                speechBubble.classList.add('hidden');
                this.classList.remove('pressed');
            }, 5000);
        });
    });
    
    // Also hide speech bubble when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.key') && !event.target.closest('.speech-bubble')) {
            speechBubble.classList.remove('visible');
            speechBubble.classList.add('hidden');
            keys.forEach(k => k.classList.remove('pressed'));
        }
    });
});