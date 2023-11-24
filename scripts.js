var editableText = document.getElementById('editableText');

editableText.addEventListener('input', function () {
    // Save changes to localStorage when typing
    localStorage.setItem('editableContent', editableText.innerHTML);
});

// Load saved text from localStorage on page load
editableText.innerHTML = localStorage.getItem('editableContent') || editableText.innerHTML;

// Handle drag-and-drop
editableText.addEventListener('dragover', function (e) {
    e.preventDefault();
});

editableText.addEventListener('drop', function (e) {
    e.preventDefault();

    var file = e.dataTransfer.files[0];

    if (file) {
        if (file.type.startsWith('text')) {
            // If it's a text file, read and insert the text
            var reader = new FileReader();
            reader.onload = function (event) {
                var text = event.target.result;
                insertTextAtCursor(text);
            };
            reader.readAsText(file);
        } else if (file.type.startsWith('image')) {
            // If it's an image file, insert the image
            insertImageAtCursor(file);
        }

        // Save changes to localStorage
        localStorage.setItem('editableContent', editableText.innerHTML);
    }
});

// Function to get the current cursor position
function getCursorPosition() {
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
        var range = selection.getRangeAt(0);
        return range.startOffset;
    }
    return 0;
}

// Function to insert text at the current cursor position
function insertTextAtCursor(text) {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(document.createTextNode(text));

    // Move the cursor after the inserted text
    range.setStartAfter(range.endContainer);
    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);
}

// Function to insert an image at the current cursor position
function insertImageAtCursor(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
        var img = document.createElement('img');
        img.src = e.target.result;
        img.alt = 'Inserted Image';

        var selection = window.getSelection();
        var range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(img);

        // Move the cursor after the inserted image
        range.setStartAfter(img);
        range.collapse(true);

        selection.removeAllRanges();
        selection.addRange(range);
    };
    reader.readAsDataURL(file);
}
