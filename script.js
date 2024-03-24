`use strict`;

function findOutMore() {
    window.location.href = 'https://myaccountant.ge/';
  }

function readMore() {
  window.location.href = 'https://myaccountant.ge/%e1%83%a9%e1%83%95%e1%83%94%e1%83%9c%e1%83%98-%e1%83%a1%e1%83%94%e1%83%a0%e1%83%95%e1%83%98%e1%83%a1%e1%83%94%e1%83%91%e1%83%98';
}

// fetch
document.getElementById('contact-form').onsubmit = function(event) {
  event.preventDefault(); 

  let formData = new FormData(event.target);

  fetch('http://localhost:3000/contact', { 
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      return response.json(); 
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .then(data => {
    console.log(data);
    alert('Thank you for contacting us! We will get back to you soon.');
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
};








