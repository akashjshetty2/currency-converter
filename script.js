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
const apiKey = "dcd09976209b45151b4dea3e430babd9";

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
