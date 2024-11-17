// Select all action buttons
const actionButtons = document.querySelectorAll('.action-btn');

// Add click event listeners
actionButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle the "selected" class
    button.classList.toggle('selected');
  });
});
