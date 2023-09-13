// Create an instance of the Marked class
const markedInstance = new marked.Marked();

// Configure markedInstance to use highlight.js
markedInstance.setOptions({
    highlight: function(code, language) {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
    },
    gfm: true,               // Enable GitHub Flavored Markdown
    breaks: true,            // Use GFM line breaks
    headerIds: true,         // Use GFM header IDs
    mangle: true,            // Encode code blocks
    pedantic: false,         // Don't be strict about parsing GFM
    smartLists: true,        // Use smarter list behavior than the original markdown
    smartypants: false,      // Don't use "smart" typographic punctuation
    xhtml: false             // Don't output self-closing tags
});

// Use the GFM extension
if (window.markedGfmHeadingId) {
    markedInstance.use(window.markedGfmHeadingId);
}

// Get the editor and preview elements
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Store the last edited markdown
let lastEditedMarkdown = "";

// Function to render markdown to HTML
function renderMarkdown() {
    const markdownText = editor.value;
    const html = markedInstance.parse(markdownText);
    preview.innerHTML = '<div class="markdown-body">' + html + '</div>';

    // Highlight code blocks
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
}

// Load reference.md content
function loadReference(filename) {
    fetch(filename)
        .then(response => response.text())
        .then(data => {
            editor.value = data;
            renderMarkdown();
        });
}

// Handle dropdown changes
document.getElementById('modeSelector').addEventListener('change', function() {
    switch (this.value) {
        case 'reference':
            // Load the reference.md content
            loadReference('reference.md');
            break;
        case 'basicReference':
            // Load the basicReference.md content
            loadReference('basicReference.md');
            break;
        case 'advancedReference':
            // Load the advancedReference.md content
            loadReference('advancedReference.md');
            break;
        case 'edit':
        default:
            // Load the last edited markdown
            editor.value = lastEditedMarkdown;
            renderMarkdown();
            break;
    }
});


// Add an event listener to the editor
editor.addEventListener('input', renderMarkdown);

// Initial render
renderMarkdown();
