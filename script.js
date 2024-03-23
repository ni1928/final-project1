// This will toggle the dropdown when clicking on 'Our Services'
document.getElementById('services').addEventListener('click', function(event) {
    let dropdown = this.querySelector('.dropdown');

    // This checks the current state and toggles it
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }

    // This stops the click from propagating to the document
    // where it would be caught by the window.onclick handler
    event.stopPropagation();
});

// find out more
// This will close the dropdown if you click anywhere outside of it
window.onclick = function(event) {
  // It will only close if you click outside and not on the dropdown itself
  if (!event.target.matches('#services, #services *')) {
      let dropdowns = document.getElementsByClassName("dropdown");
      for (let dropdown of dropdowns) {
          dropdown.style.display = 'none';
      }
  }
};


function findOutMore() {
    window.location.href = 'https://myaccountant.ge/';
  }

//   learn more about
  function toggleReadMore() {
    let moreText = document.getElementById("more-text");
    let btnText = document.getElementById("read-more-btn");

    if (moreText.style.display === "none") {
      btnText.textContent = "Read Less";
      moreText.style.display = "inline";
    } else {
      btnText.textContent = "Learn More";
      moreText.style.display = "none";
    }
  }
