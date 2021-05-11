// Variable temporarily stores user's inputted age and day of the week
let age = 0
let day = 0

// Connect "Find Out" button to "findOut" function
document.getElementById('button').addEventListener('click', findOut)

function findOut () {
  // Stores the user's age and converts it into an integer
  age = document.getElementById('age').value
  age = parseInt(age)
  day = document.getElementById('day').value
  // Program determines if user is eligible for student pricing
  if ((day === 'Monday' || day === 'Tuesday' || day === 'Wendnesday' || day === 'Thursday' || day === 'Friday') && (age < 18)) {
    document.getElementById('text').innerHTML = 'Time for School!'
  } else if (( day !== 'Saturday' && day !== 'Sunday') && (age >= 18)) {
    document.getElementById('text').innerHTML = 'Time to go to work!'
  } else {
      document.getElementById('text').innerHTML = 'Time to relax for the weekend!'
  }
}
