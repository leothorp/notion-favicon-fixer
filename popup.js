document.getElementById('upload-button').addEventListener('click', function() {
    const fileInput = document.getElementById('favicon-upload');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onloadend = function() {
        console.log('File read complete, setting faviconUrl in storage...');
        chrome.storage.local.set({faviconUrl: reader.result}, function() {
            console.log('faviconUrl set in storage');
        });
    }

    if (file) {
        console.log('File selected, starting read...');
        reader.readAsDataURL(file);
    } else {
        console.log('No file selected');
    }
});