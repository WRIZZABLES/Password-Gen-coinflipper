function generatePassword() {
  // Define a string of possible characters for the password
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[];:<>,.?/~`";
  
  // Define an empty string to hold the password
  let password = "";
  
  // Loop through 12 times to randomly select characters
  for (let i = 0; i < 12; i++) {
    // Generate a random index within the range of the chars string
    const randomIndex = Math.floor(Math.random() * chars.length);
    
    // Add the randomly selected character to the password string
    password += chars[randomIndex];
  }
  
  // Return the generated password
  return password;
}

// Call the generatePassword function and log the result to the console
console.log(generatePassword());
