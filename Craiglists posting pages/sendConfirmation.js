// Select elements
const sendButton = document.querySelector('.send-btn');
const messageInput = document.querySelector('.message-seller input');
const confirmationMessage = document.querySelector('.confirmation-message');

// Add event listener to the button
sendButton.addEventListener('click', () => {
  // Check if the input field is not empty
  if (messageInput.value.trim() !== '') {
    // Display confirmation message
    confirmationMessage.style.display = 'block';
    confirmationMessage.textContent = 'Message sent!';
    
    // Clear the input field
    messageInput.value = '';

    // Hide the confirmation message after 3 seconds
    setTimeout(() => {
      confirmationMessage.style.display = 'none';
    }, 3000);
  } else {
    // Display an error message if input is empty
    confirmationMessage.style.display = 'block';
    confirmationMessage.textContent = 'Please enter a message!';
    confirmationMessage.style.color = 'red';

    // Hide the error message after 3 seconds
    setTimeout(() => {
      confirmationMessage.style.display = 'none';
    }, 3000);
  }
});
