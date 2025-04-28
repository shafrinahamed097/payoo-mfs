// Cash Out




document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out-money');
    if (isNaN(cashOut)) {
        alert("Failed to cash out");
        return;
    }
    const pinNumber = getInputFieldValueById('cash-out-pin-number');




    if (pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
    <h4 class = "text-2xl font-bold">Cash Out</h4>
    <p class = "text-black">${cashOut} TK. & New Balance ${newBalance} TK.</p>
    
    `
        document.getElementById("transaction-history-section").appendChild(div);

    } else {
        alert("Something went wrong! Please try again");
    }





});