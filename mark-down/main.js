// Create an instance of the Marked class
const markedInstance = new marked.Marked();

// Configure markedInstance to use highlight.js
markedInstance.setOptions({
    highlight: function(code, language) {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
    },
    gfm: true,        // Enable GitHub Flavored Markdown
    breaks: true,     // Use GFM line breaks
    headerIds: true,  // Use GFM header IDs
    mangle: true,     // Encode code blocks
    pedantic: false,  // Don't be strict about parsing GFM
    smartLists: true, // Use smarter list behavior than the original markdown
    smartypants: false, // Don't use "smart" typographic punctuation
    xhtml: false      // Don't output self-closing tags
});

// Use the GFM extension if available
if (window.markedGfmHeadingId) {
    markedInstance.use(window.markedGfmHeadingId);
}

// Get the editor and preview elements
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Store the last edited markdown
let lastEditedMarkdown = "";

// Store the last edit made in "Edit" container
let lastEditInEditMode = "";

// Function to render markdown to HTML
function renderMarkdown() {
    const markdownText = editor.value;
    if (markdownText !== lastEditedMarkdown) {
        lastEditedMarkdown = markdownText;
    }
    const html = markedInstance.parse(markdownText);
    preview.innerHTML = '<div class="markdown-body">' + html + '</div>';

    // Highlight code blocks
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });
}

// Function to load reference.md content
function loadReference(filename) {
    fetch(filename)
        .then(response => response.text())
        .then(data => {
            editor.value = data;
            renderMarkdown();
        });
}

// Store the last selected mode in local storage
let lastSelectedMode = localStorage.getItem('selectedMode') || 'edit';

// Handle dropdown changes
document.getElementById('modeSelector').addEventListener('change', function () {
    console.log("Dropdown changed to:", this.value);
    
    if (this.value === 'reference') {
        // Store the last edit made in "Edit" mode
        if (lastSelectedMode === 'edit') {
            lastEditInEditMode = editor.value;
        }

        // Load the reference content
        loadReference('reference.md');
        lastSelectedMode = 'reference'; // Update the last selected mode
        localStorage.setItem('selectedMode', 'reference'); // Store in local storage
    } else { // Default to 'edit' mode
        console.log("Last edited content:", lastEditInEditMode);
        
        // Restore the last edit made in "Edit" mode
        if (lastEditInEditMode) {
            editor.value = lastEditInEditMode;
        }
        renderMarkdown();
        lastSelectedMode = 'edit'; // Update the last selected mode
        localStorage.setItem('selectedMode', 'edit'); // Store in local storage
    }
});

// Add an event listener to the editor
editor.addEventListener('input', renderMarkdown);

// When the page loads, select the last selected mode
document.getElementById('modeSelector').value = lastSelectedMode;
renderMarkdown(); // Initial render based on the mode selected
