const delay = 3; // Modify this variable to change the delay in seconds
let remaining = delay;

// Display countdown messages
const countdownInterval = setInterval(() => {
  console.log(`Generating random number in ${remaining} seconds`);
  remaining--;

  if (remaining === 0) {
    clearInterval(countdownInterval);

    // Generate random number
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100); // Change 100 to set the desired range
      console.log(`Random number: ${randomNumber}`);
    }, 1000); // Delay for 1 second before generating the random number
  }
}, 1000); // Update countdown every 1 second

//node pwJSassignment2/randomNoGeneratwithDelay.js