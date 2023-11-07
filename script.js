//waits for the HTML document to fully load before executing the code
document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('btn');
    const popup = document.querySelector('.popup');
  
   //this event-listener listens for changes in the checkbox state
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        popup.style.visibility = 'visible';
      } else {
        popup.style.visibility = 'hidden';
      }
    });
  });