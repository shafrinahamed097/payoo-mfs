// add money to the account

/*

S-1: add event handler
s-2: get money to be added to the account balance


*/


// Step-1: Add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    // prevent page reload after form submit.
    event.preventDefault();

    // Step-2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;

    // Step-3: get the pin the number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(addMoneyInput, pinNumberInput);


});