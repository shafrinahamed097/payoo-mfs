/*

1. add event listener to the add Money button (form submit)
make sure to preventDefault so that page doesn't reloads

2. get the money user wants to add
also, get the pin number provided

3. verify the pin number. for, wrong pin number ==> failed to add for right pin number, allow to add
 the number to the account balance.

 4. get the current balance.

 5. add money to be added with the current balance.

 6. display/update the balance in the DOM/UI

 */


//  Add Money

document.getElementById('btn-add-money').addEventListener("click", function (event) {
    event.preventDefault();


    // get money and the pin number
    const addMoney = getInputFieldValueById('input-add-money')
    const pinNumber = getInputFieldValueById('input-pin-number');


    if (isNaN(addMoney)) {
        alert("Failed to add money");
        return;
    }


    if (pinNumber === 1234) {
        // add money to the account
        const balance = getTextFieldValueById('account-balance')


        // new balance
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;

        //    add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} TK. New Balance ${newBalance}`;

        // should be a common function
        document.getElementById('transaction-container').appendChild(p);

    }
    else {
        alert("Failed to add money. Please try again later.");
    }


});






