// Initialize the feather icons
feather.replace();

// Selected the necessary DOM elements

const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const baseCurrency = document.getElementById("base-currency");
const getRatesBtn = document.getElementById("get-rates-btn");
const exchangeRates = document.getElementById("exchange-rates");
const convertMode = document.getElementById("convert-mode");
const exchangeMode = document.getElementById("exchange-mode");
const toggleBtns = document.querySelectorAll(".toggle-btn");

// Define the API key
const apiKey = "6890ca79f983eb159d1ee039";

// Adding the eventlisteners to the toggle buttons
toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    const mode = btn.getAttribute("data-mode");
    if (mode === "convert") {
      convertMode.style.display = "flex";
      exchangeMode.style.display = "none";
    } else {
      exchangeMode.style.display = "flex";
      convertMode.style.display = "none";
    }
  });
});

// Implementing the currency converting functionality and fetching the API and display the result
convertBtn.addEventListener("click", () => {
  const amount = amountInput.value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const rate = data.conversion_rate;
      const convertedAmount = (amount * rate).toFixed(2);
      result.innerHTML = `<span class="currency-icon"></span>${convertedAmount} ${to}`;
    })
    .catch((error) => console.log(error));
});

// Exchange rate functionality
getRatesBtn.addEventListener("click", () => {
  const base = baseCurrency.value;
  fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let ratesHtml = "<h3>Exchanges Rates</h3><ul>";
      for (const [currency, rate] of Object.entries(data.conversion_rates)) {
        if (currency !== base) {
          ratesHtml += `<li><span class="currency-icon"></span>${currency}:${rate.toFixed(
            4
          )}</li>`;
        }
      }
      ratesHtml += "</ul>";
      exchangeRates.innerHTML = ratesHtml;
    })
    .catch((error) => {
      exchangeRates.textContent = "An error occoured.Please try again.";
    });
});
