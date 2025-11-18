import harvardSentences from './harvard_sentences.js';

// DOM Elements
const textDisplay = document.getElementById('sentence-text');
const idDisplay = document.getElementById('sentence-id');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const randomCheck = document.getElementById('random-check');

// State
let currentIndex = 0; // Tracks position in the currently used array (either harvardSentences or randomizedQueue)
const totalSentences = harvardSentences.length;

// New State Variables for Random Mode
let randomizedQueue = []; // Holds the shuffled sequence of sentences
let queueIndex = 0;       // Tracks position in the randomizedQueue

// --- Utility Functions ---

/**
 * Shuffles an array using the Fisher-Yates (Knuth) algorithm.
 * This is a common way to get a perfectly random, non-repeating sequence.
 * @param {Array} array - The array to shuffle.
 * @returns {Array} A new shuffled array.
 */
function shuffleArray(array) {
    // Create a copy to avoid modifying the original array
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// --- Main Logic Functions ---

/**
 * Initializes the randomized queue.
 */
function initializeRandomQueue() {
    randomizedQueue = shuffleArray(harvardSentences);
    queueIndex = 0;
    console.log("Random queue initialized and shuffled.");
}

/**
 * Gets the sentence object based on the current mode and index.
 * @returns {object} The sentence object.
 */
function getCurrentSentence() {
    if (randomCheck.checked) {
        return randomizedQueue[queueIndex];
    } else {
        return harvardSentences[currentIndex];
    }
}

// Update the screen with the current sentence
function render() {
    const currentItem = getCurrentSentence();
    
    // Update Text
    textDisplay.textContent = currentItem.sentence;
    
    // Update ID Counter
    // We show the ID of the sentence, and if in random mode, the position in the queue.
    const modeIndicator = randomCheck.checked ? ` (Position ${queueIndex + 1}/${totalSentences})` : '';
    idDisplay.textContent = `Sentence #${currentItem.id}${modeIndicator}`;
}

// Go to Next Sentence
function nextSentence() {
    if (randomCheck.checked) {
        // Increment the position in the random queue
        queueIndex++;
        
        // If we hit the end, re-shuffle the queue and restart the position
        if (queueIndex >= totalSentences) {
            initializeRandomQueue();
            alert("All 720 sentences viewed! Starting a new random cycle.");
        }
    } else {
        // Sequential: Add 1, wrap around to 0 if at end
        currentIndex = (currentIndex + 1) % totalSentences;
    }
    render();
}

// Go to Previous Sentence
function prevSentence() {
    // For "Previous," we step back in the current viewing method (sequential or random queue)
    if (randomCheck.checked) {
        // Decrement the random queue index, loop to end if we pass the beginning (optional)
        queueIndex = (queueIndex - 1 + totalSentences) % totalSentences;
    } else {
        // Sequential decrement, wrap around to end if at 0
        currentIndex = (currentIndex - 1 + totalSentences) % totalSentences;
    }
    render();
}

// --- Event Listeners and Initialization ---

btnNext.addEventListener('click', nextSentence);
btnPrev.addEventListener('click', prevSentence);

// Listener to handle the state change when the random checkbox is clicked
randomCheck.addEventListener('change', () => {
    if (randomCheck.checked) {
        // When turning on random mode, initialize the queue and start from the beginning
        initializeRandomQueue();
    } else {
        // When turning off random mode, revert to sequential start
        currentIndex = 0;
    }
    // Render the first item of the new mode
    render();
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') nextSentence();
    if (e.key === 'ArrowLeft') prevSentence();
});


// Initialization:
// 1. Initialize the random queue just in case the user clicks random first.
initializeRandomQueue();
// 2. Render the default starting sentence (ID 1).
render();

// --- Service Worker Registration ---
// Only register if the browser supports Service Workers
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}