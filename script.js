document.getElementById('checkButton').addEventListener('click', function() {
    const number = document.getElementById('numberInput').value;
    const result = document.getElementById('result');
    
    if (number === '') {
        result.textContent = "Please enter a number!";
        result.style.color = "orange";
    } else if (number % 2 === 0) {
        result.textContent = number + " is Even";
        result.style.color = "green";
    } else {
        result.textContent = number + " is Odd";
        result.style.color = "red";
    }
});
