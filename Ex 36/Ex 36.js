
const ColorInput = document.querySelector('#ColorInput');
const previewColor = document.querySelector('#previewColor');
const colorResult = document.querySelector('#colorResult');
const clearHistory = document.querySelector('#clearHistory');

ColorInput.addEventListener('input', function() {
    const selectedColor = ColorInput.value;
    previewColor.style.backgroundColor = selectedColor;
    addColorToHistory(selectedColor);
});

function addColorToHistory(color) {
    const li = document.createElement('li');
    li.textContent = color;
    li.style.color = color;
    colorHistory.appendChild(li);
}

clearHistory.addEventListener('click', function() {
    colorHistory.innerHTML = ''; 
});

