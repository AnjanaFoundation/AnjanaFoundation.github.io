
// This is optional if you want to add interactivity

// Example: Expand/collapse milestone details on click
const milestones = document.querySelectorAll('.milestone');

milestones.forEach(milestone => {
  milestone.addEventListener('click', () => {
    milestone.classList.toggle('expanded');
  });
});
