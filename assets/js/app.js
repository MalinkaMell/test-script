(function () {
	const industrySelect = document.getElementById('industry');
	const customersInput = document.getElementById('customers');
	const btn = document.getElementById('calculate');
	const resultsContainer = document.getElementById('results');
	const messageContainer = document.getElementById('message');

	const industries = [{ restaurant: 2 }, { bar: 4 }, { store: 1 }];

	btn.addEventListener('click', event => {
		event.preventDefault();
		const selectedIndustry = industrySelect.value;
		const customers = parseInt(customersInput.value);
		let res = 0;
		if (customers && selectedIndustry) {
			industries.forEach(industry => {
				for (const key in industry) {
					if (key === selectedIndustry) {
						res = customers * industry[key];
						resultsContainer.textContent = res;
						btn.classList.remove('invisible');
						btn.classList.add('visible');
					}
				}
			});
		} else {
			alert('Gimme some numbers to work with');
		}
	});
})();

// Script:
// 2. A key project for the Web/Email developer will be the creation of Calculation assets for customers / potential customers. Given the information below, create a functioning calculator dictated by user inputs.
//
// 2 fields: a dropdown containing industry names (restaurant, bar, convenience store) and a text field for number of customers to be typed by the user.
// Calculate such that:
// ·         restaurant= 2 lbs. of ice per customer
// ·         bar= 4 lbs. of ice per customer
// ·         convenience store= 1 lbs. of ice per customer.
// Ex: if the user inputs ‘Restaurant’ for industry and ‘88’ for number of customers, the calculation for the customer would read ‘176 lbs. of ice per day’.
