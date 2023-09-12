const markdownInput = document.getElementById('markdown-input');
const markdownOutput = document.getElementById('markdown-output');

markdownInput.addEventListener('input', function() {
    const markdownText = markdownInput.value;
    const html = marked(markdownText);
    markdownOutput.innerHTML = html;
});
