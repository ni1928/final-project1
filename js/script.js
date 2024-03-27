"use strict";
function findOutMore() {
	window.location.href = "https://myaccountant.ge/";
}

function readMore() {
	window.location.href =
		"https://myaccountant.ge/%e1%83%a9%e1%83%95%e1%83%94%e1%83%9c%e1%83%98-%e1%83%a1%e1%83%94%e1%83%a0%e1%83%95%e1%83%98%e1%83%a1%e1%83%94%e1%83%91%e1%83%98";
}



// form validation
document.addEventListener("DOMContentLoaded", function () {
	const form = document.querySelector("#contact-form form");
	const nameInput = form.querySelector('input[placeholder="სახელი *"]');
	const lastNameInput = form.querySelector('input[placeholder="გვარი *"]');
	const emailInput = form.querySelector('input[placeholder="მეილი *"]');
	const messageTextArea = form.querySelector(
		'textarea[placeholder="შეტყობინება"]'
	);

	form.addEventListener("submit", function (event) {
		let isValid = true;

		// Validate name
		if (!nameInput.value.trim()) {
			alert("Please enter your name.");
			isValid = false;
		}

		// Validate last name
		if (!lastNameInput.value.trim()) {
			alert("Please enter your last name.");
			isValid = false;
		}

		// Validate email
		if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
			alert("Please enter a valid email address.");
			isValid = false;
		}

		// Validate message
		if (!messageTextArea.value.trim()) {
			alert("Please enter your message.");
			isValid = false;
		}

		if (!isValid) {
			event.preventDefault(); 
		}
	});
});

// Helper function to validate email
function validateEmail(email) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

// information from server
fetch('https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json')
    .then(res => res.json())
    .then(data => {
        const currencies = data[0].currencies;  
        currencies.forEach(currency => {
            const markup = `<option value="${currency.code}">${currency.code} - ${currency.rate}</option>`;
            document.querySelector('select').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log(error));



