let count = 0;
const countDisplay = document.getElementById('count');
const button = document.getElementById('clickMeButton');

function updateCount() {
    count++;
    countDisplay.textContent = count;
}

button.addEventListener('click', () => {
    updateCount(); 
});
