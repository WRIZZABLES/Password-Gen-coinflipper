function coinFlip() {
  // Ask the user if they want to be heads or tails
  const userChoice = prompt("Do you want to be heads or tails?").toLowerCase();
  
  // Generate a random number between 0 and 1
  const randomNum = Math.floor(Math.random() * 2);
  
  // Determine the result of the coin flip based on the user's choice
  let result;
  if (userChoice === "heads") {
    result = randomNum === 0 ? "heads" : "tails";
  } else if (userChoice === "tails") {
    result = randomNum === 0 ? "tails" : "heads";
  } else {
    console.log("Invalid choice. Please choose heads or tails.");
    return;
  }
  
  // Display the result of the coin flip
  console.log(`The coin landed on ${result}.`);
}

// Call the coinFlip function
coinFlip();
