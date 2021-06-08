let number = 0

// Event listener that detects when the button is clicked, triggering checkNumber function.
document.getElementById('calc-btn').addEventListener('click', checkNumber)

// Function determines if input is a number, if it is positive, zero or negative.
function checkNumber () {

  // Determines the value of the number in the input field.
  number = document.getElementById('input').value
  number = parseInt(number)

  // Confirm that the input is actually a number.
  if (isNaN(number)) {
    
    // If it isn't a number, display this message.
    document.getElementById('result').innerHTML = 'This is not a number!'

  // If it is a number, proceed with these steps.
  } else {

    // If the number is greater than 0, output this message.
    if (number > 0) {
      document.getElementById('result').innerHTML = 'The number is positive.'

    // If the number is exactly equal to zero, output this message.
    } else if (number === 0) {
      document.getElementById('result').innerHTML = 'The number is exactly 0.'

    // If the number is less than 0 (not equal to or greater than), output this message.
    } else {
      document.getElementById('result').innerHTML = 'The number is negative.'
    }
  }
}
