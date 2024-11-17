// Toggle message input form visibility
function toggleMessageForm() {
    const messageForm = document.querySelector('.message-form');
    messageForm.style.display = messageForm.style.display === 'none' ? 'block' : 'none';
  }
  
  // Simulate sending a message
  function sendMessage() {
    const messageInput = document.querySelector('.message-input');
    const confirmationMessage = document.querySelector('.confirmation-message');
    
    if (messageInput.value.trim()) {
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
      // Display error message if input is empty
      confirmationMessage.style.display = 'block';
      confirmationMessage.textContent = 'Please write a message!';
      confirmationMessage.style.color = 'red';
  
      // Hide the error message after 3 seconds
      setTimeout(() => {
        confirmationMessage.style.display = 'none';
        confirmationMessage.style.color = 'green'; // Reset to default color
      }, 3000);
    }
  }
  