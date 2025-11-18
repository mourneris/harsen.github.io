import harvardSentences from './harvard_sentences.js';

// DOM Elements
const textDisplay = document.getElementById('sentence-text');
const idDisplay = document.getElementById('sentence-id');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const randomCheck = document.getElementById('random-check');

// State
let currentIndex = 0; // Array is 0-indexed (so ID 1 is index 0)
const totalSentences = harvardSentences.length;

// --- Functions ---

// Update the screen with the current sentence
function render() {
    const currentItem = harvardSentences[currentIndex];
    
    // Update Text
    textDisplay.textContent = currentItem.sentence;
    
    // Update ID Counter
    idDisplay.textContent = `Sentence #${currentItem.id}`;
}

// Go to Next Sentence
function nextSentence() {
    if (randomCheck.checked) {
        // Pick a random index between 0 and 719
        currentIndex = Math.floor(Math.random() * totalSentences);
    } else {
        // Sequential: Add 1, wrap around to 0 if at end
        currentIndex = (currentIndex + 1) % totalSentences;
    }
    render();
}

// Go to Previous Sentence
function prevSentence() {
    // Note: Even in random mode, "Previous" usually implies 
    // stepping back numerically to let users find their place 
    // if they skipped something. 
    
    // Sequential decrement, wrap around to end if at 0
    currentIndex = (currentIndex - 1 + totalSentences) % totalSentences;
    render();
}

// --- Event Listeners ---

btnNext.addEventListener('click', nextSentence);
btnPrev.addEventListener('click', prevSentence);

// Keyboard navigation support (optional but nice)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') nextSentence();
    if (e.key === 'ArrowLeft') prevSentence();
});

// Initialize
render();