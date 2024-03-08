function populateDropdowns() {
    const currencies = ['$', '€', '£'];
    const units = ['GB', 'MB', 'TB'];

    const currencySelect = document.getElementById('currency-select');
    const unitsSelect = document.getElementById('units-select');

    currencies.forEach(currency => {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        currencySelect.appendChild(option);
    });

    units.forEach(unit => {
        const option = document.createElement('option');
        option.value = unit;
        option.textContent = unit;
        unitsSelect.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', populateDropdowns);

function updateCurrencyAndUnits() {
    const selectedCurrency = document.getElementById('currency-select').value;
    const selectedUnits = document.getElementById('units-select').value;
    const prices = document.querySelectorAll('.plan-price');

    prices.forEach(priceElement => {
        const price = parseFloat(priceElement.dataset.price);
        const convertedPrice = convertPrice(price, selectedCurrency);
        priceElement.querySelector('.plan-price-content').textContent = `${selectedCurrency}${convertedPrice.toFixed(2)}`;
        priceElement.dataset.price = convertedPrice.toFixed(2);
    });
}

function convertPrice(price, currency) {
    const conversionRates = {
        '$': 1,
        '€': 0.85,
        '£': 0.74,
    };
    return price * conversionRates[currency] || 1;
}

document.addEventListener('DOMContentLoaded', updateCurrencyAndUnits);
