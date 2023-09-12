document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');
    const referenceDropdown = document.getElementById('referenceDropdown');
    let previousContent = ''; // To store the previous content of the editor

    // Set marked to use GitHub Flavored Markdown (GFM)
    marked.setOptions({
        gfm: true,
        breaks: true
    });

    // Update the preview whenever the editor content changes
    editor.addEventListener('input', function() {
        preview.innerHTML = marked(editor.value);
    });

    // Handle the reference dropdown
    referenceDropdown.addEventListener('change', function() {
        if (referenceDropdown.value === 'preview') {
            previousContent = editor.value; // Store the current content
            loadReferenceMd();
        } else if (referenceDropdown.value === 'edit') {
            editor.value = previousContent; // Revert to the previous content
            editor.dispatchEvent(new Event('input')); // Trigger the input event to update the preview
        }
    });

    function loadReferenceMd() {
        fetch('reference.md')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                editor.value = data; // Set the fetched markdown content to the editor
                editor.dispatchEvent(new Event('input')); // Trigger the input event to update the preview
            })
            .catch(error => {
                console.error('Error fetching reference.md:', error);
                preview.innerText = 'Error loading reference.md';
            });
    }
});
