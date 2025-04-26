// add money to the account

/*

S-1: add event handler
S-2: get money to be added to the account balance and get the pin number
S-3: verify to the pin number


*/


// Step-1: Add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    // prevent page reload after form submit.
    event.preventDefault();

    // Step-2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;

    //  get the pin the number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(addMoneyInput, pinNumberInput);


    // Step-3: verify pin number
    // Wrong way to validate pin number
    if (pinNumberInput === "1234") {
        // Step-4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // Step-5: add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;

        // Step-6: update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;

        console.log(newBalance);
    } else {
        alert("Failed to add money! Please try again.")
    }

});