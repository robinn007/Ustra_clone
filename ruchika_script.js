// script.js
function typingEffect(text) {
    const input = document.querySelector('.search input');
    let i = 0;
    let isIncreasing = true;
  
    function printLetter() {
      if (isIncreasing) {
        if (i <= text.length) {
          input.setAttribute('placeholder', text.slice(0, i++));
        } else {
          isIncreasing = false;
        }
      } else {
        if (i >= 0) {
          input.setAttribute('placeholder', text.slice(0, i--));
        } else {
          isIncreasing = true;
        }
      }
      setTimeout(printLetter, 100);
    }
  
    printLetter();
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    typingEffect("Search for Hair Growth ");
  });

  