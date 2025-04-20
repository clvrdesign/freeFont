// Drag and drop functionality
const dropZone = document.querySelector('.border-dashed');
const fileInput = document.getElementById('fontFile');
const filePreview = document.getElementById('filePreview');
const fileList = document.getElementById('fileList');

// Highlight drop zone when dragging over
['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.add('border-primary', 'bg-blue-50');
    });
});

// Remove highlight when dragging leaves
['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.remove('border-primary', 'bg-blue-50');
    });
});

// Handle dropped files
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) {
        fileInput.files = e.dataTransfer.files;
        updateFileList();
    }
});

// Handle selected files via browse
fileInput.addEventListener('change', updateFileList);

// Update the file list preview
function updateFileList() {
    if (fileInput.files.length > 0) {
        fileList.innerHTML = '';
        Array.from(fileInput.files).forEach(file => {
            const listItem = document.createElement('li');
            listItem.className = 'flex items-center justify-between bg-gray-50 p-3 rounded-lg';
            listItem.innerHTML = `
                <div class="flex items-center gap-3">
                    <i class="bi bi-file-earmark-font text-2xl"></i>
                    <div>
                        <p class="text-gray-800 text-sm">${file.name}</p>
                        <p class="text-sm text-gray-500">${(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                </div>
                <button type="button" class="text-red-500 text-xl hover:text-red-700" onclick="removeFile(this, '${file.name}')">
                    <i class="fi fi-rr-trash"></i>
                </button>
            `;
            fileList.appendChild(listItem);
        });
        filePreview.classList.remove('hidden');
    } else {
        filePreview.classList.add('hidden');
    }
}

// Remove file from the list
window.removeFile = function (button, fileName) {
    const dt = new DataTransfer();
    Array.from(fileInput.files)
        .filter(file => file.name !== fileName)
        .forEach(file => dt.items.add(file));

    fileInput.files = dt.files;
    updateFileList();
};