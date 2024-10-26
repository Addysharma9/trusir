document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
  
      // Toggle the 'active' class to control visibility
      answer.style.maxHeight = answer.style.maxHeight ? null : `${answer.scrollHeight}px`;
  
      // Change the symbol on expand/collapse
      const symbol = question.querySelector('span');
      symbol.textContent = symbol.textContent === '+' ? '-' : '+';
    });
  });
  