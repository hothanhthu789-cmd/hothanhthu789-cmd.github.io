function calculateAverage() {
    const inputs = document.querySelectorAll('.grade-input');
    
    let total = 0;
    let count = inputs.length;
    inputs.forEach(input => {
        total += parseFloat(input.value) || 0;
    });
    const average = total / count;
    document.querySelector('#resultText span').innerText = average.toFixed(2);
}