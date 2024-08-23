document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.querySelector('h2').addEventListener('click', () => {
      section.classList.toggle('colapsed');
    });
  });
});


