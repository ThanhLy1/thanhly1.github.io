document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');

    // Initial render
    renderMarkdown();

    editor.addEventListener('input', renderMarkdown);

    function renderMarkdown() {
        const markdownText = editor.value;
        const htmlOutput = marked(markdownText); // Using the marked library to convert markdown to HTML
        preview.innerHTML = htmlOutput;
    }
});
