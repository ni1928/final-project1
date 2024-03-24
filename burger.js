`use strict`;

document.getElementById('services').addEventListener('click', function(event) {
    let dropdown = this.querySelector('.dropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }

    event.stopPropagation();
});


window.onclick = function(event) {
  if (!event.target.matches('#services, #services *')) {
      let dropdowns = document.getElementsByClassName("dropdown");
      for (let dropdown of dropdowns) {
          dropdown.style.display = 'none';
      }
  }
};


function toggleMenu() {
    let navList = document.getElementsByClassName('nav-list')[0];
    if (navList.style.display === "block") {
      navList.style.display = "none";
    } else {
      navList.style.display = "block";
    }
  }