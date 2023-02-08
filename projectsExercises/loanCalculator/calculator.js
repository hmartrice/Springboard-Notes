window.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("calc-form");
    if (form) {
        setupIntialValues();
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            update();
        });
    }
});

function getCurrentUIValues() {
    return {
        amount: + document.getElementById("loan-amount").value,
        years: + document.getElementById("loan-years").value,
        rate: + document.getElementById("loan-rate").value,
    }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    document.getElementById("loan-amount").value = 10000
    document.getElementById("loan-years").value = 5
    document.getElementById("loan-rate").value = 0.2999
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    let values = getCurrentUIValues()
    checkInputs(values)
    let monthlyPayments = calculateMonthlyPayment(values)
    updateMonthly(monthlyPayments)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    let principle = values.amount;
    let interest = values.rate / 12;
    let n = values.years * 12;
    let monthlyPayments = (principle * interest) / (1 - (1 + interest) ** (-n))
    monthlyPayments = Math.round(monthlyPayments * 100) / 100
    return monthlyPayments
}

function checkInputs(values) {
    if (isNaN(values.amount)) {
        throw new Error("Invalid Input")
    }
    if (isNaN(values.years)) {
        throw new Error("Invalid Input")
    } if (isNaN(values.rate)) {
        throw new Error("Invalid Input")
    }
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    document.getElementById("monthly-payment").innerText = `$${monthly}`
}
