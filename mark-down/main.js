    
    // Create an instance of the Marked class
const markedInstance = new marked.Marked();

// Enable GFM and other related options
markedInstance.setOptions({
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
    
    // Create an instance of the Marked class
    //const markedInstance = new marked.Marked();

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
    }

    // Load reference.md content
    function loadReference() {
        fetch('reference.md')
            .then(response => response.text())
            .then(data => {
                editor.value = data;
                renderMarkdown();
            });
    }

    // Handle dropdown changes
    document.getElementById('modeSelector').addEventListener('change', function() {
        if (this.value === 'reference') {
            // Store the current markdown
            lastEditedMarkdown = editor.value;
            // Load the reference.md content
            loadReference();
        } else if (this.value === 'edit') {
            // Load the last edited markdown
            editor.value = lastEditedMarkdown;
            renderMarkdown();
        }
    });

    // Add an event listener to the editor
    editor.addEventListener('input', renderMarkdown);

    // Initial render
    renderMarkdown();